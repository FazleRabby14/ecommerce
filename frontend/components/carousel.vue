<template>
  <!-- Slider -->
  <div class="slider relative overflow-hidden mx-auto justify-center h-[150px] md:h-[300px] lg:h-[400px]" @mouseover="stopAutoSlide" @mouseleave="startAutoSlide">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.src" :alt="slide.alt" class="slide-img object-cover w-full h-auto max-h-[600px]" />
      </div>
    </div>
    <button class="prev" @click="moveSlide(-1)">
      <span aria-hidden="true" class="absolute inset-0"></span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-3 w-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
      </svg>
    </button>
    <button class="next" @click="moveSlide(1)">
      <span aria-hidden="true" class="absolute inset-0"></span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-3 w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
      </svg>
    </button>
  </div>
  <!-- End Slider -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
const slides = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxpV2dbGYs4pGhC1PHwFdxGkw0ghFYSfdmg&usqp=CAU", alt: "Wild Landscape" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxaX4xA_OpYEK9VLHClEfg8uwapIMX5JsYA&usqp=CAU", alt: "Camera" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBVC9z1csTJoygV60AOpOI2y5Muy_JQBWfw&usqp=CAU", alt: "Exotic Fruits" }
];

function moveSlide(n) {
  currentSlide.value = (currentSlide.value + n + slides.length) % slides.length;
}

let intervalId;

function startAutoSlide() {
  intervalId = setInterval(() => {
    moveSlide(1);
  }, 3000); // Change the interval as needed (in milliseconds)
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<style scoped>
.slides {
  display: flex;
  transition: transform 1s ease; /* Adjust the transition duration as needed */
}
.slide {
  flex: 0 0 100%;
}
button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
}
.prev {
  left: 10px;
}
.next {
  right: 10px;
}
</style>
