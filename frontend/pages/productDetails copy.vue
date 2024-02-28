<template>

  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList class="grid grid-cols-4 gap-6">
              <Tab v-for="image in product.images" :key="image.id" class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" v-slot="{ selected }">
                <span class="sr-only">{{ image.name }}</span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover object-center" />
                </span>
                <span :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']" aria-hidden="true" />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel v-for="image in product.images" :key="image.id">
              <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover object-center padding-6 sm:padding-6" /> <!-- Adjust padding as needed -->
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">{{ product.price }}</p>
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-wild-strawberry-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
              </div>
              <p class="sr-only">{{ product.rating }} out of 5 stars</p>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-gray-700" v-html="product.description" />
          </div>

          <form class="mt-6">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-600">Color</h3>

              <RadioGroup v-model="selectedColor" class="mt-2">
                <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                <span class="flex items-center space-x-3">
                  <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                    <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                      <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                      <span aria-hidden="true" :class="[color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                    </div>
                  </RadioGroupOption>
                </span>
              </RadioGroup>
            </div>

            <div class="sm:flex-col1 mt-10 flex">
              <button type="submit" class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-wild-strawberry-600 px-8 py-3 text-base font-medium text-white hover:bg-wild-strawberry-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">Add to bag</button>

              <button type="button" class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="divide-y divide-gray-200 border-t">
              <Disclosure as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                <h3>
                  <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
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
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <TabGroup as="div">
            <div class="border-b border-gray-200">
              <!-- <TabList class="-mb-px flex space-x-8">
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-wild-strawberry-600 text-wild-strawberry-600' : 'border-transparent text-gray-700 hover:border-wild-strawberry-300 hover:text-gray-800', 'whitespace-nowrap border-b-2 py-6 text-sm font-medium']">Description</button>
                </Tab>
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-wild-strawberry-600 text-wild-strawberry-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800', 'whitespace-nowrap border-b-2 py-6 text-sm font-medium']">Additional Information</button>
                </Tab>
                <Tab as="template" v-slot="{ selected }">
                  <button :class="[selected ? 'border-wild-strawberry-600 text-wild-strawberry-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800', 'whitespace-nowrap border-b-2 py-6 text-sm font-medium']">Reviews</button>
                </Tab>
              </TabList> -->
              <TabList class="-mb-px flex space-x-8">
              <Tab as="template" v-slot="{ selected }">
                <button :class="[selected ? 'text-wild-strawberry-600' : 'text-gray-700 hover:text-gray-800 hover:bg-wild-strawberry-600', 'wild-strawberry py-6 text-sm font-medium']">Description</button>
              </Tab>
              <Tab as="template" v-slot="{ selected }">
                <button :class="[selected ? 'text-wild-strawberry-600' : 'text-gray-700 hover:text-gray-800 hover:bg-wild-strawberry-600', 'wild-strawberry  py-6 text-sm font-medium']">Additional Information</button>
              </Tab>
              <Tab as="template" v-slot="{ selected }">
                <button :class="[selected ? 'text-wild-strawberry-600' : 'text-gray-700 hover:text-gray-800 hover:bg-wild-strawberry-600', 'wild-strawberry  py-6 text-sm font-medium']">Reviews</button>
              </Tab>
            </TabList>
            
            </div>
            <TabPanels as="template">
              
                  <TabPanel class="pt-10">
                <h3 class="sr-only">Description</h3>

                <div class="prose prose-sm max-w-none text-gray-500" v-html="license.content" />
              </TabPanel>


              <TabPanel class="text-sm text-gray-500">
                <h3 class="sr-only">Frequently Asked Questions</h3>

                <dl>
                  <template v-for="faq in faqs" :key="faq.question">
                    <dt class="mt-10 font-medium text-gray-900">{{ faq.question }}</dt>
                    <dd class="prose prose-sm mt-2 max-w-none text-gray-500">
                      <p>{{ faq.answer }}</p>
                    </dd>
                  </template>
                </dl>
              </TabPanel>

          

              <TabPanel class="-mb-10">
                <h3 class="sr-only">Reviews</h3>

                <div v-for="(review, reviewIdx) in reviews.featured" :key="review.id" class="flex space-x-4 text-sm text-gray-500">
                  <div class="flex-none py-10">
                    <img :src="review.avatarSrc" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
                  </div>
                  <div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10']">
                    <h3 class="font-medium text-gray-900">{{ review.author }}</h3>
                    <p>
                      <time :datetime="review.datetime">{{ review.date }}</time>
                    </p>

                    <div class="mt-4 flex items-center">
                      <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[review.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                    </div>
                    <p class="sr-only">{{ review.rating }} out of 5 stars</p>

                    <div class="prose prose-sm mt-4 max-w-none text-gray-500" v-html="review.content" />
                  </div>
                  
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
    </div>

<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div class="md:flex md:items-center md:justify-between">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">You may also Like</h2>
    <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
      Shop the collection
      <span aria-hidden="true"> →</span>
    </a>
  </div>

  <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
    <div class="group relative">
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
    <!-- <div class="group relative">
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
      </div> -->
      <div class="group relative">
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

      
    
  </div>

  <div class="mt-8 text-sm md:hidden">
    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
      Shop the collection
      <span aria-hidden="true"> →</span>
    </a>
  </div>
</div>
<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <div class="md:flex md:items-center md:justify-between">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Related Products</h2>
    <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
      Shop the collection
      <span aria-hidden="true"> →</span>
    </a>
  </div>

  <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
    <div class="group relative">
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
    <!-- <div class="group relative">
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
      </div> -->
      <div class="group relative">
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

<script setup>

definePageMeta({
  layout: "main-layout",
});

import { ref } from 'vue'
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

const product = {
  name: ' Leather Long Wallet',
  price: 'Tk-2240',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7zRUaIFqwFpXB3YMF5nxHfRlLSjt6OZqfw&usqp=CAU',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 2,
      name: 'Angled view',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7zRUaIFqwFpXB3YMF5nxHfRlLSjt6OZqfw&usqp=CAU',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 3,
      name: 'Angled view',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7zRUaIFqwFpXB3YMF5nxHfRlLSjt6OZqfw&usqp=CAU',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 4,
      name: 'Angled view',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7zRUaIFqwFpXB3YMF5nxHfRlLSjt6OZqfw&usqp=CAU',
      alt: 'Angled front view with bag zipped and handles upright.',
    },

  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  
  "details": [
    {
      "name": "Shipping",
      "items": [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
      ]
    },
    {
      "name": "Return",
      "items": [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
      ]
    }
  ]

}
const trendingProducts = [
    {
      id: 1,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    // More products...
  ]

  const reviews = {
    average: 4,
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
          <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
        `,
        date: 'July 16, 2021',
        datetime: '2021-07-16',
        author: 'Emily Selman',
        avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      {
        id: 2,
        rating: 5,
        content: `
          <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
        `,
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        author: 'Hector Gibbons',
        avatarSrc:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      // More reviews...
    ],
  }
  const faqs = [
    {
      question: 'What format are these icons?',
      answer:
        'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
    },
    {
      question: 'Can I use the icons at different sizes?',
      answer:
        "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
    },
    // More FAQs...
  ]
  const license = {
    href: '#',
    summary:
      'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
    content: `
      <h4>Overview</h4>
      
      <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
      
      <ul role="list">
      <li>You\'re allowed to use the icons in unlimited projects.</li>
      <li>Attribution is not required to use the icons.</li>
      </ul>
      
      <h4>What you can do with it</h4>
      
      <ul role="list">
      <li>Use them freely in your personal and professional work.</li>
      <li>Make them your own. Change the colors to suit your project or brand.</li>
      </ul>
      
      <h4>What you can\'t do with it</h4>
      
      <ul role="list">
      <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
      <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
      </ul>
    `,
  }

const selectedColor = ref(product.colors[0])
</script>