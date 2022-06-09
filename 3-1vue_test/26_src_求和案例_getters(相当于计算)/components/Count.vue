<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3>
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
    }
</script>

<style>

</style>