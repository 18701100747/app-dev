<template>
      <view class="form-fixed">
        <Form ref="formRef"  :disabled="formConfig.isView" :id="formConfig.id"  :type="formConfig.type"></Form>
        <view v-if="!formConfig.isView" class="form-btn-box">
          <button type="default" class="button" @click="reset">重置</button>
          <button type="primary" class="button" @click="submit">确定</button>		
        </view>
      </view>
</template>
<script setup>
    import { ref, reactive } from 'vue';
    import Form from './form.vue';
    import { onLoad } from '@dcloudio/uni-app'; 
    import { FromPageType } from "@/common/enums/form.ts";
    import { getFormTitle } from "@/common/hooks/form.ts";
    import { listProps } from './config/index.js'
    const formRef = ref(); //表单ref
    const formConfig = reactive({
      type:FromPageType.ADD,
      id:'',
      isView:false
    });
    onLoad(async (option) => {
      formConfig.id = option.id??'';
      formConfig.type = option.type;
      uni.setNavigationBarTitle({title:getFormTitle(formConfig.type)});
      formConfig.isView = false;
      if(formConfig.type==FromPageType.VIEW){
        formConfig.isView = true;
      }
    });
    async function submit(){
      let saveVal = await formRef.value.submit();
      if(saveVal){
        if(formConfig.type==FromPageType.ADD){
          uni.showToast({
            title: '新增成功'
          });
        }else  if(formConfig.type==FromPageType.EDIT){
          uni.showToast({
            title: '修改成功'
          });
        }
        uni.navigateTo({
          url: listProps.listUrl
        });
      }
    }
    async function reset(){
      formRef.value.reset();
    }
</script>

<style>
  page{
    background: #fff;
  }
</style>