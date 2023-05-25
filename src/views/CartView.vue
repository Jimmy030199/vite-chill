<template>
    <div ref="navbarEle">
     <NavbarItem :navbarshow="navbarshow"></NavbarItem>
    </div>
    <section>
        <div class="container-fluid">
            <div class="row">               
                    <div class="top-banner-cart d-flex justify-content-center align-items-center">
                        <div class="fs-4 fw-bold text-white top-title p-3">結帳流程</div>
                    </div>                
            </div>
        </div>
     </section>
     <section class="mt-5 ">
        <CartStep></CartStep>
     </section>
     <section class="mt-5">
        <router-view></router-view>
     </section>
     <section class="mb-4">
        <CartbottomBtn></CartbottomBtn>
     </section>
<FooterItem></FooterItem>

</template>

<script>
import NavbarItem from '../components/NavbarItem.vue'
import CartStep from '../components/cart/CartStep.vue';
import CartbottomBtn from '../components/cart/CartbottomBtn.vue'; 
import FooterItem from '../components/FooterItem.vue'


import { ref,onMounted,onBeforeUnmount } from 'vue';


export default{
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
      navHeight =navbarEle.value.getBoundingClientRect().height
      window.addEventListener("scroll",navbarFixedfun)

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
      CartStep,
      CartbottomBtn,
      FooterItem,
     
   },
   created(){
    window.addEventListener("scroll",this.navbarFixedfun)
  },
}
</script>