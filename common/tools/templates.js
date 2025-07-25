const subFormTmpl = `
<template>
	<view>
		<uni-section class="mb-10" :class="false ? '' : 'none-title'" :title="schema.name" type="line" :borderBottom="true">
			<template #right v-if="schema.useSelectButton && schema.component == 'SubForm'">
				<button class="select-data-btn" type="primary" @click="open" v-if="!disabled">
					{{ schema.buttonName }}
				</button>
			</template>

			<template v-for="(data, index) in dataSource">
				<template v-for="option in schema.columns">
					<template v-if="option.component === componentType.collapse">
						<uni-section :title="option.name" type="line" :borderBottom="true">
							<uni-card v-if="cardShow" :is-shadow="false" is-full :border="false">
								<view v-for="(child, index) in option.layout" :key="option.key + index">
									<template v-for="(item, idx) in child.children">
										<SimpleFormItem
											:tableName="schema.field"
											:schema="item"
            								:refreshFieldObj="refreshFieldObj"
											v-show="getIsShow(item, formModel[schema.field][index][schema.field])"
											v-if="getIfShow(item, formModel[schema.field][index][schema.field])"
											v-model="formModel[schema.field][index]"
										/>
									</template>
								</view>
							</uni-card>
							<template v-slot:right>
								<view
									class="card-title-box iconfont"
									:class="cardShow ? 'icon-shouqi' : 'icon-zhankai'"
									@click="
										() => {
											cardShow = !cardShow;
										}
									"
								></view>
							</template>
						</uni-section>
					</template>
					<template v-else-if="option.component === componentType.segmented">
						<uni-segmented-control
							style-type="text"
							:current="activeRef"
							:values="option.layout.map((x) => x.name)"
							@clickItem="(e) => (activeRef = e.currentIndex)"
							v-bind="getComponentsProps"
						/>
						<view v-for="(child, index) in option.layout" :key="option.key + index">
							<view v-show="activeRef === index">
								<template v-for="(item, idx) in child.children">
									<SimpleFormItem
										:tableName="schema.field"
										:schema="item"
            							:refreshFieldObj="refreshFieldObj"
										v-show="getIsShow(item, formModel[schema.field][index][item.field])"
										v-if="getIfShow(item, formModel[schema.field][index][item.field])"
										v-model="formModel[schema.field][index]"
									/>
								</template>
							</view>
						</view>
					</template>
					<!-- 加个template -->
					<template v-else>
						<SimpleFormItem
							:schema="option"
							:tableName="schema.field"
							:refreshFieldObj="refreshFieldObj"
							:index="index"
							v-show="getIsShow(option, formModel[schema.field][index][option.field])"
							v-if="getIfShow(option, formModel[schema.field][index][option.field])"
							v-model="dataSource[index]"
						/>
					</template>
				</template>
				<view class="delBtn" v-if="schema.component == 'SubForm' && !disabled">
					<button class="button" @click="del(index)">删除</button>
				</view>
			</template>
		</uni-section>
		<button class="addBtn" type="primary" @click="add" v-if="schema.component == 'SubForm' && !disabled">
			<text class="iconfont icon-xinzeng"></text>
			新增
		</button>
		<uni-sub-table ref="tableRef" :associateOptions="schema.associateOptions" :apiConfig="schema.apiConfig" :itemId="schema.itemId" @submit="handleSubmit" />
	</view>
</template>

<script>
    import SubFormV2Setup from '@/uni_modules/uni-sub-form/components/uni-sub-form/uni-sub-form-setup.vue';
    import SimpleFormItem from '@/components/simple-form/SimpleFormItem.vue';

    export default {
        extends: [SubFormV2Setup],
        components: {SimpleFormItem},
		props: {
			value: {
				type: Array,
				default: () => {
					return [];
				}
			},
			modelValue: {
				type: Array,
				default: () => {
					return [];
				}
			},
			// 子表单配置项
			schema: {
				type: Object,
				default: () => {
					return {};
				}
			},
			refreshFieldObj: {
				type: Object,
				default: () => {
					return {};
				}
			}
		},
        setup(props, ctx) {
            const ret = SubFormV2Setup.setup(props, ctx);
            return {
                ...ret
            };
        }
    };
</script>
<style>
.addBtn {
	height: 36px;
	line-height: 36px;
	background: #ffffff;
	border-radius: 5px 5px 5px 5px;
	opacity: 1;
	border: 1px solid #5e95ff;
	color: #5e95ff;
	font-size: 14px;
	margin-bottom: 15px;
  margin-left: 20rpx;
  margin-right: 20rpx;
}

.delBtn {
	display: flex;
	justify-content: flex-end;
	border-bottom: 2px solid #f2f2f2;
	padding-bottom: 12px;
	margin-bottom: 10px;
	padding-top: 8px;
	padding-right: 20px;
}

.delBtn .button {
	width: 50px;
	height: 24px;
	line-height: 24px;
	background: #fce8e8;
	border-radius: 20px;
	font-size: 12px;
	color: #ef6969;
	padding: 0;
	margin: 0;
}
.select-data-btn {
	height: 30px;
	line-height: 30px;
	font-size: 12px;
}
</style>
<style lang="scss" scoped>
	.addBtn {
		margin-top: 8px;
	}
	::v-deep .none-title {
		.uni-section-header {
			display: none;
		}
	}
</style>
`;

module.exports = {
    subFormTmpl
};
