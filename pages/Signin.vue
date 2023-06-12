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
          <form>
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
                    v-model="userType"
                    class="form-radio text-blue-500"
                  />
                  <span class="ml-2">Student</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="userType"
                    value="staff"
                    v-model="userType"
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

<script lang="js">
export default {
  name: 'SignIn',
}
</script>

<style scoped>
.bg-brown-500 {
  background-color: #8b5c2b;
}
</style>
