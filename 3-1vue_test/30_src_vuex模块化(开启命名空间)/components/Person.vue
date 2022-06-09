<template>
    <div>
        <h2>人员列表---Person组件纯自己写方法</h2>
        <h3 style="color:red">Count组件的求和为：{{sum}}</h3>
        <h3>列表中第一个人的名字：{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一句话到下面</button>
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
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }

            // ...mapState(['personList','sum'])
        },
        methods: {
            add(){
                const personObj = {id:nanoid(),name:this.name};
                // this.$store.commit('分类名/mutations名')
                this.$store.commit('personAbout/PERSONODD', personObj);
                this.name = ''
            },
            addWang(){
                // this.$store.dispatch('分类名/actions名')
                const personObj = {id:nanoid(),name:this.name};
                this.$store.dispatch('personAbout/addPersonWang', personObj);
                this.name = ''
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
            }

            // ...mapMutations({add:'PERSONODD'})
        },
        mounted() {
            console.log(this)
        },
    }
</script>

<style>

</style>