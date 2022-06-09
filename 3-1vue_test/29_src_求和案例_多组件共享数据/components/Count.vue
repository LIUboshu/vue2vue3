<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{city}}，学校在{{school}}</h3>
        <h3 style="color:red">Person组件中的人数有:{{personList.length}}</h3>
        <ul style="color:red">
            <li v-for="item in personList" :key="item.id">{{item.name}}</li>
        </ul>
        <select v-model="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <button @click="incrementOdd(num)">当前求和为奇数再加</button>
        <button @click="incrementWait(num)">等一等再加</button>
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
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
        },
        computed:{
            ...mapState(['sum','city','school','personList']),
            ...mapGetters(['bigSum'])
        }
    }
</script>

<style>
</style>