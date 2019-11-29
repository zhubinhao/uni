import Vue from 'vue'
import App from './App'
import store from './store'
import {Api} from './utils/api'
import './fonts/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.$api = Api
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
