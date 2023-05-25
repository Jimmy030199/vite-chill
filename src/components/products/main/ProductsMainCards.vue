<template>
    <div class="col-12 col-lg-9" >
        <div class="row row-cols-2 row-cols-lg-3 gy-2">
        <ProductItem></ProductItem>
        </div>
        <PagebarItem></PagebarItem>
    </div>
</template>

<script>
import ProductItem from '../ProductItem.vue'
import PagebarItem from '../PagebarItem.vue';
export default{
    components:{
        ProductItem,
        PagebarItem
    }
}
</script>