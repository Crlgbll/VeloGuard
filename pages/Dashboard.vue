<template>
  <div class="bg-image h-screen font-Poppins">
    <navbarAuth />
    <div class="flex justify-end mr-5">
      <h1
        ref="dateElement"
        class="text-xl text-white font-bold font-Poppins w-1/5 mt-5 ml-8 border-black border-2 rounded-sm text-center shadow-lg"
      >
        June 14, 2023
      </h1>
      <h1
        ref="timeElement"
        class="text-xl font-bold font-Poppins w-1/5 mt-5 ml-8 border-black border-2 rounded-sm text-center shadow-lg"
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
      <div class="bg-white ml-2 text-sm flex-grow">
        <table class="w-full border-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID Number</th>
              <th>Year Level</th>
              <th>Program</th>
              <th>College</th>
              <th>Item Number</th>
              <th>Time</th>
              <th>Status</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example data for the Checkin table -->
            <tr>
              <td>Meo Angelo Z. Alcantara</td>
              <td>201-00033</td>
              <td>3</td>
              <td>BSIT</td>
              <td>CCIS</td>
              <td>D-35</td>
              <td>9:47 AM</td>
              <td>Checked-in</td>
              <td>Ramon D. Mautganon</td>
            </tr>
            <tr>
              <td>Carlo Salamanes Gaballo</td>
              <td>202-00033</td>
              <td>2</td>
              <td>BSIT</td>
              <td>CCIS</td>
              <td>A-41</td>
              <td>11:29 AM</td>
              <td>Checked-in</td>
              <td>Ramon D. Mautganon</td>
            </tr>
            <tr>
              <td>Lowisa Mae Cervantes</td>
              <td>212-00913</td>
              <td>1</td>
              <td>BSPSYCH</td>
              <td>CHASS</td>
              <td>E-16</td>
              <td>11:23 AM</td>
              <td>Checked-in</td>
              <td>Ramon D. Mautganon</td>
            </tr>
            <tr>
              <td>Mara J. Javier</td>
              <td>211-00765</td>
              <td>2</td>
              <td>CED</td>
              <td>BSED</td>
              <td>O-10</td>
              <td>2:49 AM</td>
              <td>Checked-in</td>
              <td>Ramon D. Mautganon</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-black text-white mr-2 text-sm flex-grow">
        <table class="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID Number</th>
              <th>Year Level</th>
              <th>Program</th>
              <th>College</th>
              <th>Item Number</th>
              <th>Time</th>
              <th>Status</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example data for the Checkout table -->
            <tr>
              <td>Alexa Rae Flores</td>
              <td>202-00032</td>
              <td>2</td>
              <td>BSIT</td>
              <td>CCIS</td>
              <td>C-17</td>
              <td>2:38 PM</td>
              <td>Checked-out</td>
              <td>Ramon D. Mautganon</td>
            </tr>
            <tr>
              <td>Arvin G. Buena</td>
              <td>211-00912</td>
              <td>3</td>
              <td>BSBIO</td>
              <td>CMNS</td>
              <td>L-32</td>
              <td>10:19 AM</td>
              <td>Checked-out</td>
              <td>Ramon D. Mautganon</td>
            </tr>
            <tr>
              <td>Noah Clair P. Montero</td>
              <td>212-98876</td>
              <td>4</td>
              <td>BSCE</td>
              <td>CEGS</td>
              <td>N-33</td>
              <td>03:19 PM</td>
              <td>Checked-out</td>
              <td>Ramon D. Mautganon</td>
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
      const dateElement = this.$refs.dateElement;
      const timeElement = this.$refs.timeElement;

      const currentDate = new Date();
      const date = currentDate.toDateString();
      const time = currentDate.toLocaleTimeString();

      if (dateElement && timeElement) {
        dateElement.innerText = date;
        timeElement.innerText = 'Time: ' + time;
      }
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
  background-position: cover;
  opacity: 80%;
}
</style>
