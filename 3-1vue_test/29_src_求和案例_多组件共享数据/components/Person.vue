<template>
    <div>
        <h2>人员列表</h2>
        <h3 style="color:red">Count组件的求和为：{{sum}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="item in personList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid';
    // import { mapMutations, mapState } from 'vuex';
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }

            // ...mapState(['personList','sum'])
        },
        methods: {
            add(){
                const personObj = {id:nanoid(),name:this.name};
                this.$store.commit('PERSONODD', personObj);
                this.name = ''
            }

            // ...mapMutations({add:'PERSONODD'})
        },
    }
</script>

<style>

</style>