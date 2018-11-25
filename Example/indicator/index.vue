<template>
    <div class="indicator-container middle">
        <transition name="fade">
            <div class="indicator" v-show="visible">
                <div class="spinner">
                    <div class="loading"></div>
                </div>
                <i>{{message}}</i>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'toast',
        data () {
            return {
                visible: false,
                message: '',
                position: ''
            }
        }
    }
</script>

<style scoped>
    .indicator-container {
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        padding: 30px 20px;
    }
    .indicator {
        word-wrap: break-word;
        z-index: 9999;
        font-size:13px;
        line-height:19px;
        color: #fff;
        overflow: hidden;
        pointer-events:none;
        text-align:center;
        opacity:1;
        min-width: 80px;
        min-height: 80px;
        max-width: 60%;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
        text-align: center;
    }
    .spinner {
        width:40px;
        height: 40px;
        margin: 0 auto;
        padding: 10px 0 0 0;
    }
    .loading{
        width: 40px;
        height: 40px;
        border: 2px solid;
        border-color: rgba(255,255,255,0.6) rgba(255,255,255,0.6) transparent;
        border-radius: 50%;
        box-sizing: border-box;
        /*动画时间1s，线性变化，无限循环*/
        animation: loading 1s linear infinite;
    }
    @keyframes loading{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .middle {
        align-items: center;
    }
    i {
        font-style: normal;
        display: block;
        margin: 8px;
        max-height:100px;
        box-sizing:border-box;
    }
    .fade-enter-active, .fade-leave-active {
        transition: margin-top 0.2s , opacity 0.2s;
    }

    .fade-enter, .fade-leave-active {
        margin-top:40px;
        opacity:0;
    }
</style>
