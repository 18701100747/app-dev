<template>
  <view class="taskPart">
    <!-- 导航 -->
    <view class="header">
      <view class="headerContent">
        <view>
          <uni-icons type="back" size="20" @tap="clickLeft">返回</uni-icons>
        </view>
        <view class="title">点检部件</view>
        <view>

        </view>
      </view>
    </view>

    <!-- 内容 -->
    <view class="content">
      <view class="banner">
        <span>点检设备：</span>
        <span>部件1</span>
      </view>
      <view class="title-box">点检项目(未完成2个)</view>
      <view class="c-box">
        <view class="x-header">
          <view class="x-header-left">点检项目</view>
          <view class="x-header-right">点检结果</view>
        </view>
        <view class="x-body">
          <view v-for="item in items" :key="item.type">
            <view class="x-body-item">
              <view class="y-item-left">
                <view class="m-left-type">{{ item.type }}</view>
                <span>{{ item.title }}</span>
                <span class="m-left-iType">{{ item.itemType }}</span>
              </view>
              <view class="y-item-right" @click="clickRight">
                <span>{{ item.result }}</span>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad, onReachBottom } from "@dcloudio/uni-app";
import { ref, reactive, computed } from "vue";

const current0 = ref(0);
const current1 = ref(0);

const items = reactive([
  { type: '日检', title: '检查项目1', itemType: '观察项', result: '正常' },
  { type: '周检', title: '检查项目2', itemType: '指标项', result: '异常' },
  { type: '月检', title: '检查项目3', itemType: '选择项', result: '未完成' },
])


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
    url: "/pages/spotCheck/taskStart/index"
  })
}
const clickRight = () => {
  uni.navigateTo({
    url: "/pages/spotCheck/taskProject/index"
  })
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

    .banner {
      padding: 0.5rem;
      background: white;
      text-align: center;
      border-radius: 0.5rem;
    }

    .title-box {
      padding: 0.5rem;
      font-size: 0.9rem;
    }

    .c-box {
      background: white;
      border-radius: 0.5rem;

      .x-header {
        display: flex;
        justify-content: space-between;
        padding: 0.7rem 3rem;
        border-bottom: 1px #e6e6e6 solid;
      }

      .x-body {
        .x-body-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 0.5rem;
          border-bottom: 1px #e6e6e6 solid;

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
          .y-item-right {
            padding-right: 3rem;
          }
        }
      }
    }
  }
}
</style>
