<template>
     <div class="container pb-5">
            <div class="row">
                <div class="col-12 ">
                    <div class="table-responsive">
                        <table class="table align-middle text-center">
                            <thead class="bg-dark text-white">
                            <th class="no-wrap">縮圖</th>
                            <th>品名</th>
                            <th>數量</th>
                            <th >原價</th>
                            <th>售價</th>
                            <th>刪除</th>
                            </thead>
                            <tbody>
                            <tr v-for="(item,i) in carts" :key="'cart'+i">
                                <td class="table-imgwarp">
                                    <img class="table-img" :src="item.product.imageUrl">
                                </td>
                                <td class="fw-bold no-wrap">{{ item.product.title }}</td>
                                <td>
                                    <div class="btn-group border" >
                                    <button type="button" class="btn btn-sm btn-lg-responsive border-end fw-bold " @click="changeproductsNum(item.id,item.product_id,item.qty-1)">-</button>
                                    <span class="btn btn-sm btn-lg-responsive border-end fw-bold btn-lg">{{ item.qty }}</span>
                                    <button type="button" class="btn btn-sm btn-lg-responsive border-start fw-bold " @click="changeproductsNum(item.id,item.product_id,item.qty+1)">+</button>
                                    </div>
                                </td>
                                <td class="fw-bold no-wrap text-decoration-line-through text-secondary ">${{ item.product.origin_price }}元</td>
                                <td class="fw-bold no-wrap text-success">${{ item.product.price }}元</td>
                                <td class="fw-bold fs-3"><button class="btn btn-outline-danger" @click="deleteCartItem(item.id)"><i class="bi bi-x"></i></button> </td>
                            </tr>
                      
                            </tbody>
                            <tfoot class="fw-bold mt-2">
                                <tr class="no-border">
                                    <td colspan="2"></td>
                                    <td colspan="1"></td>
                                    <td class="no-wrap">共 {{ productsNum }} 件</td>
                                    <td class="no-wrap">總計</td>
                                    <td class="no-wrap">${{ cashTotal }}元</td>    
                                    
                                </tr>
                                <tr class="no-border">
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                    <td class="no-wrap pt-0">運費</td>
                                    <td class="no-wrap pt-0">${{ freight }}元</td>
                                   
                                </tr>
                                <tr class="no-border">
                                    <td colspan="2"></td>
                                    <td colspan="2"></td>
                                    <td class="no-wrap pt-0">共計</td>
                                    <td class="no-wrap pt-0">${{payTotal}}元</td> 
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
        <LoadingItem :active="isLoading"></LoadingItem>
</template>

<script>
import axios from 'axios'
import { ref,watch } from 'vue'
import { usecommodityStore } from '../../stores/usecommodityStore'
import { usestatusStore } from '../../stores/usestatusStore'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

export default{
    setup(){
         const carts=ref([])
         const freight=ref(0)
         const productsNum=ref(0)
         const cashTotal=ref(0)
         const payTotal=ref(0)
         const statusStore=usestatusStore()
         const {isLoading}=storeToRefs(statusStore)
         const router=useRouter()
         
         const getCardData=()=>{
            const URL = `${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/cart`
            isLoading.value=true
            navbargetCartLength.value=true
            let numiszeroIdArr = []
            //非同步
            axios.get(URL)
                   .then((res)=>{
                    console.log('getCardData',res)
                    if(res.status===200){
                    //res.data.data才是cart裡的資料
                    res.data.data.carts.forEach((v)=>{ if(v.qty<1){
                        numiszeroIdArr=[...numiszeroIdArr,v.id]
                    }})
                    console.log('numiszeroIdArr',numiszeroIdArr)
                    const fiteroutNumZero =res.data.data.carts.filter((v)=>{return v.qty>0})
                    if(fiteroutNumZero.length<1){
                        router.push('/products/all')
                    }
                    carts.value=fiteroutNumZero
                    getTotal()
                    confirmupdateCart.value=false
                    isLoading.value=false
                    //清除num=0的購物車資料庫
                    if(numiszeroIdArr.length!==0){
                        numiszeroIdArr.forEach((v)=>{
                            deleteOnecart(v)
                        })
                        numiszeroIdArr=[]
                    }
                    }
                })
         }
         const getTotal =()=>{
            productsNum.value=carts.value.reduce((acc,cur)=>{
                return acc+cur.qty
            },0)
            cashTotal.value=carts.value.reduce((acc,cur)=>{
                return acc+cur.qty*cur.product.price
            },0)
            payTotal.value=cashTotal.value+freight.value
         }
         const commodityStore=usecommodityStore()
         const {confirmupdateCart,navbargetCartLength}=storeToRefs(commodityStore)
         const {updateCart,deleteOnecart}=commodityStore
         const changeproductsNum =(id,product_id,num)=>{
            console.log('傳入的值',typeof(id),typeof(num))
            console.log('傳入的值',id,num)
            updateCart(id,product_id,num)  
         }
         watch(confirmupdateCart,()=>{
            if(confirmupdateCart.value){
                getCardData()
            }
           
         })

         const deleteCartItem =(id)=>{
            deleteOnecart(id)
            getCardData()
         }

  

        return{
            getCardData,
            changeproductsNum,
            deleteCartItem,
            carts,
            freight,
            productsNum,
            cashTotal,
            payTotal,
            isLoading,
        }
    },
    created(){
        this.getCardData() 
    }
}

</script>