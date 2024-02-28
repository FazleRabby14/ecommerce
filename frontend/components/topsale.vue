<template>
  <div>
    <p
      class="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 py-7 md:mt-10 ml-5"
    >
      Top Sale
    </p>
  </div>

  <div
    class="flex overflow-x-auto scrollbar-hide gap-[20px] px-5 py-3 md:py-10"
  >
    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton = true"
          @mouseleave="showButton = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://5.imimg.com/data5/SELLER/Default/2023/2/BN/BX/EG/154700276/img-20230220-wa0007-500x500.jpg"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            5% Off
          </div>
          <div
            v-if="showButton"
            class="hidden sm:block absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>

    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton2 = true"
          @mouseleave="showButton2 = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://allorabd.com/wp-content/uploads/2021/12/3-10.jpg.webp"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            10% Off
          </div>
          <div
            v-if="showButton2"
            class="absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton9 = true"
          @mouseleave="showButton9 = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://allorabd.com/wp-content/uploads/2023/09/Comforter-Frame-2.jpg.webp"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            15% Off
          </div>
          <div
            v-if="showButton9"
            class="absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton3 = true"
          @mouseleave="showButton3 = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://allorabd.com/wp-content/uploads/2023/03/1-7.jpg.webp"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            5% Off
          </div>
          <div
            v-if="showButton3"
            class="absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton4 = true"
          @mouseleave="showButton4 = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://allorabd.com/wp-content/uploads/2022/06/42-450x450.jpg.webp"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            10% Off
          </div>
          <div
            v-if="showButton4"
            class="absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton5 = true"
          @mouseleave="showButton5 = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://allorabd.com/wp-content/uploads/2021/08/3-450x450.jpg.webp"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            8% Off
          </div>
          <div
            v-if="showButton5"
            class="absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton6 = true"
          @mouseleave="showButton6 = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://allorabd.com/wp-content/uploads/2023/04/12.jpg.webp"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            12% Off
          </div>
          <div
            v-if="showButton6"
            class="absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton7 = true"
          @mouseleave="showButton7 = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://5.imimg.com/data5/SELLER/Default/2023/2/BN/BX/EG/154700276/img-20230220-wa0007-500x500.jpg"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            5% Off
          </div>
          <div
            v-if="showButton7"
            class="absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>
    <div class="relative md:w-[250px] flex-shrink-0">
      <nuxt-link class="cursor-pointer" to="/doubleBedsheet">
        <div
          class="relative"
          @mouseenter="showButton8 = true"
          @mouseleave="showButton8 = false"
        >
          <img
            class="h-20 w-20 md:h-52 md:w-52 mx-auto"
            src="https://5.imimg.com/data5/SELLER/Default/2023/2/BN/BX/EG/154700276/img-20230220-wa0007-500x500.jpg"
            alt=""
          />
          <div
            class="absolute top-0 left-0 bg-black bg-opacity-70 px-2 py-1 rounded-tr-lg text-white text-xs md:text-sm"
          >
            5% Off
          </div>
          <div
            v-if="showButton8"
            class="absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-75 py-2 mb-4"
          >
            <button class="text-white">Add to Cart</button>
          </div>
          <button
            class="md:hidden text-white absolute bottom-0 left-0 bg-black bg-opacity-30 px-2 py-1 rounded-tr-lg text-xs"
          >
            Add to Cart
          </button>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showButton = ref(false);
const showButton2 = ref(false);
const showButton3 = ref(false);
const showButton4 = ref(false);
const showButton5 = ref(false);
const showButton6 = ref(false);
const showButton7 = ref(false);
const showButton8 = ref(false);
const showButton9 = ref(false);
</script>

