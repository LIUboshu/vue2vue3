<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{city}}，学校在{{school}}</h3>
        <select v-model="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <!-- 对象写法 -->
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <!-- 数组写法 -->
        <!-- <button @click="JIA(num)">+</button>
        <button @click="JIAN(num)">-</button> -->

        <!-- 对象写法 -->
        <button @click="incrementOdd(num)">当前求和为奇数再加</button>
        <button @click="incrementWait(num)">等一等再加</button>
        <!-- 数组写法 -->
        <!-- <button @click="jiaOdd(num)">当前求和为奇数再加</button>
        <button @click="jiaWait(num)">等一等再加</button> -->
    </div>
</template>

<script>
    import { mapGetters, mapState,mapMutations,mapActions } from "vuex";
    export default {
        name:'Count',
        data() {
            return {
                num:1 //用户选择的数
            }
        },
        methods: {
            /* increment(){
                //  this.$store.dispatch('jia',this.num);
                this.$store.commit('JIA',this.num)
            },
            decrement(){
                // this.$store.dispatch('jian',this.num);
                this.$store.commit('JIAN',this.num);
            }, */

            // // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
            // // 方法函数  必须传参  increment(num)
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),
            // // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
            // ...mapMutations(['JIA','JIAN']),


            /* incrementOdd(){
                this.$store.dispatch('jiaOdd',this.num);
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.num);
            } */

            // // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
            // // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
            // ...mapActions(['jiaOdd','jiaWait'])
        },
        computed:{
            // 借助mapState生成计算属性，从state中读取数据。（数组写法）
            // 如果使用数组写法：生成的计算属性名和读取state中的名必须一致
            ...mapState(['sum','city','school']),
            // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            ...mapGetters(['bigSum'])

            // // 借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({he:'sum',chengshi:'city',xuexiao:'school'}),
            // // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
            // ...mapGetters({bigSum:'bigSum'})
        }
    }
</script>

<style>
    /* 
        四个map方法的使用
            1.mapState方法：用于帮助我们映射state中的数据为计算属性
                computed:{
                    // 借助mapState生成计算属性，sum、city、school。（对象写法）
                    ...mapState({he:'sum',chengshi:'city',xuexiao:'school'})

                    // 借助mapState生成计算属性，sum、city、school。（数组写法）
                    ...mapState(['sum','city','school']),
                }
            2.mapGetters方法：用于帮助我们映射getters中数据为计算属性
                computed:{
                    // 借助mapGetters生成计算属性，bigSum。（对象写法）
                    ...mapGetters({bigSum:'bigSum'})

                    // 借助mapGetters生成计算属性，bigSum。（数组写法）
                    ...mapGetters(['bigSum'])
                }
            3.mapActions方法:用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数
                methods:{
                    // 靠mapActions生成，incrementOdd、incrementWait(对象写法)
                    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
                    // 靠mapActions生成对应的方法，jiaOdd、jiaWait(数组写法)
                    ...mapActions(['jiaOdd','jiaWait'])
                }
            4.mapMutations方法：用于帮助我们生成与mutations对话的方法,即：包含$store.commit(xxx)的函数
                methods:{
                    // 靠mapMutations生成，increment、decrement(对象写法)
                    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
                    // 靠mapMutations生成，JIA、JIAN(数组写法)
                    ...mapMutations(['JIA','JIAN']),
                }
        注：mapActions与mapMutations使用时，若需要传递参数需要，在模板中绑定事件时传递好参数，否则参数是事件对象
    */
</style>