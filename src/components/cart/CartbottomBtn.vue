<template>
    <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between" v-if="!showstep3">
                    <button v-if='!showstep2' class="btn btn-lg btn-outline-secondary" @click="goshopping"><i class="bi bi-arrow-left-circle-fill"></i>&nbsp;繼續購物</button>
                    <button v-else class="btn btn-lg btn-outline-secondary" @click="clicktostep1"><i class="bi bi-arrow-left-circle-fill"></i>&nbsp;清單明細</button>
                    <button v-if='!showstep2' class="btn btn-lg bg-dark text-white" @click="clicktoNext">訂購確認&nbsp;<i class="bi bi-arrow-right-circle-fill"></i></button>
                    <button v-else class="btn btn-lg bg-secondary text-white " @click='clicktoFinal' :class="{paybtnnot:!paybotton}">付款/完成訂單&nbsp;<i class="bi bi-arrow-right-circle-fill"></i></button>
                
                </div>
                <div class="col-12 d-flex justify-content-center" v-else>
                    <button class="btn btn-lg btn-warning text-white" @click="paybill">付款去&nbsp; <i class="bi bi-credit-card-2-back-fill"></i></button>
                </div>
            </div>
        </div>
        <ModalAlert ref="Modalref"></ModalAlert>
</template>

<script>
import { usestatusStore } from '../../stores/usestatusStore';
import { usecommodityStore } from '../../stores/usecommodityStore';

import { storeToRefs } from 'pinia';
import { useRouter,useRoute } from 'vue-router';
import { ref,watchEffect } from 'vue';
import axios from 'axios';
import ModalAlert from '../ModalAlert.vue';
export default{
    setup(){
        const showstep2 = ref(false)
        const showstep3 = ref(false)
        const statusStore=usestatusStore()
        const {cartnextstep,paybotton,alertModalmes}=storeToRefs(statusStore)
        const route=useRoute()
        const clicktostep1=()=>{
            router.push('/cart/step1')
        }
        const clicktoNext =()=>{
            console.log('route.path',route.path)
            if(route.path==='/cart/step1'){
                console.log('push to step2')
                router.push('/cart/step2')
                showstep2.value=true
            }
            cartnextstep.value=true

        }
        const clicktoFinal =()=>{
            if(paybotton.value){
                console.log('route.path',route.path)
                if(route.path==='/cart/step2'){
                    console.log('push to step3')
                    router.push('/cart/step3')
                    paybotton.value=false
                }
            }
            

        }
        const router=useRouter()
        const goshopping=()=>{
            router.push('/products/all')
        }
        watchEffect(()=>{
            if(route.path==='/cart/step2'){
                showstep2.value=true
                paybotton.value=false
            }else{
                showstep2.value=false
            }
        })
        watchEffect(()=>{
            if(route.path==='/cart/step3'){
                showstep3.value=true
            }
        })

        const commodityStore=usecommodityStore()
        const { orderListId,orderUser,ordermessage,paidstate}=storeToRefs(commodityStore)
        const Modalref=ref(null)
       
        const paybill=()=>{
            const URL = `${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/pay/${orderListId.value}`
            axios.post(URL)
                      .then((res)=>{
                        console.log('paybill',res)
                        if(res.data.success){
                        alertModalmes.value={style:'bg-success text-white',title:'已付款成功',content:'感謝您的訂購，祝您購物愉快',btn:{name:'前往商城',path:'/products/all'},close:false}
                        Modalref.value.Modalshow()
                        orderListId.value=''
                        orderUser.value={}
                        ordermessage.value=''
                        paidstate.value=false
                        }
                      })
         

        }





        return {
            clicktoNext,
            goshopping,
            showstep2,
            showstep3,
            paybotton,
            clicktoFinal,
            clicktostep1,
            paybill,
            Modalref        }
    },
    components:{
        ModalAlert
    }
}
</script>

<style>
.paybtnnot:hover{
    cursor: not-allowed;
}
</style>