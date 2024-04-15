<template>
  <PasswordProtect>
    <template #default>
      <div class="overflow-hidden">
        <div class="container">
          <Header />
          <div class="space-y-20 md:space-y-36 py-8 md:py-20">
            <div class="max-w-custom-container mx-auto px-6 md:px-8">
              <div class="prose sm:prose-lg pb-12 md:pb-20">
                <h1 class="tracking-tight">Stay Collabs</h1>
                <p class="leading-8 sm:max-w-3xl">
                  Hey there! We're Jay and Himani, the couple behind
                  <a
                    href="https://www.instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                  >
                  on Instagram. Our space is all about sharing the adventures
                  and experiences we've gathered across the Midwest. We love
                  using our platform to help promote stays like yours gain more
                  visibility and increased traffic. Let's have a chat and make
                  this opportunity a reality!
                </p>
                <div class="flex items-center gap-x-6 mt-8 md:mt-10">
                  <a
                    href="/contact"
                    class="inline-block w-[50%] sm:w-[30%] rounded-md bg-theme-dark text-sm text-center text-white font-medium no-underline py-3"
                    >Contact Us</a
                  >
                  <a
                    href="#our-rates"
                    class="inline-block text-sm text-center font-semibold no-underline"
                    >Our Rates <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <InstagramStats />
            </div>
            <section>
              <div
                class="flex justify-center gap-5 sm:gap-8 -mb-4 sm:-mb-0 py-4"
              >
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/stay/owl-house-shasta.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/stay/stony-pool.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover object-bottom"
                    src="/stay/owl-house.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/stay/neighborhood.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/stay/stony-chair.jpg"
                  />
                </div>
              </div>
            </section>
            <section id="past-collabs">
              <div
                class="max-w-custom-container mx-auto px-6 md:px-8 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-5"
              >
                <div class="xl:col-span-2 prose sm:prose-lg">
                  <h2 class="tracking-tight">Past Collabs</h2>
                  <p class="leading-8">
                    We're all about creating unforgettable moments and
                    delivering unmatched value through our collaborations, all
                    while making a positive impact on our audience. Check out
                    some of the incredible stays we've had the pleasure of
                    partnering with in the past. Join us, and let's make magic
                    happen together!
                  </p>
                </div>
                <ul
                  class="-mt-12 space-y-12 divide-y divide-zinc-200 xl:col-span-3"
                >
                  <li
                    v-for="stay in stays"
                    :key="stay.name"
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pt-12"
                  >
                    <a :href="stay.link" target="_blank">
                      <img
                        class="rounded-2xl object-cover max-h-[325px] w-full h-full"
                        :src="stay.imageUrl"
                      />
                    </a>
                    <div class="flex-auto max-w-xl">
                      <h3
                        class="text-lg text-zinc-900 font-semibold leading-8 tracking-tight"
                      >
                        {{ stay.name }}
                      </h3>
                      <p class="text-base text-zinc-700 leading-7">
                        {{ stay.description }}
                      </p>
                      <p class="mt-6 mb-4 text-base text-zinc-700 leading-7">
                        {{ stay.bio }}
                      </p>
                      <a
                        :href="stay.link"
                        target="_blank"
                        class="inline-block text-15 font-semibold no-underline text-primary-hover"
                        >View Work <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section id="our-rates">
              <div class="max-w-custom-container mx-auto px-6 md:px-8">
                <div class="-mt-4 md:-mt-0 pb-12 prose sm:prose-lg">
                  <h2 class="tracking-tight">Our Rates</h2>
                  <p class="leading-8 sm:max-w-3xl">
                    We've put a lot of thought into our pricing to ensure it
                    truly reflects our value to you and aligns with industry
                    standards. To thank you for choosing us, we offer a special
                    bonus: with every paid service, just let us know, and we'll
                    provide you with copies of all the photos and videos we've
                    captured.
                  </p>
                </div>
                <div
                  class="grid grid-cols-1 gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-1"
                >
                  <div
                    class="rounded-2xl ring-1 ring-zinc-300 lg:flex lg:max-w-none lg:mx-0"
                    id="story-slide"
                  >
                    <div class="lg:flex-auto p-8 lg:p-10">
                      <h3 class="text-xl sm:text-2xl font-bold tracking-tight">
                        Story Slide
                      </h3>
                      <p class="mt-6 text-base leading-7 text-zinc-700">
                        Increase your traffic with our story slides! Our
                        captivating visuals from the accomodation will create a
                        direct link between our followers and your stay.
                      </p>
                      <div class="flex items-center gap-x-4 mt-6">
                        <h4
                          class="flex-none text-sm text-primary font-semibold leading-6"
                        >
                          What’s included:
                        </h4>
                      </div>
                      <ul
                        role="list"
                        class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 leading-6 font-medium mt-6"
                      >
                        <li
                          v-for="feature in whatsIncludedStory"
                          :key="feature"
                          class="flex gap-x-3 text-sm"
                        >
                          <CheckIcon
                            class="h-6 w-5 flex-none text-primary"
                            aria-hidden="true"
                          />
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                    <div
                      class="lg:max-w-md lg:flex-shrink-0 -mt-2 p-2 lg:mt-0 lg:w-full"
                    >
                      <div
                        class="lg:flex lg:flex-col rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-900/5"
                      >
                        <div class="p-8 lg:p-14">
                          <p class="text-base font-semibold">
                            Price for single story slide
                          </p>
                          <p class="flex items-baseline gap-x-2 mt-6">
                            <span class="text-5xl font-semibold tracking-tight"
                              >$130</span
                            >USD
                          </p>
                          <a
                            href="mailto:coupleofpatels@gmail.com"
                            class="inline-block w-[100%] sm:w-[75%] rounded-md bg-theme-dark text-sm font-medium text-center text-white py-3 mt-8"
                            >Email Us</a
                          >
                          <p class="mt-6 text-sm text-zinc-700">
                            <i>*$10 per 1000 followers</i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-2xl ring-1 ring-zinc-300 lg:flex lg:max-w-none lg:mx-0"
                    id="story-slide"
                  >
                    <div class="lg:flex-auto p-8 lg:p-10">
                      <h3 class="text-xl sm:text-2xl font-bold tracking-tight">
                        Post
                      </h3>
                      <p class="mt-6 text-base leading-7 text-zinc-700">
                        Up your traffic with our post! We craft a detailed
                        overview of the accomodation, complete with visuals, so
                        it's easy for both new and returning followers to
                        explore at any time.
                      </p>
                      <div class="flex items-center gap-x-4 mt-6">
                        <h4
                          class="flex-none text-sm text-primary font-semibold leading-6"
                        >
                          What’s included:
                        </h4>
                      </div>
                      <ul
                        role="list"
                        class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 leading-6 font-medium mt-6"
                      >
                        <li
                          v-for="feature in whatsIncludedPost"
                          :key="feature"
                          class="flex gap-x-3 text-sm"
                        >
                          <CheckIcon
                            class="h-6 w-5 flex-none text-primary"
                            aria-hidden="true"
                          />
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                    <div
                      class="lg:max-w-md lg:flex-shrink-0 -mt-2 p-2 lg:mt-0 lg:w-full"
                    >
                      <div
                        class="lg:flex lg:flex-col rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-900/5"
                      >
                        <div class="p-8 lg:p-14">
                          <p class="text-base font-semibold">
                            Price for single image post
                          </p>
                          <p class="flex items-baseline gap-x-2 mt-6">
                            <span class="text-5xl font-semibold tracking-tight"
                              >$325</span
                            >USD
                          </p>
                          <a
                            href="mailto:coupleofpatels@gmail.com"
                            class="inline-block w-[100%] sm:w-[75%] rounded-md bg-theme-dark text-sm font-medium text-center text-white py-3 mt-8"
                            >Email Us</a
                          >
                          <p class="mt-6 text-sm text-zinc-700">
                            <i
                              >*$25 per 1000 followers. <br />
                              Additional $50 per extra image.</i
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-2xl ring-1 ring-zinc-300 lg:flex lg:max-w-none lg:mx-0"
                    id="story-slide"
                  >
                    <div class="lg:flex-auto p-8 lg:p-10">
                      <h3 class="text-xl sm:text-2xl font-bold tracking-tight">
                        Reel
                      </h3>
                      <p class="mt-6 text-base leading-7 text-zinc-700">
                        Boost your traffic with our reel! Dive into the most
                        immersive way to showcase your stay. Given the large
                        number of targeted views we receive on reels, they are a
                        prime choice for getting the right kind of exposure.
                      </p>
                      <div class="flex items-center gap-x-4 mt-6">
                        <h4
                          class="flex-none text-sm text-primary font-semibold leading-6"
                        >
                          What’s included:
                        </h4>
                      </div>
                      <ul
                        role="list"
                        class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 leading-6 font-medium mt-6"
                      >
                        <li
                          v-for="feature in whatsIncludedReel"
                          :key="feature"
                          class="flex gap-x-3 text-sm"
                        >
                          <CheckIcon
                            class="h-6 w-5 flex-none text-primary"
                            aria-hidden="true"
                          />
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                    <div
                      class="lg:max-w-md lg:flex-shrink-0 -mt-2 p-2 lg:mt-0 lg:w-full"
                    >
                      <div
                        class="lg:flex lg:flex-col rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-900/5"
                      >
                        <div class="p-8 lg:p-14">
                          <p class="text-base font-semibold">
                            Price for instagram reel
                          </p>
                          <p class="flex items-baseline gap-x-2 mt-6">
                            <span class="text-5xl font-semibold tracking-tight"
                              >$780</span
                            >USD
                          </p>
                          <a
                            href="mailto:coupleofpatels@gmail.com"
                            class="inline-block w-[100%] sm:w-[75%] rounded-md bg-theme-dark text-sm font-medium text-center text-white py-3 mt-8"
                            >Email Us</a
                          >
                          <p class="mt-6 text-sm text-zinc-700">
                            <i>*$60 per 1000 followers</i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-base mt-10 max-w-3xl">
                  <i
                    >*We also offer personalized packages with discounts. If
                    you're interested, drop us an email at
                    <a
                      href="mailto:coupleofpatels@gmail.com"
                      class="text-primary-hover text-bold no-underline"
                      >coupleofpatels@gmail.com</a
                    >, and we'd love to work something out.
                  </i>
                </p>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </template>
  </PasswordProtect>
</template>
<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";
import PasswordProtect from "~/components/PasswordProtect.vue";

const stays = [
  {
    name: "Owl House Airbnb",
    description: "Airbnb",
    imageUrl: "/stay/owl-house-shasta.jpg",
    bio: "The Owl House, an airbnb with a vintage 1963 Shasta imbedded in a fully equipped home",
    link: "https://www.instagram.com/reel/C4zJbTsLPVS/",
  },
  {
    name: "Stony Creek Peoria",
    description: "Hotel",
    imageUrl: "/stay/stony-chair.jpg",
    bio: "Stony Creek, where you can expect an exceptionally personal home-away-from-home experience",
    link: "https://www.instagram.com/reel/C1qWLBVry8E/",
  },
  {
    name: "The Neighborhood Hotel®",
    description: "Hotel",
    imageUrl: "/stay/neighborhood.jpg",
    bio: "The Neighborhood Hotel, a home away from home where thoughtful design meets genuine comfort, is a home styled hotel",
    link: "https://www.instagram.com/reel/C2Bhi4JL9T1/",
  },
];

const whatsIncludedStory = [
  "1 story slide",
  "Link to the stay",
  "Brief note on the stay",
  "Copy of content available upon request",
];
const whatsIncludedPost = [
  "1 single image post",
  "Link to the stay",
  "Detailed notes about the stay",
  "Copy of content available upon request",
];
const whatsIncludedReel = [
  "1 reel",
  "Link to the stay",
  "Detailed notes about the stay",
  "Copy of content available upon request",
];
</script>
