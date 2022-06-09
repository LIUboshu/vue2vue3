<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <!-- keep-alive保持活跃（不被销毁）    出现在include里的去缓存，这里写的是组件名字 -->
            <!-- 不写include就是全部都缓存，  缓存多个写法---》》   :include=["News","Message"] -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home'
    }
</script>

<style>
</style>