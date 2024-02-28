<template>
  <div>
    <!-- Search icon -->
    <div @click="openSearchModal" class="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.949 13.364a8.5 8.5 0 1 0-1.585 1.585l4.95 4.95a1 1 0 0 0 1.414-1.414l-4.95-4.95zm-1.49-.567a6.5 6.5 0 1 1-1.414-1.414l1.415 1.414zM3 8.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z"
          clip-rule="evenodd"
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
</template>

<script>
export default {
  data() {
    return {
      isSearchModalOpen: false,
    };
  },
  methods: {
    openSearchModal() {
      this.isSearchModalOpen = true;
    },
    closeSearchModal() {
      this.isSearchModalOpen = false;
    },
  },
};
</script>
