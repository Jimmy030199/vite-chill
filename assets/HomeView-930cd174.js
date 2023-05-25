import{N as j}from"./NavbarItem-a617266d.js";import{_ as y,r as p,u as k,s as H,o as u,a as g,c as h,b as $,n as T,d as o,t as m,e as w,F as M,f as E,g as x,h as b,w as L,i as f}from"./index-b53869ae.js";import{u as N}from"./useproductsStore-875e24d4.js";import"./usestatusStore-0e436d0e.js";import"./ModalAlert-c29ac92f.js";import"./modal-4b85e49e.js";const B={props:["dataforMaincard"],setup(d){const s=d.dataforMaincard,n=p([]),e=p([]),r=k(),c=N(),{type:t}=H(c);u(()=>{console.log("onmount後maincardref",n.value);const l=n.value[0];console.log("onmount後main_aLink_ref",e.value);const C=e.value[0];console.log("輸出1",l,C)});let a="";return{dataArray:s,maincardref:n,main_aLink_ref:e,hoverMainCard:l=>{a=e.value[l],e.value[l].remove()},mouseoutMainCard:l=>{n.value[l].append(a)},clicktoproducts:l=>{console.log("clickmaincard"),t.value=l,r.push("/products/all")}}}},R=["onClick","onMouseover","onMouseout"],S={class:"gray-filter p-3"},V={class:"box d-flex flex-column justify-content-center align-items-center"},W={class:"text-white border-bottom border-2 mb-3"},I={class:"text-white fs-6 text-center"},z=o("br",null,null,-1);function A(d,s,n,e,r,c){return g(!0),h(M,null,$(e.dataArray,(t,a)=>(g(),h("div",{key:"maincard"+a,class:"col main-card px-0 mb-2",ref_for:!0,ref:"maincardref",onClick:i=>e.clicktoproducts(t.category),onMouseover:i=>e.hoverMainCard(a),onMouseout:i=>e.mouseoutMainCard(a),style:T({backgroundImage:`url(${t.url})`})},[o("a",{href:"#",class:"text-decoration-none",ref_for:!0,ref:"main_aLink_ref"},[o("div",S,[o("div",V,[o("h4",W,m(t.title),1),o("p",I,[w(m(t.text_first),1),z,w(m(t.text_sec),1)])])])],512)],44,R))),128)}const F=y(B,[["render",A]]),D=[{title:"簡選主餐",category:"主餐",text_first:"精心製作的餐點，給您充滿味覺",text_sec:"與視覺的美食饗宴。",url:"https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1600"},{title:"必吃甜點",category:"甜點",text_first:"精緻夢幻甜點，是不容錯過的經",text_sec:"典好味道。",url:"https://images.pexels.com/photos/15359108/pexels-photo-15359108.jpeg?auto=compress&cs=tinysrgb&w=1600"},{title:"特調飲品",category:"飲料",text_first:"獨家研發的特調黃金比例，值得",text_sec:"您來細細品嚐。",url:"https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1600"}],J={setup(){console.log('("https://vue3-course-api.hexschool.io/")',"https://vue3-course-api.hexschool.io/");const d=p(null),s=p(null),n=p(!1);let e=0;const r=()=>{const i=window.pageYOffset;console.log("navHeight",e),i>e?n.value=!0:n.value=!1};let c=0;const t=()=>{console.log("onMounted maincardWrap",s.value.getBoundingClientRect().height);const i=s.value.getBoundingClientRect().height;console.log("onMounted offsetTop",s.value.offsetTop);const v=s.value.offsetTop;console.log("window.innerHeight",window.innerHeight);const _=window.innerHeight;c=v-(_-i)/2,console.log("rolltoMainCardHeight",c)};u(()=>{t(),e=d.value.getBoundingClientRect().height});const a=()=>{console.log("fun中的rolltoMainCardHeight",c),window.scrollTo(0,c)};return u(()=>{window.addEventListener("scroll",r),window.addEventListener("resize",t)}),E(()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",t)}),{navbarEle:d,maincardWrap:s,navbarshow:n,dataforMaincard:D,navbarFixedfun:r,scollToMainCard:a,writeHeight:t}},components:{NavbarItem:j,MainCard:F}},O={class:"vh-100 main-section"},U={ref:"navbarEle"},Y=f('<div class="container"><div class="row justify-content-center align-items-center wraphight"><div class="col-8 col-lg-6"><div class="note d-flex flex-column justify-content-center align-items-center p-5"><h2 class="text-white mb-3">Chill</h2><p class="w-100 text-white text-center fs-6 fs-lg-5 pb-3">放慢您的步調，遠離都市喧囂，來場療癒的美食饗宴吧。</p><button type="button" class="btn text-white btn-outline-secondary fs-6 fs-lg-4">立即選購  <i class="bi bi-shop"></i></button></div></div></div></div><div class="triangle"></div>',2),q=o("img",{class:"triangle-img",src:"https://carol-yang09.github.io/Adagio/img/scroll.497a5702.gif",alt:""},null,-1),G=[q],K=f('<div class="container-fluid"><div class="row space-item"><div class="col-12 col-lg-6 py-3 d-flex flex-column justify-content-center align-items-center"><h3 class="htitle mb-3 mb-lg-4">嚴選食材</h3><p class="w-75 w-lg-50 fs-5 text-center m-0">Chill 嚴選每樣用料，謹慎檢驗每道食材，確保新鮮美味，且所有料理堅持現點現做 ，讓您吃得健康又安心。</p></div><div class="col-12 col-lg-6 d-flex justify-content-center align-items-center"><div class="img-wrap d-flex justify-content-end pe-2"><img src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" alt=""></div><div class="img-wrap ps-2"><img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" alt=""></div></div></div></div>',1),P={class:"container-fluid bg-white"},Q={class:"row row-cols-1 row-cols-lg-3 px-2",ref:"maincardWrap"},X=f('<section class="sec-section"><div class="container-fluid"><div class="row space-item"><div class="col-12 col-lg-6 d-flex justify-content-center align-items-center"><div class="img-wrap d-flex justify-content-end pe-2"><img src="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" alt=""></div><div class="img-wrap ps-2"><img src="https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" alt=""></div></div><div class="col-12 col-lg-6 py-3 d-flex flex-column justify-content-center align-items-center"><h3 class="htitle mb-3 mb-lg-4">舒適環境</h3><p class="w-75 w-lg-50 fs-5 text-center m-0">Chill 位於台北 101 大樓 1 樓，以簡約歐式風格裝潢，打造舒適溫馨的氣氛 ，讓您在繁忙的生活中，得到療癒的力量。</p></div></div><div class="w-100 d-flex flex-column align-items-center" style="height:250px;"><p class="w-100 text-white fs-3 text-center my-auto">放慢您的步調，跟著 Chill 享受生活的樂趣。<br><span class="fs-6 pt-3">ⓒ 2023 Chill by Jimmy   | </span></p></div></div></section>',1);function Z(d,s,n,e,r,c){const t=x("NavbarItem"),a=x("MainCard");return g(),h(M,null,[o("section",O,[o("div",U,[b(t,{navbarshow:e.navbarshow},null,8,["navbarshow"])],512),Y,o("a",{href:"#",onClick:s[0]||(s[0]=L((...i)=>e.scollToMainCard&&e.scollToMainCard(...i),["prevent"]))},G)]),o("section",null,[K,o("div",P,[o("div",Q,[b(a,{dataforMaincard:e.dataforMaincard},null,8,["dataforMaincard"])],512)])]),X],64)}const ie=y(J,[["render",Z]]);export{ie as default};