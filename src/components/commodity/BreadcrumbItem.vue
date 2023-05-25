<!-- eslint-disable vue/valid-v-on -->
<template>
    <div class="col-12">
         <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item fw-bold fs-5"><router-link to='/products/all' class="text-decoration-none text-secondary breadlink" @click="changeType(commidity.category)">{{ commidity.category }}</router-link></li>
                <li class="breadcrumb-item fw-bold fs-5"><a  href="#" class="text-decoration-none text-secondary">{{ commidity.title }}</a></li>
            </ol>
         </nav>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { usecommodityStore } from '../../stores/usecommodityStore'
import { useproductsStore } from '../../stores/useproductsStore'

export default{
    setup(){
        const commodityStore =usecommodityStore()
        const productsStore= useproductsStore()
        const {commidity}=storeToRefs(commodityStore)
        const {type}=storeToRefs(productsStore)
        const changeType = (sort)=>{
            type.value=sort
        }


        return{
            commidity,
            changeType
        }
    }
}
</script>

<style scoped>
.breadlink.text-decoration-none.text-secondary:hover {
  color: rgba(183, 120, 26, 0.41) !important;;
}
</style>