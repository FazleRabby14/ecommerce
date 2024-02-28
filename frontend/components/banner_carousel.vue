<template>
    <div class="carousel-container relative overflow-hidden">
      <div class="carousel-inner flex" 
           :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
           @touchstart="touchStart"
           @touchmove="touchMove"
           @touchend="touchEnd"
      >
        <div v-for="(product, index) in products" :key="index" class="carousel-item">

            <div class="relative">
              <img :src="product.imageSrc" :alt="product.name" class="carousel-image" />
              <!-- <div class="carousel-info">
                <h3 class="text-gray-600 font-bold text-lg">{{ product.name }}</h3>
                <p class="text-gray-600 text-sm">{{ product.description }}</p>
                <div><button class="text-base font-semibold text-gray-500">Explore more -></button></div>
              </div> -->
            </div>
            
      
        </div>
      </div>
      <div class="carousel-dots">
        <span v-for="(product, index) in products" :key="index"
              :class="{ 'active': currentIndex === index }"
              @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const currentIndex = ref(0);
  const touchStartX = ref(0);
  const touchEndX = ref(0);
  
  const products = ref([
    {
      imageSrc: "https://5.imimg.com/data5/SELLER/Default/2023/2/BN/BX/EG/154700276/img-20230220-wa0007-500x500.jpg",

    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU75q4rbn3uVGoYSkxvkFhTN-7bSFeBk1NSkciSxQwyBq6Z2brwTTfvOn&s=10",

    },
    {
      imageSrc: "https://allorabd.com/wp-content/uploads/2023/09/Comforter-Frame-2.jpg.webp",

    },
    {
      imageSrc: "https://5.imimg.com/data5/SELLER/Default/2023/2/BN/BX/EG/154700276/img-20230220-wa0007-500x500.jpg",

    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU75q4rbn3uVGoYSkxvkFhTN-7bSFeBk1NSkciSxQwyBq6Z2brwTTfvOn&s=10",
   
    },
    {
      imageSrc: "https://allorabd.com/wp-content/uploads/2023/09/Comforter-Frame-2.jpg.webp",
      link: "/doubleBedsheet",
      name: "Singel Bedsheet",
      description: "King Size Bed Sheet - Blue Color with Large Floral Print",
    },
  ]);
  
  function goToSlide(index) {
    currentIndex.value = index;
  }
  
  function touchStart(event) {
    touchStartX.value = event.touches[0].clientX;
  }
  
  function touchMove(event) {
    touchEndX.value = event.touches[0].clientX;
  }
  
  function touchEnd() {
    if (touchEndX.value < touchStartX.value) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  
  function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % products.value.length;
  }
  
  function prevSlide() {
    currentIndex.value = currentIndex.value === 0 ? products.value.length - 1 : currentIndex.value - 1;
  }
  </script>
  
  <style>
  .carousel-container {
    width: 75%;
    overflow: hidden;
    position: sticky;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-item {
    flex: 0 0 100%;
  }
  
  .carousel-image {
    width: 100%;
    max-height: 400px;
    height: auto;
  }
  
  .carousel-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    text-align: left;
  }
  
  .carousel-dots {
    position: absolute;
    bottom: 10px; /* Adjust vertical position as needed */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  
  .carousel-dots span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .carousel-dots span.active {
    background-color: black;
  }
</style>
