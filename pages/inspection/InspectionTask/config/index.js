import { 
  getInspectionTaskInfoPage,
  deleteInspectionTaskInfo 
} from '@/common/api/inspection/InspectionTask/index.js';
import {
  componentType,
  datasourceTypeEnum
} from '../../components/simple-form/types/form.js'


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
  // columnConfigs: [
  //   {
  //       title: '计划id',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Input',
  //       field: 'planId',
  //     },{
  //       title: '任务发布时间',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Input',
  //       field: 'publishDate',
  //     },{
  //       title: '计划开始时间',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'DateTime',
  //       field: 'planStartTime',
  //     },{
  //       title: '计划结束时间',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'DateTime',
  //       field: 'planEndTime',
  //     },{
  //       title: '任务开始时间',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'DateTime',
  //       field: 'startTime',
  //     },{
  //       title: '任务结束时间',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'DateTime',
  //       field: 'endTime',
  //     },{
  //       title: '执行状态',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Select',
  //       field: 'processStatus',
  //     },{
  //       title: '点检结果',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Input',
  //       field: 'inspectionResult',
  //     },{
  //       title: '抽检结果',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Input',
  //       field: 'spotCheckResult',
  //     },{
  //       title: '任务领取时间',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'DateTime',
  //       field: 'receiveTime',
  //     },{
  //       title: '任务领取人',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Input',
  //       field: 'receiveUserId',
  //     },{
  //       title: '点检部门',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Organization',
  //       field: 'deptName',
  //     },{
  //       title: '专业名称',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Select',
  //       field: 'createUserName',
  //     },{
  //       title: '创建人',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Input',
  //       field: 'createUserId',
  //     },{
  //       title: '创建时间',
  //       mainField:false,
	// 		  showLabel:true,
  //       componentType:'Input',
  //       field: 'createDate',
  //     }
  // ],
    columnConfigs: [
    {
        title: '计划id',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'planId',
      },{
        title: '点检线路',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'publishDate',
      },{
        title: '点检部门',
        mainField:false,
			  showLabel:true,
        componentType:'DateTime',
        field: 'planStartTime',
      },{
        title: '专业名称',
        mainField:false,
			  showLabel:true,
        componentType:'DateTime',
        field: 'planEndTime',
      },{
        title: '执行岗位',
        mainField:false,
			  showLabel:true,
        componentType:'DateTime',
        field: 'startTime',
      },{
        title: '处理人',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'createUserId',
      },{
        title: '计划开始时间',
        mainField:false,
			  showLabel:true,
        componentType:'DateTime',
        field: 'endTime',
      },{
        title: '计划结束时间',
        mainField:false,
			  showLabel:true,
        componentType:'Select',
        field: 'processStatus',
      },{
        title: '点检进度',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'inspectionResult',
      },
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
    },
{"key":"94d6f0f5bfd94cfd82d44d7bd1632f7c","field":"deptName","label":"点检部门","component":"Organization","componentProps":{"placeholder":"请选择点检部门","isShow":true,"sepTextField":""},"required":false,"rules":[],"name":"点检部门","ifShow":true,"dynamicDisabled":false,"events":{}},
{
        key: '248bdc886e834f9e82f24129dfd076ab',
      name: '专业名称',
      label: '专业名称',
        field: 'createUserName',
        component: componentType.select, //组件类型
        componentProps: {"placeholder":"请选择专业名称","isShow":true,"sepTextField":"","apiConfig":{"method":"GET","path":"CodeGeneration/selection","requestParamsConfigs":[],"requestHeaderConfigs":[],"requestBodyConfigs":[]},"map":{"text":"label","value":"value"}},
      },
{
      key: 'f35eeb251cf944ecb2136c8bf8bf8f3c',
      name: '创建人',
      label: '创建人',
      field: 'createUserId',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入创建人',
      }
    },
{
      key: '0e11401979ff42daa76ab634145b7d91',
      name: '创建时间',
      label: '创建时间',
      field: 'createDate',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入创建时间',
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
          isUse:true,
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
      },{
      code: 'more',
      icon: 'ant-design:lipsis-outlined',
      color: '#5E95FF',
      text: '更多',
      buttons: [{"name":"发起审批","code":"startwork","icon":"ant-design:form-outlined","isDefault":true,"isUse":true}],
      action: async (record, { showMoreButton }) => {
        showMoreButton(record[listProps.rowKey])
      },
    }],
  formEventConfig:{"0":[],"1":[],"2":[],"3":[],"4":[]}
}


export const formProps =  {"validateTrigger":"submit","labelPosition":"left","labelWidth":75,"labelAlign":"right","errShowType":"undertext","border":false,"schemas":[{"key":"16fd10f66ac042e88f5cce6855a62fba","field":"planId","label":"计划id","component":"Input","componentProps":{"placeholder":"请输入计划id","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":false},"required":true,"rules":[{"required":true,"errorMessage":"计划id项必填"}],"name":"计划id","ifShow":false,"dynamicDisabled":false,"events":{}},{"key":"0db762c5bcb848c6aa2a3e96fc2c4685","field":"danXingWenBen1322","label":"任务名称","component":"Input","componentProps":{"placeholder":"请输入任务名称","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"任务名称","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"0151d0e2995c4b0983df2a1a1c25a340","field":"danXingWenBen5865","label":"任务编号","component":"Input","componentProps":{"placeholder":"请输入任务编号","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"任务编号","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"6ce8ce63f8d246e8b2b313d80fd49815","field":"danXingWenBen3433","label":"线路编号","component":"Input","componentProps":{"placeholder":"请输入线路编号","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"线路编号","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"39a5c7e5a8314a4187eda51de6a4ab89","field":"danXingWenBen6749","label":"线路名称","component":"Input","componentProps":{"placeholder":"请输入线路名称","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"线路名称","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"46dd99fe364048a4bd051ad3453c9485","field":"danXingWenBen8760","label":"执行岗位","component":"Input","componentProps":{"placeholder":"请输入执行岗位","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"执行岗位","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"94d6f0f5bfd94cfd82d44d7bd1632f7c","field":"deptName","label":"点检部门","component":"Organization","componentProps":{"placeholder":"请选择点检部门","isShow":true,"sepTextField":""},"required":false,"rules":[],"name":"点检部门","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"248bdc886e834f9e82f24129dfd076ab","field":"createUserName","label":"专业名称","component":"Select","defaultValue":"","componentProps":{"placeholder":"请选择专业名称","isShow":true,"sepTextField":"","apiConfig":{"method":"GET","path":"CodeGeneration/selection","requestParamsConfigs":[],"requestHeaderConfigs":[],"requestBodyConfigs":[]},"map":{"text":"label","value":"value"}},"required":false,"rules":[],"name":"专业名称","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"0ed56a3a553d4445a1876ecfc106aa64","field":"danXingWenBen8441","label":"点检设备完成率","component":"Input","componentProps":{"placeholder":"请输入点检设备完成率","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检设备完成率","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"aa0b475efa95413ca7b05bf3cad5b57e","field":"danXingWenBen2419","label":"点检区域到位率","component":"Input","componentProps":{"placeholder":"请输入点检区域到位率","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检区域到位率","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"6b5fd2d221fb4803b845ee264ba207ac","field":"danXingWenBen2184","label":"点检项目完成率","component":"Input","componentProps":{"placeholder":"请输入点检项目完成率","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检项目完成率","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"f35eeb251cf944ecb2136c8bf8bf8f3c","field":"createUserId","label":"创建人","component":"Input","componentProps":{"placeholder":"请输入创建人","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"创建人","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"0e11401979ff42daa76ab634145b7d91","field":"createDate","label":"创建时间","component":"Input","componentProps":{"placeholder":"请输入创建时间","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"创建时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"22d0d840f337449a9d890f267173b119","field":"danXingWenBen8328","label":"点检区域总数","component":"Input","componentProps":{"placeholder":"请输入点检区域总数","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检区域总数","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"18035a27dc9e481989b2bad2f6e93950","field":"danXingWenBen8501","label":"点检设备总数","component":"Input","componentProps":{"placeholder":"请输入点检设备总数","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检设备总数","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"728377af26234d9e905314e083a70bc7","field":"danXingWenBen5745","label":"点检项目总数","component":"Input","componentProps":{"placeholder":"请输入点检项目总数","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检项目总数","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"cfb4a92a14584f8f8fd55ea86ddcc6cf","field":"planStartTime","label":"计划开始时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择计划开始时间","type":"datetime","formatType":"datetime","isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"计划开始时间项必填"}],"name":"计划开始时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"1ad80f5450ce4ee0bb8cf3d0a5a930fe","field":"planEndTime","label":"计划结束时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择计划结束时间","type":"datetime","formatType":"datetime","isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"计划结束时间项必填"}],"name":"计划结束时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"33f4dafe9d28448cb0faf29c807ffbc1","field":"startTime","label":"任务开始时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择任务开始时间","type":"datetime","formatType":"datetime","isShow":true},"required":false,"rules":[],"name":"任务开始时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"f47d80c800164d6e985d2ec40928a065","field":"endTime","label":"任务结束时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择任务结束时间","type":"datetime","formatType":"datetime","isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"任务结束时间项必填"}],"name":"任务结束时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"d6ba939ab15d469fb03b19114bb88a5a","field":"publishDate","label":"任务发布时间","component":"Input","componentProps":{"placeholder":"请输入任务发布时间","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"任务发布时间项必填"}],"name":"任务发布时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"b6082226722840ea85e7149dbf9557f6","field":"danXingWenBen9971","label":"点检区域","component":"Input","componentProps":{"placeholder":"请输入点检区域","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检区域","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"ab866a42d7b34bf8850ea77f690da598","field":"danXingWenBen2898","label":"点检项目","component":"Input","componentProps":{"placeholder":"请输入点检项目","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检项目","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"3854fda467a9421d82ac0b83d9e55078","field":"danXingWenBen2129","label":"关联的缺陷","component":"Input","componentProps":{"placeholder":"请输入关联的缺陷","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"关联的缺陷","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"9e4b6cc2a76a49f8b33b1f4501d43e72","field":"danXingWenBen2097","label":"关联工单","component":"Input","componentProps":{"placeholder":"请输入关联工单","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"关联工单","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"f83649683e964dd4a4001c6dec7c72e4","field":"danXingWenBen7088","label":"关联工作票","component":"Input","componentProps":{"placeholder":"请输入关联工作票","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"关联工作票","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"8bf8ba8faeb54854bd0adfdcc9493f4e","field":"danXingWenBen9616","label":"任务延期","component":"Input","componentProps":{"placeholder":"请输入任务延期","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"任务延期","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"45a0e1c06f4c4a1280c0aabe395055f3","field":"danXingWenBen3132","label":"任务作废","component":"Input","componentProps":{"placeholder":"请输入任务作废","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"任务作废","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"38532bd5d4594efea7e226bb2d72444a","field":"danXingWenBen1428","label":"点检记事","component":"Input","componentProps":{"placeholder":"请输入点检记事","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检记事","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"8426303e3ac3465d8600ba8099443807","field":"danXingWenBen7584","label":"异常信息","component":"Input","componentProps":{"placeholder":"请输入异常信息","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"异常信息","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"b5ca730d92374349ab615140eec85230","field":"danXingWenBen8496","label":"漏检信息","component":"Input","componentProps":{"placeholder":"请输入漏检信息","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"漏检信息","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"f9cfdbd6cdba4624907a0c532acaea05","field":"danXingWenBen8669","label":"跳检记录","component":"Input","componentProps":{"placeholder":"请输入跳检记录","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"跳检记录","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"74ff5c16343d4e1397067114878afd91","field":"danXingWenBen7109","label":"抽查结果","component":"Input","componentProps":{"placeholder":"请输入抽查结果","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"抽查结果","ifShow":true,"dynamicDisabled":true,"events":{}},{"key":"36797506059a4a9696e534ee07018cab","field":"processStatus","label":"执行状态","component":"Select","defaultValue":"0","componentProps":{"placeholder":"请选择下拉选择","isShow":true,"sepTextField":"","localdata":[{"key":1,"label":"未开始","value":"0"},{"key":2,"label":"进行中","value":"1"},{"key":3,"label":"已完成","value":"2"}],"map":{"text":"label","value":"value"}},"required":false,"rules":[],"name":"执行状态","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"c61990bfce90450681f8f05e6f5f3c3c","field":"inspectionResult","label":"点检结果","component":"Input","componentProps":{"placeholder":"请输入点检结果","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"点检结果","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"cc0f068d83144328bd4a57c0e5e513cb","field":"spotCheckResult","label":"抽检结果","component":"Input","componentProps":{"placeholder":"请输入抽检结果","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"抽检结果","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"08d8045aec7842dc96697c015e26ab5d","field":"receiveTime","label":"任务领取时间","component":"DateTime","componentProps":{"clearIcon":true,"placeholder":"请选择任务领取时间","type":"datetime","formatType":"datetime","isShow":true},"required":false,"rules":[],"name":"任务领取时间","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"b0c0118ee8e14a3eb986bf617103de8f","field":"receiveUserId","label":"任务领取人","component":"Input","componentProps":{"placeholder":"请输入任务领取人","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"任务领取人","ifShow":true,"dynamicDisabled":false,"events":{}}],"rules":[]};