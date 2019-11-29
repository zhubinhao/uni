<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(option) {
			let data = JSON.parse(option.obj)
			uni.setNavigationBarTitle({
				title:data.dept_name
			})
			console.log(data)
			
		}
	}
</script>

<style lang="scss">

</style>
