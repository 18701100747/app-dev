<template>
	<view>
		<PageHeadVue title="巡检任务" >
			<navigator url="/pages/inspectionRecord/addRecord">
				<text class="text-button" @click="clickRight"> 新增</text>
			</navigator>
		</PageHeadVue>
		<!-- 分类  @tap="clickItem(item)"-->
		<!-- <uni-grid class="uni-grid-wrap" :column="2" :show-border="false" :square="false">
		  <uni-grid-item>
			  <view>今日任务</view>
		  </uni-grid-item>
		  <uni-grid-item>已办任务</uni-grid-item>
		</uni-grid> -->
		<uni-tab :data="tabList" v-model="active" @click-tab="changeTab" line-color="#007AFF"></uni-tab>
		<view v-if="active === 'record'">
			<TableCardVue :listData="listData"></TableCardVue>
		</view>
	</view>
</template>

<script setup>
	import { computed, onMounted, watch, ref } from 'vue';
	import PageHeadVue from '../../components/layout/PageHead.vue';
	import TableCardVue from './component/tableCard.vue';
	const tabList = [{name:'巡检记录',value:'note'},{name:'巡检记事',value:'record'}]
	const active = ref('record');
	const listData = ref([{
		id:0,
		title:'XXXXX',
		content:'记事描述XXXXXXXXXXX',
		user:'张兰',
		time:'2025-03-02 12:23:56'
	},{
		id:1,
		title:'XXXXX',
		content:'记事描述XXXXXXXXXXX',
		user:'张兰',
		time:'2025-03-02 12:23:56'
	},{
		id:2,
		title:'XXXXX',
		content:'记事描述XXXXXXXXXXX是',
		user:'张兰',
		time:'2025-03-02 12:23:56'
	}])
	const clickRight = ()=>{
		console.log('jjjjjjjjjjjj')
	}
	const changeTab = (data)=>{
		console.log(data, 'kkkkkkkkkkkkkk')
	}
	
	
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
.text-button{
	color: #007AFF; /* 文字颜色 */
	font-size: 16px; /* 文字大小 */
}
</style>
