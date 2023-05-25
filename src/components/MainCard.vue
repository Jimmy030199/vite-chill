<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-setup-props-destructure -->
<template>
    <div v-for="(item,i) in dataArray" :key="'maincard'+i" class="col main-card px-0 mb-2" ref="maincardref" @click="clicktoproducts(item.category)" @mouseover="hoverMainCard(i)" @mouseout="mouseoutMainCard(i)" :style="{ backgroundImage: `url(${item.url})` }">
        <a href="#" class="text-decoration-none" ref="main_aLink_ref">
            <div class="gray-filter p-3">
                <div class="box d-flex flex-column justify-content-center align-items-center">
                    <h4 class="text-white border-bottom border-2 mb-3">{{ item.title }}</h4>
                    <p class="text-white fs-6 text-center">{{ item.text_first }}<br>{{ item.text_sec }}</p>
                                    
                 </div>
            </div>
        </a>                      
    </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { useproductsStore } from '../stores/useproductsStore'
import { storeToRefs } from 'pinia'
export default{
    props: ['dataforMaincard'],
    setup(props){

        // eslint-disable-next-line vue/no-setup-props-destructure
        const dataArray = props.dataforMaincard
        const maincardref=ref([])
        const main_aLink_ref=ref([])
        const router=useRouter()
        const productsStore= useproductsStore()
        const{type}=storeToRefs(productsStore)

      

        onMounted(()=>{
            // 在 mount 後打印參考的元素
            console.log('onmount後maincardref',maincardref.value);
            const maincardrefEle1 =  maincardref.value[0]
            console.log('onmount後main_aLink_ref',main_aLink_ref.value);
            const main_aLink_refEle1 =  main_aLink_ref.value[0]
            console.log('輸出1',maincardrefEle1,main_aLink_refEle1);



        })
       
        let a_link_element=''
       
        const hoverMainCard=(i)=>{
            a_link_element=main_aLink_ref.value[i]
            main_aLink_ref.value[i].remove()
        }
        const mouseoutMainCard=(i)=>{
            maincardref.value[i].append(a_link_element)
        }

        const clicktoproducts=(category)=>{
            console.log('clickmaincard')
            type.value=category
            router.push('/products/all')
        }

        return{
            dataArray,
            maincardref,
            main_aLink_ref,
            hoverMainCard,
            mouseoutMainCard,
            clicktoproducts
        }
    },
}
</script>

<style>

</style>