import { defineStore } from 'pinia'

export  const usestatusStore = defineStore('usestatusStore',{
    //state
    state:()=>{
        return {
            isLoading :false,
            showCollection :false,
            removecollectionId:"",
            modalmes:{},
            toastmes:{},
            alertModalmes:{},
            cartnextstep:false,
            paybotton:false,
           
        }
    },
})