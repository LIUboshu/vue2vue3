<template>
    <div>
        <h2>About组件</h2>
    </div>
</template>

<script>
    export default {
        name:'About',
        // beforeDestroy() {
        //     console.log('About组件即将销毁')
        // },
        // mounted() {
        //     console.log('About组件挂载完毕',this)
        // },

        // 通过路由规则，!!进入!!该组件时被调用
        beforeRouteEnter (to, from, next) {
            console.log('About--beforeRouteEnter',to, from);
            if(to.meta.isAuth){//这里需要判断是否需要权限
                if(localStorage.getItem('school') === 'qinghua'){
                    next();//放行
                }else{
                    alert('学校错误')
                }
            }else{
                next();//放行
            }
        },
        // 通过路由规则，!!!离开!!!该组件时被调用
        beforeRouteLeave (to, from, next) {
            console.log('About--beforeRouteLeave',to, from);
            next()
        }
    }
</script>

<style>
/* 
    5、组件内守卫
        // 进入守卫，通过路由规则，进入该组件时被调用
        beforeRouteEnter(to,from,next){}
        // 离开守卫，通过路由规则，离开该组件时被调用
        beforeRouteLeave(to,from,next){}

 */
</style>