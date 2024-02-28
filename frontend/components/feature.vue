<template>
      <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
      <div class="md:flex md:items-center md:justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
        <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
          Shop the collection
          <span aria-hidden="true"> →</span>
        </a>
      </div>

      <div class="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-0 lg:gap-x-8">
        
        <div class="group relative">
          <Nuxt-link to="/productDetails">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7zRUaIFqwFpXB3YMF5nxHfRlLSjt6OZqfw&usqp=CAU" alt="Hand stitched, orange leather long wallet." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Leather Long Wallet
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Natural</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$75</p>
          </Nuxt-link>
          </div>
       

        <div class="group relative">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://m.media-amazon.com/images/I/819+cxTmWBL._AC_UF894,1000_QL80_.jpg" alt="12-sided, machined black pencil and pen." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Machined Pencil and Pen Set
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Black</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$70</p>
          </div>
        <div class="group relative">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8ySs7On4sewfELW_AFyO99gPSM6-ptqC2A&usqp=CAU" alt="Set of three light and dark brown mini sketch books." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Mini-Sketchbooks
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Light Brown</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$27</p>
          </div>
        <div class="group relative">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXwsClPe0mTxqQfQFRjkHI9a2eouObEgQDQ&usqp=CAU" alt="Beautiful walnut organizer set with multiple white compartments" class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Organizer Set
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Walnut</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$149</p>
          </div>

          <div class="group relative hidden sm:block ">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://assets.ajio.com/medias/sys_master/root/20230518/pAuy/64662afad55b7d0c63c330ad/-473Wx593H-466166803-multi-MODEL.jpg" alt="Beautiful walnut organizer set with multiple white compartments" class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Organizer Set
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Walnut</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$149</p>
          </div>

          <div class="group relative hidden sm:block">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7zRUaIFqwFpXB3YMF5nxHfRlLSjt6OZqfw&usqp=CAU" alt="Hand stitched, orange leather long wallet." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Leather Long Wallet
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Natural</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$75</p>
          </div>
        <div class="group relative hidden sm:block">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://m.media-amazon.com/images/I/819+cxTmWBL._AC_UF894,1000_QL80_.jpg" alt="12-sided, machined black pencil and pen." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Machined Pencil and Pen Set
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Black</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$70</p>
          </div>
        <div class="group relative hidden sm:block">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8ySs7On4sewfELW_AFyO99gPSM6-ptqC2A&usqp=CAU" alt="Set of three light and dark brown mini sketch books." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Mini-Sketchbooks
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Light Brown</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$27</p>
          </div>

        
      </div>

      <div class="mt-8 text-sm md:hidden">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Shop the collection
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </div>
  </div>
</template>