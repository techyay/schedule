import Vue from 'vue'
import App from './App.vue'
import 'styles/global.styl'

Vue.config.productionTip = false

new Vue({
	render: h => h(App, {
		props: {
			eventUrl: 'http://localhost:8000/democon/',
			locale: 'en-ie'
		}
	})
}).$mount('#app')
