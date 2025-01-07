<template>
  <div v-if="!authenticated">
    <div class="container">
      <Header />
      <div class="relative isolate">
        <div class="lg:max-w-custom-container max-w-3xl mx-auto">
          <div class="relative lg:static">
            <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden"
            >
              <svg
                class="absolute inset-0 h-full w-full stroke-zinc-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="white"
                />
                <svg x="100%" y="-1" class="overflow-visible fill-zinc-50">
                  <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <main class="px-4 sm:px-8 lg:px-12 py-20 md:py-28">
              <div class="flex min-h-full flex-1 flex-col justify-center">
                <div class="sm:mx-auto sm:w-full sm:max-w-[480px]">
                  <div
                    class="bg-white px-8 py-12 sm:px-16 sm:py-16 shadow-xl rounded-lg"
                  >
                    <h2 class="text-2xl font-semibold tracking-tight">
                      Please Enter Password to Access This Page
                    </h2>
                    <form class="mt-6 space-y-6">
                      <div>
                        <label
                          for="email"
                          class="block text-base font-medium leading-6"
                          >Password:</label
                        >
                        <div class="mt-2">
                          <input
                            v-model="inputPassword"
                            type="text"
                            placeholder="Enter password"
                            class="block w-full rounded-md border-0 p-3 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          @click="checkPassword"
                          class="flex w-full justify-center px-3 py-2.5 text-sm text-white font-semibold leading-6 shadow-sm rounded-md bg-theme-dark"
                        >
                          Enter Page
                        </button>
                      </div>
                    </form>
                  </div>

                  <p class="mt-10 text-center text-sm">
                    Why partner with us?
                    <a
                      href="/partnerships"
                      class="font-semibold leading-6 text-primary-hover"
                    >
                      Learn why now!</a
                    >
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
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
const config = useRuntimeConfig();
const passwords = config.public.secretPasswords ? config.public.secretPasswords.split(', ') : '';

if (typeof window !== 'undefined') {
    if (sessionStorage.getItem('isAuth')) {
        authenticated.value = true;
    }
}

function checkPassword() {
  if (passwords.includes(inputPassword.value)) {
    sessionStorage.setItem("isAuth", true);
  } else {
    alert("Incorrect Password. Please try again");
  }
}

</script>
