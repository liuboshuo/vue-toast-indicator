'use strict';
// 不支持后端渲染，只支持前端页面
import Vue from 'vue'
import toast from './index.vue'

// 默认参数
const defaultProps = {
    position:"middle",
    duration:1000,
    message:"toast"
}

// 构造组件
const ToastConstructor = Vue.extend(toast);

// taost消失
ToastConstructor.prototype.close = function () {
    this.visible = false
    const node = this.$el;
    try {
        document.body.removeChild(node);
    }catch (error){
        console.log(error);
    }
}


export default {

    show:function(options = {}) {

        let parentNode = document.createElement("div");
        let instance = new ToastConstructor().$mount(parentNode)

        let duration = options.duration || defaultProps.duration;
        instance.message = options.message || defaultProps.message;
        instance.position = options.position || defaultProps.position;


        document.body.appendChild(instance.$el);
        instance.visible = true;
        Vue.nextTick(() => {
            instance.timer = setTimeout(() => {
                instance.close()
            }, duration)
        })

        return instance;
    }

}
