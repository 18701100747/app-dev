<template>
	<SimpleList ref="listRef" :listProps="listProps"></SimpleList>
</template>

<script setup>
import { ref } from 'vue';
import { onReachBottom, onPullDownRefresh,onShow } from '@dcloudio/uni-app'; //不支持onLoad
import SimpleList from '../components/simple-list/spotCheckSimpleList.vue';
import { listProps } from './config/index.js'



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
</script>

<style></style>