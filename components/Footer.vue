<template>
  <footer>
    <div class="bg-white max-w-custom-container mx-auto md:px-8">
      <div
        class="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-20 lg:flex-row lg:items-center lg:py-32"
      >
        <h2
          class="max-w-2xl text-3xl font-bold tracking-tight text-white lg:max-w-none lg:flex-auto"
        >
          Sign Up for FREE Access to Our Courses and More!
        </h2>
        <div class = "w-full max-w-md">
          <form
            @submit.prevent="handleSubmit($event, 'formfooter')"
          >
            <div class="flex gap-x-4">
              <label for="footer-email" class="sr-only">Email address</label>
              <input
                id="footer-email"
                name="EMAIL"
                type="email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                title="Please enter a valid email address"
                v-model="email"
                class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Sign Up
              </button>
            </div>
            <div style="position: absolute; left: -5000px" aria-hidden="true">
              <input
                type="text"
                name="b_1e1468d62c179bbf4bc57956b_918df152c6"
                tabindex="-1"
                value=""
              />
            </div>
          </form>
          <div
            v-if="message"
            :class="{
              'text-green-500': isSuccess,
              'text-red-500': !isSuccess,
            }"
            class="mt-4"
          >
            {{ message }}
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-300">
            *Unsubscribe at any time directly from the email.
          </p>
        </div>
        <div
          class="absolute sm:left-2/3 -translate-x-2/3 blur-3xl top-0 -z-10 lg:-top-40"
          aria-hidden="true"
        >
          <div
            class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-r from-[#f3ded8] via-pink-900 to-[#BC9690] opacity-35"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </div>
    <div
      class="max-w-custom-container mx-auto px-6 md:px-8 py-8 sm:flex sm:items-center sm:justify-between"
    >
      <div class="mb-5 sm:mb-0 text-left">
        <p class="text-15">&copy; 2024 COUPLE OF PATELS LLC</p>
      </div>
      <div class="flex sm:mt-0">
        <div class="flex flex-1 space-x-4">
          <a
            href="/terms"
            class="text-15 hover:text-[#BC9690] border-r-2 border-zinc-200 pr-4"
          >
            Terms & Privacy
          </a>
          <a v-for="item in social" :key="item.name" :href="item.href">
            <img :src="item.src" class="h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useEmailSubscription } from "~/composables/useEmailSubscription";

const { email, message, isSuccess, handleSubmit } = useEmailSubscription();
const social = [
  {
    name: "Instagram",
    href: "https://instagram.com/coupleofpatels",
    src: "/instagram.svg",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@CoupleofPatels",
    src: "/youtube.svg",
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/coupleofpatels",
    src: "/pinterest.svg",
  },
  {
    name: "Amazon",
    href: "https://amazon.com/shop/coupleofpatels",
    src: "/amazon.svg",
  },
  {
    name: "LTK",
    href: "https://shopltk.com/explore/coupleofpatels",
    src: "/ltk.svg",
  },
  {
    name: "Email",
    href: "mailto:coupleofpatels@gmail.com",
    src: "/email.svg",
  },
];
</script>
