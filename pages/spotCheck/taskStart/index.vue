<template>
	<view class="taskStart">
		<uni-nav-bar @clickLeft="clickLeft" @clickRight="clickRight" height="65px" left-icon="left" leftText="返回"
			rightText="扫一扫" title="点检任务" />
		<view class="content">
			<view class="tabs">
				<view v-for="(item, index) in items" :key="item" class="tab"
					:style="{ color: current === item ? '#5e95ff' : '' }" @click="onClickItem(item)">
					<view></view>
					<view>{{ item }}</view>
				</view>
			</view>
			<view class="c-box" v-if="current === '点检记录'">
				<view class="title-text" @click="testClick">基本信息</view>
				<view>
					<CardComponent :cardData="cardData" />
				</view>
				<view class="title-text">点检区域未完成2个</view>
				<view class="area">
					<view class="area-box">
						<view class="area-top">
							<view>点检区域</view>
							<view>点检结果</view>
						</view>
						<view class="area-content">
							<view v-for="area in AreaList" :key="area.id" class="c-item">
								<view class="m-name">{{ area.name }}</view>
								<view class="m-value" @click="clickArea(area)">
									<span class="m-value-text">{{ area.value }}</span>
									<uni-icons type="right" color="#a4a4a4"></uni-icons>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="c-box"></view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { onLoad, onReachBottom } from "@dcloudio/uni-app";
import { ref, reactive, computed } from "vue";
import CardComponent from "../components/CardComponent.vue";
import { db } from "../db";

const items = ref(["点检记录", "点检记事"])
const current = ref('点检记录')
const cardData = reactive({
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
})
const AreaList = ref([
	{ id: '1', name: '区域一', value: '未完成', },
	{ id: '2', name: '区域二', value: '未完成', },
	{ id: '3', name: '区域三', value: '未完成', },
])

const testClick = async () => {
	await db.updateByIndex(
		'data',                // 存储名称
		'taskId',              // 索引名称
		1,                // 查询条件（匹配taskId=T123）
		(oldData: any) => ({        // 更新函数
			...oldData,          // 保留原有字段
			status: 'completed', // 修改status字段
			updatedAt: Date.now() // 添加更新时间
		})
	);
}

const onClickItem = async (value: any) => {
	current.value = value
	console.log('11', await db.getAll('data'))
	console.log('2', await db.getByTaskId('data', 1),)
	db.deleteByIndex('data', 'taskId', 1)
}

const clickArea = (item: any) => {
	uni.navigateTo({
		url: "/pages/spotCheck/taskArea/index"
	})
}

const addData = async () => {
	try {
		await db.add('data', { taskId: 1, name: '测试', time: new Date() });
		uni.showToast({ title: '保存成功' });
	} catch (error) {
		uni.showToast({ title: '保存失败', icon: 'none' });
	}
}

onLoad((options: any) => {
	db.init().then(() => {
		console.log('数据库初始化成功');
	}).catch((err: any) => {
		console.error('数据库初始化失败:', err);
	});
	addData()
});

onReachBottom(() => { });

const clickLeft = () => {
	console.log('11')
	uni.navigateTo({
		url: "/pages/inspection/InspectionTask/list"
	})
};

const scan = () => {
	uni.scanCode({
		onlyFromCamera: true,
		success: (res) => {
			let result = res.result;
			console.log('result: ', result);
		},
	});
	// #endif
}

const clickRight = () => {
	// scan()
	uni.getLocation({
		type: 'wgs84', // 返回可以用于wx.openLocation的经纬度
		success: function (res) {
			console.log('位置信息：', res, res.latitude, res.longitude);
		},
		fail: function (err) {
			console.error('获取位置失败', err);
		}
	});
}

</script>

<style scoped lang="less">
.taskStart {
	.content {
		padding: 0.5rem;

		.tabs {
			padding: 0.5rem;
			display: flex;
			background: white;

			.tab {
				flex: 1;
				text-align: center;
			}
		}

		.c-box {
			.title-text {
				padding: 0.5rem;
				font-size: 0.8rem;
			}

			.area {
				padding: 0.2rem;
				font-size: 0.85rem;

				.area-box {
					border-radius: 0.5rem;
					background: white;

					.area-top {
						padding: 0.7rem;
						padding-right: 2rem;
						display: flex;
						justify-content: space-between;
						border-bottom: 1px #e6e6e6 solid;
					}

					.area-content {
						padding: 0.2rem;

						.c-item {
							padding: 0.7rem;
							padding-right: 1.2rem;
							display: flex;
							justify-content: space-between;
							border-bottom: 1px #e6e6e6 solid;

							.m-value-text {
								padding-right: 0.5rem;
							}
						}
					}
				}
			}
		}
	}
}
</style>
