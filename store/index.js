import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		path:uni.getStorageSync('path') || 'http://47.112.137.218:9986',
		failPath:uni.getStorageSync('failPath') || 'http://47.112.137.218:8088',
		hasLogin: uni.getStorageSync("login")?true:false,
		userInfo:JSON.parse(uni.getStorageSync("login")||"{}")
	},
	mutations: {
	  outLogin(state){
		  state.hasLogin=false;
		  state.userInfo={};
		  uni.removeStorageSync("login")
		  uni.reLaunch({
		  	url:"/pages/login/login"
		  })
	  },
	  login(state,userInfo){
		  state.hasLogin=true;
		  state.userInfo=userInfo;
		  uni.setStorageSync("login",JSON.stringify(userInfo))
		  uni.switchTab({
		  	url:"/pages/index/index"
		  })
	  }
	},
    getters:{
      
    },
	actions: {
		// lazy loading openid
	}
})

export default store
