<template>
  <Head>
    <Title>Couple of Patels | Product Portfolio</Title>
    <Meta
      name="description"
      content="We love using our platform to help businesses like yours increase sales and grow."
    />
    <Link
      rel="canonical"
      href="https://coupleofpatels.com/portfolio/products"
    />
    <Meta property="og:title" content="Couple of Patels | Product Portfolio" />
    <Meta
      property="og:description"
      content="We love using our platform to help businesses like yours increase sales and grow."
    />
    <Meta
      property="og:url"
      content="https://coupleofpatels.com/portfolio/products"
    />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Product Portfolio"
    />
    <Meta
      property="twitter:description"
      content="We love using our platform to help businesses like yours increase sales and grow."
    />
    <Metadata />
  </Head>
  <PasswordProtect>
    <template #default>
      <div class="overflow-hidden">
        <div class="container">
          <Header />
          <div class="space-y-20 md:space-y-36 py-8 md:py-20">
            <div class="max-w-custom-container mx-auto px-6 md:px-8">
              <div class="prose sm:prose-lg pb-12 md:pb-20">
                <h1 class="tracking-tight">Product Collabs</h1>
                <p class="leading-8 sm:max-w-3xl">

                  We’re Jay and Himani, the adventure travel content creators behind <a
                    href="https://instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                  >, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers. Interested in working together?
                      Check out our work below to see what we do and how we
                      could collaborate. Let's create something amazing
                      together!
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
                    src="/product/vessi-couple.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/product/enjoy-the-wood-point.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover object-bottom"
                    src="/product/vessi-mani.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/product/camelbak-jay.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/product/blu-bottle.jpg"
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
                    some of the incredible brands we've had the pleasure of
                    partnering with in the past. Join us, and let's make magic
                    happen together!
                  </p>
                </div>
                <ul
                  class="-mt-12 space-y-12 divide-y divide-zinc-200 xl:col-span-3"
                >
                  <li
                    v-for="brand in brands"
                    :key="brand.name"
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pt-12"
                  >
                    <a :href="brand.link" target="_blank">
                      <img
                        class="rounded-2xl object-cover max-h-[325px] w-full h-full"
                        :src="brand.imageUrl"
                      />
                    </a>
                    <div class="flex-auto max-w-xl">
                      <h3
                        class="text-lg text-zinc-900 font-semibold leading-8 tracking-tight"
                      >
                        {{ brand.name }}
                      </h3>
                      <p class="text-base text-zinc-700 leading-7">
                        {{ brand.description }}
                      </p>
                      <p class="mt-6 mb-4 text-base text-zinc-700 leading-7">
                        {{ brand.bio }}
                      </p>
                      <a
                        :href="brand.link"
                        v-if="brand.link"
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
                        captivating visuals of your product will create a direct
                        link between our followers and your brand.
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
                              >$225</span
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
                        Up your sales with our post! We seamlessly integrate
                        your product into our content, complete with visuals and
                        a link, making it easy for both new and returning
                        followers to purchase at any time
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
                              >$625</span
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
                        immersive way to showcase your product. Given the large
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
                              >$1500</span
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

const whatsIncludedStory = [
  "1 story slide",
  "Link to the product",
  "Brief note on the product",
  "Copy of content available upon request",
];
const whatsIncludedPost = [
  "1 single image post",
  "Link to the product",
  "Detailed notes about the product",
  "Copy of content available upon request",
];
const whatsIncludedReel = [
  "1 reel",
  "Link to the product",
  "Detailed notes about the product",
  "Copy of content available upon request",
];

const brands = [
  {
    name: "Vessi",
    description: "Shoes & Apparel",
    imageUrl: "/product/vessi-close.jpg",
    bio: "Vessi, a company known for its fully waterproof shoes and apparel, boasts a following of over 330,000 on Instagram.",
    link: "https://instagram.com/p/C4ekEofr-dl/",
  },
  {
    name: "Enjoy The Wood",
    description: "Wooden Map & Decor",
    imageUrl: "/product/enjoy-the-wood-pin.jpg",
    bio: "Enjoy The Wood, a company specializing in wooden map decor for your home, has a following of over 415,000 on Instagram.",
    link: "https://instagram.com/p/C4HbMSSrIDt/",
  },
  {
    name: "CamelBak",
    description: "Outdoor & Sporting Goods",
    imageUrl: "/product/camelbak.jpg",
    bio: "CamelBak, renowned for its high-quality outdoor and sporting goods, is best known for its iconic hydration packs. With a following of over 164,000, the company continues to lead in innovative hydration solutions.",
    link: "",
  },
];
</script>
