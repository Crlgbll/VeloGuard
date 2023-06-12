<template>
  <div>
    <div
      class="h-18 w-full bg-white flex justify-between items-center px-4 shadow-2xl font-Poppins"
    >
      <div class="h-14 w-60 flex items-center">
        <img
          class="h-12 w-30 p-1"
          src="../assets/logo/png/logo-no-background.png"
          alt=""
        />
      </div>
      <div class="h-14 flex items-center font-bold">
        <ul class="flex py-3 justify-end text-lg items-center space-x-4">
          <button
            class="border-2 text-lg border-violet-500 outline-2 rounded-md px-2 text-black hover:bg-brown-500 hover:text-white duration-300"
            @click="openModal"
          >
            Search
          </button>

          <nuxt-link to="Dashboard">
            <button
              class="border-2 text-lg border-violet-500 outline-2 rounded-md px-2 text-black hover:bg-brown-500 hover:text-white duration-300"
            >
              <li>Dashboard</li>
            </button>
          </nuxt-link>
          <nuxt-link to="History">
            <button
              class="border-2 text-lg border-violet-500 outline-2 rounded-md px-2 text-black hover:bg-brown-500 hover:text-white duration-300"
            >
              <li>History</li>
            </button>
          </nuxt-link>

          <nuxt-link to="/">
            <button
              class="border-2 text-lg border-violet-500 outline-2 rounded-md px-2 text-black hover:bg-brown-500 hover:text-white duration-300"
            >
              <li>Logout</li>
            </button>
          </nuxt-link>
        </ul>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content" :class="{ active: isModalOpen }">
        <span class="close" @click="closeModal">&times;</span>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Enter your search query..."
        />
        <button @click="search">Search</button>
        <div v-if="searchResults.length > 0">
          <ul>
            <li v-for="result in searchResults" :key="result.id">
              {{ result.name }}
            </li>
          </ul>
        </div>
        <div v-else>
          <p>No results found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      searchQuery: "",
      searchResults: [],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.searchQuery = "";
      this.searchResults = [];
    },
    search() {
      // Perform the search operation based on the searchQuery
      // and populate the searchResults array with the matching records
      // Replace the following code with your actual search logic

      // Simulating the search operation with dummy data
      const dummyData = [
        { id: 1, name: "Result 1" },
        { id: 2, name: "Result 2" },
        { id: 3, name: "Result 3" },
      ];

      this.searchResults = dummyData.filter((result) =>
        result.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal.active {
  display: block;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.bg-brown-500 {
  background-color: #8b5c2b;
}

button.hover\:bg-brown-500:hover {
  background-color: #8b5c2b !important;
}

button.hover\:text-white:hover {
  color: white !important;
}
</style>
