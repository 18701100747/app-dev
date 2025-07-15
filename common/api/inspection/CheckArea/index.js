import {
  http
} from '@/common/request/index.js'; // 局部引入

const api = {
  Page : '/inspection/checkArea/page',
  List : '/inspection/checkArea/list',
  Info : '/inspection/checkArea/info',
  InspectionDomainTable : '/inspection/checkArea'
}

/**
 * 根据参数  查询InspectionDomainTable分页列表
 * @param {Object} params - 查询参数  
 */
export const getInspectionDomainTablePage = (params) => {
  return http.get(api.Page, {
    params
  })
}

  
/**
 * 根据参数 查询InspectionDomainTable列表
 * @param {Object} params - 查询参数  
 */
export const getInspectionDomainTableList = (params) => {
  return http.get(api.List, {
    params
  })
}

/**
 * 获取InspectionDomainTable信息
 * @param {Object} params - id  
 */
export const getInspectionDomainTable = (id) => {
  return http.get(api.Info, {
    params: { id },
  })
}

/**
 * 新增InspectionDomainTable
 * @param {Object} params - 表单数据  
 */
export const addInspectionDomainTable = (formData) => {
  return http.post(api.InspectionDomainTable, formData)
}

/**
 * 修改InspectionDomainTable
 * @param {Object} params - 表单数据  
 */
export const updateInspectionDomainTable = (formData) => {
  return http.put(api.InspectionDomainTable, formData)
}

/**
 * 删除InspectionDomainTable（批量删除）
 * @param {Object} params - 表单数据  
 */
export const deleteInspectionDomainTable = (ids) => {
  return http.delete(api.InspectionDomainTable, ids)
}