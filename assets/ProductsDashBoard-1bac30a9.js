import{N as k}from"./NavbarItem-0c30be33.js";import{F as x}from"./FooterItem-fa334690.js";import{_ as E,s as $,r as h,a as r,c as l,d as a,e as A,j as D,v as H,k as y,w as S,F as T,b as N,t as b,o as I,g as p,l as O,f as V,m as F,h as f}from"./index-5265e79b.js";import{u as B}from"./useproductsStore-bc0c29e8.js";import{e as U,d as K,B as q,E as u,r as P}from"./modal-4b85e49e.js";import{u as W}from"./usestatusStore-459a5872.js";import"./ModalAlert-712fdf2f.js";const j={setup(){const n=B(),{type:e,page:s}=$(n);return{showList:h(!1),type:e,sortArray:["主餐","輕食","甜點","飲料"],page:s}}},R={class:"col-12 col-lg-3 d-flex flex-column align-items-center px-3"},Y={class:"fs-4 fw-bold pt-3 pb-1 border-bottom border-4 mb-2 w-100 d-flex justify-content-center align-items-center"},Q={class:"d-lg-block list-group w-100 text-center mt-2"},z=["onClick"];function G(n,e,s,t,i,m){return r(),l("div",R,[a("div",Y,[A("產品分類  "),t.showList?(r(),l("i",{key:0,class:"bi bi-caret-right-square-fill d-lg-none fs-6",onClick:e[0]||(e[0]=o=>t.showList=!1)})):(r(),l("i",{key:1,class:"bi bi-caret-down-square-fill d-lg-none fs-6",onClick:e[1]||(e[1]=o=>t.showList=!0)}))]),D(a("div",Q,[a("a",{href:"#",class:y(["list-group-item list-group-item-action side-item fw-bold",{active:t.type==="產品列表"}]),onClick:e[2]||(e[2]=S(o=>{t.type="產品列表",t.page=1},["prevent"]))},"全部",2),(r(!0),l(T,null,N(t.sortArray,(o,c)=>(r(),l("a",{href:"#",class:y(["list-group-item list-group-item-action side-item fw-bold",{active:t.type===o}]),key:"sort"+c,onClick:S(_=>{t.type=o,t.page=1},["prevent"])},b(o),11,z))),128))],512),[[H,t.showList]])])}const J=E(j,[["render",G]]),X="toast",Z="bs.toast",d=`.${Z}`,ee=`mouseover${d}`,te=`mouseout${d}`,se=`focusin${d}`,oe=`focusout${d}`,ne=`hide${d}`,ae=`hidden${d}`,ie=`show${d}`,re=`shown${d}`,ce="fade",L="hide",g="show",w="showing",le={animation:"boolean",autohide:"boolean",delay:"number"},ue={animation:!0,autohide:!0,delay:5e3};class v extends q{constructor(e,s){super(e,s),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ue}static get DefaultType(){return le}static get NAME(){return X}show(){if(u.trigger(this._element,ie).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(ce);const s=()=>{this._element.classList.remove(w),u.trigger(this._element,re),this._maybeScheduleHide()};this._element.classList.remove(L),P(this._element),this._element.classList.add(g,w),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown()||u.trigger(this._element,ne).defaultPrevented)return;const s=()=>{this._element.classList.add(L),this._element.classList.remove(w,g),u.trigger(this._element,ae)};this._element.classList.add(w),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(g),super.dispose()}isShown(){return this._element.classList.contains(g)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,s){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=s;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=s;break}}if(s){this._clearTimeout();return}const t=e.relatedTarget;this._element===t||this._element.contains(t)||this._maybeScheduleHide()}_setListeners(){u.on(this._element,ee,e=>this._onInteraction(e,!0)),u.on(this._element,te,e=>this._onInteraction(e,!1)),u.on(this._element,se,e=>this._onInteraction(e,!0)),u.on(this._element,oe,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const s=v.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](this)}})}}U(v);K(v);const de={props:["mespops"],setup(n){const{mespops:e}=n;console.log("mespops",e),console.log("mespops.value",e.value);const s=e.value;console.log("mesdata",s);const t=h(null),i=h(null);return I(()=>{i.value=new v(t.value,{delay:6e3}),i.value.show()}),{mesdata:s,toastref:t}}},_e={ref:"toastref",class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true"},he={class:"me-auto"},me={class:"text-white"},fe=a("button",{type:"button",class:"btn-close gb-white","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),pe={class:"toast-body"};function ve(n,e,s,t,i,m){return r(),l("div",_e,[a("div",{class:y(["toast-header",t.mesdata.style])},[a("strong",he,b(t.mesdata.title),1),a("small",me,b(t.mesdata.time),1),fe],2),a("div",pe,b(t.mesdata.content),1)],512)}const ge=E(de,[["render",ve]]);const we={setup(){const n=h([]);return{Message:n,pushMessage:s=>{n.value.push(s)}}},components:{ToastItem:ge}},be={class:"toast-container pe-3 mt-3"};function Ee(n,e,s,t,i,m){const o=p("ToastItem");return r(),l("div",be,[(r(!0),l(T,null,N(t.Message,(c,_)=>(r(),O(o,{key:"Message"+_,mespops:c},null,8,["mespops"]))),128))])}const ye=E(we,[["render",Ee]]),Te={setup(){const n=W(),{toastmes:e}=$(n),s=h(null),t=h(!1),i=h(null);let m=0;const o=()=>{window.pageYOffset>m?t.value=!0:t.value=!1};I(()=>{window.addEventListener("scroll",o),m=s.value.getBoundingClientRect().height}),V(()=>{window.removeEventListener("scroll",o)});const c=_=>{console.log("Toastcomp.value",i.value),i.value.pushMessage(_)};return F(e,()=>{console.log("watch Toastcomp"),c(e)},{deep:!0}),{navbarEle:s,navbarshow:t,Toastcomp:i,showMes:c}},components:{NavbarItem:k,FooterItem:x,SideList:J,ToastMessage:ye},created(){window.addEventListener("scroll",this.navbarFixedfun)}},Se={ref:"navbarEle"},Le={class:"mt-2"},$e={class:"container-fluid"},Ne={class:"row"};function Ie(n,e,s,t,i,m){const o=p("NavbarItem"),c=p("router-view"),_=p("SideList"),M=p("FooterItem"),C=p("ToastMessage");return r(),l(T,null,[a("div",Se,[f(o,{navbarshow:t.navbarshow},null,8,["navbarshow"])],512),f(c),a("section",Le,[a("div",$e,[a("div",Ne,[f(_),f(c,{name:"mainproducts"})])])]),f(M),f(C,{ref:"Toastcomp"},null,512)],64)}const Oe=E(Te,[["render",Ie]]);export{Oe as default};
