import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import VueMarkdown from 'vue-markdown'


import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueMarkdown);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')