<script setup>
import { computed } from 'vue';
import NavBar from '@/components/partials/NavBar.vue';
import FooterComponent from '@/components/partials/FooterComponent.vue'
import { products } from '@/components/database/products.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = computed(() => route.params.id);

let product = computed(() => {
  return products.find(product => product.id == productId.value);

});

</script>
<template>
    <NavBar/>

    <section class="py-5 my-5">
        <div class="container-fluid">
        <div class="row">   
            <div class="col-lg-5 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
                <img class="w-100 border-radius-lg shadow img-thumbnail" :src="product.image">
            </div>         
            <div class="col-lg-4 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
            <h2 class="mb-0 mt-lg-0 mt-4 text-gradient text-info">
                {{product.name}} Details       
            </h2>      
            
            <p class="lead my-2">
                {{product.description}}
            </p>   
               
            </div>            
        </div>
        </div>
    </section>
    <!-- end content -->
    <FooterComponent/>
</template>