import {defineStore } from'pinia'
import { useproductsStore } from './useproductsStore'
import axios from 'axios'


export const usecommodityStore = defineStore('commodityStore',{
    //state
    state:()=>{
        return{
          commidity:{},
          product_id:'',
          img_train:[],
          addTocartcheck:[],

          orderListId:'',
          orderUser:{},
          ordermessage:'',
          paidstate:false,

          confirmaddCart:false,
          confirmupdateCart:false,
          navbargetCartLength:false

        }
    },
    //getter
    getters: {

    },
    //action
    actions:{
        getCommidity(id){
            console.log('getID',id)
            this.product_id=id
            this.$router.push(`/commodity/${this.product_id}`)
            this. getImgTrain()      
            },
        getImgTrain(id){
        const productsStore=useproductsStore()

            this.product_id=id
            const imgArr=productsStore.rowData
              .filter((v)=>{return v.id!==this.product_id})
              .map((v)=>{return {imageUrl:v.imageUrl,id:v.id}})
            const forntthreeImg =imgArr.filter((v,i)=>{return i<3})
            this.img_train =[...imgArr,...forntthreeImg]
            console.log("this.img_train",this.img_train)

        },
        getCart(){
            const URL = `${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/cart`
            return axios.get(URL).then((res)=>{
                if(res.data.success){
                    this.addTocartcheck=res.data.data.carts
                }
            })
        },
        async addCart(id,qty){
            console.log('新增的內容',id,qty)
            await this.getCart()
            console.log('this.addTocartcheck',this.addTocartcheck)
            const exitid = this.addTocartcheck.filter((v)=>{return v.product.id===id})
            console.log("exitid",exitid)
            if(exitid.length<1){
                console.log('走新增')
                const URL =`${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/cart`
                axios.post(URL,{ "data": { "product_id":`${id}`,"qty":qty} })
                        .then((res)=>{
                            console.log("addCart-res",res)
                            this.navbargetCartLength=true
    
                })
            }else{
                console.log('走更新')
                console.log('走更新exitid[0]',exitid[0])

                this.updateCart(exitid[0].id,exitid[0].product_id,exitid[0].qty+qty)
            }
        },
        updateCart(id,product_id,qty){
            const URL =`${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/cart/${id}`
            axios.put(URL,{ "data": { "product_id":`${product_id}`,"qty":qty} })
            .then((res)=>{
                console.log("updateCart-res",res)
                 if(res.data.success){
                    this.confirmupdateCart=true
                 }      
            })
 
        },
        deleteOnecart(id){
            const URL =`${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/cart/${id}`
            axios.delete(URL)
                   .then((res)=>{
                    console.log('deleteOnecart-res',res)
                    if(res.data.success){
                        this.confirmupdateCart=true
                    }
                })
        }
    
    }
    

})