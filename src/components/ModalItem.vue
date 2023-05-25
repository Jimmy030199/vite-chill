<!-- eslint-disable vue/no-setup-props-destructure -->
<template>
    <div ref="modal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" :class="modalmes.style">
        <h5 class="modal-title" id="exampleModalLabel">{{ modalmes.title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{ `將加入${modalmes.title}${modalmes.qty}個進入購物車中` }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="Modalhide">取消</button>
        <button type="button" class="btn btn-primary" @click="addCart">新增</button>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import Modal from '../../node_modules/bootstrap/js/src/modal'
import { ref,onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usestatusStore } from '../stores/usestatusStore'
import { usecommodityStore } from '../stores/usecommodityStore'


export default{
    setup(){
        const statusStore=usestatusStore()
        // eslint-disable-next-line vue/no-setup-props-destructure
        const {modalmes}=storeToRefs(statusStore)
 
        const modal=ref(null)
        const ModalInstance=ref(null)
        onMounted(()=>{
           ModalInstance.value = new Modal(modal.value)

        })

        const Modalshow=()=>{
            ModalInstance.value.show()
        }
        const Modalhide=()=>{
            ModalInstance.value.hide()
        }

        const commodityStore=usecommodityStore()
        const {confirmaddCart}=storeToRefs(commodityStore)
        const addCart =()=>{
          confirmaddCart.value=true
        }
        return{
            modal,
            //可調用Modal的實體中的方法
            ModalInstance,
            Modalshow,
            Modalhide,
            modalmes,
            addCart
            
        }
    },

}
</script>