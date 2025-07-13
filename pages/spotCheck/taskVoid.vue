<template>
  <view>
    <!-- 导航 -->
    <view class="header">
      <view class="headerContent">
        <view>
          <uni-icons type="back" size="20" @tap="clickLeft">返回</uni-icons>
        </view>
        <view class="title">任务作废</view>
        <view></view>
      </view>
    </view>

    <!-- 卡片组件 -->
    <view class="padding">
      <view class="content">
        <view class="padding-text">基本信息</view>
        <CardComponent :cardData="cardData"></CardComponent>
      </view>

      <!-- 表单组件 -->
      <view class="container">
        <uni-forms ref="form" :modelValue="formData" :rules="rules">
          <uni-forms-item label="办理时间：" name="expectedTime" required>
            <uni-datetime-picker type="datetime" v-model="formData.expectedTime" placeholder="请选择时间" />
          </uni-forms-item>

          <uni-forms-item label="任务作废原因：" name="reason" required>
            <uni-easyinput type="textarea" v-model="formData.reason" placeholder="请输入延期原因" autoHeight />
          </uni-forms-item>
        </uni-forms>
      </view>

      <view class="container">
        <button class="submit-btn" type="primary" @click="submitForm">提交</button>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from '@dcloudio/uni-app';
import CardComponent from './components/cardComponent.vue';

const cardData = ref<{
  id: Number,
  taskName: String,
  status: String,
  progress: String,
  route: String,
  department: String,
  specialty: String,
  position: String,
  planStartTime: String,
  planEndTime: String,
  progressRate: String,
  handler: String,
}>({})

// 表单数据
const formData = ref({
  originalTime: '2025-03-03 00:00', // 原点检要求完成时间
  expectedTime: '', // 预计点检完成时间
  handleTime: '', // 办理时间
  reason: '' // 任务延期原因
});

// 表单ref
const form = ref(null);

onLoad(options => {
  if ('params' in options) {
    const obj = JSON.parse(decodeURIComponent(options.params));
    cardData.value = obj.task
  }
})

const clickLeft = () => {
  uni.navigateTo({
    url: "/pages/spotCheck/index"
  })
}

// 验证规则
const rules = {
  expectedTime: {
    rules: [{
      required: true,
      errorMessage: '请选择预计点检完成时间'
    }]
  },
  reason: {
    // rules: [
    //   {
    //     required: true,
    //     errorMessage: '请输入任务延期原因'
    //   },
    //   {
    //     minLength: 5,
    //     errorMessage: '延期原因不能少于5个字'
    //   }
    // ]
  }
};

// 提交表单
const submitForm = async () => {
  try {
    // 验证表单
    await form.value.validate();

    // 验证通过，提交数据
    uni.showLoading({
      title: '提交中...'
    });

    console.log('提交数据:', formData.value);

    // 模拟API请求
    setTimeout(() => {
      uni.hideLoading();
      uni.showToast({
        title: '提交成功',
        icon: 'success'
      });

      // 提交成功后返回上一页
      uni.navigateBack();
    }, 1500);

  } catch (err) {
    console.log('表单验证失败:', err);
  }
};

</script>

<style scoped>
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

.content {
  margin-top: 28rpx;
}

.padding {
  padding: 0 28rpx;
}

.padding-text {
  font-size: 22rpx;
  font-weight: 500;
  padding-bottom: 12rpx;
}


.container {
  padding: 24rpx 20rpx 20rpx 24rpx;
  background-color: #fff;
  border-radius: 12rpx;
  margin-bottom: 24rpx;
  overflow: hidden;
}

.submit-btn {
  margin-top: 30rpx;
}
</style>