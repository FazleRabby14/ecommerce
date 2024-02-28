<template>
    <div
      class="flex md:flex-wrap overflow-x-auto scrollbar-hide gap-[20px] px-2 py-3 md:py-10 mx-auto"
    >
      <div v-for="(product, index) in products" :key="index" class="relative md:w-[250px] flex-shrink-0">
        <nuxt-link class="cursor-pointer" :to="product.link">
          <div
            class="relative"
            @mouseenter="product.showButton = true"
            @mouseleave="product.showButton = false"
          >
            <img
              :src="product.imageSrc"
              :alt="product.name"
              class="h-56 w-64 md:h-60 md:w-60 mx-auto"
            />
            <div class=" bottom-0 left-0 w-64 px-2 bg-white bg-opacity-75 py-2 mb-4">
      <h3 class="text-gray-600 font-bold text-lg">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm">{{ product.description }}</p>
    </div>
          
          </div>
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const products = ref([
    {
      imageSrc: "https://5.imimg.com/data5/SELLER/Default/2023/2/BN/BX/EG/154700276/img-20230220-wa0007-500x500.jpg",
      link: "/doubleBedsheet",
      name : 'Bamboo Charcoal',
      description: 'King Size Bed Sheet - Blue Color with Large Floral Print',
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU75q4rbn3uVGoYSkxvkFhTN-7bSFeBk1NSkciSxQwyBq6Z2brwTTfvOn&s=10",
      link: "/doubleBedsheet",
      name : 'Rangana',
      description: 'King Size Bed Shee- Blue Color with Large Floral Print',
    },
    {
      imageSrc: "https://allorabd.com/wp-content/uploads/2023/09/Comforter-Frame-2.jpg.webp",
      link: "/doubleBedsheet",
      name : 'Singel Bedsheet',
      description: 'King Size Bed Sheet- Blue Color with Large Floral Print',
    },
    // Add more products as needed
  ]);
  </script>
