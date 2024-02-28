<template>
  <body class="overflow-y-hidden">
    <div
      class="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0"
    >
      <div
        class="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0"
      >
        <div class="w-80 sm:w-auto flex flex-col justify-start items-start">
          <div>
            <p
              class="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800"
            >
              Play Mate For Babies
            </p>
          </div>
          <div class="mt-4 lg:w-4/5 xl:w-3/5">
            <p class="text-base leading-6 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div class="mt-16 w-full">
            <button
              class="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              <p class="text-xl font-medium leading-5">See More</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66663 16H25.3333"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 21.3333L25.3333 16"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 10.6667L25.3333 16"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0 xl:h-[400px] xl:w-[500px] lg:h-[300px] lg:w-[400px]"
        >
          <div class="">
            <img
              class="hidden lg:block object-cover"
              src="https://media.karousell.com/media/photos/products/2021/9/12/done_by_deer_activity_mat_1631420417_3339139a_progressive.jpg"
              alt="sofa"
            />
            <img
              class="w-80 sm:w-auto lg:hidden object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIU1tGtZITT6k-u_wYIwIF8YnNBqDI-QB5QQ&usqp=CAU"
              alt="sofa"
            />
          </div>
          <div
            class="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8"
          >
            <div>
              <img
                class="hidden lg:block object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIU1tGtZITT6k-u_wYIwIF8YnNBqDI-QB5QQ&usqp=CAU"
                alt="chairs"
              />
              <img
                class="w-80 sm:w-auto lg:hidden object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbm6X8CFU2znEBCV4t53ux8o3Fja1LfyfKYA&usqp=CAU"
                alt="chairs"
              />
            </div>
            <div>
              <img
                class="hidden lg:block object-cover"
                src="https://kjessentials.com.au/cdn/shop/files/Done-by-Deer-Activity-Mat-Blue.png?v=1699513732"
                alt="chairs"
              />
              <img
                class="w-80 sm:w-auto lg:hidden object-cover"
                src="https://media.karousell.com/media/photos/products/2021/9/12/done_by_deer_activity_mat_1631420417_3339139a_progressive.jpg"
                alt="chairs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {};
  },
};
</script>
