<template>
     <header> 
       <div class="position-relative">
                <nav class="navbar navbar-expand-lg bg-transcolor" :class="{'fixed-nav':navshow}">
                    <div class="container">
                            <a class="navbar-brand " href="#">Chill</a>
                        <!-- 漢堡選單 -->
                        <button class="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="fs-3"><i class="bi bi-list"></i></span>
                        </button>    
                   
                      <div class="collapse navbar-collapse" id="navbarNav" >                     
                        <ul class="navbar-nav ms-auto text-center align-items-center">
                          <li class="nav-item ">
                            <router-link class="nav-link navbarlink" to="/">Home</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link navbarlink" to="/products/all" @click="type='產品列表'">Products</router-link>
                          </li>
                          <li class="nav-item " @click.prevent="changeState">
                            <a class="nav-link" href="#" role="button" >
                             Collection
                            </a>
                            
                           
                          </li>
                          <li class="nav-item position-relative">
                            <a class="nav-link fs-5 navbarlink" href="#" @click.prevent="gotoCartPage"><i class="bi bi-cart-fill"></i></a>
                            <span v-if="CartLength!==0" class="position-absolute start-100 translate-middle badge rounded-pill bg-danger cart-pill">
                              {{ CartLength }}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                </nav>
                  <div class="px-2 collection me-5 border rounded" v-if="showCollection">
                    <div class="container">
                    <div class="row">
                      <div class="col-12 ">
                        <p class="my-0 d-flex justify-content-between  "><span class="fs-5 fw-bold text-secondary ">我的最愛</span>  <span class="fs-6 text-danger my-auto" @click="changeState"><i class="bi bi-dash-square-fill"></i></span></p>
                      </div>
                      <div class="col-12 border-top mb-2" v-for="(item,i) in collectArr" :key="'collectArr'+i">
                           <div class="collect-item mt-2 d-flex align-items-center justify-content-between">
                         
                              <div class="img-collection w-25">
                                    <img class="w-100 object-fit-cover border rounded" :src="item.img" alt="">
                              </div>
                              <div>
                                <p class="text-center my-0 fs-6 fw-bold text-secondary">{{ item.title }}</p>
                              </div>
                              <div class="delete-icon" v-if="showCancelMark">
                                <p class="fs-4 my-0 text-primary" @click="removecollect(item.id)"><i class="bi bi-x"></i></p>
                              </div>
                              <div class="delete-icon" v-if="!showCancelMark">
                                <p class="fs-4 my-0 text-primary" @click="linkto(item.id)"><i class="bi bi-link-45deg"></i></p>
                              </div>
                           </div>
                      </div>
                     
                    </div>
                  </div>
                  </div>     
                </div>
                <ModalAlert ref="Modalref"></ModalAlert>
        </header>
</template>

<script>
import {ref,watchEffect} from 'vue'
import { useproductsStore } from '../stores/useproductsStore'
import { usestatusStore } from '../stores/usestatusStore'
import { usecommodityStore } from '../stores/usecommodityStore'

import ModalAlert from './ModalAlert.vue'

import { useRouter,useRoute } from 'vue-router'

import { storeToRefs } from 'pinia'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'

export default{
  props:['navbarshow'],
  setup(props){
    const productsStore=useproductsStore()
    const {type}=storeToRefs(productsStore)


    const navshow=ref(false)
    watchEffect(()=>{
      navshow.value=props.navbarshow
    })

    const collectArr =ref([])
    const readlocal=()=>{
      const localarr =JSON.parse(localStorage.getItem('chillcollection'))
      collectArr.value =localarr
    }


    const statusStore=usestatusStore()
    const {showCollection,removecollectionId,alertModalmes}=storeToRefs(statusStore)
   
    const changeState =()=>{
     
      showCollection.value = !showCollection.value
      readlocal()


    }
    const removecollect=(id)=>{
      removecollectionId.value=id
    }

    const Modalref=ref(null)
    const router=useRouter()
    const CartLength = ref(0)
    const commodityStore=usecommodityStore()
    const {navbargetCartLength}=storeToRefs(commodityStore)
    const getCartLength =()=>{
      const URL = `${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/cart`
      axios.get(URL)
                   .then((res)=>{
                   
                    if(res.status===200){
                    //res.data.data才是cart裡的資料          
                    const fiteroutNumZero =res.data.data.carts.filter((v)=>{return v.qty>0})
                    CartLength.value=fiteroutNumZero.length}
                    })
    }
    watchEffect(()=>{
    if(navbargetCartLength.value){
      getCartLength()
      console.log('促發navbar拿cart數')
      navbargetCartLength.value=false
    }
     
    })
    const gotoCartPage=()=>{
       
            const URL = `${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/cart`
            
            axios.get(URL)
                   .then((res)=>{
                    console.log('getCardData',res)
                    if(res.status===200){
                    //res.data.data才是cart裡的資料          
                    const fiteroutNumZero =res.data.data.carts.filter((v)=>{return v.qty>0})
                    console.log("fiteroutNumZero",fiteroutNumZero)
                    if(fiteroutNumZero.length!==0){
                      router.push('/cart/step1')
                    }else{
                      console.log("Modalref.value",Modalref.value)
                      alertModalmes.value={style:'bg-danger text-white',title:'購物車尚未有商品',content:'請先前往商城Shopping',btn:{name:'前往商城',path:'/products/all'},close:true}
                      Modalref.value.Modalshow()
                    }
                  
                    }
                })
         }
         const showCancelMark =ref(false)
         const route=useRoute()
         const routeratproduct =(path)=>{
             if(path==='/products/all'){
              console.log('navbar path',route.path)
              showCancelMark.value=true
             }
         }
         watchEffect(()=>{
          showCollection.value=false
          routeratproduct(route.path)
         })

         const linkto=(id)=>{
          router.push(`/commodity/${id}`)
         }
    


    return {
      navshow,
      type,
      showCollection,
      changeState,
      collectArr,
      removecollect,
      gotoCartPage,
      Modalref,
      CartLength,
      getCartLength,
      showCancelMark,
      linkto,

    }
  },
  components:{
    ModalAlert
  },
  created(){
   this.getCartLength()
  }
}
</script>

<style>

.collection{
 background-color: rgba(255, 255, 255, 0.888);
 width:250px;
 position: fixed;
 right: -45px;
 top:250px;
 z-index: 10;
}
@media screen and (min-width:992px) { 
  
    .collection{
      background-color: rgb(255, 255, 255);
      width:300px;
      position: fixed;
      right: 50px;
      top:65px;
      }
}

</style>