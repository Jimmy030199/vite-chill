<template>
    <div class="col" v-for="(item,i) in sortTypeHeart" :key="'product'+i">
         <div class="card mt-2 h-100" >
                <div class="wrap-img-sort">
                    <div class="love-store fs-4" v-if="!item.heart" @click="addcollect(item.id,item.title,item.imageUrl)"><i class="bi bi-heart"></i></div>
                    <div class="love-store fs-4 text-danger" v-else @click="removecollect(item.id)"><i class="bi bi-heart-fill"></i></div>
                    <img :src=" item.imageUrl " class="card-img-top w-100 object-fit-cover" alt="..." style="height:250px;"  @click.prevent="getCommidity(item.id);changeType(item.category)">
                    <div class="product-sort fs-3 fw-bold text-center text-white">{{ item.category }}</div>
                </div>                             
                <div class="card-body text-center">
                    <h5 class="card-title fs-4 fw-bold">{{ item.title }}</h5>
                    <p class="card-text "><span v-if="item.Isdiscount" class="fs-6 fw-bold text-decoration-line-through text-danger me-2">原價:${{item.origin_price}}元/</span><span class="fs-6 fw-bold">售價:${{item.price}}元</span></p>
                    <a href="#" class="btn btn-secondary" @click.prevent="plusone(item)"><i class="bi bi-basket2-fill"></i>&nbsp;&nbsp;放入購物車</a>
                </div>
          </div>
     </div>
     <ModalItemVue ref="Modalref"></ModalItemVue>
</template>

<script>


import {useproductsStore} from '../../stores/useproductsStore.js'
import {usecommodityStore} from '../../stores/usecommodityStore.js'
import {usestatusStore} from '../../stores/usestatusStore.js'

import { ref,watchEffect,watch } from 'vue'
import { storeToRefs } from 'pinia'
import ModalItemVue from '../ModalItem.vue'




export default{
    setup(){
        const productsStore =useproductsStore()
        const commodityStore=usecommodityStore()
        const statusStore=usestatusStore()

        //pina資烙要用storeToRefs
        const {sortType,type} = storeToRefs(productsStore)
        const {modalmes,toastmes,showCollection,removecollectionId} = storeToRefs(statusStore)
       
        const{addCart,getCommidity}=commodityStore

        const {getAlldata} = productsStore
        
        const changeType=(sort)=>{
         
            type.value =sort
        }
        const Modalref=ref(null)
        const Modalrefprops=ref(null)


        const plusone =(props)=>{
            // Modalref.value.Modalshow()
            modalmes.value=props
            addCart(props.id,1)
            const date = new Date().toLocaleTimeString();
            console.log(date);
            toastmes.value={style:'bg-success text-white',title:props.title,content:`已將${props.title}一個商品加入購物車`,time:date}
            
        }
        
        const sortTypeHeart =ref([])
        const addHeartstate =()=>{
            sortTypeHeart.value=sortType.value.map((item)=>{
                const localarr =JSON.parse(localStorage.getItem('chillcollection'))
                let heart=false
                if(localarr){
                localarr.forEach((v)=>{
                    if(v.id===item.id){heart=true}
                }) }

                return {...item,heart:heart}
            })
        }
        watchEffect(()=>{
            sortType
            addHeartstate()
        })
      
 
        const addcollect =(id,title,img)=>{
            const localarr =JSON.parse(localStorage.getItem('chillcollection'))
            showCollection.value=false 
            console.log('localarr',localarr)
            if(localarr){
                const addcoll = {id:id,title:title,img:img} 
            const newlocalarr =  JSON.stringify([...localarr,addcoll])      
            console.log("newlocalarr",newlocalarr)
            localStorage.setItem('chillcollection', newlocalarr);
            addHeartstate()

            }else{
         
            const addcoll = {id:id,title:title,img:img} 
                const newlocalarr =  JSON.stringify([addcoll])
                localStorage.setItem('chillcollection', newlocalarr); 
                addHeartstate()
            } 
            const date = new Date().toLocaleTimeString();
            const contentMsg = `${title}已加入收藏`
            toastmes.value={style:'bg-info text-white',title:title,content:contentMsg,time:date}
        }

        const removecollect =(id)=>{
            showCollection.value=false 
            const localarr =JSON.parse(localStorage.getItem('chillcollection'))
            const removeafter = localarr.filter((v)=>{return v.id!==id}) 
            const newremoveafter =  JSON.stringify(removeafter) 
            localStorage.setItem('chillcollection', newremoveafter);
            addHeartstate() 
            const date = new Date().toLocaleTimeString();
            toastmes.value={style:'bg-danger text-white',title:'取消收藏',content:'已取消收藏該商品',time:date}

        }
        watch(removecollectionId,()=>{
            
            removecollect(removecollectionId.value)
            
        })

       
       

        return{
            getAlldata,
            sortType,
            sortTypeHeart,

            getCommidity,
            changeType,
            Modalref,
            plusone,
            Modalrefprops,

            addcollect,
            removecollect
        }
    },
    created(){
        this.getAlldata()
    },
    components:{
        ModalItemVue,
        
    }
}
</script>