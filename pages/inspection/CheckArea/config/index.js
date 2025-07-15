import { 
  getInspectionDomainTablePage,
  deleteInspectionDomainTable 
} from '@/common/api/inspection/CheckArea/index.js';
import {
  componentType,
  datasourceTypeEnum
} from '@/components/simple-form/types/form.js'


export const listProps = {
  rowKey:'id',
  //列表请求接口
  api: getInspectionDomainTablePage,
  // 请求之前处理参数 (params) => {}
  beforeFetch: (params) => {
    for(let key in params){
			if(key.includes(',')){
				delete params[key]
			}
		}
    params.PK='id'
		params.FormId='1943261667790745600'
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
    Formid:'1943261667790745600',
    schemaId: '',
  },
  //列配置
  columnConfigs: [
    {
        title: '区域编号',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'domainCode',
      },{
        title: '区域位置',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'domainPosition',
      },{
        title: 'RFID卡识别码',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'rfid',
      },{
        title: '排序',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'sortNum',
      },{
        title: '备注',
        mainField:false,
			  showLabel:true,
        componentType:'Input',
        field: 'remarks',
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
      key: 'b90bc298a1c249e2a1d7b8317faad205',
      name: '区域编号',
      label: '区域编号',
      field: 'domainCode',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入区域编号',
      }
    },
{
      key: 'f7eb42ab27014a62a50681c50a0a155d',
      name: '区域位置',
      label: '区域位置',
      field: 'domainPosition',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入区域位置',
      }
    },
{
      key: '5eb3dbf7ca5a4e96a98c560c24027663',
      name: 'RFID卡识别码',
      label: 'RFID卡识别码',
      field: 'rfid',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入RFID卡识别码',
      }
    },
{
      key: '0eeefe58af5b4c4e8b35de431a33c838',
      name: '排序',
      label: '排序',
      field: 'sortNum',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入排序',
      }
    },
{
      key: '2a1d24882b424c1e908706f7142e2274',
      name: '备注',
      label: '备注',
      field: 'remarks',
      component: componentType.input, //组件类型
      componentProps: { 
        placeholder: '请输入备注',
      }
    },],
  //表单页面地址
  formUrl: '/pages/inspection/checkArea/container',
  //列表页面地址
  listUrl: '/pages/inspection/checkArea/list',
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
          await deleteInspectionDomainTable ([record[listProps.rowKey]]);
          reload()
          //请求删除接口
          uni.showToast({
            title: "删除成功"
          })
        } 
      }],
  formEventConfig:{"0":[],"1":[],"2":[],"3":[],"4":[]}
}


export const formProps =  {"validateTrigger":"submit","labelPosition":"left","labelWidth":75,"labelAlign":"right","errShowType":"undertext","border":false,"schemas":[{"key":"b90bc298a1c249e2a1d7b8317faad205","field":"domainCode","label":"区域编号","component":"Input","componentProps":{"placeholder":"请输入区域编号","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":true,"rules":[{"required":true,"errorMessage":"区域编号项必填"}],"name":"区域编号","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"f7eb42ab27014a62a50681c50a0a155d","field":"domainPosition","label":"区域位置","component":"Input","componentProps":{"placeholder":"请输入区域位置","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"区域位置","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"5eb3dbf7ca5a4e96a98c560c24027663","field":"rfid","label":"RFID卡识别码","component":"Input","componentProps":{"placeholder":"请输入RFID卡识别码","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"RFID卡识别码","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"0eeefe58af5b4c4e8b35de431a33c838","field":"sortNum","label":"排序","component":"Input","componentProps":{"placeholder":"请输入排序","prefixIcon":"","suffixIcon":"","addonBefore":"","addonAfter":"","clearable":false,"maxlength":-1,"isShow":true},"required":false,"rules":[],"name":"排序","ifShow":true,"dynamicDisabled":false,"events":{}},{"key":"2a1d24882b424c1e908706f7142e2274","field":"remarks","label":"备注","component":"Input","componentProps":{"type":"textarea","placeholder":"请输入备注","maxlength":-1,"showCount":false,"autoHeight":false,"clearable":false,"isShow":true},"required":false,"rules":[],"name":"备注","ifShow":true,"dynamicDisabled":false,"events":{}}],"rules":[]};