<template>
  <div>
    <div
      class="flex items-center justify-center min-h-screen bg-brown-500 font-Poppins"
    >
      <div class="max-w-md w-full">
        <div class="bg-white rounded-lg shadow-lg p-8 m-10">
          <img
            class="mb-5"
            src="../assets/logo/png/logo-no-background.png"
            alt=""
          />
          <h2 class="text-xl font-bold mb-4 font-Poppins text-center">
            Sign Up
          </h2>
          <form @submit.prevent="signup">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="Name "
                >Name</label
              >
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-black focus:shadow-outline"
                type="text"
                placeholder="Full Name"
                required
                v-model="user.name"
              />
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
                >Email</label
              >
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-black focus:shadow-outline"
                type="email"
                placeholder="Carsu Email"
                required
                v-model="user.email"
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
                placeholder="Password"
                required
                v-model="user.password"
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
                    name="user_type"
                    value="student"
                    v-model="user.user_type"
                    required
                    class="form-radio text-blue-500"
                  />
                  <span class="ml-2">Student</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="user_type"
                    value="staff"
                    v-model="user.user_type"
                    required
                    class="form-radio text-blue-500"
                  />
                  <span class="ml-2">Staff</span>
                </label>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <nuxt-link to="Signin">
                <h1
                  class="hover:text-violet-600 active:text-violet-700 focus:outline-none text-sm"
                >
                  Already have an account?
                </h1>
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
  name: "Signup",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        user_type: "",
      },
    };
  },
  methods: {
    async signup() {
      try {
        const response = await fetch("http://localhost:3001/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.user),
        });
        if (response.ok) {
          this.$router.push("Signin");
          const data = await response.json();
          console.log(data);
        } else {
          throw new Error("Signup failed");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.bg-brown-500 {
  background-color: #8b5c2b;
}
</style>
