import { createRouter,createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    // return 期望滚动到哪个的位置

    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsDashBoard.vue'),
      children: [
        {
          path: 'all',
          components: {
            default:() => import('../components/products/top/ProductsTopItemAll.vue'),
            mainproducts:() => import('../components/products/main/ProductsMainCards.vue')
          }
        },
      ],
    },
    {
      path: '/commodity/:id',
      name: 'commodity',
      component: () => import('../views/ProductPageView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      children:[{
        path: 'step1',
        component: () => import('../components/cart/CartTable.vue'),
      },{
        path: 'step2',
        component: () => import('../components/board/CartsteptwoBoard.vue'),
      },
      {
        path: 'step3',
        component: () => import('../components/board/CartstepthreeBoard.vue'),
      }
    ]
    },
 
  ]
})



export default router
