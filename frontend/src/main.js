import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



/* eslint-disable no-new*/
createApp(App)
	.use(router)
	.mount('#app')
	
