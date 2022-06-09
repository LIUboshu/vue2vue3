import { reactive,onMounted,onUnmounted } from "vue";
export default function(){
    let point = reactive({
        x:0,
        y:0
    })

    function savePoint(e){
        point.x = e.pageX;
        point.y = e.pageY;
        console.log(e.pageX,e.pageY);
    }
    onMounted(()=>{
        window.addEventListener("click",savePoint)
    })

    onUnmounted(()=>{
        window.removeEventListener('click',savePoint)
    })

    return point    //返回值必须return出去
}

/* 
    自定义hook函数
        什么是hook？
            本质是一个函数，把setup函数中使用的Composition API进行封装
        类似vue2中的mixin
        自定义hook的优势，复用代码，让setup中的逻辑更清楚易懂
*/