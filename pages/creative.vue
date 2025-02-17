<template>
  <Head>
    <Title>Couple of Patels | Creative Services</Title>
    <Meta
      name="description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Link rel="canonical" href="https://coupleofpatels.com/creative" />
    <Meta property="og:title" content="Couple of Patels | Creative Services" />
    <Meta
      property="og:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Meta property="og:url" content="https://coupleofpatels.com/creative" />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Creative Services"
    />
    <Meta
      property="twitter:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Metadata />
  </Head>
  <div class="overflow-hidden">
    <div class="sm:px-8 lg:px-16">
      <div class="container">
        <Header />
        <div class="space-y-20 lg:space-y-32 py-8 lg:py-20">
          <div
            class="max-w-3xl lg:max-w-[1080px] mx-auto px-4 sm:px-8 lg:px-12"
          >
            <div class="prose sm:prose-lg">
              <h1 class="tracking-tight"> Hi, we're Jay & Himani</h1>
              <p class="leading-8 sm:max-w-2xl">
                We love creating content for amazing brands to bring their visions to life! From photography and videography to drone shots, ad creation, and engaging storytelling – we do it all to help businesses grow and stand out.
                <br><br>
                Curious about what we can create together? Take a look below at some of the exciting projects we've worked on across various industries.
              </p>
              <div class="flex items-center gap-x-6 mt-8 lg:mt-10">
                <a
                  href="/contact"
                  class="inline-block w-[50%] sm:w-[30%] rounded-md bg-theme-dark text-sm text-center text-white font-medium no-underline py-3"
                  >Contact Us</a
                >
              </div>
            </div>
          </div>
          <section>
            <div class="flex justify-center gap-5 sm:gap-8 -mb-4 sm:-mb-0 py-4">
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
              class="max-w-3xl lg:max-w-[1080px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 xl:grid-cols-5"
            >
              <div class="xl:col-span-2 prose sm:prose-lg">
                <h2 class="tracking-tight">Past Collaborations</h2>
                <p class="leading-8">
                  Check out some of the incredible brands we've had the pleasure
                  of partnering with in the past.
                </p>
              </div>
              <ul
                class="-mt-12 space-y-12 divide-y divide-zinc-200 xl:col-span-3"
              >
                <li
                  v-for="brand in brands"
                  :key="brand.name"
                  class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 pt-12"
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
                      class="inline-block text-14 font-semibold no-underline text-primary-hover"
                      >View Work <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
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

