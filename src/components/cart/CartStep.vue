<!-- eslint-disable vue/valid-attribute-name -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
     <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-3 border rounded-2 py-2" :class="{['bg-primary']:stepArr[0]}">
                    <div class="count-step text-center text-black" :class="{['text-white']:stepArr[0]}">
                        <p class=" my-0  my-2">STEP1</p>
                        <p class="fw-bold my-0 my-2">確認購物清單</p>
                    </div>
                </div>
                <div class="col-1 p-0 d-flex flex-column justify-content-center" >              
                        <div class="w-100 linebox border" :class="{['bg-primary']:stepArr[1]}"></div>
                 
                </div>
                <div class="col-3 border rounded-2 py-2" :class="{['bg-primary']:stepArr[1]}">
                    <div class="count-step text-center text-black" :class="{['text-white']:stepArr[1]}">
                        <p class="my-0 my-2">STEP2</p>
                        <p class="fw-bold my-0 my-2">填寫訂購資料</p>
                    </div>
                </div>
                <div class="col-1 p-0 d-flex flex-column justify-content-center" >                   
                    <div class="w-100 linebox border" :class="{['bg-primary']:stepArr[2]}"></div>                
            </div>
            <div class="col-3 border rounded-2 py-2" :class="{['bg-primary']:stepArr[2]}">
                <div class="count-step text-center text-black" :class="{['text-white']:stepArr[2]}">
                    <p class=" my-0  my-2">STEP3</p>
                    <p class="text-cenetr  fw-bold my-0 my-2">付款/完成訂單</p>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
import { ref,watch,watchEffect} from 'vue';
import { usestatusStore } from '../../stores/usestatusStore';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

    export default{
      
        setup(){
            const stepArr =ref([true,false,false])
            const statusStore=usestatusStore()
            const {cartnextstep}=storeToRefs(statusStore)
            watch(cartnextstep,()=>{
                if(cartnextstep.value){
                 const rightnowTrueIndex=stepArr.value.findIndex((v) =>{return v === true})
                 stepArr.value[rightnowTrueIndex+1]=true
                 cartnextstep.value=false
                }
            })
            const route=useRoute()
            watchEffect(()=>{
                console.log('router.path',route.path)
                if(route.path==='/cart/step1'){
                    console.log('step1')
                    stepArr.value=[true,false,false]
                }else if(route.path==='/cart/step2'){
                    console.log('step2')
                    stepArr.value=[true,true,false]
                }else{
                    console.log('step3')
                    stepArr.value=[true,true,true]
                }
            })

            return{
                stepArr
            }
        }
    }
</script>