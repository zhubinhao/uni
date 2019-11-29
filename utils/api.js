import store from '../store/index.js'
const Api = {
	//toast
	toast(title, icon = "none"){
		uni.showToast({
			title,
			icon
		})
	},
	// 处理刘的arr
	getList(arr){
		let newArr = []
		arr.map(res => {
			newArr.push(JSON.parse(res))
		})
		return newArr
	},
	// 
	setTitle(title){
		uni.setNavigationBarTitle({title})
	},
	/**
	 *	URL:路径 ,
	 *	type:post,get...,
	 *	data:{},
	 *	showMsg:true,false
	 * */
	ajax({url,showMsg = true,type = "GET",data = {}}){
		let path = `${store.state.path}/Rest/TSvrMethods/${url}`;
		data.accountname = "hc"
		if (type === 'GET') {
			path += `/${JSON.stringify(data)}`
			data = {}
		}
		console.log(path)
		return new Promise((resolve, reject) => uni.request({
			url: path,
			method: type,
			data: data,
			header: {
				// 'content-type': 'application/json',
				'content-type': 'application/x-www-form-urlencoded',
			},
			success: res => {
				let result = JSON.parse(res.data.result[0])
				if (result.code == 1) {
					resolve(result)
				} else {
					showMsg && Api.toast(result.msg)
					reject(result)
				}
			},
			fail: res => {
				showMsg && Api.toast('网络错误')
				reject()
			}
		}))
	}
}

export {
	Api
}
