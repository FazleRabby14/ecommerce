<template>
  <div class="container mx-auto my-4 p-4">
    <div class="flex flex-col md:flex-row">
      <!-- Image Slider -->
      <banner-carousel/>

      <!-- Product Details -->
      <div class="w-full md:w-1/2 mb-4 px-4 md:ml-4">
        <div class="mb-4">
          <h1 class="text-3xl font-semibold mb-2"></h1>

          <!-- Prices -->
          <div class="flex flex-col md:flex-row items-center mb-4">
            <span class="text-lg font-semibold mb-2 md:mr-2">Tk.3500</span>
            <span class="text-sm text-gray-500 line-through mb-2 md:mb-0 md:mr-2">Tk.2000</span>
          </div>

         <!-- ? <p class="text-black-600 mb-4 text-xl-lg">{{ product.description }}</p> -->
          <div class="flex flex-col md:flex-row items-center mb-4">
            <p class="text-black-600 mb-4 text-base md:mr-8">SKU:PB-24452</p>
            <p class="text-wild-strawberry-600 mb-4 text-base ">16 in stock</p>
          </div>

          <!-- Quantity Selector -->
          <div class="flex items-center mb-4">
            <button @click="decreaseQuantity" class="bg-wild-strawberry-500 text-xl font-semibold px-2 py-1 bg-gray-300 text-white">-</button>
            <span class="m-4 px-4 py-2 border border-wild-strawberry-700">{{ quantity }}</span>
            <button @click="increaseQuantity" class="bg-wild-strawberry-500 text-xl font-semibold px-2 py-1 bg-gray-300 text-white">+</button>
            <button @click="buyProduct" class="bg-wild-strawberry-500 text-white px-3 py-2 rounded-full m-2">Add to Cart</button>
            <button @click="buyProduct" class="bg-white-500 text-black px-3 py-2 rounded-full m-1 border border-wild-strawberry-700">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px] mx-auto mb-4">
        <!-- Product 1 -->
        <div class="flex max-w-[800px] mx-auto p-4 bg-white shadow-md rounded-md mb-4">
          <!-- Product Image -->
          <div class="flex-shrink-0 w-1/4">
            <img src="https://allorabd.com/wp-content/uploads/2022/11/4-1.jpg" alt="Product Image" class="w-full h-auto">
          </div>
          <!-- Product Details -->
          <div class="flex-1 ml-4">
            <p class="text-xl font-semibold mb-2">Product Name</p>
            <div class="flex mb-2">
              <span class="text-gray-500 line-through mr-2">$50.00</span>
              <span class="text-black">$35.00</span>
              <button class="bg-wild-strawberry-500 text-white px-3 py-2 rounded m-3">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- Product 2 -->
        <div class="flex max-w-[800px] mx-auto p-4 bg-white shadow-md rounded-md mb-4">
          <!-- Product Image -->
          <div class="flex-shrink-0 w-1/4">
            <img src="https://allorabd.com/wp-content/uploads/2021/12/32.jpg" alt="Product Image" class="w-full h-auto">
          </div>
          <!-- Product Details -->
          <div class="flex-1 ml-4">
            <p class="text-xl font-semibold mb-2">Product Name</p>
            <div class="flex mb-2">
              <span class="text-gray-500 line-through mr-2">$50.00</span>
              <span class="text-black">$35.00</span>
              <button class="bg-wild-strawberry-500 text-white px-3 py-2 rounded m-3">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>


</div>

  <div class="mt-12 grid grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-3 mb-4">
          <!-- <div v-for="incentive in incentives" :key="incentive.name" class="sm:flex lg:block"> -->
            <div class="sm:flex-shrink-0 mb-4 item-center">
              <img class="h-15 w-15 mx-auto my-auto" src="../images/Quality_product.PNG" alt="" />
                <!-- <img :src="incentive.Src" :alt="incentive.name" /> -->
                <h3 class="text-sm font-medium text-gray-900 text-center">Quality product</h3>
            </div>
            <div class="sm:flex-shrink-0 mb-4">
              <img class="h-15 w-15 mx-auto my-auto" src="../images/EMI.PNG" alt="" />
                <h3 class="text-sm font-medium text-gray-900 text-center">EMI Available</h3>
            </div>
            <div class="sm:flex-shrink-0 mb-4">
              <img class="h-15 w-15 mx-auto my-auto" src="../images/Secure Payment.PNG" alt="" />
                <!-- <img :src="incentive.Src" :alt="incentive.name" /> -->
                <h3 class="text-sm font-medium text-gray-900 text-center">Secure Payment</h3>
            </div>
   
          </div>

   <div class="md:flex md:items-center md:justify-between space-x-20">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Payment</h2>
    <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
      EMI Bank Details
      <!-- <span aria-hidden="true"> →</span> -->
    </a>
  </div>
   
  <!-- <div class="flex mx-8 space-x-20">
    <h1 class="font-bold">Payment</h1>
    <h1 class="underline font-bold">EMI Bank Details</h1>
  </div> -->
 
  <div role="list" class="flex flex-nowrap md:flex-wrap overflow-x-auto scrollbar-hide gap-[25px]  px-5 md:justify-center py-3 md:py-10">
   
     
     <img class="h-20 w-20 md:h-10 md:w-8 mx-auto" src="../images/BankAsia.PNG" alt="">

     <img class="h-20 w-20 md:h-10 md:w-8 mx-auto" src="../images/citybank.PNG" alt="">

     <img class="h-20 w-20 md:h-10 md:w-8 mx-auto" src="../images/DBBL.PNG" alt="">

     <img class="h-20 w-20 md:h-10 md:w-8 mx-auto" src="../images/UCB.PNG" alt="">


       
</div>




  
  <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="divide-y divide-gray-200 border-t">
              <Disclosure as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                <h3>
                  <DisclosureButton class="group relative flex w-full items-center justify-between py-6 px-12 text-left">
                    <span :class="[open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      <MinusIcon v-else class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel as="div" class="prose prose-sm pb-6">
                  <ul role="list">
                    <li v-for="item in detail.items" :key="item">{{ item }}</li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section>

         <hudaise />


  <div class="flex flex-col items-center justify-center ">
     <img src="../images/email_logo.PNG" alt="Email Logo" class="w-16 h-16 mb-4">

    <p class="text-center text-lg font-bold mb-8">Stay up to date with all latest product and exclusive offers</p>

    <form class="flex flex-col items-center">

      <input
    type="email"
    placeholder="Enter your email      Subscribe"
    class="border border-gray-300 px-3 py-2 mb-4 rounded-md w-64 focus:outline-none focus:ring focus:border-blue-300"
  />


      <label class="flex items-center">
        <input type="checkbox" class="mr-2">
        <span>Agree with the <span class="underline">terms and conditions</span></span>
      </label>
    </form>
  </div>

   </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: "main-layout",
});
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'


const product = ref({


details: [
    {
      name: 'Description',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    {
      name: 'Dimensions',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
      
    },
    {
      name: 'Care Instructions',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
  
    {
      name: 'Shipping & Returns',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
  
  
    // More sections...
  ],

});
const quantity = ref(1);

const increaseQuantity = () => {
  quantity.value += 1;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};

const buyProduct = () => {
  // Add logic to handle the buy action
  console.log('Product bought!');
};


</script>


