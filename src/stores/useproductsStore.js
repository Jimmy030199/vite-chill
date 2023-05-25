/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import { defineStore } from 'pinia'
import axios from 'axios'
import { usecommodityStore } from './usecommodityStore'




export const useproductsStore = defineStore('productsStore',{
    //state
    state:()=>{
        return {
            products:[],
            type:'產品列表',
            page:1,
            totalPage:1,
            rowData:[],
           
        }
    },
    //getter
    getters: {
        sortType: (state) => {
          
            let currentPagedata =[]
            if(state.type==='產品列表'){
                const sortArray = state.products
                state.totalPage = Math.ceil(sortArray.length/6)
                currentPagedata =sortArray.slice((state.page*6-6),(state.page*6-1+1))
            }else{
                const sortArray=  state.products.filter((v)=>{return v.category===state.type}) 
                state.totalPage = Math.ceil(sortArray.length/6)
                 currentPagedata =sortArray.slice((state.page*6-6),(state.page*6-1))

            }

            return currentPagedata
        },
      },
    //action
    actions:{
         getAlldata(id){
          const commodityStore=usecommodityStore()
            const URL =`${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/products/all`
            console.log(URL)
            axios.get(URL)
                  .then((res)=>{
                    console.log("res",res)
                    if(res.data.success){
                        console.log(res.data)
                        this.products= res.data.products.map((v)=>{
                            const Isdiscount = v.price<v.origin_price
                            console.log("Isdiscount",Isdiscount)
                            return {...v,Isdiscount}})
                        this.rowData = res.data.products.map((v)=>{
                            const Isdiscount = v.price<v.origin_price
                            console.log("Isdiscount",Isdiscount)
                            return {...v,Isdiscount}})
                        commodityStore.getImgTrain(id)
                    }
                   
            })
        },
    }
})