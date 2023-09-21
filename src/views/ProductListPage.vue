<script setup>
import NavBar from '@/components/partials/NavBar.vue';
import FooterComponent from '@/components/partials/FooterComponent.vue'
import { products } from '@/components/database/products.js'
import { RouterLink } from 'vue-router';
</script>
<template>    
    <NavBar/>
    <section class="bg-secondary-subtle py-3 mt-5">
        <div class="container px-4 py-5" id="custom-cards">
            <h2 class="pb-2 border-bottom text-center fw-bold">Our Products</h2>
        
            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div class="col" v-for="product in products" :key="product.id">
                    <div class="card-blog card-plain">
                        <div class="position-relative">
                        <RouterLink class="d-block blur-shadow-image" :to="`product-details/` + product.id">
                            <img :src="product.image" alt="shadow-sm" class="img-fluid shadow rounded-4">
                        </RouterLink>
                        </div>
                        <div class="card-body px-1 pt-3">
                        
                        <a href="javascript:;" class="nav-link"><h5>{{product.name}}</h5></a>
                        <p>
                            {{product.description}}    
                        </p>
                        <button type="button" class="btn btn-warning me-2">Buy Now</button>
                        <button type="button" class="btn btn-outline-warning text-dark">Learn More</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>
    <FooterComponent/>
</template>