<template>
  <view class="taskPart">
    <!-- 导航 -->
    <view class="header">
      <view class="headerContent">
        <view>
          <uni-icons type="back" size="20" @tap="clickLeft">返回</uni-icons>
        </view>
        <view class="title">点检项目</view>
        <view>
          历史记录
        </view>
      </view>
    </view>

    <!-- 内容 -->
    <view class="content">
      <view class="banner-top">
        <span>点检部件：</span>
        <span>部件1</span>
      </view>
      <view class="banner-center">
        <span>点检项目：</span>
        <span>点检项目1</span>
      </view>
      <view class="title-text">
        检查要求
      </view>
      <view class="c-info">XXXXXXXX</view>
      <view class="t-switch">
        <view class="t-switch-title">是否跳检：</view>
        <switch color="#87d887" style="transform: scale(0.7);" :checkd="checkd" @change="checkdChange"></switch>
      </view>
      <view class="c-form">
        <view v-show="!checkd" class="c-form-form">
          <SimpleForm ref="formRef" :formProps="formConfig.formProps" :isFilter="true" control='add'>
          </SimpleForm>
        </view>
        <view v-show="checkd" class="c-form-area">
          <view>跳检事由：</view>
          <textarea :value="textArea" @input="areaChange" style="border: 1px solid #d2d0d0;width: 100%;"></textarea>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad, onReachBottom } from "@dcloudio/uni-app";
import { ref, reactive, computed } from "vue";
import SimpleForm from '@/components/simple-form/SimpleForm.vue';
import { FromPageType } from "@/common/enums/form.ts";
import { formProps } from './config/index.js';

const formConfig = reactive({
  formProps: formProps,
  id: "",
  uploadComponentIds: [],
  type: FromPageType.ADD
});


const checkd = ref(false)
const textArea =ref('')

const checkdChange = (event: any) => {
  checkd.value = event.detail.value
}

const areaChange = (event: any) => {
  textArea.value = event.detail.value
}


onLoad((options) => {
  // const { taskId } = options
  // const storeListData = uni.getStorageSync('key')

  // if (storeListData?.length && taskId) {
  // 	let currentData = storeListData.filter((v: any) => v.id == taskId)
  // 	console.log('currentData', currentData)
  // 	oneListData.value = currentData
  // }
});
onReachBottom(() => { });
// const customBarHeight = computed(() => {
//   return uni.getStorageSync(CUSTOM_BAR_HEIGHT) + 20;
// });

const clickLeft = () => {
  // console.log('11')
  uni.navigateTo({
    url: "/pages/spotCheck/taskPart/index"
  })
}
const clickRight = () => {

}

const onClickItem = (e) => {
  current.value = e.currentIndex
}
const onClickItem0 = (e) => {
  current0.value = e.currentIndex
}
const onClickItem1 = (e) => {
  current1.value = e.currentIndex
}
</script>

<style scoped lang="less">
.taskPart {
  padding: 0.2rem;

  .header {
    background-color: #F3F3F3;
    min-height: 64rpx;
    padding: 16rpx;

    .headerContent {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .title {
        flex: 1;
        text-align: center;
        font-size: 35rpx;
        font-weight: bold;
        color: #253954;
        line-height: 42rpx;
      }
    }
  }

  .content {
    padding: 0.5rem;

    .banner-top {
      padding: 0.5rem 0.2rem;
      background: white;
      border-radius: 0.5rem;
    }

    .banner-center {
      margin-top: 0.5rem;
      padding: 0.5rem 0.2rem;
      background: white;
      border-radius: 0.5rem;
    }

    .title-text {
      padding: 0.5rem 0.2rem;
      font-size: 0.9rem;
    }

    .title-box {
      padding: 0.5rem;
    }

    .c-box {
      background: white;

      .x-header {
        display: flex;
        justify-content: space-between;
        padding: 0.7rem 3rem;
      }

      .x-body {
        .x-body-item {
          display: flex;
          align-items: center;
          padding: 0.5rem;

          .y-item-left {
            position: relative;
            padding-left: 2.5rem;
            display: flex;
            align-items: center;


            .m-left-type {
              position: absolute;
              left: 0.2rem;
              color: #578fff;



            }

            .m-left-iType {
              font-size: 0.8rem;
              margin-left: 0.3rem;
              color: white;
              display: inline-block;
              border-radius: 0.2rem;
              background: red;
              padding: 0 0.2rem;
            }
          }
        }
      }
    }

    .c-info {
      background: white;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    .t-switch {
      padding: 0.3rem 0.5rem;
      display: flex;
      align-items: center;
      background: white;
      margin: 0.5rem 0;
      border-radius: 0.5rem;

      .t-switch-title {
        padding-right: 0.54rem;
      }
    }

    .c-form {

      .c-form-form {
        background: white;
      }

      .c-form-area {
        padding: 0.5rem;
        background: white;
      }
    }

  }
}
</style>
