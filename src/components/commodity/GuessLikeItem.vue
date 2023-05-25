<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
     <div class="col-12 ">
        <p class="fs-4 fw-bolder pb-1 border-bottom">您可能會喜歡</p>
        <div class="round-wrap w-100">
            <div class="all-img w-100 d-flex" ref="all_img">                          
                <div class=" single-img h-100" ref="single_img" v-for="(item,i) in img_train" :key="'img_train'+i" @click="onclickto(item.id)">
                    <img class="w-100 h-100 object-fit-cover" :src="item.imageUrl" alt="">
                </div>
            </div>
        </div>                     
     </div>
</template>

<script>
import { useproductsStore } from '../../stores/useproductsStore';
import { usecommodityStore } from '../../stores/usecommodityStore';
import { useRouter,useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import {ref,watchEffect,onMounted,onBeforeUnmount,watch } from 'vue'
export default {
    setup(){
        const router=useRouter()
        const productsStore=useproductsStore()
        const commodityStore=usecommodityStore()

        const {rowData} = storeToRefs(productsStore)
        const {getAlldata} = productsStore

        const {commidity,img_train} = storeToRefs(commodityStore)
        const {getImgTrain} = usecommodityStore()
        const all_img=ref(null)
        const single_img=ref([])
     

        // console.log("commidity.value",commidity.value)
        // const popMyself=ref([])
        // popMyself.value = rowData.value.filter((v)=>{return v.imageUrl!==commidity.value.imageUrl})
        // console.log("popMyself.value",popMyself.value)
        // const imgArr=ref(popMyself.value.map((v)=>{return v.imageUrl}))
        // console.log("imgArr.value",imgArr.value)
        // const forntthreeImg =ref(popMyself.value.filter((v,i)=>{return i<3}).map((v)=>{return v.imageUrl}))
        // const imgTrain = ref([...imgArr.value,...forntthreeImg.value])
        // console.log("imgTrain.value",imgTrain.value)

        const onclickto =(id)=>{
              console.log(id)
            //   router.push(`/commodity/${id}`)
            router.push(`/commodity/${id}`).then(() => {
            // 在导航完成后执行需要的操作
            location.reload();
            });
        }

        watchEffect(()=>{
            console.log('watch all-img',all_img.value)
            console.log("watch commidity.value",commidity.value)
            console.log("watch rowData",rowData.value)

           

        })
        // eslint-disable-next-line no-unused-vars
        let width = 0
        // eslint-disable-next-line no-unused-vars
        let img_width =0
       
        // eslint-disable-next-line no-unused-vars
        let moveAmount =0
        
        const setMovefun=()=>{
            width = all_img.value.offsetWidth;
            console.log('onMounted後的all_img寬度',all_img.value.offsetWidth)
            moveAmount = -(width / 4);
            img_width=width / 4
        }

        const intervalId = ref(null);
        onMounted(()=>{
            setMovefun()
              //每一秒促發一次
              intervalId.value = setInterval(moveLeft, 1850);
        })

        onBeforeUnmount(()=>{
            // 在组件卸载之前清除定时器
            console.log('onBeforeUnmount')
            clearInterval(intervalId.value);
        })



        // eslint-disable-next-line no-unused-vars
        let moveTotal =0
        
        function moveLeft(){
            console.log('moveLeft中width',width)
        //到了已移動了剩倒數4張的照片的時候把transition關掉    
        if((-moveTotal)>=img_width*(img_train.value.length-(1+3))){
        moveTotal =0
        all_img.value.style.transition = 'none';
        all_img.value.style.left = moveTotal + "px";
        console.log('stop')
        
        
        }else{
        moveTotal+=moveAmount
        all_img.value.style.left = moveTotal + "px";
        all_img.value.style.transition = 'all 0.3s';
        // console.log("moveTotal",-moveTotal)
    }
        }

        const resizeWidrh=()=>{
            moveTotal =0
            all_img.value.style.left =0
            setMovefun()
        }

        const route=useRoute()
        watch(route,()=>{
            console.log("watch route ",route.params.id)
            getAlldata(route.params.id)
        },{deep:true})
      
        
        return{
            all_img,
            img_train,
            single_img,
            rowData,
            getAlldata,
            getImgTrain,
            onclickto,
            resizeWidrh

        }
    },
    created(){
        
        this.getAlldata(this.$route.params.id)
        
        window.addEventListener('resize',this.resizeWidrh);

    }
}
</script>