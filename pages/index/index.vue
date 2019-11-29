<template>
	<view class="index">
		<view class="box" v-for="(item,index) in list" :key="index">
			<text class="title">{{item.name}} </text>
			<view class="li">
				<view v-for="(v,index) in item.list" :key="index">
					<text class="icon" :class="v.icon"></text>
					<view class="content" >
						<text>{{v.name}}</text>
						<text>({{countObj[v.pid]||0}})</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import Obj from '../../utils/object.js';
	export default {
		data() {
			return {
				countObj: {},
				list: Obj.list
			}
		},
		computed: {
			...mapState(["hasLogin", "userInfo"])
		},
		onLoad() {
			if (!this.hasLogin) {
				this.outLogin()
			}
		},
		onShow() {
			this.getCount()
		},
		methods: {
			getCount() {
				this.$api.ajax({
					url: "GetWfDataCount",
					data: {
						"human_sid": this.userInfo.human_sid
					}
				}).then(res => {
					let obj = {}
					res.data.map(res => {
						let r = JSON.parse(res)
						obj[r.stype] = r.icount
					})
					this.countObj = obj
				})
			},
			...mapMutations(['outLogin'])
		}
	}
</script>

<style scoped lang="scss">
	.box{
		.title{
			display: block;
			font-size: 16px;
			padding-left: 30rpx;
			height: 60rpx;
			line-height: 60rpx;
		}
		.li{
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-wrap: wrap;
			font-size: 14px;
			border-top: 1px solid $uni-border-color;
			&>view:nth-child(2n+1){
				border-right: 1px solid $uni-border-color;
			}
			&>view{
				width: 50%;
				display:flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 20rpx 30rpx;
				border-bottom: 1px solid $uni-border-color;
				.icon{
					width: 90rpx;
					height: 90rpx;
				}
				.content{
					display:flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					flex: 1;
				}
			}
		}
	}
</style>
