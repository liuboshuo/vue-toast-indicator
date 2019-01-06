'use strict';
// 不支持后端渲染，只支持前端页面
import Vue from 'vue'
import indicator from './index.vue'

// 默认参数
const defaultProps = {
    message:"loading..."
}

// 构造组件
const IndicatorConstructor = Vue.extend(indicator);

// Indicator消失
IndicatorConstructor.prototype.close = function () {
    this.visible = false
    const node = this.$el;
    try {
        document.body.removeChild(node);
    }catch (error){
        console.log(error);
    }
}

let instance = null;
export default {

    install(Vue,option){
        Vue.prototype.$Indicator = function (options = {}) {

            instance = new IndicatorConstructor().$mount()

            instance.message = options.message || defaultProps.message;
            document.body.appendChild(instance.$el);
            instance.visible = true;

            return instance;
        },
         Vue.prototype.$Indicator.hidden = function () {
            instance.close();
        }
    },

    
}
