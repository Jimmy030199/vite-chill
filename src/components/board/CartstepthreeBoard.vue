<template>
    <section class="mt-5">
        <div class="container pb-5">
            <div class="row ">
                <CartOderList></CartOderList>
            </div>
        </div>
    </section>
    <section class="mt-1">
        <div class="container pb-5">
           <div class="row">
            <CartClient></CartClient>
           </div>
        </div>
    </section>
</template>

<script>
import CartOderList from '../cart/CartOderList.vue'
import CartClient from '../cart/CartClient.vue'

export default{
    setup(){

      

        return{

        }
    },
    components:{
        CartOderList,
        CartClient
    }
}
</script>