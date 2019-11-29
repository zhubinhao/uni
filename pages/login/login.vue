<template>
	<view class="login">
		<view class="logo"></view>
		<view class="input-row ">
			<text class="title">账号：</text>
			<m-input class="m-input" type="text" clearable  v-model="account" placeholder="请输入账号"></m-input>
		</view>
		<view class="input-row">
			<text class="title">密码：</text>
			<m-input class="m-input" type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
		</view>
		<button @tap="submits">登录</button>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue';
	import {mapMutations} from 'vuex';
	export default {
		components:{
			"m-input":mInput
		},
		data() {
			return {
				account:"",
				password:""
			};
		},
		onLoad() {
			
		},
		methods:{
			submits(){
				if(!this.account){
					this.$api.toast("账号不能为空")
					return
				}
				this.$api.ajax({
					url:'NewSystem_Login',
					data:{
						"uc": this.account,
						"pwd": this.password
					}
				}).then(res=>{
					this.login(res)
				})
			},
			...mapMutations(['login'])
		}
	}
</script>

<style scoped lang="scss">
.login{
	.logo{
		width: 120rpx;
		height: 120rpx;
		margin: 60rpx auto 100rpx auto;
	}
	.input-row{
		margin: 0rpx 30rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 20rpx 0;
		font-size: 16px;
		padding-right: 5px;
		border-bottom: 1px solid $uni-input-border-color;
		.m-input{
			flex: 1;
		}
	}
	button{
		margin: 100rpx 30rpx 0 30rpx;
		background-color: $uni-btn-bgcolor;
		color: white;
		&:active{
			background-color: $uni-btn-active;
		}
	}
}
</style>
