import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        sm: 575,
        md: 768,
        lg: 992,
        xl: Infinity,
    }
})

Vue.use(BootstrapVue, {});
Vue.use(IconsPlugin, {});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
