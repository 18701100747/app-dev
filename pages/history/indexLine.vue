<template>
	<view>
		<PageHead title="历史记录" />
		<LineChart :config="lineConfig"></LineChart>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	import PageHead from "@/components/layout/PageHead.vue";
	import LineChart from '@/components/dataDisplay/LineChart.vue';
	const lineConfig = ref({
	    height: 260,
	    condition: {"color":"#cb3a3a","selected":"#885959"},
        count: {"show":false,"unit":"sd","title":"sdfdfdf"},
        dataList:[{
			"title":"ssss",
			"valueKey":"name",
			"apiConfig":{
				"id":"copy1682508080882d89496",
				"name":"chart-funnel",
				"method":"GET",
				"path":"test/chart-funnel",
				"requestParamsConfigs":[
					{
						"name":"keyword",
						"dataType":"String",
						"assignmentType":"value",
						"value":"sss",
						"config":"",
					},
				],
				"requestHeaderConfigs":[],
				"requestBodyConfigs":[],
			},
			"indicator":[
				{
					"type":"bar",
					"color":"#3dd1a5",
					"name":"x",
					"value":"value1",
					"showAreaStyle":false,
					"gradualStartColor":"",
					"gradualEndColor":"",
				},
				{
					"type":"line",
					"color":"#682c2c",
					"name":"xd",
					"value":"value2",
					"showAreaStyle":true,
					"gradualStartColor":"#b72424",
					"gradualEndColor":"#2f933a",
				},
			],
			"options":{
				"extra":{
					"mix":{
						"column":{
							"seriesGap":120,
						},
						"area":{
							"gradient":true,
							"opacity":6,
						},
					},
				},
				"yAxis":{
					"data":[
						{
							"type":"value",
							"position":"left",
							"title":"",
							"titleFontColor":"",
							"titleFontSize":12,
							"format":"lineYAxis",
							"axisFormat":"{value}",
							"fontColor":"",
							"axisLine":true,
							"axisLineColor":"",
						},
					],
				},
			"xAxis":{
				"title":"",
				"titleFontColor":"",
				"titleFontSize":12,
				"fontColor":"",
				"axisLine":true,
				"axisLineColor":"",
				"format":"lineXAxis",
				"axisFormat":"{value}"
			},
			"dataLabel":false,
			"legend":{
				"show":true,
				"position":"bottom",
				"float":"center",
				"margin":8,
				"legendShape":"circle",
				"fontColor":"#000"},
			},
		}], 
        line: {
			"smooth":false,
			"stack":false,
			"showAreaStyle":true,
			"gradualStartColor":"#dd4b4b",
			"gradualEndColor":"#cda432",
			"showSymbol":true,
		},
        fontSize:12,
        fontColor:"#000000",    
    });
</script>

<style>

</style>
