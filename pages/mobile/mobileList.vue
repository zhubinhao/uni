<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj:{}
			};
		},
		onLoad(option) {
			this.obj = JSON.parse(option.obj)
			this.$api.setTitle(this.obj.dept_name)
			this.getData()
		},
		methods:{
			getData(){
				this.$api.ajax({
					url:"Getcompanydepthuman",
					data:{
						"dept_sid":this.obj.dept_sid
					}
				}).then(res=>{
					this.list = this.$api.getList(res.data)
					console.log(this.list)
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
