<template>
    <div class="sun">
        <h3>我是后代组件-----{{x.name}}---{{x.price}}</h3>
    </div>
</template>

<script>
import { inject } from 'vue'
    export default {
        name:'Sun',
        setup() {
            let x = inject('car');
            console.log(x);
            return {
                x
            }
        }
    }
</script>

<style scoped>
.sun{
    background-color: seagreen;
    padding: 10px;
}

</style>