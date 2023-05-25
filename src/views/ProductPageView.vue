<template>
    <div ref="navbarEle">
      <NavbarItem :navbarshow="navbarshow" ></NavbarItem>
    </div>
    <ProductsTopItemAll></ProductsTopItemAll>
    <section class="m-3">
        <div class="container">
            <div class="row">
                <BreadcrumbItem></BreadcrumbItem>
            </div>
            <div class="row">
                <CommodityItem></CommodityItem>

            </div>
            
        </div>
    </section>
    <section class="my-3">
        <div class="container">
            <div class="row">
               <GuessLikeItem></GuessLikeItem> 
            </div>
        </div>
    </section>
    <FooterItem></FooterItem>
</template>

<script>
import NavbarItem from '../components/NavbarItem.vue'
import FooterItem from '../components/FooterItem.vue'
import ProductsTopItemAll from '../components/products/top/ProductsTopItemAll.vue';
import BreadcrumbItem from '../components/commodity/BreadcrumbItem.vue';
import CommodityItem from '../components/commodity/CommodityItem.vue';
import GuessLikeItem from '../components/commodity/GuessLikeItem.vue';
import {ref,onMounted,onBeforeUnmount} from 'vue'


export default {
    setup(){
        const navbarEle =ref(null)
        const navbarshow =ref(false)
        let navHeight =0

        const navbarFixedfun=()=>{
        //window 畫面此刻的高
        const scrollHeight = window.pageYOffset;
         //navbar 的高 
        if(scrollHeight>navHeight){
          navbarshow.value=true
            }else{
              navbarshow.value=false
            }
    }
    onMounted(()=>{
        window.addEventListener("scroll",navbarFixedfun)
        navbarEle.value.getBoundingClientRect().height
    })
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", navbarFixedfun);

    });
 

        return{
            navbarEle,
            navbarshow,

        }
    },
    components:{
        NavbarItem,
        FooterItem,
        BreadcrumbItem,
        CommodityItem,
        GuessLikeItem,
        ProductsTopItemAll
    },
//     created(){
//     window.addEventListener("scroll",this.navbarFixedfun)
//   },
    
}
</script>

