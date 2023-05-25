<template>
    <div ref="toastref" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header" :class="mesdata.style" >
      <strong class="me-auto">{{ mesdata.title }}</strong>
      <small class="text-white" >{{mesdata.time}}</small>
      <button type="button" class="btn-close gb-white" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {{ mesdata.content }}
    </div>
  </div>
</template>

<script>
import { onMounted,ref } from 'vue'
import Toast from '../../node_modules/bootstrap/js/src/toast'


export default{
    props:['mespops'],
    setup(props){
        //memespops是ObjectRefImpl
        // eslint-disable-next-line vue/no-setup-props-destructure
        const {mespops}=props
        console.log('mespops',mespops)
        //mespops.value是Proxy(Object)
        console.log('mespops.value',mespops.value)
        const mesdata =mespops.value
        console.log("mesdata",mesdata)
        

        const toastref=ref(null)
        const toastIns =ref(null)
        onMounted(()=>{
            toastIns.value=new Toast(toastref.value,{delay:6000})
            toastIns.value.show()
        })

        return{
            // eslint-disable-next-line vue/no-dupe-keys
            mesdata,
            toastref,
            
        }
    }
}
</script>

