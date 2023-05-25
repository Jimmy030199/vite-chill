<template>
    <LoadingItem :active="isLoading"></LoadingItem>
 <FormItem v-slot="{errors}" @submit="onSubmit" class="payform bg-secondary-subtle p-3 rounded ">
    <!-- {{ errors }} <br> {{ values }}   -->
                    <div class="col-12">
                      <div class="row">
                        <div class="col-6">
                        <label for="name" class="fs-5 fw-bold mb-1"><span class="text-danger fs-5">*</span> 收件人姓名：</label>  
                        <FieldItem v-model="formValue.name" :class="{ 'is-invalid': errors['收件人姓名'] }" rules="required" type="text" name="收件人姓名" class="w-100 " id="name"  placeholder=" 請輸入姓名"></FieldItem>
                        <ErrorMessage name="收件人姓名" class="invalid-feedback text-danger fw-bold"></ErrorMessage>
                        </div>
                        <div class="col-6">
                            <label for="phone" class="fs-5 fw-bold mb-1"><span class="text-danger fs-5">*</span> 收件人手機:</label>                  
                            <FieldItem v-model="formValue.phone" :rules="definePhoneRule" required :class="{ 'is-invalid': errors['收件人手機'] }" type="text" name="收件人手機" class="w-100 " id="phone"  placeholder=" 請輸入收件人手機" ></FieldItem>
                            <ErrorMessage name="收件人手機" class="invalid-feedback text-danger fw-bold"></ErrorMessage>
                        </div>
                    </div>
                  
                    <div class="col-12 mt-2">
                        <label for="email" class="fs-5 fw-bold mb-1"><span class="text-danger fs-5">*</span> 電子郵件：</label>  
                        <FieldItem v-model="formValue.email" rules="email|required" :class="{ 'is-invalid': errors['電子郵件'] }" type="text" name="電子郵件" class="w-100 " id="email"  placeholder=" 請輸入姓名"></FieldItem>
                        <ErrorMessage name="電子郵件" class="invalid-feedback text-danger fw-bold"></ErrorMessage>
                    </div>
                    <div class="col-12 mt-2">
                        <label for="address" class="fs-5 fw-bold mb-1"><span class="text-danger fs-5">*</span> 收件人地址：</label>  
                        <FieldItem v-model="formValue.address" rules="required" :class="{ 'is-invalid': errors['收件人地址'] }" type="text" name="收件人地址" class="w-100 " id="address"  placeholder=" 請輸入收件人地址"></FieldItem>
                        <ErrorMessage name="收件人地址" class="invalid-feedback text-danger fw-bold "></ErrorMessage>
                    </div>
                    <div class="col-12 mt-2">
                        <label for="paymethod" class="fs-5 fw-bold mb-1"><span class="text-danger fs-5">*</span> 請選擇付款方式：</label>  
                        <FieldItem  v-model="formValue.paymethod" as="select" rules="required" name="付款方式" :class="{ 'is-invalid': errors['付款方式'] }" class="w-100" id="paymethod" >
                            <option selected disabled value="" class="text-secondary">請選擇付款方式</option>
                            <option value="googlepay">GooglePay</option>
                            <option value="applepay">APPlePay</option>
                            <option value="cash">現金支付</option>
                        </FieldItem >
                        <ErrorMessage name="付款方式" class="invalid-feedback text-danger fw-bold"></ErrorMessage>
                    </div>
                    <div class="col-12 mt-2">
                        <label for="paymethod" class="fs-5 fw-bold mb-1">備註：</label>
                        <textarea v-model="formValue.message" class="w-100" placeholder=" 留言給我們"></textarea>  

                    </div>
                    <div class="col-12 text-center mt-1">
                        <button type="submit" class="btn btn-outline-success btn-lg"><i class="bi bi-card-checklist"></i> &nbsp;確認送出</button>
                    </div>                  
                </div>
            </FormItem>
            <ModalAlert ref="Modalref"></ModalAlert>

</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import ModalAlert from '../ModalAlert.vue'
import { usecommodityStore } from '../../stores/usecommodityStore'
import { usestatusStore } from '../../stores/usestatusStore'

import { storeToRefs } from 'pinia'
export default{
    setup(){
        const statusStore=usestatusStore()
        const commodityStore=usecommodityStore()
        const {alertModalmes,paybotton,isLoading}=storeToRefs(statusStore)
        const {orderListId,navbargetCartLength}=storeToRefs(commodityStore)

        const Modalref=ref(null)
      
        const onSubmit=()=>{
           console.log(formValue.value)
           const data ={
                        "data": {
                            "user": {
                            "name": formValue.value.name,
                            "email": formValue.value.email,
                            "tel": formValue.value.phone,
                            "address": formValue.value.address
                            },
                            "message": formValue.value.message
                        }
                      }
            const URL = `${(import.meta.env.VITE_URL_API)}api/${(import.meta.env.VITE_URL_API_PATH)}/order`
            isLoading.value=true
            axios.post(URL,data)
                   .then((res)=>{
                       if(res.data.success){
                        console.log('訂單發送成功',res.data.message,res.data.orderId)
                        orderListId.value=res.data.orderId
                        alertModalmes.value={style:'bg-success text-white',title:res.data.message,content:`訂單發送成功您的訂單編號:${res.data.orderId}`,btn:{name:'確認',path:'/cart/step3'},close:false}
                        Modalref.value.Modalshow()
                        isLoading.value=false
                        navbargetCartLength.value=true
                        paybotton.value=true
                       }
                   })
      
        }

        const formValue=ref({
            name:'',
            phone:'',
            email:'',
            address:'',
            paymethod:'',
            message:'',
        })

        const definePhoneRule=(value)=>{
            // required 规则验证逻辑
         if (!value) {
           return "收件人手機 為必填";
           }
           const phoneNumber =/^09\d{2}-?\d{3}-?\d{3}$/
           return phoneNumber.test(value) ? true : '需要正確的電話號碼'
           
        }

        
        return{
       
            formValue,
            onSubmit,
            definePhoneRule,
            Modalref,
            isLoading
            
        }
    },
    components:{
        ModalAlert
    }
}
</script>