<template>
  <div v-if="!authenticated">
    <div class="container">
      <Header />
      <main class="max-w-custom-container mx-auto px-6 md:px-8 py-8 md:py-16">
        <div class="prose sm:prose-lg">
          <h3 class="font-semibold leading-6 pb-3">
            Please Enter Password to Access This Page
          </h3>
          <form class="sm:flex sm:items-center">
            <div class="w-full sm:max-w-xs">
              <label for="email" class="sr-only">Email</label>
              <input
                v-model="inputPassword"
                type="text"
                placeholder="Enter password"
                class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <button
              @click="checkPassword"
              class="inline-block w-full sm:w-auto items-center justify-center rounded-md px-10 py-2 sm:ml-3 mt-4 sm:mt-0 font-semibold text-sm text-white shadow-sm bg-theme-dark"
            >
              Enter
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputPassword = ref("");
const authenticated = ref(false);
const password = "patels";

function checkPassword() {
  if (inputPassword.value === password) {
    authenticated.value = true;
  } else {
    alert("Incorrect Password. Please try again");
  }
}
</script>
