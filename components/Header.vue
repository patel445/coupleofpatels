<template>
  <div
    class="fixed inset-x-0 top-0 z-40 h-[5px] sm:h-[7px] bg-theme"
    :style="{ width: percent }"
  ></div>
  <Popover
    class="max-w-custom-container mx-auto px-6 md:px-8 py-2 lg:py-6 flex items-center justify-between top-0 z-30 shadow-md lg:shadow-none lg:relative sticky bg-white/95 lg:bg-transparent"
  >
    <div class="flex lg:flex-1 justify-start">
      <a href="/" class="mt-1">
        <span class="sr-only">Couple of Patels</span>
        <img
          class="h-8 md:h-9"
          src="/logosite.png"
          alt="couple of patels logo"
        />
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
      class="hidden lg:flex px-6 py-2 space-x-8 rounded-full shadow-sm border border-zinc-200"
    >
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="text-15 font-medium hover:text-primary "
        >{{ item.name }}</a
      >
    </PopoverGroup>
    <div class="hidden lg:flex lg:flex-1 space-x-4 items-center justify-end">
      <a v-for="item in social" :key="item.name" :href="item.href">
        <img :src="item.src" class="h-5" />
      </a>
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
                  class="h-8 md:h-9 w-auto"
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
                class="block py-3 pl-3 border-l-4 border-transparent text-17 font-medium hover:text-primary "
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
    name: "Email",
    href: "mailto:coupleofpatels@gmail.com",
    src: "/email.svg",
  }
];
const navigation = [
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "Blog", href: "https://blog.coupleofpatels.com/", current: false },
  { name: "Shop Like Us", href: "/shop-like-us", current: false },
  { name: "About", href: "/about", current: true },
  { name: "Contact", href: "/contact", current: false },
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
