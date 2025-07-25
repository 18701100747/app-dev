<template>
	<input-box :type="type" :inputBorder="inputBorder" :clearable="clearable" :focusShow="focusShow" :value="val"
		:disabled="disabled" :localMsg="localMsg" :errorMessage="errorMessage" :prefixIcon="prefixIcon"
		:suffixIcon="suffixIcon" :addonBefore="addonBefore" :addonAfter="addonAfter" @iconClick="onClickIcon" @eyes="onEyes"
		@clear="onClear">
		<template #content style="flex: 1;">
			<textarea v-if="type === 'textarea'" class="uni-easyinput__content-textarea"
				:class="{ 'input-padding': inputBorder }" :name="name" :value="val" :placeholder="placeholder"
				:placeholderStyle="placeholderStyle" :disabled="disabled" placeholder-class="uni-easyinput__placeholder-class"
				:maxlength="maxlength" :focus="focused" :autoHeight="autoHeight" @input="onInput" @blur="_Blur"
				@focus="_Focus" @confirm="onConfirm"></textarea>
			<view  v-else-if="type=='computation'" style="flex: 1;">
				<input v-if="focusShow" type="digit" class="uni-easyinput__content-input" :style="inputStyle"
				:name="name" :value="val" :placeholder="placeholder"
				:placeholderStyle="placeholderStyle" placeholder-class="uni-easyinput__placeholder-class" :disabled="disabled"
				:maxlength="maxlength" :focus="focused" :confirmType="confirmType" @focus="_Focus" @blur="_Blur"
				@input="onInput" @confirm="onConfirm" />
				<input v-else type="text" class="uni-easyinput__content-input" :style="inputStyle" :value="changeChinese()" :placeholder="placeholder"
				:placeholderStyle="placeholderStyle" placeholder-class="uni-easyinput__placeholder-class"
				:maxlength="maxlength"  @click="_Focus"  />
			</view>
			<input v-else :type="type === 'password' ? 'text' : type" class="uni-easyinput__content-input" :style="inputStyle"
				:name="name" :value="val" :password="!showPassword && type === 'password'" :placeholder="placeholder"
				:placeholderStyle="placeholderStyle" placeholder-class="uni-easyinput__placeholder-class" :disabled="disabled"
				:maxlength="maxlength" :focus="focused" :confirmType="confirmType" @focus="_Focus" @blur="_Blur"
				@input="onInput" @confirm="onConfirm" />

			<view style="text-align: right;" v-if="type === 'textarea'&&showCount">{{val?val.length:0}}<text
					v-if="maxlength>0">/{{maxlength}}</text></view>
		</template>
	</input-box>
</template>

<script>
	import {
		getCapitalizedMethod
	} from '@/utils/helper/utils.js';
	/**
	 * Easyinput 输入框
	 * @description 此组件可以实现表单的输入与校验，包括 "text" 和 "textarea" 类型。
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=3455
	 * @property {String}	value	输入内容
	 * @property {String }	type	输入框的类型（默认text） password/text/textarea/..
	 * 	@value text			文本输入键盘
	 * 	@value textarea	多行文本输入键盘
	 * 	@value password	密码输入键盘
	 * 	@value number		数字输入键盘，注意iOS上app-vue弹出的数字键盘并非9宫格方式
	 * 	@value idcard		身份证输入键盘，信、支付宝、百度、QQ小程序
	 * 	@value digit		带小数点的数字键盘	，App的nvue页面、微信、支付宝、百度、头条、QQ小程序支持
	 * @property {Boolean}	clearable	是否显示右侧清空内容的图标控件，点击可清空输入框内容（默认true）
	 * @property {Boolean}	autoHeight	是否自动增高输入区域，type为textarea时有效（默认true）
	 * @property {String }	placeholder	输入框的提示文字
	 * @property {String }	placeholderStyle	placeholder的样式(内联样式，字符串)，如"color: #ddd"
	 * @property {Boolean}	focus	是否自动获得焦点（默认false）
	 * @property {Boolean}	disabled	是否禁用（默认false）
	 * @property {Number }	maxlength	最大输入长度，设置为 -1 的时候不限制最大长度（默认140）
	 * @property {String }	confirmType	设置键盘右下角按钮的文字，仅在type="text"时生效（默认done）
	 * @property {Number }	clearSize	清除图标的大小，单位px（默认15）
	 * @property {String}	prefixIcon	输入框头部图标
	 * @property {String}	suffixIcon	输入框尾部图标
	 * @property {String}	primaryColor	设置主题色（默认#2979ff）
	 * @property {Boolean}	trim	是否自动去除两端的空格
	 * @value both	去除两端空格
	 * @value left	去除左侧空格
	 * @value right	去除右侧空格
	 * @value start	去除左侧空格
	 * @value end		去除右侧空格
	 * @value all		去除全部空格
	 * @value none	不去除空格
	 * @property {Boolean}	inputBorder	是否显示input输入框的边框（默认true）
	 * @property {Boolean}	passwordIcon	type=password时是否显示小眼睛图标
	 * @property {Object}	styles	自定义颜色
	 * @event {Function}	input	输入框内容发生变化时触发
	 * @event {Function}	focus	输入框获得焦点时触发
	 * @event {Function}	blur	输入框失去焦点时触发
	 * @event {Function}	confirm	点击完成按钮时触发
	 * @event {Function}	iconClick	点击图标时触发
	 * @slot prefixIcon 输入框头部插槽
	 * @slot suffixIcon 输入框尾部插槽
	 * @property  showCount 显示字数
	 * @example <uni-easyinput v-model="mobile"></uni-easyinput>
	 */

	function obj2strClass(obj) {
		let classess = "";
		for (let key in obj) {
			const val = obj[key];
			if (val) {
				classess += `${key} `;
			}
		}
		return classess;
	}

	function obj2strStyle(obj) {
		let style = "";
		for (let key in obj) {
			const val = obj[key];
			style += `${key}:${val};`;
		}
		return style;
	}
	export default {
		name: "uni-easyinput",
		emits: [
			"click",
			"iconClick",
			"update:modelValue",
			"input",
			"focus",
			"blur",
			"confirm",
			"clear",
			"eyes",
			"change",
		],
		model: {
			prop: "modelValue",
			event: "update:modelValue",
		},
		options: {
			virtualHost: true,
		},
		inject: {
			form: {
				from: "uniForm",
				default: null,
			},
			formItem: {
				from: "uniFormItem",
				default: null,
			},
		},
		props: {
			name: String,
			value: [Number, String],
			modelValue: [Number, String],
			type: {
				type: String,
				default: "text",
			},
			clearable: {
				type: Boolean,
				default: true,
			},
			autoHeight: {
				type: Boolean,
				default: false,
			},
			placeholder: {
				type: String,
				default: " ",
			},
			placeholderStyle: String,
			focus: {
				type: Boolean,
				default: false,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			maxlength: {
				type: [Number, String],
				default: -1,
			},
			showCount: {
				type: Boolean,
				default: false,
			},
			confirmType: {
				type: String,
				default: "done",
			},
			clearSize: {
				type: [Number, String],
				default: 24,
			},
			inputBorder: {
				type: Boolean,
				default: true,
			},
			prefixIcon: {
				type: String,
				default: "",
			},
			suffixIcon: {
				type: String,
				default: "",
			},
			addonBefore: {
				type: String,
				default: "",
			},
			addonAfter: {
				type: String,
				default: "",
			},
			trim: {
				type: [Boolean, String],
				default: true,
			},
			passwordIcon: {
				type: Boolean,
				default: true,
			},
			primaryColor: {
				type: String,
				default: "#2979ff",
			},
			styles: {
				type: Object,
				default () {
					return {
						color: "#333",
						disableColor: "#F7F6F6",
						borderColor: "#e5e5e5",
					};
				},
			},
			errorMessage: {
				type: [String, Boolean],
				default: "",
			},
		},
		data() {
			return {
				focused: false,
				val: "",
				border: false,
				isFirstBorder: false,
				showClearIcon: false,
				showPassword: false,
				focusShow: false,
				localMsg: "",
			};
		},
		computed: {
			// 输入框内是否有值
			isVal() {
				const val = this.val;
				// fixed by mehaotian 处理值为0的情况，字符串0不在处理范围
				if (val || val === 0) {
					return true;
				}
				return false;
			},

			msg() {
				// TODO 处理头条 formItem 中 errMsg 不更新的问题
				return this.localMsg || this.errorMessage;
			},

			// input右侧样式
			inputStyle() {
				const paddingRight =
					this.type === "password" || this.clearable || this.prefixIcon ?
					"" :
					"10px";
				return obj2strStyle({
					"padding-right": paddingRight,
					"padding-left": this.prefixIcon ? "" : "10px",
				});
			},
		},
		watch: {
			value(newVal) {
				this.val = newVal;
			},
			modelValue(newVal) {
				this.val = newVal;
			},
			focus(newVal) {
				this.$nextTick(() => {
					this.focused = this.focus;
					this.focusShow = this.focus;
				});
			},
		},
		created() {
			this.init();
			// TODO 处理头条vue3 computed 不监听 inject 更改的问题（formItem.errMsg）
			if (this.form && this.formItem) {
				this.$watch("formItem.errMsg", (newVal) => {
					this.localMsg = newVal;
				});
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.focused = this.focus;
				this.focusShow = this.focus;
			});
		},
		methods: {
			/**
			 * 初始化变量值
			 */
			init() {
				if (this.value || this.value === 0) {
					this.val = this.value;
				} else if (this.modelValue || this.modelValue === 0) {
					this.val = this.modelValue;
				} else {
					this.val = null;
				}
			},
			changeChinese(){
				return getCapitalizedMethod(this.reWriteData(this.val))
			},
			reWriteData(num){
				return ('' + num).replace(/[^\d^\.]+/g, '') //去除除数字和小数点外的字符
			},
			/**
			 * 点击图标时触发
			 * @param {Object} type
			 */
			onClickIcon(type) {
				this.$emit("iconClick", type);
			},

			/**
			 * 显示隐藏内容，密码框时生效
			 */
			onEyes(e) {
				this.showPassword = e;
				this.$emit("eyes", e);
			},

			/**
			 * 输入时触发
			 * @param {Object} event
			 */
			onInput(event) {
				let value = event.detail.value;
				// 判断是否去除空格
				if (this.trim) {
					if (typeof this.trim === "boolean" && this.trim) {
						value = this.trimStr(value);
					}
					if (typeof this.trim === "string") {
						value = this.trimStr(value, this.trim);
					}
				}
				if (this.errMsg) this.errMsg = "";
				this.val = value;
				// TODO 兼容 vue2
				this.$emit("input", value);
				// TODO　兼容　vue3
				this.$emit("update:modelValue", value);
				this.$emit("change", value);
			},

			/**
			 * 外部调用方法
			 * 获取焦点时触发
			 * @param {Object} event
			 */
			_Focus(event) {
				this.focusShow = true;
				this.$emit("focus", event);
				this.$emit("click", event);
			},

			/**
			 * 外部调用方法
			 * 失去焦点时触发
			 * @param {Object} event
			 */
			_Blur(event) {
				let value = event.detail.value;
				this.focusShow = false;
				this.$emit("blur", event);
				// 根据类型返回值，在event中获取的值理论上讲都是string
				// 失去焦点时参与表单校验
				if (this.form && this.formItem) {
					const {
						validateTrigger
					} = this.form;
					if (validateTrigger === "blur") {
						this.formItem.onFieldChange();
					}
				}
			},

			/**
			 * 按下键盘的发送键
			 * @param {Object} e
			 */
			onConfirm(e) {
				this.$emit("confirm", this.val);
			},

			/**
			 * 清理内容
			 * @param {Object} event
			 */
			onClear(event) {
				this.val = "";
				// TODO 兼容 vue2
				this.$emit("input", "");
				// TODO 兼容 vue2
				// TODO　兼容　vue3
				this.$emit("update:modelValue", "");
				// 点击叉号触发
				this.$emit("clear");

				this.$emit("change", '');
			},

			/**
			 * 去除空格
			 */
			trimStr(str, pos = "both") {
				if (pos === "both") {
					return str.trim();
				} else if (pos === "left") {
					return str.trimLeft();
				} else if (pos === "right") {
					return str.trimRight();
				} else if (pos === "start") {
					return str.trimStart();
				} else if (pos === "end") {
					return str.trimEnd();
				} else if (pos === "all") {
					return str.replace(/\s+/g, "");
				} else if (pos === "none") {
					return str;
				}
				return str;
			},
		},
	};
</script>

<style lang="scss">
	$uni-error: #e43d33;
	$uni-border-1: #dcdfe6 !default;

	.uni-easyinput {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		flex: 1;
		position: relative;
		text-align: left;
		color: #333;
		font-size: 14px;
	}

	.uni-easyinput__content {
		flex: 1;
		/* #ifndef APP-NVUE */
		width: 100%;
		display: flex;
		box-sizing: border-box;
		// min-height: 36px;
		/* #endif */
		flex-direction: row;
		align-items: center;
		// 处理border动画刚开始显示黑色的问题
		border-color: #fff;
		transition-property: border-color;
		transition-duration: 0.3s;
	}

	.uni-easyinput__content-input {
		/* #ifndef APP-NVUE */
		width: auto;
		/* #endif */
		position: relative;
		overflow: hidden;
		flex: 1;
		line-height: 1;
		font-size: 14px;
		height: 35px;
		// min-height: 36px;
	}

	.uni-easyinput__placeholder-class {
		color: #999;
		font-size: 14px;
		// font-weight: 200;
	}

	.uni-easyinput__content-textarea {
		position: relative;
		overflow: hidden;
		flex: 1;
		line-height: 1.5;
		font-size: 14px;
		margin: 6px 14px 8px 14px;
		// margin-left: 0;
		height: 80px;
		min-height: 23px;
		/* #ifndef APP-NVUE */
		min-height: 23px;
		width: auto;
		/* #endif */
	}

	.input-padding {
		padding-left: 10px;
	}

	.is-input-error-border {
		border-color: $uni-error;

		.uni-easyinput__placeholder-class {
			color: mix(#fff, $uni-error, 50%);
		}
	}

	.is-disabled {
		background-color: #f7f6f6;
		color: #d5d5d5;

		.uni-easyinput__placeholder-class {
			color: #d5d5d5;
			font-size: 14px;
		}
	}
</style>
