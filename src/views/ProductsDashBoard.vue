<template>
    <div ref="navbarEle">
     <NavbarItem :navbarshow="navbarshow"></NavbarItem>
    </div>
<router-view></router-view>
<section class="mt-2">
    <div class="container-fluid">
        <div class="row">
          <SideList></SideList>
          <router-view name="mainproducts"></router-view>
        </div>
    </div>
</section>
<FooterItem></FooterItem>
<ToastMessage ref="Toastcomp"></ToastMessage>
</template>

<script>
import NavbarItem from '../components/NavbarItem.vue'
import FooterItem from '../components/FooterItem.vue'
import SideList from '../components/SideList.vue'
import ToastMessage from '../components/ToastMessage.vue'
import {usestatusStore} from '../stores/usestatusStore'


import { storeToRefs } from 'pinia'


import {ref,onMounted,watch,onBeforeUnmount} from 'vue'



export default{
    setup(){
      const statusStore =usestatusStore()
      const {toastmes}=storeToRefs(statusStore)
        const navbarEle =ref(null)
        const navbarshow =ref(false)
        const Toastcomp =ref(null)

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
      navHeight =navbarEle.value.getBoundingClientRect().height
    })
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", navbarFixedfun);

    });
    
    const showMes =(obj)=>{
      console.log("Toastcomp.value",Toastcomp.value)
      Toastcomp.value.pushMessage(obj)
    }
    watch(toastmes,()=>{
      console.log('watch Toastcomp')
      showMes(toastmes)
    },{deep:true})

        return{
            navbarEle,
            navbarshow,

            Toastcomp,
            showMes,
        }
    },
    components:{
        NavbarItem,
        FooterItem,
        SideList,
        ToastMessage

    },
    created(){
    window.addEventListener("scroll",this.navbarFixedfun)
  },
}
</script>