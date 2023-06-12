<template>
    <div class="flex items-center justify-center min-h-screen bg-brown-500">
      <div class="max-w-md w-full bg-white rounded-lg p-8">
        <img class="mb-5" src="../assets/logo/png/logo-no-background.png" alt="">
        <h2 class="text-2xl font-bold mb-4 text-black text-center">Welcome!</h2>
        <div class="mb-4">
          <button class="bg-green-600 hover:bg-green-700 active:bg-green-800 focus:ring focus:ring-violet-200 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" @click="login">Login</button>
        </div>
        <div>
          <button class="bg-green-600 hover:bg-green-700 active:bg-green-800 focus:ring focus:ring-violet-200 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" @click="register">Register</button>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: "LoginRegister",
  methods: {
    login() {
      this.$router.push("Signin");
      console.log("Login button clicked");
    },
    register() {
      this.$router.push("Signup");
      console.log("Register button clicked");
    },
  },
};
</script>

<style>
.bg-green-500 {
  background-color: #34d399;
}

.text-brown-800 {
  color: #4b5563;
}

.bg-gold-500 {
  background-color: #fbbf24;
}

.bg-gold-700 {
  background-color: #b45309;
}

.bg-brown-500 {
  background-color: #a78bfa;
}

.bg-brown-700 {
  background-color: #4338ca;
}
.bg-brown-500 {
  background-color: #8b5c2b;
}
</style>
