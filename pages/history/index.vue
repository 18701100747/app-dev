<template>
	<view>
		<PageHead title="历史记录"/>
		<view class="numberBox">
			最近
			<uni-number-box class="numberInput" v-model="day"></uni-number-box>
			<!-- <input type="number" v-model="day"/> -->
			天历史记录
		</view>
		<qiun-data-charts type="line" :chartData="chartData" />
		<view class="list">
			<view class="listItem" v-for="(item,index) in dateList">
				<view class="itemTitle">
					<text class="bold">{{item.date}}</text>
					<text class="tag">{{item.status}}</text>
				</view>
				<view>
					{{item.desc}}
				</view>
			</view>
		</view>
			
	</view>
</template>

<script setup>
	import {ref,onMounted} from 'vue';
	import PageHead from "@/components/layout/PageHead.vue";
	const day = ref(15)
	const chartData = ref({})
	const dateList = ref([{
		date:'1月1日',
		status:'正常',
		desc:'记录值备注'
	},{
		date:'1月1日',
		status:'正常',
		desc:'记录值备注'
	},{
		date:'1月1日',
		status:'正常',
		desc:'记录值备注'
	},{
		date:'1月1日',
		status:'正常',
		desc:'记录值备注'
	}])
	onMounted(()=>{
		getServerData()
	})
	const getServerData = ()=>{
		//模拟从服务器获取数据时的延时
		setTimeout(() => {
		  let res = {
		      categories: ["2016","2017","2018","2019","2020","2021"],
			  legend:{show:false},
		      series: [
		        {
		          name: "目标值",
		          data: [35,36,31,33,13,34]
		        }
		      ]
		    };
		  chartData.value = JSON.parse(JSON.stringify(res));
		}, 500);
	}
	
</script>

<style scoped>
.charts-box {
    width: 100%;
    height: 300px;
  }
  .numberBox{
	  display: flex;
	  align-items: center;
	  margin: 10px 0px 10px 16px;
  }
  .numberInput{
	  width: 100px;
  }
  .list{
	  margin-top:16px;
	  padding:10px
  }
  .listItem{
	  background-color: #fff;
	  border-radius: 10px;
	  padding: 10px;
	  margin-top:10px
  }
  .itemTitle{
	  display: flex;
	  justify-content: space-between;
  }
  .bold{
	  font-weight: 500;
	  font-size: 40rpx;
  }
  .tag{
	  display: block;
	  padding:6px 10px;
	  border-radius: 10px;
	  background-color: #007AFF;
	  color: #fff;
  }
</style>
