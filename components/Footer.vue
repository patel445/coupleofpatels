<template>
  <footer>
    <div class="relative py-16 md:py-24 isolate overflow-hidden bg-slate-900">
      <div class="max-w-custom-container mx-auto px-6 md:px-8">
        <div
          class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
        >
          <form
            action="https://coupleofpatels.us22.list-manage.com/subscribe/post?u=1e1468d62c179bbf4bc57956b&amp;id=918df152c6&amp;f_id=000cc1e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_self"
            novalidate=""
          >
            <p class="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Subscribe to our newsletter
            </p>
            <p class="pt-6 leading-8 text-slate-300">
              Gain access to full trip itineraries, tips, and more!
            </p>
            <div class="flex max-w-md gap-x-4 mt-6">
              <label for="email-address" class="sr-only">Email address</label>
              <input
                type="email" name="EMAIL" class="flex-auto px-3.5 py-2 rounded-md border-0 bg-white/5 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 required" id="mce-EMAIL" required="" value=""
                placeholder="Enter your email"
              />
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display: none;"></div>
                <div class="response" id="mce-success-response" style="display: none;"></div>
              </div>
              <div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_1e1468d62c179bbf4bc57956b_918df152c6" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button flex-none px-3.5 py-2.5 rounded-md bg-white text-sm font-medium hover:bg-zinc-100" value="Subscribe"></div>
            </div>
          </form>
          <div
            class="hidden sm:grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pl-5"
          >
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <p class="py-4 text-lg font-semibold text-white">
                Travel Itineraries
              </p>
              <p class="text-base leading-7 text-slate-300">
                Receive exclusive itineraries from our past trips.
              </p>
            </div>
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <BriefcaseIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p class="py-4 text-lg font-semibold text-white">Other Offers</p>
              <p class="text-base leading-7 text-slate-300">
                Get exclusive travel-related offers that we come across!
              </p>
            </div>
          </div>
        </div>
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
import { CalendarDaysIcon, BriefcaseIcon } from "@heroicons/vue/24/outline";
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
