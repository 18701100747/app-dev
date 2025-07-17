<template>
  <view class="taskArea">
    <!-- 导航 -->
    <view class="header">
      <view class="headerContent">
        <view>
          <uni-icons type="back" size="20" @tap="clickLeft">返回</uni-icons>
        </view>
        <view class="title">点检区域</view>
        <view>

        </view>
      </view>
    </view>

    <!-- 内容 -->
    <view class="content">
      <view class="banner">
        <view class="banner-text">点检区域q</view>
        <view class="banner-box">
          <view class="banner-box-item">
            <view>点检设备</view>
            <view class="m-value">
              <span class="m-value-text">8</span>
              <span>个</span>
            </view>
          </view>
          <view class="banner-box-line"></view>
          <view class="banner-box-item">
            <view>点检部位</view>
            <view class="m-value">
              <span class="m-value-text">12</span>
              <span>个</span>
            </view>
          </view>
          <view class="banner-box-line"></view>
          <view class="banner-box-item">
            <view>点检项目</view>
            <view class="m-value">
              <span class="m-value-text">26</span>
              <span>个</span>
            </view>
          </view>
        </view>
      </view>
      <view class="title-box">点检设备(未完成10个)</view>
      <view class="info">
        <view class="info-top">
          <view>设备部件</view>
          <view>点检结果</view>
        </view>
        <view class="info-box">
          <view v-for="(item, index) in treeData" :key="item.id" class="box-group">
            <view class="g-parent">
              <view class="g-parent-title" @click="shrik(item.id)">
                <uni-icons type="right" color="#a4a4a4"></uni-icons>
                <span>{{ item.name }}</span>
              </view>
              <view class="g-parent-value">{{ item.result }}</view>
            </view>
            <view class="g-child" v-show="!shrikId.includes(item.id)">
              <view v-for="(child, index) in item.children" :key="child.id" class="g-child-item">
                <view>{{ child.name }}</view>
                <view @click="childValue(child)">
                  <span>{{ child.result }}</span>
                  <uni-icons type="right" color="#a4a4a4"></uni-icons>
                </view>
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
const shrikId = reactive([])

const oneListData = ref([
  {
    id: 1,
    taskName: 'XXXXXXXX点检任务',
    status: '待认领',
    progress: '点检中',
    route: 'xxxxxxx点检路线',
    department: '设备部',
    specialty: '电气',
    position: '电气点检员',
    planStartTime: '',
    planEndTime: '2025-04-09 15:00:00',
    progressRate: '15/25',
    handler: ''
  },
  {
    id: 2,
    taskName: 'XXXXXXX点检任务',
    status: '已认领',
    progress: '未开始',
    route: 'xxxxxxx点检路线',
    department: '设备部',
    specialty: '电气',
    position: '电气点检员',
    planStartTime: '2025-04-09 11:00:00',
    planEndTime: '2025-04-09 15:00:00',
    progressRate: '25/25',
    handler: '张三'
  },
  {
    id: 3,
    taskName: 'XXXXXXX点检任务',
    status: '已认领',
    progress: '已完成',
    route: 'xxxxxxx点检路线',
    department: '设备部',
    specialty: '电气',
    position: '电气点检员',
    planStartTime: '2025-04-09 11:00:00',
    planEndTime: '2025-04-09 15:00:00',
    progressRate: '25/25',
    handler: '张三'
  },
  {
    id: 4,
    taskName: 'XXXXXXX点检任务',
    status: '已认领',
    progress: '已延期',
    route: 'xxxxxxx点检路线',
    department: '设备部',
    specialty: '电气',
    position: '电气点检员',
    planStartTime: '2025-04-09 11:00:00',
    planEndTime: '2025-04-09 15:00:00',
    progressRate: '25/25',
    handler: '张三'
  },
])

const treeData = reactive([
  {
    id: '1',
    name: '设备1',
    result: '未完成',
    children: [
      {
        id: '1-1', name: '部件1', result: '未完成'
      },
      {
        id: '1-2', name: '部件2', result: '未完成'
      },
    ]
  },
  {
    id: '2',
    name: '设备2',
    result: '未完成',
    children: [
      {
        id: '2-1', name: '部件3', result: '未完成'
      },
      {
        id: '2-2', name: '部件4', result: '未完成'
      },
    ],
  },
  {
    id: '3',
    name: '设备3',
    result: '未完成',
    children: [
      {
        id: '3-1', name: '部件5', result: '未完成'
      },
    ],
  }
])

const shrik = (id: any) => {
  if (shrikId.includes(id)) {
    const filterItems = shrikId.filter((v: any) => v !== id)
    shrikId.splice(0, shrikId.length, ...filterItems)
    console.log('shrikId.filter((v: any) => v === id)', shrikId.filter((v: any) => v === id))
  } else {
    shrikId.push(id)
  }
  console.log('id', id, shrikId)
}

const childValue = (item: any) => {
  console.log('item', item)
  uni.navigateTo({
    url: "/pages/spotCheck/taskPart/index"
  })
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
    url: "/pages/spotCheck/taskStart/index"
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
.header {
  background-color: #F3F3F3;
  min-height: 64rpx;
  padding: 16rpx;
}

.headerContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

uni-icon {
  height: 27rpx;
  color: #253954;
}

.title {
  flex: 1;
  text-align: center;
  font-size: 35rpx;
  font-weight: bold;
  color: #253954;
  line-height: 42rpx;
}

.action-btn {
  margin: 0 10rpx;
  font-size: 26rpx;
  height: 64rpx;
  line-height: 64rpx;
  border-radius: 8rpx;
  background-color: #f5f5f5;
  color: #666;
}

.taskArea {
  padding: 0.2rem;

  .content {
    padding: 0.5rem;

    .banner {
      padding: 0.5rem 0;
      background: white;

      .banner-text {
        font-size: 1.2rem;
        text-align: center;
        padding-bottom: 1rem;
      }

      .banner-box {
        display: flex;
        align-items: center;
        padding-bottom: 0.2rem;
        font-size: 0.8rem;

        .banner-box-line {
          width: 1px;
          height: 2rem;
          background: #aaaaaa;
        }

        .banner-box-item {
          flex: 1;
          text-align: center;

          .m-value {
            margin-top: 0.3rem;

            .m-value-text {
              font-size: 1.2rem;
              color: rgb(0, 149, 242);
            }
          }

        }
      }
    }

    .title-box {
      padding: 0.5rem;
    }

    .info {
      background: white;
      padding: 0.5rem;
      border-radius: 0.5rem;

      .info-top {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
                    padding-right: 2rem;
        border-bottom: 1px solid #f1f1f1;
      }

      .info-box {
        font-size: 0.9rem;
        .box-group {
          .g-parent {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem;
            border-bottom: 1px solid #f1f1f1;

            .g-parent-title {
              font-weight: 600;
            }

            .g-parent-value {
              padding-right: 1.6rem;
            }
          }

          .g-child {
            padding: 0 0.5rem;

            .g-child-item {
              display: flex;
              justify-content: space-between;
              padding: 0.5rem;
              padding-left: 1.6rem;
              border-bottom: 1px solid #f1f1f1;
            }
          }
        }
      }
    }
  }
}
</style>
