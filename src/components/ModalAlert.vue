<!-- eslint-disable vue/no-setup-props-destructure -->
<template>
  <div ref="ModalAlertRef" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" :class="alertModalmes.style">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ alertModalmes.title }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{ alertModalmes.content }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-show="alertModalmes.close">關閉</button>
        <button type="button" class="btn btn-primary" v-if="defaultbtnShow">確認</button>
        <button type="button" class="btn btn-primary" v-else @click="btnfnto">{{ alertModalmes.btn.name }}</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Modal from '../../node_modules/bootstrap/js/src/modal'
import { ref,onMounted,watch } from 'vue'
import { usestatusStore } from '../stores/usestatusStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'



export default{
    setup(){
     
       const statusStore=usestatusStore()
       const{alertModalmes}=storeToRefs(statusStore)
       const ModalAlertRef=ref(null)
       const ModalInstance=ref(null)
       const defaultbtnShow=ref(true)


        onMounted(()=>{
           ModalInstance.value = new Modal(ModalAlertRef.value)

        })
        watch(alertModalmes,()=>{
          if(alertModalmes.value.btn.path){
            defaultbtnShow.value=false
          }
        })

        const Modalshow=()=>{
            ModalInstance.value.show()
        }
        const Modalhide=()=>{
            ModalInstance.value.hide()
        }
        const router=useRouter()
        const btnfnto=()=>{
          Modalhide()
          router.push(alertModalmes.value.btn.path)
        }

       
        return{
            ModalAlertRef,
            Modalshow,
            Modalhide,
            alertModalmes,
            defaultbtnShow,
            btnfnto
            
        }
    },

}
</script>