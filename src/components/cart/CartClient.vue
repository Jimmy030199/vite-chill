<template>
     <div class="col-12 ">
                    <div class="table-responsive">
                        <div class="w-100 fs-4 bg-dark text-white ps-3">訂購資訊</div>
                        <table class="table align-middle "> 
                            <tbody>
                                <tr>
                                    <td class="fw-bold no-wrap">收件人</td> 
                                    <td class="fw-bold no-wrap">{{ orderUser.name }}</td>                               
                                                                  
                                </tr>
                                <tr>
                                    <td class="fw-bold no-wrap">電子信箱</td> 
                                    <td class="fw-bold no-wrap">{{ orderUser.email }}</td>                                
                                                                        
                                </tr>
                                <tr>
                                    <td class="fw-bold no-wrap">電話</td> 
                                    <td class="fw-bold no-wrap">{{ orderUser.tel }}</td>                                
                                                                        
                                </tr>
                                <tr>
                                    <td class="fw-bold no-wrap">地址</td> 
                                    <td class="fw-bold no-wrap">{{ orderUser.address }}</td>                                
                                                                        
                                </tr>
                              
                                <tr>
                                    <td class="fw-bold no-wrap">備註</td> 
                                    <td class="fw-bold no-wrap">{{ ordermessage }}</td>                                
                                                                        
                                </tr>
                                <tr>
                                    <td class="fw-bold no-wrap">付款狀態</td> 
                                    <td class="fw-bold no-wrap" v-if="paidstate">已付款</td>  
                                    <td class="fw-bold no-wrap" v-else>未付款</td>                                

                                                                        
                                </tr>

                            </tbody>
                            
                        </table>
                    </div>
                </div>
</template>

<script>
import { usecommodityStore } from '../../stores/usecommodityStore'
import { storeToRefs } from 'pinia'


export default{
    setup(){
        const commodityStore=usecommodityStore()
        const {orderUser,paidstate,ordermessage}= storeToRefs(commodityStore)
   

        return{
            orderUser,
            paidstate,
            ordermessage
        }
    }
}
</script>