import Vue from 'vue';
import App from './App.vue'
import {
    Toast,
    Indicator
} from './vue-toast-indicator'

Vue.use(Toast);
Vue.use(Indicator);

new Vue({
    el:"#app",
    components:{App},
    template:"<App />"
})
