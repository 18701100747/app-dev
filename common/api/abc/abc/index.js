
import {
  http
} from '@/common/request/index.js'; // 局部引入

const api = {
  Page : '/inspection/inspectionTask/page',
  List : '/inspection/inspectionTask/list',
  Info : '/inspection/inspectionTask/info',
  InspectionTaskInfo : '/inspection/inspectionTask'
}

/**
 * 根据参数  查询InspectionTaskInfo分页列表
 * @param {Object} params - 查询参数  
 */
export const getInspectionTaskInfoPage = (params) => {
  return http.get(api.Page, {
    params
  })
}

  
/**
 * 根据参数 查询InspectionTaskInfo列表
 * @param {Object} params - 查询参数  
 */
export const getInspectionTaskInfoList = (params) => {
  return http.get(api.List, {
    params
  })
}

/**
 * 获取InspectionTaskInfo信息
 * @param {Object} params - id  
 */
export const getInspectionTaskInfo = (id) => {
  return http.get(api.Info, {
    params: { id },
  })
}

/**
 * 新增InspectionTaskInfo
 * @param {Object} params - 表单数据  
 */
export const addInspectionTaskInfo = (formData) => {
  return http.post(api.InspectionTaskInfo, formData)
}

/**
 * 修改InspectionTaskInfo
 * @param {Object} params - 表单数据  
 */
export const updateInspectionTaskInfo = (formData) => {
  return http.put(api.InspectionTaskInfo, formData)
}

/**
 * 删除InspectionTaskInfo（批量删除）
 * @param {Object} params - 表单数据  
 */
export const deleteInspectionTaskInfo = (ids) => {
  return http.delete(api.InspectionTaskInfo, ids)
}
