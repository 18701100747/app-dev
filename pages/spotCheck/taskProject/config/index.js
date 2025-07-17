import {
	getDemoList,
  deleteDemo
} from '@/common/api/demo/demo1/index.js';
import {
	componentType,
	datasourceTypeEnum
} from '@/components/simple-form/types/form.js'

export const formProps = {
	rules: {}, //校验规则
	validateTrigger: 'submit', //表单校验时机,blur仅在 uni-easyinput 中生效
	labelPosition: 'left', //label 位置 top/left
	labelWidth: 75, //label 宽度，单位 px 75
	labelAlign: 'left', //label 居中方式  left/center/right
	errShowType: 'undertext', //表单错误信息提示方式 undertext/toast/modal
	border: false, //是否显示分格线
	showButton: false, //是否显示表单自带按钮
	schemas: [{
			key: '1', //唯一标识  用于处理某些无字段组件
			name: '姓名', //表单域的属性名，在使用校验规则时必填
			field: 'name',
			label: '姓名', //输入框左边的文字提示
			component: componentType.input, //组件类型
			validateTrigger: 'submit',
			labelWidth: 70, //label 宽度，单位 px
			labelAlign: '', //label 居中方式
			rules: [{
				required: true,
				errorMessage: '姓名必填'
			}], //表单校验规则
			required: true, //label 右边显示红色"*"号，样式显示不会对校验规则产生效果
			defaultValue: '蔡徐坤1111111',
			events: {
				'input': "console.log(\"执行配置input事件\")",
				'clear': "console.log(\"执行配置clear事件\")"
			},
			componentProps: {
				placeholder: '请输入姓名'
			}, //组件的所有配置信息
		}, {
			key: '2', //唯一标识  用于处理某些无字段组件
			name: '年龄', //表单域的属性名，在使用校验规则时必填
			field: 'age', //字段
			label: '年龄', //输入框左边的文字提示
			component: componentType.inputNumber, //组件类型
			labelWidth: 70, //label 宽度，单位 px
			labelAlign: '', //label 居中方式
			rules: [{
				required: true,
				errorMessage: '年龄必填'
			}], //表单校验规则
			required: true, //label 右边显示红色"*"号，样式显示不会对校验规则产生效果
			componentProps: {
				value: 18,
			}, //组件的所有配置信息
		},
		{
			key: '3', //唯一标识  用于处理某些无字段组件
			name: '爱好', //表单域的属性名，在使用校验规则时必填
			field: 'hobbys', //字段
			label: '爱好', //输入框左边的文字提示
			component: componentType.checkbox, //组件类型
			labelWidth: 70, //label 宽度，单位 px
			labelAlign: '', //label 居中方式
			rules: [{
				required: true,
				errorMessage: '爱好必填'
			}], //表单校验规则
			required: true, //label 右边显示红色"*"号，样式显示不会对校验规则产生效果
			componentProps: {
				multiple: true,
				mode: "button",
				localdata: [{
					"value": 0,
					"text": "唱"
				}, {
					"value": 1,
					"text": "跳"
				}, {
					"value": 2,
					"text": "rap"
				}, {
					"value": 3,
					"text": "篮球"
				}]
			}, //组件的所有配置信息
		},
		{
			key: '4', //唯一标识  用于处理某些无字段组件
			name: '性别', //表单域的属性名，在使用校验规则时必填
			field: 'sex', //字段
			label: '性别', //输入框左边的文字提示
			component: componentType.radio, //组件类型
			labelWidth: 70, //label 宽度，单位 px
			labelAlign: '', //label 居中方式
			rules: [{
				required: true,
				errorMessage: '性别必填'
			}], //表单校验规则
			required: true, //label 右边显示红色"*"号，样式显示不会对校验规则产生效果
			componentProps: {
				mode: "button",
				localdata: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '未知',
					value: -1
				}]
			}, //组件的所有配置信息
		},
		{
			key: '5', //唯一标识  用于处理某些无字段组件
			name: '生日', //表单域的属性名，在使用校验规则时必填
			field: 'birthday', //字段
			label: '生日', //输入框左边的文字提示
			component: componentType.date, //组件类型
			labelWidth: 70, //label 宽度，单位 px
			labelAlign: '', //label 居中方式
			rules: [], //表单校验规则
			required: false, //label 右边显示红色"*"号，样式显示不会对校验规则产生效果
			componentProps: {

			}, //组件的所有配置信息
		},
		{
			key: '5-1', //唯一标识  用于处理某些无字段组件
			name: '有效日期', //表单域的属性名，在使用校验规则时必填
			field: 'range', //字段
			label: '有效日期', //输入框左边的文字提示
			component: componentType.dateRange, //组件类型
			labelWidth: 70, //label 宽度，单位 px
			labelAlign: '', //label 居中方式
			rules: [], //表单校验规则
			required: false, //label 右边显示红色"*"号，样式显示不会对校验规则产生效果
			// defaultValue: ['2023-05-15 17:47:51', '2023-05-19 17:47:56'],
			startTimeField: "startTime", //范围选择器特有属性
			endTimeField: "endTime", //范围选择器特有属性
			componentProps: {
				type: "datetimerange", //日期时间范围选择器
				// type: "daterange"  // 日期范围选择器
			}, //组件的所有配置信息
		},
	] // 表单组件配置
}