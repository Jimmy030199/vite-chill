<!-- eslint-disable no-undef -->
<template>
        
       
            <div class="col-12 col-lg-6" >
                <div class="wrap-product-img w-100">
                    <LoadingItem :active="isLoading"></LoadingItem>
                    <img v-show="!isLoading" class="w-100 h-100 object-fit-cover" :src="commidity.imageUrl" alt="">
                </div>
            </div>
            <div class="col-12 col-lg-6 mt-4 mt-lg-0" v-show="!isLoading">
                <p class="fs-2 text-center fw-bold text-black">{{ commidity.title }}</p>
                <p class="fs-5 text-center fw-bold mb-4"><span class="border py-2 px-3 itempagesort">{{ commidity.category }}</span></p>
                <p class="fs-5 text-center fw-bold ">售價： ${{commidity.price}}元</p>
                <div class="d-flex justify-content-around align-items-center">
                    <div class="btn-group border" >
                        <button type="button" class="btn border-end fw-bold btn-lg"  @click="countminus">-</button>
                        <span class="btn border-end fw-bold btn-lg">{{ count }}</span>
                        <button type="button" class="btn border-start fw-bold btn-lg" @click="counplus">+</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-secondary fw-bold btn-lg" @click="plustocart">
                            <i class="bi bi-basket2-fill"></i>&nbsp;&nbsp;放入購物車
                        </button>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="fs-4 fw-bolder pb-1 border-bottom ps-2">產品介紹</p>
                    <p class="fs-6 fw-bold">{{ commidity.description }}</p>
                    <p class="fs-4 fw-bolder pb-1 border-bottom ps-2">產品成分</p>
                    <p class="fs-6 fw-bold">{{ commidity.content }}</p>

                </div>
            </div>
            <ModalItem ref="ModalEle"></ModalItem>
</template>

<script>
import { storeToRefs } from 'pinia'
import { usecommodityStore } from '../../stores/usecommodityStore'
import { useproductsStore } from '../../stores/useproductsStore'
import { usestatusStore } from '../../stores/usestatusStore'
import { useRoute } from 'vue-router'
import axios from 'axios'
import {ref,onMounted,watch} from "vue"
import ModalItem from '../ModalItem.vue'

export default{
  setup(){
        const commodityStore = usecommodityStore()
        const productsStore = useproductsStore()
        const statusStore = usestatusStore()



        const {commidity,product_id,confirmaddCart} = storeToRefs(commodityStore)
        const {type} = storeToRefs(productsStore)
        const {isLoading,modalmes} = storeToRefs(statusStore)


        const route = useRoute()
        console.log("commodity route",route)
        const count = ref(1)
        const ModalEle = ref(null)


        const countminus=()=>{
            if(count.value===1){
                return
            }
            count.value-=1
        }
        const counplus=()=>{

            count.value+=1
        }
        //加入購物車
        const {addCart} =commodityStore
        const plustocart=()=>{
            modalmes.value={style:'bg-success text-white',title:`${commidity.value.title}`,qty:count.value}
            ModalEle.value.Modalshow()         
        }
        watch(confirmaddCart,()=>{
            if(confirmaddCart.value){
                console.log('commodityitem watch confirmaddCart')
                addCart(product_id.value,count.value)
            }
            confirmaddCart.value=false
            ModalEle.value.Modalhide()
        })

       
        const getCommidityData=()=>{
            console.log('route.params',route.params)
            product_id.value=route.params.id
            console.log('product_id.value',product_id.value)
            const URL =`${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/product/${product_id.value}`
            console.log(URL)
             axios.get(URL)
                  .then((res)=>{
                    console.log("res",res)
                    if(res.data.success){
                        commidity.value=res.data.product
                        type.value = res.data.product.category
                        console.log('commidity.value',commidity.value)
                    }
                   
            })

        }
        
        watch(route,()=>{
            console.log('watch to route  getCommidityData()')
            getCommidityData()
        },{deep:true})





        onMounted(()=>{
            setTimeout(()=>{
            isLoading.value=false
            },1000)
        })
        return{
            getCommidityData,
            commidity,
            count,
            countminus,
            counplus,
            isLoading,
            plustocart,
            ModalEle
        }
    },
    created(){
        // eslint-disable-next-line no-undef
        this.getCommidityData()
        this.isLoading=true
    },
    components:{
        ModalItem
    }

}
</script>