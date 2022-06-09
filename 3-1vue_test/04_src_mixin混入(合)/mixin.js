export const hunhe =  {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('mixin里面可以写vc的所有配置项')
    },
}
export const hunhe2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}

/* 
    mixin（混入）
        功能：可以把多个组件共用的配置提取成一个混入对象
        使用方式：
            第一步：定义混入。
                {
                    data(){....},
                    methods:{}
                }
            第二步：使用混入
                1.全局混入：Vue.mixin(xxx)
                2.局部混入：minxins:[xxx]

*/