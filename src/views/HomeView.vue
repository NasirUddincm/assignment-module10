<script setup>
  import NavBar from '@/components/partials/NavBar.vue'
  import FooterComponent from '@/components/partials/FooterComponent.vue'
  import HeaderComponent from '@/components/partials/HeaderComponent.vue';
  import ProductsComponent from '@/components/products/ProductList.vue'
  import ContactComponent from '@/components/ContactComponent.vue'
  import SubsCribe from '@/components/SubsCribe.vue'
</script>

<template>
  <section>
       <NavBar/>
  </section>
    <!-- Hero -->
   <HeaderComponent/>
    <!-- Hero -->
    <!-- start products section -->
    <ProductsComponent/>
    <!-- end products section -->

    <!-- start contact section -->
    <ContactComponent/>
    <!-- end contact section -->
    <!-- start subscrib section -->
   <SubsCribe/>
    <!-- end subscrib section -->

    <!-- start footer -->    
    <FooterComponent/>
    <!-- end footer -->
</template>
