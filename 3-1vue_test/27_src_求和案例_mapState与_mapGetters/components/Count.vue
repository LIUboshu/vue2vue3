<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{city}}，学校在{{school}}</h3>

        <!-- <h1>当前求和为：{{he}}</h1>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{chengshi}}，学校在{{xuexiao}}</h3> -->

        <select v-model="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    import { mapGetters, mapState } from "vuex";
    export default {
        name:'Count',
        data() {
            return {
                num:1 //用户选择的数
            }
        },
        methods: {
            increment(){
                //  this.$store.dispatch('jia',this.num);
                this.$store.commit('JIA',this.num)
            },
            decrement(){
                // this.$store.dispatch('jian',this.num);
                this.$store.commit('JIAN',this.num);
            },
            incrementOdd(){
                this.$store.dispatch('jiaOdd',this.num);
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.num);
            }
        },
        computed:{
            // 程序员自己亲自写计算属性
            /* sum(){
                return this.$store.state.sum;
            },
            city(){
                return this.$store.state.city;
            },
            school(){
                return this.$store.state.school;
            },
            bigSum(){
                return this.$store.getters.bigSum;
            } */

            // 借助mapState生成计算属性，从state中读取数据。（数组写法）
            // 如果使用数组写法：生成的计算属性名和读取state中的名必须一致
            ...mapState(['sum','city','school']),
            // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            ...mapGetters(['bigSum'])

            // 程序员自己亲自写计算属性
            /* he(){
                return this.$store.state.sum;
            },
            chengshi(){
                return this.$store.state.city;
            },
            xuexiao(){
                return this.$store.state.school;
            },
            bigSum(){
                return this.$store.getters.bigSum;
            } */

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
    */
</style>