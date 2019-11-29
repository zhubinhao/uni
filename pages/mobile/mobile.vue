<template>
	<view class="content">
		<block v-for="(item,index) in list" :key="index">
			<view class="fli"  @tap="tolist(item)">
				<view class="fliImg">
					<image src="../../static/file.png" alt="">
				</view>
				<view>{{item.dept_name}}</view>
			</view>
		</block>
	</view>		

</template>

<script>
	import { mapState} from 'vuex';
	export default {
		data() {
			return {
				list: []
			}
		},
		computed: {
			...mapState(["userInfo"])
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				this.$api.ajax({
					url:"Getcompanydept",
					data:{}
				}).then(res=>{
					this.list = this.$api.getList(res.data);
				})
			},
			tolist(e){
				console.log(e)
				uni.navigateTo({
					url:`mobileList?obj=${JSON.stringify(e)}`,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.fli{
		margin: 0 30rpx;
		border-bottom: 1px solid $uni-border-color;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 20rpx 0;
		font-size: 16px;
		.fliImg{
			width: 60rpx;
			height: 60rpx;
			background: $uni-border-color;
			border-radius: 6rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 30rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
		
	}
	
</style>
