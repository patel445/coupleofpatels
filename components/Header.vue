<template>
  <div
    class="fixed inset-x-0 top-0 z-40 h-[5px] sm:h-[6px] bg-theme"
    :style="{ width: percent }"
  ></div>
  <Popover
    class="mx-auto px-4 sm:px-8 lg:px-12 py-2 lg:py-4 flex items-center justify-between top-0 z-30 lg:relative sticky bg-white/95 lg:bg-transparent"
  >
    <div class="flex lg:flex-1 justify-start">
      <a href="/" class="mt-1">
        <span class="sr-only">Couple of Patels</span>
        <img class="h-8 mt-1" src="/logosite.png" alt="couple of patels logo" />
      </a>
    </div>
    <div class="lg:hidden -mr-3">
      <PopoverButton
        class="relative p-2 rounded text-[#191919] hover:bg-zinc-100 focus:outline-none"
      >
        <span class="absolute -inset-0.5" />
        <span class="sr-only">Open menu</span>
        <Bars3Icon class="h-7 w-7" aria-hidden="true" />
      </PopoverButton>
    </div>
    <PopoverGroup
      as="nav"
      class="hidden lg:flex px-6 py-2 space-x-7 rounded-full flex rounded-full bg-white/90 px-3 text-sm font-medium shadow ring-1 ring-zinc-900/5 backdrop-blur"
    >
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="text-14 font-medium text-hover active:text-primary"
        >{{ item.name }}</a
      >
    </PopoverGroup>
    <div class="hidden lg:flex lg:flex-1 space-x-4 items-center justify-end">
      <div class="flex space-x-3 justify-center lg:justify-start mt-7 mb-7">
        <!-- Instagram -->
        <a
          class="group flex text-sm font-medium transition hover:text-[#d1aba0]"
          target="_blank"
          href="https://www.instagram.com/coupleofpatels"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-7 w-7 flex-none transition group-hover:fill-[#d1aba0]"
          >
            <path
              d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"
            ></path>
            <path
              d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"
            ></path>
          </svg>
        </a>

        <!-- Facebook -->
        <a
          class="group flex text-sm font-medium transition hover:text-[#d1aba0]"
          target="_blank"
          href="https://www.facebook.com/coupleofpatels/"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-5 w-5 mt-1 flex-none transition group-hover:fill-[#d1aba0]"
          >
            <path
              fill="currentColor"
              d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
            />
          </svg>
        </a>
        <!-- TikTok -->
        <a
          class="group flex text-sm font-medium transition hover:text-[#d1aba0]"
          target="_blank"
          href="https://www.tiktok.com/@coupleofpatels"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="mt-1 h-6 w-6 flex-none transition group-hover:fill-[#d1aba0]"
          >
            <path
              fill="currentColor"
              d="M12 2.04c0-.563.456-1.02 1.02-1.02h2.54a.51.51 0 0 1 .51.51c.01 1.08.36 2.08.97 2.87.61.79 1.47 1.35 2.44 1.57a.51.51 0 0 1 .4.5v2.63a.51.51 0 0 1-.61.5c-1.37-.27-2.64-.87-3.65-1.74v7.77c0 2.96-2.4 5.36-5.36 5.36S5.12 19.54 5.12 16.58c0-2.77 2.11-5.06 4.83-5.33.29-.03.59-.05.89-.05.34 0 .62.27.62.61v2.44c0 .34-.27.61-.61.61h-.08c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72c.95 0 1.72-.77 1.72-1.72V2.04Z"
            />
          </svg>
        </a>
        <!-- YouTube -->
        <a
          class="group flex text-sm font-medium transition hover:text-[#d1aba0]"
          target="_blank"
          href="https://www.youtube.com/@CoupleofPatels"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-7 w-7 flex-none transition group-hover:fill-[#d1aba0]"
          >
            <path
              fill="currentColor"
              d="M21.8 8.001s-.2-1.412-.82-2.035c-.787-.82-1.67-.824-2.072-.87C16.416 4.88 12 4.88 12 4.88h-.02s-4.416 0-6.908.217c-.401.047-1.285.05-2.072.87-.62.623-.82 2.035-.82 2.035S2 9.802 2 11.603v.794c0 1.801.2 3.602.2 3.602s.2 1.412.82 2.035c.787.82 1.82.795 2.28.88 1.654.158 6.82.216 6.82.216s4.417-.006 6.91-.224c.401-.047 1.285-.05 2.072-.87.62-.623.82-2.035.82-2.035s.2-1.801.2-3.602v-.794c0-1.801-.2-3.602-.2-3.602zM9.818 15.14V8.859l6.08 3.14-6.08 3.14z"
            />
          </svg>
        </a>

        <!-- Email -->
        <a
          class="group flex text-sm font-medium transition hover:text-[#d1aba0]"
          href="mailto:coupleofpatels@gmail.com"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-7 w-7 flex-none transition group-hover:fill-[#d1aba0]"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <PopoverOverlay class="fixed inset-0 bg-[#191919] opacity-90" />
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute p-2 inset-x-0 top-1.5 z-30 transform transition lg:hidden"
      >
        <div
          class="divide-y-2 divide-zinc-200 rounded-lg bg-white shadow-lg ring-1 ring-[#191919] ring-opacity-5"
        >
          <div class="px-6 pt-3 pb-2">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="/logosite.png"
                  alt="couple of patels logo"
                />
              </div>
              <div class="-mr-3 -mt-1">
                <PopoverButton
                  class="relative p-2 rounded text-[#191919] hover:bg-zinc-100 focus:outline-none"
                >
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-7 w-7" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="px-3">
            <div class="space-y-2 pt-2 pb-3">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="block py-3 pl-3 border-l-4 border-transparent text-17 font-medium active:text-primary text-hover"
                >{{ item.name }}</a
              >
              <div
                class="flex flex-1 space-x-4 pt-4 pb-2 pl-4 border-t border-zinc-200"
              >
                <a v-for="item in social" :key="item.name" :href="item.href">
                  <img :src="item.src" class="h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
<script setup>
import {
  Popover,
  PopoverOverlay,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const navigation = [
  { name: "Partnerships", href: "/partnerships", current: false },
  { name: "Creative", href: "/creative", current: false },
  { name: "Blog", href: "https://blog.coupleofpatels.com/", current: false },
  { name: "Shop", href: "/shop-like-us", current: false },
  { name: "Contact", href: "mailto:coupleofpatels@gmail.com", current: false },
];
</script>
<script>
export default {
  data() {
    return {
      percent: "0%",
    };
  },
  watch: {
    $route() {
      this.updatepercentIndicator();
    },
  },
  methods: {
    updatepercentIndicator() {
      const { documentElement, body } = document;
      let windowScroll = body.scrollTop || documentElement.scrollTop;
      let height = documentElement.scrollHeight - documentElement.clientHeight;
      this.percent = (windowScroll / height) * 100 + "%";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updatepercentIndicator);
  },
};
</script>
