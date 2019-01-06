# vue的toast和loading组件

## 前言

我们在项目中都会用到toast,loading加载器。特别是在进行移动端的项目开发的时候，
进行异步操作的时候去等待，在必要的时候用toast给用户提示。在app开发中，iOS有成熟的MBProgressHUD插件等等。
在web前端也有很多第三方库也提供了这些组件，比如mint-ui,element-ui等都包含这些组件，
但是存在一个缺点，当我们只需要使用toast，loading组件，并用不到其他组件的时候，我们还是需要安装整个组件库，
会导致我们依赖的第三方库增大。所以我就做了一个轻量级的toast,loading插件vue-toast-indicator。


## 组件的使用

导入包，全局使用
```
import {
    Toast,
    Indicator
} from './vue-toast-indicator'

Vue.use(Toast);
Vue.use(Indicator);
```

#### toast的使用
```
 this.$Toast({message:"toast...",position:"bottom"})

```


#### indicator使用
```
加载
 this.$Indicator({message:"加载中..."})
消失 
 setTimeout(()=>{
    this.$Indicator.hidden();
 },600);
```


## 组件的原理

### 封装一个vue组件，创建vue组件，然后动态插入到body节点

举个栗子：

```
<template>
    <div>
        hello 小猿
    </div>
</template>

<script>
    export default {
        name: 'toast',
    }
</script>
<style>

</style>
```

上面创建了一个最简单的vue组件

假设我们导入该组件名字是HelloWorld

```
// 构造组件
const HelloWorldConstructor = Vue.extend(HelloWorld);
export default {

    install(Vue,opt){
        Vue.prototype.$component = function(options = {}) {

            let parentNode = document.createElement("div");
            let instance = new ToastConstructor().$mount(parentNode);

            document.body.appendChild(instance.$el); // 动态插入

            return instance;
    }
    }
}
```
就是这么简单，上面用到了vue的插件，自定义vue插件需要导出一个install方法


使用就更简单了
```
import xxx from 'my-lib'

Vue.use(xxx);
```
在项目中的任意vue组件可以通过`this.$component();`使用了






