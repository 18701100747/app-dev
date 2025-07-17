<template>
	<view>
		 <view v-for="(item, index) in listData" :key="index" class="list-item">
		      <view class="list-header">
				  <view>{{ item.title }}</view>
				   <view>编辑</view>
			  </view>
			  <view class="list-content">
				 <text>记事描述（巡检）</text>
				 <view >
					 事实上事实上
				 </view>
			  </view>
			  <view class="list-footer">
				  <view style="margin-right: 5px;">
				  	<text>记事人员:</text>
				  	<text>{{item.user}}</text>
				  </view>
				  <view>
				  	<text>记事时间:</text>
				  	<text>{{item.time}}</text>
				  </view>
			  </view>
		    </view>
		<!-- <uni-list>
		    <uni-list-item 
		        v-for="(item, index) in listData" 
		        :key="index"
		        :title="item.name" 
		        :note="item.desc"
		        :thumb="item.avatar"
		        :showArrow="false"
			>
		      </uni-list-item>
		    </uni-list> -->
	</view>
</template>


<script setup>
	import { ref, reactive, computed, defineProps } from "vue";
	const props = defineProps({
	  listData: {
	    type: Array,
	    required: true,
	  }
	})
	const listRef = ref();
</script>

<style scoped>
	.list-item{
		margin:16px 16px 0 16px;
		background:#fff;
		/* background-color: yellowgreen; */
		border-radius: 10px;
		
	}
	.list-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #007AFF;
		padding: 10px;
		border-bottom: 1px solid #e2e2e2;
	}
	.list-content{
		padding: 10px;
	}
	.list-footer{
		padding: 10px;
		display: flex;
	}
</style>