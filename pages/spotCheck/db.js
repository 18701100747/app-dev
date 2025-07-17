class IndexedDB {
  constructor(dbName = 'uni-app-db', version = 2) { // 升级版本号为2以添加索引
    this.dbName = dbName;
    this.version = version;
    this.db = null;
  }

   deleted  () {
     indexedDB.deleteDatabase('uni-app-db')
  }
  
  // 初始化数据库（修改onupgradeneeded以添加taskId索引）
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        // 创建默认存储对象
        if (!this.db.objectStoreNames.contains('data')) {
          const store = this.db.createObjectStore('data', { keyPath: 'id', autoIncrement: true });
          // 添加taskId索引（假设taskId不唯一）
          store.createIndex('taskId', 'taskId', { unique: true });
        }
      };
      
      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };
      
      request.onerror = (event) => {
        reject(new Error(`数据库初始化失败: ${event.target.error}`));
      };
    });
  }
  
  // 添加数据（保持原有方法不变）
  async add(storeName, data) {
    await this.ensureDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(data);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(new Error('添加数据失败'));
    });
  }
  
  // 查询所有数据（保持原有方法不变）
  async getAll(storeName) {
    await this.ensureDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new Error('查询数据失败'));
    });
  }
  
  // 新增：根据taskId查询数据
  async getByTaskId(storeName, taskId) {
    await this.ensureDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const index = store.index('taskId'); // 使用taskId索引
      const request = index.getAll(taskId);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new Error(`查询taskId=${taskId}失败`));
    });
  }

   // 根据索引条件更新数据
  async updateByIndex(storeName, indexName, query, updateFn) {
    await this.ensureDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const index = store.index(indexName);
      const request = index.openCursor(query);

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          // 获取当前记录
          const oldValue = cursor.value;
          // 执行更新函数（由调用者提供）
          const newValue = updateFn(oldValue);
          // 使用put方法更新（需包含主键）
          const updateRequest = store.put(newValue);
          
          updateRequest.onsuccess = () => {
            console.log(`数据更新成功，ID: ${newValue.id}`);
            // 继续处理下一条记录
            cursor.continue();
          };
          
          updateRequest.onerror = (e) => {
            reject(new Error(`更新失败: ${e.target.error}`));
          };
        } else {
          // 所有匹配记录处理完毕
          resolve();
        }
      };

      request.onerror = (event) => {
        reject(new Error(`查询失败: ${event.target.error}`));
      };
    });
  }

   // 根据索引条件删除数据
  async deleteByIndex(storeName, indexName, query) {
    await this.ensureDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const index = store.index(indexName);
      const request = index.openCursor(query);

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          // 获取主键（KeyPath）
          const primaryKey = cursor.primaryKey;
          // 使用主键删除记录
          const deleteRequest = store.delete(primaryKey);
          
          deleteRequest.onsuccess = () => {
            console.log(`数据删除成功，主键: ${primaryKey}`);
            // 继续处理下一条记录
            cursor.continue();
          };
          
          deleteRequest.onerror = (e) => {
            reject(new Error(`删除失败: ${e.target.error}`));
          };
        } else {
          // 所有匹配记录处理完毕
          resolve();
        }
      };

      request.onerror = (event) => {
        reject(new Error(`查询失败: ${event.target.error}`));
      };
    });
  }
  
  // 确保数据库已初始化（保持原有方法不变）
  ensureDb() {
    if (!this.db) {
      return this.init();
    }
    return Promise.resolve();
  }
}

export const db = new IndexedDB();