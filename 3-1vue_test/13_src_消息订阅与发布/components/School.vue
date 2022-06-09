<template>
    <!-- 组件结构 -->
    <div class="school">
        <h2>学校名字：{{name}}</h2>
        <h2>学生名字：{{studentName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
    </div>
</template>

<script>
    /* 
        消息订阅与发布
            1.一种组件间通信的方式，适用于任意组件间通信
            2.使用步骤
                1.安装pubsub:  npm i pubsub-js
                2.引入：import pubsub from 'pubsub-js'
                3.接收数据
                    mounted(){
                        //订阅消息
                        this.唯一id = pubsub.subscrbe('消息名',(消息名,数据)=>{

                        })
                    }
                4.提供数据
                    pubsub.publish('消息名',数据)
                5.最好在beforeDestroy钩子中，用pubsub.unsubscrbe(唯一id)  去取消订阅
    
    */
    // 引入pubsub
    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        data() {
            return {
                name:'清华qinghua',
                schoolAddress:"北京",
                studentName:''
            }
        },
        mounted() {
            console.log('school',this);
            // this.$bus.$on('hello',(data)=>{
            //     console.log('School组件收到了数据',data)
            //     this.studentName = data
            // })

            // 订阅消息
            this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
                console.log('这里使用箭头函数this是vc',this);
                console.log(msgName,data);// msgName是消息名字，data才是数据
                this.studentName = data;
            })
        },
        beforeDestroy() {
            // // 事件总线事件必须解绑    vc组件可以销毁   $bus在原型上不会自动销毁，必须手动解绑
            // this.$bus.$off('hello');

            // 取消订阅  这里取消的pubId  id是不同的值
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>

<style scoped>
    /* 组件的样式 */
    .school{
        background-color: orange;
    }
</style>