<template>
    <div class="col-12 col-lg-3 d-flex flex-column align-items-center px-3" >

        <div class="fs-4 fw-bold pt-3 pb-1 border-bottom border-4 mb-2 w-100  d-flex justify-content-center align-items-center">產品分類&nbsp;                 
            <i class="bi bi-caret-right-square-fill d-lg-none fs-6" v-if="showList" @click="showList=false"></i>
            <i class="bi bi-caret-down-square-fill d-lg-none fs-6" v-else @click="showList=true"></i>
        </div>
        <div class="d-lg-block list-group w-100 text-center mt-2" v-show="showList">         
            <a href="#" class="list-group-item list-group-item-action side-item fw-bold" @click.prevent="{type='產品列表';page=1}" :class="{active:type==='產品列表'}">全部</a>
            <a href="#" class="list-group-item list-group-item-action side-item fw-bold" v-for='(item,i) in sortArray' :key="'sort'+i" 
            @click.prevent="{type=item;page=1}" :class="{active:type===item}">{{ item }}</a>
    
        </div>
    </div>
</template>

<script>
import {ref}  from 'vue'
import {useproductsStore} from '../stores/useproductsStore'
import {storeToRefs} from 'pinia'
export default{
    setup(){
        const productsStore =useproductsStore()
        const  {type,page} = storeToRefs(productsStore)
        const showList =ref(false)
        const sortArray = ['主餐','輕食','甜點','飲料']

        return{
            showList,
            type,
            sortArray,
            page
        }
    }
}
</script>