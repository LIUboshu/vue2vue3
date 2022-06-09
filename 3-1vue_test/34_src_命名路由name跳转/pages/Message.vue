<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带query参数，to字符串写法   注意：字符串拼接，模板字符串-->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->

                <!-- 跳转路由并携带query参数，to对象写法 -->
                <!-- <router-link 
                    :to="{
                        path:'/home/message/detail',
                        query:{
                            id:m.id,
                            title:m.title
                        }
                    }"
                >
                    {{m.title}}
                </router-link> -->

                <!-- 跳转路由并携带query参数， 命名路由   将path直接写name-->
                <router-link 
                    :to="{
                        name:'xiangqing',
                        query:{
                            id:m.id,
                            title:m.title
                        }
                    }"
                >
                    {{m.title}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'}
                ]
            }
        },
    }
</script>

<style>

</style>