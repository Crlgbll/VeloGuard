<template>
  <div class="bg-image h-screen font-Poppins">
    <navbarAuth />
    <div class="flex justify-end mr-5">
      <h1
        id="date"
        class="text-xl text-white font-bold font-Poppins w-1/5 mt-5 ml-8 border-black border-2 rounded-sm text-center shadow-lg"
      >
        June 14, 2023
      </h1>
      <h1
        id="time"
        class="text-xl  font-bold font-Poppins w-1/5 mt-5 ml-8 border-black border-2 rounded-sm text-center shadow-lg"
      >
        Time: 9:47 AM
      </h1>
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
            <!-- Example data for the Checkin table -->
            <tr>
              <td>John Doe</td>
              <td>123456</td>
              <td>789</td>
              <td>9:00 AM</td>
              <td>Checked-in</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>789012</td>
              <td>123</td>
              <td>10:30 AM</td>
              <td>Checked-in</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>123456</td>
              <td>789</td>
              <td>9:00 AM</td>
              <td>Checked-in</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>789012</td>
              <td>123</td>
              <td>10:30 AM</td>
              <td>Checked-in</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>123456</td>
              <td>789</td>
              <td>9:00 AM</td>
              <td>Checked-in</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>789012</td>
              <td>123</td>
              <td>10:30 AM</td>
              <td>Checked-in</td>
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
            <!-- Example data for the Checkout table -->
            <tr>
              <td>John Doe</td>
              <td>123456</td>
              <td>789</td>
              <td>5:00 PM</td>
              <td>Checked-out</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>789012</td>
              <td>123</td>
              <td>6:30 PM</td>
              <td>Checked-out</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>123456</td>
              <td>789</td>
              <td>5:00 PM</td>
              <td>Checked-out</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>789012</td>
              <td>123</td>
              <td>6:30 PM</td>
              <td>Checked-out</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>123456</td>
              <td>789</td>
              <td>5:00 PM</td>
              <td>Checked-out</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>789012</td>
              <td>123</td>
              <td>6:30 PM</td>
              <td>Checked-out</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.updateDateTime(); // Call the function initially
    setInterval(this.updateDateTime, 1000); // Update the time every second
  },
  methods: {
    updateDateTime() {
      const dateElement = document.getElementById('date');
      const timeElement = document.getElementById('time');

      const currentDate = new Date();
      const date = currentDate.toDateString();
      const time = currentDate.toLocaleTimeString();

      dateElement.innerText = date;
      timeElement.innerText = 'Time: ' + time;
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
