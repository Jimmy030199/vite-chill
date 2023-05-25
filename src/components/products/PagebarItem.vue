<template>
      <div class="col-12 d-flex justify-content-center align-items-center mt-3">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous" :class="{disabled:page===1}" @click.prevent="page-=1">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item" v-for="(item,i) in  totalPage" :key="'Page'+i">
                            <a class="page-link" href="#" @click.prevent="page=item" :class="{active:item===page}">{{ item }}</a>
                        </li>
                      
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next" :class="{disabled:page===totalPage}" @click.prevent="page+=1">
                             <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
        </div>
</template>

<script>
import {useproductsStore} from '../../stores/useproductsStore.js'
import { storeToRefs } from 'pinia'
export default{
    setup(){
        const productsStore = useproductsStore()
        const {totalPage,page} = storeToRefs(productsStore)
        return{
            totalPage,
            page
        }
    }
}

</script>