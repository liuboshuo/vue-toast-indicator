<template>
    <div id="app1">
        <div class="test-page">
            <div>
                <div class="button toast" @click="toast">
                    toast bottom
                </div>
                <div class="button toast" @click="toast1">
                    toast middle
                </div>
            </div>

            <div class="button indicator" @click="indicator">
                indicator
            </div>
        </div>
    </div>
</template>

<script>
    import Toast from '../toast/index.js'
    import Indicator from '../indicator/index.js'
    export default {
        name: "App",
        methods:{
            toast(){
                Toast.show({message:"toast...",position:"bottom"})
            },
            toast1(){
                Toast.show({message:"toast...",position:"middle"})
            },
            indicator(){
                Indicator.show({message:"加载中..."})
                setTimeout(()=>{
                    Indicator.hidden();
                },600);
            }
        }
    }
</script>

<style scoped>
    .button {
        width: 200px;
        height:40px;
        line-height: 40px;
        background: rgb(57,133,239);
        color: #ffffff;
        text-align: center;
        margin: 0 auto;
        margin-top: 20px ;
    }
</style>
