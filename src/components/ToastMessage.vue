<template>
    <div class="toast-container  pe-3 mt-3">  
    <ToastItem v-for="(item,i) in Message" :key="'Message'+i" :mespops="item">
    </ToastItem>
    </div>
</template>

<script>
import ToastItem from './ToastItem.vue';
import { ref } from 'vue';
export default{
    setup(){
    const Message=ref([])

    const pushMessage=(objmes)=>{
        Message.value.push(objmes)
    }
    return{
        Message,
        pushMessage
    }
    },
    components:{ToastItem}
}
</script>

<style>
.toast-container{
    position: fixed!important;
    top: 0;
    right: 0;
}
</style>