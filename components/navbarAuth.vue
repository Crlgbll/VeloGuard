Carlo Salamanes Gaballo
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

 
  </div>
</template>

<script>
export default {


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

.modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
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

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f2f2f2;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f5f5f5;
}
</style>