<template>
    <div class="toast-container" :class="position">
        <transition name="fade">
            <div class="toast" v-show="visible">
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
    .toast-container {
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        padding: 30px 20px;
    }
    .toast {
        word-wrap: break-word;
        z-index: 9999;
        font-size:13px;
        line-height:19px;
        color: #fff;
        overflow: hidden;
        pointer-events:none;
        text-align:center;
        opacity:1;
    }
    .middle {
        align-items: center;
    }
    .bottom {
        align-items: flex-end;
    }
    i {
        font-style: normal;
        padding: 8px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 3px;
        display:inline-block;
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
