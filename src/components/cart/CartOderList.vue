<template>
    <div class="col-12 ">
                    <div class="table-responsive">
                        <div class="w-100 fs-4 bg-dark text-white ps-3">訂單清單</div>
                        <table class="table align-middle "> 
                            <tbody>
                                <tr v-for="(item,i) in orderListIdArr" :key="'orderListIdArr'+i">
                                    <td class="fw-bold no-wrap">{{ orderListproducts[item].product.title }}</td>                               
                                    <td class="fw-bold no-wrap text-end">{{ orderListproducts[item].qty }} / 份</td>
                                    <td class="fw-bold no-wrap text-end">${{ orderListproducts[item].total }}元</td>                                    
                                </tr>
                               

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan=1></td>
                                    
                                    <td class="text-end fw-bold">總額</td>
                                    <td class="text-end fw-bold">${{ orderTotal }}元</td>
                                </tr>
                                
                            </tfoot>
                        </table>
                    </div>
                </div>
</template>

<script>
import { usecommodityStore } from '../../stores/usecommodityStore'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
export default{

    setup(){
        // -NWBubRYhjQhoHdQSsaQ
        //${orderListId.value}
        const orderListIdArr=ref([])
        const orderListproducts=ref({})
      
        const orderTotal=ref(0)


        const commodityStore=usecommodityStore()
        const {orderListId,orderUser,paidstate,ordermessage}=storeToRefs(commodityStore)
        console.log(orderListId)
        const getOrderList =()=>{
            const URL = `${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/order/${orderListId.value}`
            axios.get(URL)
                    .then((res)=>{
                        console.log('getOrderList',res)
                        if(res.data.success){
                            orderListproducts.value=res.data.order.products
                            orderUser.value =res.data.order.user
                            orderListIdArr.value = Object.keys(orderListproducts.value);
                            orderTotal.value =res.data.order.total
                            paidstate.value=res.data.order.is_paid
                            ordermessage.value=res.data.order.message

                            orderListId.value=res.data.order.id
                            
                        }
                    })
        }
        return{
            orderListIdArr,
            orderListproducts,

            orderTotal,
            getOrderList,
            
        }
    },
    created(){
        this.getOrderList()
    }
}
</script>