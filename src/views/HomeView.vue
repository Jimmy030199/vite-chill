<template>

  <section class="vh-100 main-section">
    <div ref="navbarEle">
      <NavbarItem :navbarshow="navbarshow"></NavbarItem>
    </div>
   
    <div class="container">
        <div class="row justify-content-center align-items-center wraphight">
            <div class="col-8 col-lg-6">
                <div class="note d-flex flex-column justify-content-center align-items-center p-5">
                    <h2 class="text-white mb-3">Chill</h2>
                      <p class="w-100 text-white text-center fs-6 fs-lg-5 pb-3">放慢您的步調，遠離都市喧囂，來場療癒的美食饗宴吧。</p>
                      <button type="button" class="btn text-white btn-outline-secondary fs-6 fs-lg-4">立即選購&nbsp;&nbsp;<i class="bi bi-shop"></i></button>
                </div>
              </div>
        </div>
      </div>
      <div class="triangle" ></div>
      <a href="#" @click.prevent="scollToMainCard">
        <img class="triangle-img" src="https://carol-yang09.github.io/Adagio/img/scroll.497a5702.gif" alt="">
      </a>
     
  </section>
  <section>
    <div class="container-fluid">
        <div class="row space-item">
            <div class="col-12 col-lg-6 py-3 d-flex flex-column justify-content-center align-items-center ">                  
                  <h3 class="htitle mb-3 mb-lg-4">嚴選食材</h3>
                  <p class="w-75 w-lg-50 fs-5 text-center m-0">Chill 嚴選每樣用料，謹慎檢驗每道食材，確保新鮮美味，且所有料理堅持現點現做 ，讓您吃得健康又安心。</p>        
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div class="img-wrap d-flex justify-content-end pe-2">
                    <img src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" >
                </div>
                <div class="img-wrap ps-2">
                    <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" >
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-white">
      <div class="row row-cols-1 row-cols-lg-3 px-2" ref="maincardWrap">
        <MainCard :dataforMaincard="dataforMaincard"></MainCard>
      </div>
    </div>
  </section>
  <section class="sec-section">
            <div class="container-fluid">
                <div class="row space-item">
                    <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div class="img-wrap d-flex justify-content-end pe-2">
                            <img src="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" >
                        </div>
                        <div class="img-wrap ps-2">
                            <img src="https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" >
                        </div>
                     </div>
                    <div class="col-12 col-lg-6 py-3 d-flex flex-column justify-content-center align-items-center ">                  
                          <h3 class="htitle mb-3 mb-lg-4">舒適環境</h3>
                          <p class="w-75 w-lg-50 fs-5 text-center m-0">Chill 位於台北 101 大樓 1 樓，以簡約歐式風格裝潢，打造舒適溫馨的氣氛 ，讓您在繁忙的生活中，得到療癒的力量。</p>
                    </div>
                </div>
                <div class="w-100 d-flex flex-column align-items-center" style="height:250px">
                    <p class=" w-100 text-white fs-3 text-center my-auto">放慢您的步調，跟著 Chill 享受生活的樂趣。<br>
                        <span class="fs-6 pt-3">ⓒ 2023 Chill by Jimmy &nbsp;&nbsp;| </span>
                    </p>
                </div>  
            </div>
  </section>

</template>

<script>
import NavbarItem from '../components/NavbarItem.vue'
import MainCard from '../components/MainCard.vue'




const dataforMaincard=[{
  title:'簡選主餐',
  category:'主餐',
  text_first:'精心製作的餐點，給您充滿味覺',
  text_sec:'與視覺的美食饗宴。',
  url:'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1600'
},{
  title:'必吃甜點',
  category:'甜點',
  text_first:'精緻夢幻甜點，是不容錯過的經',
  text_sec:'典好味道。',
  url:'https://images.pexels.com/photos/15359108/pexels-photo-15359108.jpeg?auto=compress&cs=tinysrgb&w=1600'

},{
  title:'特調飲品',
  category:'飲料',
  text_first:'獨家研發的特調黃金比例，值得',
  text_sec:'您來細細品嚐。',
  url:'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1600'
}];

import {ref,onMounted,onBeforeUnmount} from 'vue'

export default {
  setup(){
    console.log('(import.meta.env.VITE_URL_API)',import.meta.env.VITE_URL_API)

    const navbarEle =ref(null)
    const maincardWrap =ref(null)
    const navbarshow =ref(false)
    let navHeight =0

    const navbarFixedfun=()=>{
        //window 畫面此刻的高
        const scrollHeight = window.pageYOffset;
        
        console.log("navHeight",navHeight)
        if(scrollHeight>navHeight){
          navbarshow.value=true
            }else{
              navbarshow.value=false
            }
    }

    let rolltoMainCardHeight =0

    const writeHeight = ()=>{

      console.log('onMounted maincardWrap',maincardWrap.value.getBoundingClientRect().height)
      const maincardWrapHeight = maincardWrap.value.getBoundingClientRect().height
      console.log('onMounted offsetTop',maincardWrap.value.offsetTop)
      const maincardWrap_offsetTop=maincardWrap.value.offsetTop
      console.log('window.innerHeight',window.innerHeight)
      const window_innerHeight = window.innerHeight
      rolltoMainCardHeight=maincardWrap_offsetTop-(window_innerHeight-maincardWrapHeight)/2
      console.log('rolltoMainCardHeight',rolltoMainCardHeight)
    }
   

    // eslint-disable-next-line no-unused-vars
    
    onMounted(()=>{
     writeHeight()
      //navbar 的高 
     navHeight =navbarEle.value.getBoundingClientRect().height
    })

    // watchEffect(()=>{
    //     console.log('window.innerHeight Listen',window.innerHeight)
    // })
    
    const scollToMainCard =()=>{
      console.log('fun中的rolltoMainCardHeight',rolltoMainCardHeight)
      window.scrollTo(0,rolltoMainCardHeight)
    }
    onMounted(() => {
      window.addEventListener("scroll", navbarFixedfun);
      window.addEventListener('resize', writeHeight);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", navbarFixedfun);
      window.removeEventListener('resize', writeHeight);
    });

   
    return {
      navbarEle,
      maincardWrap,
      navbarshow,
      dataforMaincard,
      navbarFixedfun,
      scollToMainCard,
      writeHeight
    }
  },
  components:{
    NavbarItem,
    MainCard,
    
  },
  // created(){
  //   window.addEventListener("scroll",this.navbarFixedfun)
  //   window.addEventListener('resize',this. writeHeight);
  // },
}
</script>

