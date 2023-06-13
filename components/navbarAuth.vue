Carlo Salamanes Gaballo
<template>
  <div>
    <div class="h-18 w-full bg-white flex justify-between items-center px-4 shadow-2xl font-Poppins">
      <div class="h-14 w-60 flex items-center">
        <img class="h-12 w-30 p-1" src="../assets/logo/png/logo-no-background.png" alt="" />
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

<<<<<<< HEAD
    <div v-if="isModalOpen" class="modal active">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <div class="flex items-center mb-4">
          <div class="flex flex-wrap">
            <div class="flex flex-wrap items-center">
              <label class="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  v-model="selectAll"
                  @change="selectAllFilters"
                  class="form-checkbox text-indigo-600 h-5 w-5"
                />
                <span class="ml-2">Select All</span>
              </label>

              <template v-for="filter in filters">
                <label :for="filter" class="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    :id="filter"
                    :value="filter"
                    v-model="selectedFilters"
                    class="form-checkbox text-indigo-600 h-5 w-5"
                  />
                  <span class="ml-2">{{ filter }}</span>
                </label>
              </template>
            </div>

            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search"
              class="border-2 border-gray-300 rounded-md px-2 py-1"
            />
            <button
              class="ml-3 border-2 text-lg border-violet-500 outline-2 rounded-md px-2 text-black hover:bg-brown-500 hover:text-white duration-300"
              @click="search"
            >
              Search
            </button>
          </div>
        </div>
        <div v-if="searchResults.length > 0">
          <table>
            <thead>
              <tr>
                
                
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Admin</th>
                <th>Location</th>
                <th>Items</th>
                <th>Status</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="result in searchResults" :key="result.id">
                <td>{{ result.name }}</td>
                <td>{{ result.date }}</td>
                <td>{{ result.time }}</td>
                <td>{{ result.admin }}</td>
                <td>{{ result.location }}</td>
                <td>{{ result.items }}</td>
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
=======
 
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      isModalOpen: false,
      searchQuery: "",
      searchResults: [],
      filters: ["Name", "ID Number", "Item Number", "Time", "Status", "Admin", "Year Level", "College", "Program", "Date", "Location", ],
      selectedFilters: [],
      selectAll: false,
    };
  },
  methods: {
    selectAllFilters() {
    if (this.selectAll) {
      this.selectedFilters = [...this.filters];
    } else {
      this.selectedFilters = [];
    }
  },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.searchQuery = "";
      this.searchResults = [];
      this.selectedFilter = "";
    },
    search() {
      // Perform the search operation based on the searchQuery and selectedFilter
      // and populate the searchResults array with the matching records
      // Replace the following code with your actual search logic

      // Simulating the search operation with dummy data
      const dummyData = [
    
      
      
       
       
        {
          
          name: "Carlo Salamanes Gaballo",
          date: "2023-05-30",
          time: "09:00:00",
          admin: "Carlo N. Marcos",
          location: "L1 Wing",
          items: "Laptop Handcarry",
          status: "Check-In"                       

        },
        {
          
          name: "Lowisa Mae Cervantes",
          date: "2023-05-30",
          time: "13:00:00",
          admin: "Carlo N. Marcos",
          location: "L2 Wing",
          items: "Others: Umbrella",
          status: "Check-In"                       

        },
        {
          
          name: "Meo Angelo Z. Alcantara",
          date: "2022-12-12",
          time: "08:05:00",
          admin: "Vincent M. Penecitos",
          location: "R1 Wing",
          items: "Back Pack",
          status: "Check-In"                       

        },
        {
          
          name: "Mara J. Javier",
          date: "2023-06-07",
          time: "08:30:00",
          admin: "Claire B. Macabenta",
          location: "R2 Wing",
          items: "Bags on Wheels",
          status: "Check-In"                       

        },
        
        
        /*
        {
          name: "Lowisa Mae Cervantes",
          idNumber: 21200913,
          yearLevel: 1,
          program: "BSPSYCH",
          college: "CHASS",
          itemNumber: "E-16",
          time: "11:23 AM",
          status: "Checked-in",
          admin: "admin",
        },
        {
          name: "Mara J. Javier",
          idNumber: 21100765,
          yearLevel: 2,
          program: "CED",
          college: "BSED",
          itemNumber: "O-10",
          time: "2:49 AM",
          status: "Checked-in",
          admin: "admin",
        },
        {
          name: "Alexa Rae Flores",
          idNumber: 20200032,
          yearLevel: 2,
          program: "BSIT",
          college: "CCIS",
          itemNumber: "C-17",
          time: "2:38 PM",
          status: "Checked-out",
          admin: "admin",
        },
        {
          name: "Carlo Salamanes Gaballo",
          idNumber: 20200033,
          yearLevel: 2,
          program: "BSIT",
          college: "CCIS",
          itemNumber: "A-41",
          time: "11:29 AM",
          status: "Checked-in",
          admin: "admin",

          name: "Lowisa Mae Cervantes",
          idNumber: 21200913,
          yearLevel: 1,
          program: "BSPSYCH",
          college: "CHASS",
          itemNumber: "E-16",
          time: "11:23 AM",
          status: "Checked-in",
          admin: "admin",

          name: "Mara J, Javier",
          idNumber: 21100765,
          yearLevel: 2,
          program: "CED",
          college: "BSED",
          itemNumber: "O-10",
          time: "2:49 AM",
          status: "Checked-in",
          admin: "admin",

          name: "Alexa Rae Flores",
          idNumber: 20200032,
          yearLevel: 2,
          program: "BSIT",
          college: "CCIS",
          itemNumber: "C-17",
          time: "2:38 PM",
          status: "Checked-out",
          admin: "admin",

          name: "Arvin G. Buena",
          idNumber: 21100912,
          yearLevel: 3,
          program: "BSBIO",
          college: "CMNS",
          itemNumber: "L-32",
          time: "10:19 AM",
          status: "Checked-out",
          admin: "admin",
        },
        {
          name: "Noah Clair P. Montero",
          idNumber: 21298876,
          yearLevel: 4,
          program: "BSCE",
          college: "CEGS",
          itemNumber: "N-33",
          time: "03:19 PM",
          status: "Checked-out",
          admin: "admin",
        },
        */
      ];

      let filteredData = dummyData;

      if (this.selectedFilter) {
        filteredData = dummyData.filter((result) =>
          String(result[this.selectedFilter])
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      }

      this.searchResults = filteredData;
    },
  },
=======


>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
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
<<<<<<< HEAD
  border: 3px solid #888;
  width: 100%;
  height: 95%;
  max-width: 800px;
=======
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
