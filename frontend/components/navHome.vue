<template>
  <!-- Mobile menu -->
  <TransitionRoot as="template" :show="mobileMenuOpen">
    <Dialog
      as="div"
      class="relative z-40 lg:hidden"
      @close="mobileMenuOpen = false"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel
            class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
          >
            <div class="flex px-4 pb-2 pt-5">
              <button
                type="button"
                class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex space-x-8 px-4">
                  <Tab
                    as="template"
                    v-for="category in navigation.categories"
                    :key="category.name"
                    v-slot="{ selected }"
                  >
                    <button
                      :class="[
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-900',
                        'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
                      ]"
                    >
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel
                  v-for="(category, categoryIdx) in navigation.categories"
                  :key="category.name"
                  class="space-y-12 px-4 pb-6 pt-10"
                >
                  <div class="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                    <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                      <div>
                        <p
                          :id="`mobile-featured-heading-${categoryIdx}`"
                          class="font-medium text-gray-900"
                        >
                          Featured
                        </p>
                        <ul
                          role="list"
                          :aria-labelledby="`mobile-featured-heading-${categoryIdx}`"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.featured"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">{{
                              item.name
                            }}</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p
                          id="mobile-categories-heading"
                          class="font-medium text-gray-900"
                        >
                          Categories
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-categories-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.categories"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">{{
                              item.name
                            }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                      <div>
                        <p
                          id="mobile-collection-heading"
                          class="font-medium text-gray-900"
                        >
                          Collection
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-collection-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.collection"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">{{
                              item.name
                            }}</a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p
                          id="mobile-brand-heading"
                          class="font-medium text-gray-900"
                        >
                          Brands
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="mobile-brand-heading"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="item in category.brands"
                            :key="item.name"
                            class="flex"
                          >
                            <a :href="item.href" class="text-gray-500">{{
                              item.name
                            }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <div
                v-for="page in navigation.pages"
                :key="page.name"
                class="flow-root"
              >
                <a
                  :href="page.href"
                  class="-m-2 block p-2 font-medium text-gray-900"
                  >{{ page.name }}</a
                >
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <div class="flow-root">
                <a href="#" class="-m-2 block p-2 font-medium text-gray-900"
                  >Create an account</a
                >
              </div>
              <div class="flow-root">
                <a href="#" class="-m-2 block p-2 font-medium text-gray-900"
                  >Sign in</a
                >
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
           
              <form>
                <div class="inline-block">
                  <label for="mobile-currency" class="sr-only">Currency</label>
                  <div
                    class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
                  >
                    <select
                      id="mobile-currency"
                      name="currency"
                      class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                    >
                      <option v-for="currency in currencies" :key="currency">
                        {{ currency }}
                      </option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                    >
                      <ChevronDownIcon
                        class="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
  <nav aria-label="Top">
    <!-- Top navigation -->
    <div class="bg-wild-strawberry-600">
      <div
        class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <!-- Currency selector -->
        <!-- <form class="hidden lg:block lg:flex-1">
          <div class="flex">
            <label for="desktop-currency" class="sr-only">Currency</label>
            <div
              class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
            >
              <select
                id="desktop-currency"
                name="currency"
                class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
              >
                <option v-for="currency in currencies" :key="currency">
                  {{ currency }}
                </option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
              >
                <ChevronDownIcon
                  class="h-5 w-5 text-gray-300"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </form> -->

        <p
          class="flex-1 text-center text-sm font-medium text-white lg:flex-none"
        >
          Get free delivery on orders over $100
        </p>

        <div
          class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
        >
          <a href="#" class="text-sm font-medium text-white hover:text-gray-100"
            >Create an account</a
          >
          <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
          <a href="#" class="text-sm font-medium text-white hover:text-gray-100"
            >Sign in</a
          >
        </div>
      </div>
    </div>

    <!-- Secondary navigation -->
    <div class="bg-white">
      <div class="border-b border-gray-200">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <!-- Logo (lg+) -->
            <div class="hidden lg:flex lg:items-center">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="../images/allora_logo.png"
                  alt=""
                />
              </a>
            </div>

            <div class="hidden h-full lg:flex">
              <!-- Mega menus -->
              <PopoverGroup class="ml-8">
                <div class="flex h-full justify-center space-x-8">
                  <Popover
                    v-for="(category, categoryIdx) in navigation.categories"
                    :key="category.name"
                    class="flex"
                    v-slot="{ open }"
                  >
                    <div class="relative flex">
                      <PopoverButton
                        :class="[
                          open
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800',
                          'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                        ]"
                        >{{ category.name }}</PopoverButton
                      >
                    </div>

                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0"
                      enter-to-class="opacity-100"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <PopoverPanel
                        class="absolute inset-x-0 top-full text-gray-500 sm:text-sm"
                      >
                        <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                        <div
                          class="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />

                        <div class="relative bg-white">
                          <div class="mx-auto max-w-7xl px-8">
                            <div
                              class="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10"
                            >
                              <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                <div>
                                  <p
                                    :id="`desktop-featured-heading-${categoryIdx}`"
                                    class="font-medium text-gray-900"
                                  >
                                    Featured
                                  </p>
                                  <ul
                                    role="list"
                                    :aria-labelledby="`desktop-featured-heading-${categoryIdx}`"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li
                                      v-for="item in category.featured"
                                      :key="item.name"
                                      class="flex"
                                    >
                                      <a
                                        :href="item.href"
                                        class="hover:text-gray-800"
                                        >{{ item.name }}</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="desktop-categories-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Categories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="desktop-categories-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li
                                      v-for="item in category.categories"
                                      :key="item.name"
                                      class="flex"
                                    >
                                      <a
                                        :href="item.href"
                                        class="hover:text-gray-800"
                                        >{{ item.name }}</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                <div>
                                  <p
                                    id="desktop-collection-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Collection
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="desktop-collection-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li
                                      v-for="item in category.collection"
                                      :key="item.name"
                                      class="flex"
                                    >
                                      <a
                                        :href="item.href"
                                        class="hover:text-gray-800"
                                        >{{ item.name }}</a
                                      >
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <p
                                    id="desktop-brand-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Brands
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="desktop-brand-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li
                                      v-for="item in category.brands"
                                      :key="item.name"
                                      class="flex"
                                    >
                                      <a
                                        :href="item.href"
                                        class="hover:text-gray-800"
                                        >{{ item.name }}</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </transition>
                  </Popover>

                  <a
                    v-for="page in navigation.pages"
                    :key="page.name"
                    :href="page.href"
                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >{{ page.name }}</a
                  >
                </div>
              </PopoverGroup>
            </div>

            <!-- Mobile menu and search (lg-) -->
            <div class="flex flex-1 items-center lg:hidden">
              <button
                type="button"
                class="-ml-2 rounded-md bg-white p-2 text-gray-400"
                @click="mobileMenuOpen = true"
              >
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Search icon -->
              <div>
                <!-- Search icon (light version) -->
                <div @click="openSearchModal" class="cursor-pointer">
                  <svg
                    class="w-4 h-5 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>

                <!-- Search modal -->
                <div
                  v-if="isSearchModalOpen"
                  class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center"
                >
                  <div class="relative bg-white p-8 rounded-lg w-2/3">
                    <!-- Button to close the search modal -->
                    <button
                      @click="closeSearchModal"
                      class="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      &times;
                    </button>
                    <!-- Input field for search -->
                    <input
                      type="text"
                      placeholder="Type your search query here..."
                      class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Logo (lg-) -->
            <a href="#" class="lg:hidden">
              <span class="sr-only">Your Company</span>
              <img
                src="../images/allora_logo_1.png"
                alt=""
                class="h-8 w-auto"
              />
            </a>

            <div class="flex flex-1 items-center justify-end">
              <div class="flex items-center lg:ml-8">
                <div class="flex space-x-8">
                  <div class="hidden lg:flex">
                    <!--search icon-->
                    <div>
                      <!-- Search icon -->
                      <div @click="openSearchModal" class="cursor-pointer">
                        <svg
                          class="w-5 h-5 text-gray-500 place-items-center"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>

                      <!-- Search modal -->
                      <div
                        v-if="isSearchModalOpen"
                        class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center"
                      >
                        <div class="relative bg-white p-8 rounded-lg w-1/2">
                          <!-- Button to close the search modal -->
                          <button
                            @click="closeSearchModal"
                            class="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                          >
                            &times;
                          </button>
                          <!-- Input field for search -->
                          <input
                            type="text"
                            placeholder="Type your search query here..."
                            class="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    <!--done-->
                  </div>

                  <div class="relative">
                        <button @click="toggleDropdown" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Account</span>
                          <UserIcon class="h-6 w-6" aria-hidden="true" />
                        </button>

                        <div v-if="isDropdownVisible" @click="toggleDropdown" class="fixed inset-0 h-full w-full z-10"></div>

                        <div v-if="isDropdownVisible" class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md overflow-hidden z-20">
                          <ul>
                            <li>
                              <a href="/login" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</a>
                            </li>
                            <li>
                              <a href="/register" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Register</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                </div>

                <span
                  class="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                  aria-hidden="true"
                />

                <div class="relative group">
                  <ShoppingCartIcon
                    class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 cursor-pointer"
                    aria-hidden="true"
                    @click="toggleCartHover"
                  />
                  <cartHover
                    v-if="isCartHoverVisible"
                    @close="closeCartHover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="open = false">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
  
                      <div class="mt-8">
                        <div class="flow-root">
                          <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li v-for="product in products" :key="product.id" class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                              </div>
  
                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a :href="product.href">{{ product.name }}</a>
                                    </h3>
                                    <p class="ml-4">{{ product.price }}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty {{ product.quantity }}</p>
  
                                  <div class="flex">
                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div class="flex grid grid-cols-2 gap-5">
                        <div class="mt-6">
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700">Checkout</a>
                      </div>
                      <div class="mt-6">
                        <a href="#" class="flex items-center  justify-center rounded-md border border-black border-transparent px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-pink-100">View Cart</a>
                      </div>
                      </div>
                      
                      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{{ ' ' }}
                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="open = false">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'


import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  //MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";


const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]
  
  const open = ref(false); // Initialize to false

// Cart item
const isCartHoverVisible = ref(false);

const toggleCartHover = () => {
  isCartHoverVisible.value = !isCartHoverVisible.value;
};
const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const closeCartHover = () => {
  isCartHoverVisible.value = false;
};
//search for mobile
const isSearchModalOpen = ref(false);

const openSearchModal = () => {
  isSearchModalOpen.value = true;
};

const closeSearchModal = () => {
  isSearchModalOpen.value = false;
};
//search for mobile done

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        { name: "Sleep", href: "#" },
        { name: "Swimwear", href: "#" },
        { name: "Underwear", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
        { name: "Bottoms", href: "#" },
        { name: "Underwear", href: "#" },
        { name: "Accessories", href: "#" },
      ],
      brands: [
        { name: "Full Nelson", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Significant Other", href: "#" },
      ],
    },
    {
      name: "Men",
      featured: [
        { name: "Casual", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Outdoor", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Artwork Tees", href: "#" },
        { name: "Pants", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Basic Tees", href: "#" },
      ],
      brands: [
        { name: "Significant Other", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Full Nelson", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const offers = [
  {
    name: "Download the app",
    description: "Get an exclusive $5 off code",
    href: "#",
  },
  {
    name: "Return when you're ready",
    description: "60 days of free returns",
    href: "#",
  },
  {
    name: "Sign up for our newsletter",
    description: "15% off your first order",
    href: "#",
  },
];
const trendingProducts = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  // More products...
];
const collections = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const testimonials = [
  {
    id: 1,
    quote:
      "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
    attribution: "Sarah Peters, New Orleans",
  },
  {
    id: 2,
    quote:
      "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
    attribution: "Kelly McPherson, Chicago",
  },
  {
    id: 3,
    quote:
      "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
    attribution: "Chris Paul, Phoenix",
  },
];
const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Shipping Policy", href: "#" },
  ],
  bottomLinks: [
    { name: "Accessibility", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const mobileMenuOpen = ref(false);
</script>
