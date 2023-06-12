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
    };
  },
  mounted() {
    this.updateDateTime(); // Call the function initially
    setInterval(this.updateDateTime, 1000); // Update the time every second
  },
  methods: {
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
