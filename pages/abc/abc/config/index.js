
import { 
  getInspectionTaskInfoPage,
  deleteInspectionTaskInfo 
} from '@/common/api/abc/abc/index.js';
import {
  componentType,
  datasourceTypeEnum
} from '@/components/simple-form/types/form.js'

export const listProps = {
  rowKey:'id',
  //列表请求接口
  api: getInspectionTaskInfoPage,
  // 请求之前处理参数 (params) => {}
  beforeFetch: (params) => {
    for(let key in params){
			if(key.includes(',')){
				delete params[key]
			}
		}
    params.PK='id'
		params.FormId='1944007007745699840'
    return params
  },
  // 自定义处理接口返回参数
  afterFetch: (data) => {
    return data
  },
  //数据源  静态
  datasource: [],
  workflowConfig:{
    Pk:'id',
    Formid:'1944007007745699840',
    schemaId: '',
  },
  //列配置
  columnConfigs: [
    {
        title: '计划id',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'InputX',
        field: 'planId',
      },{
        title: '任务发布时间',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'Input',
        field: 'publishDate',
      },{
        title: '计划开始时间',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'DateTime',
        field: 'planStartTime',
      },{
        title: '计划结束时间',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'DateTime',
        field: 'planEndTime',
      },{
        title: '任务开始时间',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'DateTime',
        field: 'startTime',
      },{
        title: '任务结束时间',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'DateTime',
        field: 'endTime',
      },{
        title: '执行状态',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'Select',
        field: 'processStatus',
      },{
        title: '点检结果',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'Input',
        field: 'inspectionResult',
      },{
        title: '抽检结果',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'Input',
        field: 'spotCheckResult',
      },{
        title: '任务领取时间',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'DateTime',
        field: 'receiveTime',
      },{
        title: '任务领取人',
        mainField:undefined,
			  showLabel:undefined,
        componentType:'Input',
        field: 'receiveUserId',
      }
  ],
  //是否启用搜索
  isSearch: true,
  //是否分页
  isPage: true,
  //分类筛选配置
  categoryConfigs:"",
  //搜索配置
  searchConfigs: [{
      key: '16fd10f66ac042e88f5cce6855a62fba',
      name: '计划id',
      label: '计划id',
      field: 'planId',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入计划id',
      }
    },
{
      key: 'd6ba939ab15d469fb03b19114bb88a5a',
      name: '任务发布时间',
      label: '任务发布时间',
      field: 'publishDate',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入任务发布时间',
      }
    },
{
        key: 'cfb4a92a14584f8f8fd55ea86ddcc6cf',
      name: '计划开始时间',
      label: '计划开始时间',
        field: 'planStartTimeStart,planStartTimeEnd',
        component: componentType.dateRange, //组件类型
        startTimeField:'planStartTimeStart',
				endTimeField:'planStartTimeEnd',
        componentProps: {
          formatType:'datetime',
          type: "datetimerange", //日期时间范围选择器
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }, //组件的所有配置信息
      },
{
        key: '1ad80f5450ce4ee0bb8cf3d0a5a930fe',
      name: '计划结束时间',
      label: '计划结束时间',
        field: 'planEndTimeStart,planEndTimeEnd',
        component: componentType.dateRange, //组件类型
        startTimeField:'planEndTimeStart',
				endTimeField:'planEndTimeEnd',
        componentProps: {
          formatType:'datetime',
          type: "datetimerange", //日期时间范围选择器
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }, //组件的所有配置信息
      },
{
        key: '33f4dafe9d28448cb0faf29c807ffbc1',
      name: '任务开始时间',
      label: '任务开始时间',
        field: 'startTimeStart,startTimeEnd',
        component: componentType.dateRange, //组件类型
        startTimeField:'startTimeStart',
				endTimeField:'startTimeEnd',
        componentProps: {
          formatType:'datetime',
          type: "datetimerange", //日期时间范围选择器
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }, //组件的所有配置信息
      },
{
        key: 'f47d80c800164d6e985d2ec40928a065',
      name: '任务结束时间',
      label: '任务结束时间',
        field: 'endTimeStart,endTimeEnd',
        component: componentType.dateRange, //组件类型
        startTimeField:'endTimeStart',
				endTimeField:'endTimeEnd',
        componentProps: {
          formatType:'datetime',
          type: "datetimerange", //日期时间范围选择器
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }, //组件的所有配置信息
      },
{
        key: '36797506059a4a9696e534ee07018cab',
      name: '执行状态',
      label: '执行状态',
        field: 'processStatus',
        component: componentType.select, //组件类型
        componentProps: {"placeholder":"请选择下拉选择","isShow":true,"sepTextField":"","localdata":[{"key":1,"label":"未开始","value":"0"},{"key":2,"label":"进行中","value":"1"},{"key":3,"label":"已完成","value":"2"}],"map":{"text":"label","value":"value"}},
      },
{
      key: 'c61990bfce90450681f8f05e6f5f3c3c',
      name: '点检结果',
      label: '点检结果',
      field: 'inspectionResult',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入点检结果',
      }
    },
{
      key: 'cc0f068d83144328bd4a57c0e5e513cb',
      name: '抽检结果',
      label: '抽检结果',
      field: 'spotCheckResult',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入抽检结果',
      }
    },
{
        key: '08d8045aec7842dc96697c015e26ab5d',
      name: '任务领取时间',
      label: '任务领取时间',
        field: 'receiveTimeStart,receiveTimeEnd',
        component: componentType.dateRange, //组件类型
        startTimeField:'receiveTimeStart',
				endTimeField:'receiveTimeEnd',
        componentProps: {
          formatType:'datetime',
          type: "datetimerange", //日期时间范围选择器
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }, //组件的所有配置信息
      },
{
      key: 'b0c0118ee8e14a3eb986bf617103de8f',
      name: '任务领取人',
      label: '任务领取人',
      field: 'receiveUserId',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入任务领取人',
      }
    },],
  //表单页面地址
  formUrl: '/pages/inspection/inspectionTask/container',
  //列表页面地址
  listUrl: '/pages/inspection/inspectionTask/list',
  //按钮配置
  otherButtons:[
        {
          text: '新增',
          isUse:true,
          code:'add',
        },
        {
          text: '刷新',
          isUse:true,
          code:'refresh',
        },
        {
          text: '查看',
          isUse:true,
          code:'view',
        },
        {
          text: '发起审批',
          isUse:false,
          code:'startwork',
        }],
  buttonConfigs: [{
        code: 'edit',
        icon: 'ant-design:edit-square',
        color:'#5E95FF',
        text: '编辑',
        action: (record) =>{
          uni.navigateTo({
            url: listProps.formUrl + '?type=edit&id=' + record[listProps.rowKey],
          });
        }
      },{
        code: 'delete',
        icon: 'ant-design:delete-outlined',
        color:'#EF6969',
        text: '删除',
        action: async (record, { reload }) => {
          await deleteInspectionTaskInfo ([record[listProps.rowKey]]);
          reload()
          //请求删除接口
          uni.showToast({
            title: "删除成功"
          })
        } 
      }],
  formEventConfig:{"0":[],"1":[],"2":[],"3":[],"4":[]}
}


export const formProps =  {"validateTrigger":"submit","labelPosition":"left","labelWidth":75,"labelAlign":"right","errShowType":"undertext","border":false,"schemas":[{"key":"16fd10f66ac042e88f5cce6855a62fba","field":"planId","label":"计划id","component":"Input","componentProps":{"placeholder":"请输入计划id","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"计划id项必填"}],"name":"计划id","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"d6ba939ab15d469fb03b19114bb88a5a","field":"publishDate","label":"任务发布时间","component":"Input","componentProps":{"placeholder":"请输入任务发布时间","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"任务发布时间项必填"}],"name":"任务发布时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"cfb4a92a14584f8f8fd55ea86ddcc6cf","field":"planStartTime","label":"计划开始时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择计划开始时间","type":"datetime","formatType":"datetime","isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"计划开始时间项必填"}],"name":"计划开始时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"1ad80f5450ce4ee0bb8cf3d0a5a930fe","field":"planEndTime","label":"计划结束时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择计划结束时间","type":"datetime","formatType":"datetime","isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"计划结束时间项必填"}],"name":"计划结束时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"33f4dafe9d28448cb0faf29c807ffbc1","field":"startTime","label":"任务开始时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择任务开始时间","type":"datetime","formatType":"datetime","isShow":true},"required":false,"rules":[],"name":"任务开始时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"f47d80c800164d6e985d2ec40928a065","field":"endTime","label":"任务结束时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择任务结束时间","type":"datetime","formatType":"datetime","isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"任务结束时间项必填"}],"name":"任务结束时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"36797506059a4a9696e534ee07018cab","field":"processStatus","label":"执行状态","component":"Select","defaultValue":"0","componentProps":{"placeholder":"请选择下拉选择","isShow":true,"sepTextField":"","localdata":[{"key":1,"label":"未开始","value":"0"},{"key":2,"label":"进行中","value":"1"},{"key":3,"label":"已完成","value":"2"}],"map":{"text":"label","value":"value"}},"required":false,"rules":[],"name":"执行状态","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"c61990bfce90450681f8f05e6f5f3c3c","field":"inspectionResult","label":"点检结果","component":"Input","componentProps":{"placeholder":"请输入点检结果","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检结果","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"cc0f068d83144328bd4a57c0e5e513cb","field":"spotCheckResult","label":"抽检结果","component":"Input","componentProps":{"placeholder":"请输入抽检结果","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"抽检结果","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"08d8045aec7842dc96697c015e26ab5d","field":"receiveTime","label":"任务领取时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择任务领取时间","type":"datetime","formatType":"datetime","isShow":true},"required":false,"rules":[],"name":"任务领取时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"b0c0118ee8e14a3eb986bf617103de8f","field":"receiveUserId","label":"任务领取人","component":"Input","componentProps":{"placeholder":"请输入任务领取人","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"任务领取人","ifShow":true,"dynamicDisabled":false,"events":{}}],"rules":[]};

