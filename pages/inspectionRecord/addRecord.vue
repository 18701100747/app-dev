<template>
  <view>
    <!-- 表单标题 -->
	<PageHeadVue title="巡检记事"></PageHeadVue>
    
    <!-- 表单主体 -->
    <uni-forms ref="form" :model="formData" :rules="rules" label-width="80">
      <uni-forms-item label="关联设备" name="username" required>
        <uni-easyinput 
          v-model="formData.username" 
          placeholder="请输入" 
          trim="both"
        />
      </uni-forms-item>
      <uni-forms-item label="记事类型" name="type">
         <uni-data-select 
          v-model="formData.type"
                placeholder="请选择记事类型"
              />
            </uni-forms-item>
      <uni-forms-item label="记事描述" name="desc">
        <textarea 
          v-model="formData.desc" 
          placeholder="记事描述..."
          class="intro-textarea"
          auto-height
        />
      </uni-forms-item>
      <uni-forms-item label="记事时间" name="time">
        <uni-datetime-picker
          v-model="formData.time"
		  
        />
      </uni-forms-item>
      <uni-forms-item label="记事人员" name="user">
        <uni-easyinput 
          v-model="formData.user"
      	  disabled
		  />
      </uni-forms-item>
      
      <!-- 提交按钮 -->
      <button 
        type="primary" 
        class="submit-btn" 
        @click="submitForm"
        :loading="loading"
        :disabled="loading"
      >
        {{ loading ? '保存中...' : '保存' }}
      </button>
    </uni-forms>
  </view>
</template>

<script setup lang="ts">
import PageHeadVue from '../../components/layout/PageHead.vue';
import { defineComponent, ref } from 'vue';

// 定义表单数据类型
interface FormData {
  username: string
  user: string
  time: string
  desc: string
  type: string
}

// 定义API响应类型
interface ApiResponse {
  code: number
  message: string
  data?: any
}

// export default defineComponent({
  // setup() {
    // 表单数据
    const formData = ref<FormData>({
      username: '',
      user: '张兰',
      time: '',
      desc: '',
      type: '',
    })

    // 加载状态
    const loading = ref(false)

    // 表单引用
    const form = ref<any>(null)

    // 表单验证规则
    const rules = {
      username: {
        rules: [
          { required: true, errorMessage: '用户名不能为空' },
          { minLength: 3, maxLength: 10, errorMessage: '用户名长度在3-10个字符之间' }
        ]
      }
    }


    // 显示用户协议
    // const showAgreement = () => {
    //   uni.showModal({
    //     title: '用户协议',
    //     content: '这里是用户协议内容...',
    //     showCancel: false
    //   })
    // }

    // 模拟API请求
    const mockApiRequest = (): Promise<ApiResponse> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ code: 200, message: '保存成功' })
        }, 1500)
      })
    }

    // 提交表单
    const submitForm = async () => {
      try {
        // 验证表单
        await form.value.validate()
        
        // 显示加载状态
        loading.value = true
        
        // 发送请求
        const res = await mockApiRequest()
        
        if (res.code === 200) {
          uni.showToast({
            title: res.message,
            icon: 'success'
          })
          
          // 注册成功后的操作，如跳转到登录页
          setTimeout(() => {
            uni.navigateTo({
              url: '/pages/login/login'
            })
          }, 1500)
        }
      } catch (err) {
        console.log('表单错误:', err)
      } finally {
        loading.value = false
      }
    }
</script>

<style lang="scss">
.container {
  padding: 30rpx;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.form-header {
  margin-bottom: 40rpx;
  text-align: center;
}

.form-title {
  font-size: 40rpx;
  font-weight: bold;
  color: #333;
}

.radio-label,
.checkbox-label {
  margin-right: 30rpx;
}

.intro-textarea {
  width: 100%;
  min-height: 150rpx;
  padding: 20rpx;
  background-color: #fff;
  border-radius: 8rpx;
  font-size: 28rpx;
}

.agreement {
  margin: 30rpx 0;
  font-size: 26rpx;
  color: #666;
  
  .link {
    color: #007AFF;
  }
}

.submit-btn {
  margin-top: 50rpx;
}
</style>