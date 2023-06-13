<template>
  <div>
    <div class="flex items-center justify-center min-h-screen bg-brown-500 font-Poppins">
      <div class="max-w-md w-full">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <img
            class="mb-5"
            src="../assets/logo/png/logo-no-background.png"
            alt=""
          />
          <h2 class="text-xl font-bold mb-4 font-Poppins text-center">
            Sign In
          </h2>
          <form @submit.prevent="signin">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
                >Email</label
              >
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-black focus:shadow-outline"
                type="email"
                placeholder="Email"
<<<<<<< HEAD
                required
                v-model="user.email"
=======
                v-model="email"
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
                >Password</label
              >
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-black focus:shadow-outline"
                id="password"
                type="password"
                required
                placeholder="Password"
<<<<<<< HEAD
                v-model="user.password"
=======
                v-model="password"
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
              />
            </div>
            
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >User Type</label
              >
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="student"
                    required
                    v-model="user.user_type"
                    class="form-radio text-blue-500"
                  />
                  <span class="ml-2">Student</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="userType"
                    value="staff"
                    required
                    v-model="user.user_type"
                    class="form-radio text-blue-500"
                  />
                  <span class="ml-2">Staff</span>
                </label>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="signIn"
              >
                Sign In
              </button>
              <nuxt-link to="Signup">
                <h1 class="hover:text-violet-600 active:text-violet-700 focus:outline-none">Didn't have an account?</h1>
              </nuxt-link>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
<<<<<<< HEAD
      user: {
        email: "",
        password: "",
        user_type: ""
      }
    };
  },
  methods: {
    async signin() {
      try {
        const response = await fetch("http://localhost:3001/user/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.user.email,
            password: this.user.password,
            user_type: this.user.user_type
          }),
        });
        
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.jwt);
          this.$router.push("Dashboard");
        } else {
          alert("Wrong email or password.");
        }
      } catch (error) {
        console.log(error);
        alert("An error occurred. Please try again.");
      }
    }
  }
=======
      email: '',
      password: '',
      userType: 'student'
    }
  },
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
}
</script>


<style scoped>
.bg-brown-500 {
  background-color: #8b5c2b;
}
</style>