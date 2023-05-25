import{_ as L,r as _,s as x,u as T,m as S,g as $,a as f,c as v,d as t,F as k,b as D,t as c,h as z,z as B}from"./index-5265e79b.js";import{a as E}from"./useproductsStore-bc0c29e8.js";import{u as R}from"./usestatusStore-459a5872.js";const A={setup(){const r=_([]),h=_(0),p=_(0),s=_(0),b=_(0),m=R(),{isLoading:d}=x(m),o=T(),i=()=>{const n="https://vue3-course-api.hexschool.io/api/chillstore_api/cart";d.value=!0,N.value=!0;let e=[];B.get(n).then(a=>{if(console.log("getCardData",a),a.status===200){a.data.data.carts.forEach(l=>{l.qty<1&&(e=[...e,l.id])}),console.log("numiszeroIdArr",e);const C=a.data.data.carts.filter(l=>l.qty>0);C.length<1&&o.push("/products/all"),r.value=C,u(),g.value=!1,d.value=!1,e.length!==0&&(e.forEach(l=>{y(l)}),e=[])}})},u=()=>{p.value=r.value.reduce((n,e)=>n+e.qty,0),s.value=r.value.reduce((n,e)=>n+e.qty*e.product.price,0),b.value=s.value+h.value},w=E(),{confirmupdateCart:g,navbargetCartLength:N}=x(w),{updateCart:q,deleteOnecart:y}=w,I=(n,e,a)=>{console.log("傳入的值",typeof n,typeof a),console.log("傳入的值",n,a),q(n,e,a)};return S(g,()=>{g.value&&i()}),{getCardData:i,changeproductsNum:I,deleteCartItem:n=>{y(n),i()},carts:r,freight:h,productsNum:p,cashTotal:s,payTotal:b,isLoading:d}},created(){this.getCardData()}},F={class:"container pb-5"},U={class:"row"},V={class:"col-12"},O={class:"table-responsive"},Z={class:"table align-middle text-center"},j=t("thead",{class:"bg-dark text-white"},[t("th",{class:"no-wrap"},"縮圖"),t("th",null,"品名"),t("th",null,"數量"),t("th",null,"原價"),t("th",null,"售價"),t("th",null,"刪除")],-1),G={class:"table-imgwarp"},H=["src"],J={class:"fw-bold no-wrap"},K={class:"btn-group border"},M=["onClick"],P={class:"btn btn-sm btn-lg-responsive border-end fw-bold btn-lg"},Q=["onClick"],W={class:"fw-bold no-wrap text-decoration-line-through text-secondary"},X={class:"fw-bold no-wrap text-success"},Y={class:"fw-bold fs-3"},tt=["onClick"],ot=t("i",{class:"bi bi-x"},null,-1),st=[ot],et={class:"fw-bold mt-2"},nt={class:"no-border"},at=t("td",{colspan:"2"},null,-1),ct=t("td",{colspan:"1"},null,-1),lt={class:"no-wrap"},rt=t("td",{class:"no-wrap"},"總計",-1),dt={class:"no-wrap"},it={class:"no-border"},_t=t("td",{colspan:"2"},null,-1),ut=t("td",{colspan:"2"},null,-1),ht=t("td",{class:"no-wrap pt-0"},"運費",-1),pt={class:"no-wrap pt-0"},bt={class:"no-border"},gt=t("td",{colspan:"2"},null,-1),ft=t("td",{colspan:"2"},null,-1),vt=t("td",{class:"no-wrap pt-0"},"共計",-1),mt={class:"no-wrap pt-0"};function wt(r,h,p,s,b,m){const d=$("LoadingItem");return f(),v(k,null,[t("div",F,[t("div",U,[t("div",V,[t("div",O,[t("table",Z,[j,t("tbody",null,[(f(!0),v(k,null,D(s.carts,(o,i)=>(f(),v("tr",{key:"cart"+i},[t("td",G,[t("img",{class:"table-img",src:o.product.imageUrl},null,8,H)]),t("td",J,c(o.product.title),1),t("td",null,[t("div",K,[t("button",{type:"button",class:"btn btn-sm btn-lg-responsive border-end fw-bold",onClick:u=>s.changeproductsNum(o.id,o.product_id,o.qty-1)},"-",8,M),t("span",P,c(o.qty),1),t("button",{type:"button",class:"btn btn-sm btn-lg-responsive border-start fw-bold",onClick:u=>s.changeproductsNum(o.id,o.product_id,o.qty+1)},"+",8,Q)])]),t("td",W,"$"+c(o.product.origin_price)+"元",1),t("td",X,"$"+c(o.product.price)+"元",1),t("td",Y,[t("button",{class:"btn btn-outline-danger",onClick:u=>s.deleteCartItem(o.id)},st,8,tt)])]))),128))]),t("tfoot",et,[t("tr",nt,[at,ct,t("td",lt,"共 "+c(s.productsNum)+" 件",1),rt,t("td",dt,"$"+c(s.cashTotal)+"元",1)]),t("tr",it,[_t,ut,ht,t("td",pt,"$"+c(s.freight)+"元",1)]),t("tr",bt,[gt,ft,vt,t("td",mt,"$"+c(s.payTotal)+"元",1)])])])])])])]),z(d,{active:s.isLoading},null,8,["active"])],64)}const Nt=L(A,[["render",wt]]);export{Nt as default};
