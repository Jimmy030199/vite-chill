<template>
    <div class="col-12 ">
                    <div class="table-responsive">
                        <div class="w-100 fs-4 bg-dark text-white ps-3">購物清單</div>
                        <table class="table align-middle text-center"> 
                            <tbody>
                                <tr v-for="(item,i) in finalCart" :key="'finalCart'+i">
                                    <td class="table-imgwarp">
                                        <img class="table-img" :src="item.product.imageUrl">
                                    </td>
                                    <td class="fw-bold no-wrap">{{ item.product.title }}</td>
                                
                                    <td class="fw-bold no-wrap">{{ item.qty }}份</td>
                                    <td class="fw-bold no-wrap">${{item.total }}元</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
</template>

<script>
import { ref,watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { usecommodityStore } from '../../stores/usecommodityStore'
import { storeToRefs } from 'pinia'
export default {
   setup(){
    const finalCart = ref([])
    const getCart=()=>{
        const URL = `${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/cart`
        axios.get(URL).then((res)=>{
            if(res.data.success){
                finalCart.value=res.data.data.carts
            }
        })
    }
    const commodityStore=usecommodityStore()
    const {orderListId}=storeToRefs(commodityStore)
    const router=useRouter()

    watch(finalCart,()=>{
        if(finalCart.value.length<1){
            if(orderListId===''){ router.push('/products/all')}
           
        }
    })
    return {
        finalCart,
        getCart
    }
   },
   created(){
    this.getCart()
   }
   
}
   
    
</script>