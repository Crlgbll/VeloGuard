<template>
  <div class="bg-image h-screen font-Poppins">
    <navbarAuth />
    <div class="flex justify-end mr-5">
      <input
        type="date"
        v-model="selectedDate"
        class="text-xl font-bold font-Poppins w-1/5 mt-5 ml-8 border-black border-2 rounded-sm text-center shadow-lg"
      />
      <button
        @click="updateData"
        class="text-xl text-white font-bold font-Poppins w-1/5 mt-5 ml-8 border-black border-2 rounded-sm text-center shadow-lg"
      >
        Get Data
      </button>
      <div v-if="isModalOpen" class="modal active">
      <div class="modal-content h-4/6 w-6/12">
        <span class="close" @click="closeModal">&times;</span>
        <input type="text" v-model="searchQuery" placeholder="Search" />
        <button
          class="border-2 text-lg border-violet-500 outline-2 rounded-md px-2 text-black hover:bg-brown-500 hover:text-white duration-300"
          @click="search"
        >
          Search
        </button>
        <div v-if="searchResults.length > 0">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID Number</th>
                <th>Item Number</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="result in searchResults" :key="result.id">
                <td>{{ result.name }}</td>
                <td>{{ result.idNumber }}</td>
                <td>{{ result.itemNumber }}</td>
                <td>{{ result.time }}</td>
                <td>{{ result.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <p>No results found.</p>
        </div>
      </div>
    </div>
    </div>

    <div class="m-5 flex p-4 justify-evenly">
      <h1
        class="text-3xl font-bold font-Poppins w-1/4 border-2 rounded-sm text-center bg-white shadow-lg"
      >
        CHECK-IN
      </h1>
      <h1
        class="text-3xl text-white font-bold font-Poppins w-1/4 border-2 text-center bg-black"
      >
        CHECK-OUT
      </h1>
    </div>

    <div class="justify-around flex">
      <div class="bg-white m-5 flex-grow">
        <table class="w-full border-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID Number</th>
              <th>Item Number</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in checkinData" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.idNumber }}</td>
              <td>{{ item.itemNumber }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-black text-white m-5 flex-grow">
        <table class="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID Number</th>
              <th>Item Number</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in checkinData" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.idNumber }}</td>
              <td>{{ item.itemNumber }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
    return {
      selectedDate: '', // Selected date from the date picker
      checkinData: [], // Data to be displayed based on the selected date
      currentTime: '',
      isModalOpen: false,
      searchQuery: "",
      searchResults: [],
    };
  },
  mounted() {
    this.updateDateTime(); // Call the function initially
    setInterval(this.updateDateTime, 1000); // Update the time every second
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
        {
          name: "April Calo",
          idNumber: 21100914,
          itemNumber: "C-07",
          time: "10:00 AM",
          status: "Checked-in",
        },
        {
          name: "Ramon Mautganon",
          idNumber: 19101623,
          itemNumber: "A-01",
          time: "11:30 AM",
          status: "Checked-in",
        },
        {
          name: "Chrisostomo Ibarra",
          idNumber: 22100272,
          itemNumber: "D-23",
          time: "1:45 PM",
          status: "Checked-out",
        },
      ];

      this.searchResults = dummyData.filter((result) =>
        result.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    updateDateTime() {
      const currentDate = new Date(); // Get the current date and time
      const formattedTime = currentDate.toLocaleTimeString(); // Format the time as per your requirements

      this.currentTime = formattedTime;
    },
    updateData() {
      // Use the selectedDate value to fetch data for the selected date
      // You can replace this with your own data-fetching logic
      // Example data for demonstration purposes
      const exampleData = [
        {
          id: 1,
          name: 'John Doe',
          idNumber: '123456',
          itemNumber: '789',
          time: '9:00 AM',
          status: 'Checked-in',
        },
        {
          id: 2,
          name: 'Jane Smith',
          idNumber: '789012',
          itemNumber: '123',
          time: '10:30 AM',
          status: 'Checked-in',
        },
        // Add more data entries as needed
      ];

      // Filter the exampleData array based on the selected date
      this.checkinData = exampleData.filter((item) => {
        // Extract the date portion from the time string and compare with selectedDate
        const itemDate = item.time.split(' ')[0];
        return itemDate === this.selectedDate;
      });
    },
  },
};
</script>

<style scoped>
.bg-brown-500 {
  background-color: #8b5c2b;
}
.bg-beige-500 {
  background-color: #fffdd0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}
.bg-image {
  background-image: url("../assets/images/img-1.jpg");
  background-size: cover;
  background-position: center;
  opacity: 80%;
}
</style>
