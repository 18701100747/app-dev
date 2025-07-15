<template>
	<view class="form-fixed">
    <SimpleForm ref="formRef" :key="renderKey" :formProps="formConfig.formProps" :disabled="disabled"  :control="formConfig.type"></SimpleForm>
	</view>
</template>

<script setup>
import { ref, reactive,onMounted } from 'vue';
import SimpleForm from '@/components/simple-form/SimpleForm.vue';
import { formProps } from './config/index.js';
import { FromPageType } from "@/common/enums/form.ts";
import { listProps } from './config/index.js'
import { addInspectionDomainTable, updateInspectionDomainTable, getInspectionDomainTable } from '@/common/api/inspection/CheckArea/index.js';
import { cloneDeep } from '@/utils/helper/utils.js';
import { handlerFormPermission } from "@/common/hooks/form.ts";
import { setFormPropsAuth } from '@/utils/simpleForm/changeJson.js'
const renderKey = ref(0);
const props = defineProps({
  disabled: {
    type:Boolean,
    default:false
  },
  type: {
    type:String,
    default:FromPageType.ADD
  },
  id: {
    type:String,
    default:''
  },
  isWorkFlow:{
    type:Boolean,
    default:false
  },
  formModel: {
    type:Object
  },
  workFlowParams: {
    type:Object
  }
});
const rowKey = listProps.rowKey;
const formConfig = reactive({
  formProps:formProps,
  id:"",
  uploadComponentIds:[],
  type:FromPageType.ADD
});
const formRef = ref();
onMounted(async () => {
  formConfig.id = props.id;
  formConfig.type = props.type;
  if(props.isWorkFlow){
    formConfig.type = props.workFlowParams.type;
    if( props.formModel&&props.formModel[rowKey]){
      formConfig.type = FromPageType.EDIT;
      formConfig.id = props.formModel[rowKey];
    }
    if(props.disabled) formConfig.type = FromPageType.VIEW;
    setWorkflowFormData(formProps);
  }else{
    let auth=uni.getStorageSync('MenuAuth')
		let formAuth=auth.formAuthCode||[]; 
		setFormPropsAuth(formConfig.formProps.schemas,formAuth)
    await setForm();
  }
})

async function setForm(){
  //  编辑
  if (formConfig.type == FromPageType.EDIT||formConfig.type  == FromPageType.VIEW) { 
      const {
        data
      } = await getInspectionDomainTable(formConfig.id);
      if (data) {
        await formRef.value.setFormData({...props.formModel, ...data})
      }
    }
    //新增
    else if (formConfig.type  == FromPageType.ADD) { 
      await formRef.value.init()
    }
    if(formConfig.type== FromPageType.EDIT){
      //获取表单数据
      if(listProps.formEventConfig&&listProps.formEventConfig[1]){
        formRef.value.executeFormEvent(listProps.formEventConfig[1],false);
      } 
    }

    //初始化表单
    if(listProps.formEventConfig&&listProps.formEventConfig[0]){
      formRef.value.executeFormEvent(listProps.formEventConfig[0],false);
    } 
    //加载表单
    if(listProps.formEventConfig&&listProps.formEventConfig[2]){
      formRef.value.executeFormEvent(listProps.formEventConfig[2],false);
    } 
}
async function loadForm(val){
	let id = val[rowKey]
  formConfig.id = id;
  const {
    data
  } = await getInspectionDomainTable(id);
  if (data) {
    await formRef.value.setFormData(data)
  }
}
// 工作流设置表单数据
async function setWorkflowForm(){
  if(props.isWorkFlow){
    setWorkflowFormData(formProps);
  }
  // formConfig.type
  renderKey.value++;
  await setForm();
}
// 根据行唯一ID查询行数据，并设置表单数据   【编辑】
async function setFormDataFromId(rowId, skipUpdate) {
    try {
      const {
        data
      } = await getInspectionDomainTable(rowId);
      if (skipUpdate) {
          return data;
      }
      setFormData(data);
      formConfig.id = data[rowKey]
      return data;  
    } catch (error) {

    }
  }
// 工作流辅助设置表单数据
function setWorkflowFormData(formProps){
  let options = cloneDeep(formProps);
  let otherParams = {...props.workFlowParams.otherParams,uploadComponentIds:formConfig.uploadComponentIds}
  let  obj = handlerFormPermission(
          options,
          props.workFlowParams.formConfigChildren,
          props.workFlowParams.formConfigKey,
          otherParams
          );
  formConfig.formProps = obj.buildOptionJson;
  formConfig.uploadComponentIds = obj.otherParams.uploadComponentIds;
}
// 获取上传组件Id集合
function getUploadComponentIds(){
  return formConfig.uploadComponentIds
}
// 校验
async function validate() {
	await formRef.value.validate();
}
const isFirst = ref(true);
let formModelIdVal = reactive({
  id: ''
});
// 提交
 async function submit() {
	try {
		await formRef.value.validate();
    const formData = await formRef.value.getFormData();
		if(formData[rowKey]){
      formConfig.id = formData[rowKey]
			await updateInspectionDomainTable(formData);
		}
		else{
			let res = await addInspectionDomainTable(formData);
      formConfig.id = res.data
		}
    formModelIdVal = await setFormDataFromId(formConfig.id, true);
	} catch (err) {
		console.log(err);
	}
  //提交表单事件
  if(listProps.formEventConfig&&listProps.formEventConfig[3]){
    formRef.value.executeFormEvent(listProps.formEventConfig[3],false);
  } 
  return formModelIdVal;
}


// 重置
async function reset() {
	await formRef.value.reset();
}
// 表单初始化
 async function init() {
	await formRef.value.init();
}
// 设置表单数据
 async function setFormData(formModels) {
	await formRef.value.setFormData(formModels);
}
// 获取表单数据
async function getFormData() {
	let formModelObj =  await formRef.value.getFormData();
  if(formConfig.type == FromPageType.EDIT||formConfig.type == FromPageType.VIEW){
      formModelObj[rowKey]=formConfig.id;
	}
  return formModelObj;
}
defineExpose({
    init,
		submit,
    reset,
		setFormData,
    loadForm,
		validate,
		getFormData,
    setWorkflowForm,
    getUploadComponentIds
  });
</script>

<style>
page{
  background: #fff;
}
</style>