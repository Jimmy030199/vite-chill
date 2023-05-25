<!-- eslint-disable no-unused-vars -->
<template>
     <section>
        <div class="container-fluid">
        <LoadingItem :active="isLoading"></LoadingItem>
            <div class="row" v-show="!isLoading">               
                    <div class="top-banner d-flex justify-content-center align-items-center" :style="{ backgroundImage: `url(${imgUrl})`}">
                        <div class="fs-4 fw-bold text-white top-title p-3">{{ type }}</div>
                    </div>                
            </div>
        </div>
     </section> 
</template>

<script>
import { ref,watchEffect,onMounted } from 'vue'
import {useproductsStore} from '../../../stores/useproductsStore'
import {usestatusStore} from '../../../stores/usestatusStore'

import { storeToRefs} from 'pinia'
export default{
    setup(){
        const productsStore = useproductsStore()
        const statusStore = usestatusStore()

        const {type}= storeToRefs(productsStore)
        const {isLoading}= storeToRefs(statusStore)

        console.log("type value",type.value)
        const backgroungImg={
            '產品列表':'https://images.pexels.com/photos/5638330/pexels-photo-5638330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            '主餐':'https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&w=1600',
            '輕食':'https://images.pexels.com/photos/5292918/pexels-photo-5292918.jpeg?auto=compress&cs=tinysrgb&w=1600',
            '甜點':'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1600',
            '飲料':'https://images.pexels.com/photos/1243337/pexels-photo-1243337.jpeg?auto=compress&cs=tinysrgb&w=1600',
        }
        const imgUrl =ref("")
        watchEffect(()=>{
            imgUrl.value=backgroungImg[type.value]
        })
        onMounted(()=>{
            setTimeout(()=>{
            isLoading.value=false
            },1000)
        })
        

        return{
            type,
            imgUrl,
            isLoading
        } 
    },
    created(){
            this.isLoading=true
        }

}
</script>