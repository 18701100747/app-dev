<template>
  <view class="container">
    <!-- 顶部导航栏 -->
    <!-- <view class="header">
      <view class="nav">
        <view>
          <uni-icons type="back" size="20" @tap="clickLeft">返回</uni-icons>
        </view>
        <view class="nav-title">点检任务</view>
        <view>
          <button class="action-btn" @click="clickRight">
            任务认领
          </button>
        </view>
      </view>
    </view> -->

    <!-- 第一层选项卡 -->
    <view class="first-level-tabs">
      <view class="first-tab-item" :class="{ 'active': activeFirstTab === 'today' }" @click="switchFirstTab('today')">
        <text>今日任务</text>
      </view>
      <view class="first-tab-item" :class="{ 'active': activeFirstTab === 'alreadyDone' }"
        @click="switchFirstTab('alreadyDone')">
        <text>已办任务</text>
      </view>
    </view>

    <!-- 第一层选项卡内容 -->
    <view class="tab-content">
      <!-- 今日任务内容 -->
      <view v-if="activeFirstTab === 'today'" class="today-tasks">
        <!-- 第二层选项卡 -->
        <view class="second-level-tabs">
          <view class="second-tab-item" :class="{ 'active': activeSecondTab === 'unclaimed' }"
            @click="switchSecondTab('unclaimed')">
            <text>待认领</text>
            <text>({{ todayUnclaimedCount }})</text>
            <!-- <text class="badge" v-if="todayUnclaimedCount > 0">{{ todayUnclaimedCount }}</text> -->
          </view>
          <view class="second-tab-item" :class="{ 'active': activeSecondTab === 'claimed' }"
            @click="switchSecondTab('claimed')">
            <text>已认领</text>
            <text>({{ todayClaimedCount }})</text>
            <!-- <text class="badge" v-if="todayClaimedCount > 0">{{ todayClaimedCount }}</text> -->
          </view>
        </view>

        <!-- 第二层选项卡内容 -->
        <view class="second-tab-content">
          <view v-if="activeSecondTab === 'unclaimed'" class="task-list">
            <!-- 今日任务-待认领任务列表 -->
       	<SimpleList ref="listRef" :listProps="listProps"></SimpleList>
          </view>

          <view v-if="activeSecondTab === 'claimed'" class="task-list">
            <!-- 今日任务-已认领任务列表 -->
            <view>
              今日任务-已认领
            </view>
          </view>
        </view>
      </view>

      <!-- 已办任务内容 -->
      <view v-if="activeFirstTab === 'alreadyDone'" class="today-tasks">
        <!-- 第二层选项卡 -->
        <view class="second-level-tabs">
          <view class="second-tab-item" :class="{ 'active': activeSecondTab === 'unclaimed' }"
            @click="switchSecondTab('unclaimed')">
            <text>待认领</text>
            <text>({{ alreadyDoneUnclaimedCount }})</text>
            <!-- <text class="badge" v-if="alreadyDoneUnclaimedCount > 0">{{ alreadyDoneUnclaimedCount }}</text> -->
          </view>
          <view class="second-tab-item" :class="{ 'active': activeSecondTab === 'claimed' }"
            @click="switchSecondTab('claimed')">
            <text>已认领</text>
            <text>({{ alreadyDoneClaimedCount }})</text>
            <!-- <text class="badge" v-if="alreadyDoneClaimedCount > 0">{{ alreadyDoneClaimedCount }}</text> -->
          </view>
        </view>

        <!-- 第二层选项卡内容 -->
        <view class="second-tab-content">
          <view v-if="activeSecondTab === 'unclaimed'" class="task-list">
            <!-- 已办任务内容-待认领任务列表 -->
            <view>
              已办任务内容-待认领
            </view>
          </view>

          <view v-if="activeSecondTab === 'claimed'" class="task-list">
            <!-- 已办任务内容-已认领任务列表 -->
            <view>
              已办任务内容-已认领
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onReachBottom, onPullDownRefresh,onShow } from '@dcloudio/uni-app'; //不支持onLoad
import SimpleList from '../components/simple-list/spotCheckSimpleList.vue';
import { listProps } from './config/index.js'

// 第一层选项卡状态
const activeFirstTab = ref('today');

// 第二层选项卡状态
const activeSecondTab = ref('unclaimed');

// 任务数量统计
const todayUnclaimedCount = ref(10); // 今日任务 待认领数量
const todayClaimedCount = ref(8);    // 今日任务 已认领数量 
const alreadyDoneUnclaimedCount = ref(4);    // 已办任务 待认领数量 
const alreadyDoneClaimedCount = ref(11);    // 已办任务 已认领数量 



onReachBottom(() => {
	// 必须要这个事件 可以不写逻辑 
});
const listRef = ref(); 
const firstLoad = ref(true);
onShow(()=>{
	if (firstLoad.value) {
		firstLoad.value = !firstLoad.value;
		return;
	}
	listRef.value.reload();
}) 

// 返回上一页
const clickLeft = () => {
  // uni.navigateTo({
  //   url: "/pages/home/home"
  // })
  uni.switchTab({
    url: '/pages/home/home'
  });
}
const clickRight = () => {

}

// 切换第一层选项卡
const switchFirstTab = (tab) => {
  activeFirstTab.value = tab;
  // 切换到第一层选项卡时，重置第二层选项卡为默认值
  if (tab === 'today') {
    activeSecondTab.value = 'unclaimed';
  }
};

// 切换第二层选项卡
const switchSecondTab = (tab) => {
  activeSecondTab.value = tab;
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
}

/* .header {
  background-color: #F3F3F3;
  min-height: 64rpx;
  padding: 16rpx;
} */

/* .nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
} */

/* uni-icon {
  height: 27rpx;
  color: #253954;
}

.nav-title {
  flex: 1;
  text-align: center;
  font-size: 35rpx;
  font-weight: bold;
  color: #253954;
  line-height: 42rpx;
} */

.action-btn {
  margin: 0 10rpx;
  font-size: 26rpx;
  height: 64rpx;
  line-height: 64rpx;
  border-radius: 8rpx;
  background-color: #f5f5f5;
  color: #666;
}

/* 第一层选项卡样式 */
.first-level-tabs {
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  margin: 0 32rpx;
	border-radius: 12rpx;
}

.first-tab-item {
  flex: 1;
  text-align: center;
  padding: 15px 0;
  font-size: 16px;
  color: #666;
}

.first-tab-item.active {
  color: #007AFF;
  font-weight: bold;
  position: relative;
}

/* .first-tab-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 3px;
  background-color: #007AFF;
  border-radius: 3px;
} */

/* 第二层选项卡样式 */
.second-level-tabs {
  display: flex;
  background-color: #fff;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
	border-radius: 12rpx;
}

.second-tab-item {
  flex: 1;
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  color: #666;
  position: relative;
}

.second-tab-item.active {
  color: #007AFF;
  font-weight: bold;
}

.second-tab-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 2px;
  background-color: #007AFF;
  border-radius: 2px;
}

.badge {
  display: inline-block;
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background-color: #f56c6c;
  color: #fff;
  font-size: 12px;
  border-radius: 9px;
  padding: 0 4px;
  margin-left: 4px;
}

/* 选项卡内容样式 */
.tab-content {
  flex: 1;
  overflow-y: auto;
  margin: 0 32rpx;
}

/* 今日任务内容 */
.today-tasks {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.second-tab-content {
  flex: 1;
  overflow-y: auto;
  padding: 32rpx 0;
}

.task-list {
  background-color: #fff;
  border-radius: 8px;
}

.task-item {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.task-item:last-child {
  border-bottom: none;
}

.task-name {
  font-size: 15px;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

.task-time,
.task-progress {
  font-size: 13px;
  color: #999;
}

.empty-tip {
  text-align: center;
  padding: 50px 0;
  color: #999;
  font-size: 16px;
}

/* 点检路线内容 */
.alreadyDone-info {
  padding: 15px;
  background-color: #fff;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.info-item {
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
}

.info-label {
  color: #666;
  width: 100px;
}

.info-value {
  color: #333;
  flex: 1;
}
</style>