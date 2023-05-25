<template>
    <section class="mt-5">
        <div class="container pb-5">
            <div class="row ">
                <CardFinalList></CardFinalList>
            </div>
        </div>
    </section>
    <section class="mt-2 mb-5">
        <div class="container">
            <div class="row px-2">
                <FormItem></FormItem>
            </div>
        </div>
    </section>
</template>

<script>
import CardFinalList from '../cart/CartFinalList.vue';
import FormItem from '../cart/FormItem.vue';
export default{
    setup(){
        return{

        }
    },
    components:{
        CardFinalList,
        FormItem
    }
}
</script>