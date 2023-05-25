import { createApp,markRaw } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
// Import component
import Loading from 'vue3-loading-overlay';
// Import stylesheet
import '../node_modules/vue3-loading-overlay/dist/vue3-loading-overlay.css';
//vee-validate匯入元件及檢查規則及語系設定
import {Field,Form,ErrorMessage,defineRule,configure} from 'vee-validate'
// 匯入 vee-validate 相關規則
import {required,email} from '@vee-validate/rules'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
 });
 // 設定預設語系
setLocale('zh_TW');

const app = createApp(App)
const pinia = createPinia();

//讓pinia也可以用$router
pinia.use(({ store }) => {
    store.$router = markRaw(router)
  });
  
app.use(pinia)
app.use(router)
app.use(VueAxios, axios)
app.component('LoadingItem', Loading)
// 註冊 vee-validate 三個全域元件
app.component('FormItem', Form);
app.component('FieldItem', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app')
