<template>
    <div class="wrapper">
      <div class="search-input">
        <a href="" target="_blank" hidden></a>
        <input type="text" placeholder="Type to search.." @keyup="handleInput">
        <div class="autocom-box" v-show="isActive">
          <ul>
            <li v-for="suggestion in suggestions" :key="suggestion" @click="select(suggestion)">{{ suggestion }}</li>
          </ul>
        </div>
        <div class="icon" @click="search"><i class="fas fa-search"></i></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const suggestions = ref([]);
  const isActive = ref(false);
  
  const handleInput = (event) => {
    const userData = event.target.value.trim();
    if (userData) {
      isActive.value = true;
      // Perform suggestions filtering here
      // and update suggestions
    } else {
      isActive.value = false;
    }
  };
  
  const search = () => {
    // Perform search action
  };
  
  const select = (suggestion) => {
    isActive.value = false;
    // Perform action when suggestion is selected
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS classes can be applied directly here */
  </style>
  