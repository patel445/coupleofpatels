<template>
  <Head>
    <Title>Couple of Patels | Product Portfolio</Title>
    <Meta
      name="description"
      content="We love using our platform to help businesses like yours increase sales and grow."
    />
    <Link
      rel="canonical"
      href="https://coupleofpatels.com/partnerships/products"
    />
    <Meta property="og:title" content="Couple of Patels | Product Portfolio" />
    <Meta
      property="og:description"
      content="We love using our platform to help businesses like yours increase sales and grow."
    />
    <Meta
      property="og:url"
      content="https://coupleofpatels.com/partnerships/products"
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
  <div class="overflow-hidden">
    <div class="sm:px-8 lg:px-16">
      <div class="container">
        <Header />
        <div class="space-y-20 lg:space-y-32 py-8 lg:py-20">
          <div
            class="max-w-3xl lg:max-w-[1080px] mx-auto px-4 sm:px-8 lg:px-12"
          >
            <div class="prose sm:prose-lg pb-12 lg:pb-20">
              <h1 class="tracking-tight">Product Partnerships</h1>
              <p class="leading-8 sm:max-w-2xl">
                We’re Jay and Himani, the adventure travel content creators
                behind
                <a
                  href="https://instagram.com/coupleofpatels"
                  class="text-primary-hover no-underline"
                  >@coupleofpatels</a
                >. We’ve have worked with countless brands to show our audience how their products fit seamlessly into our lifestyle. Now, we’re excited to discover new brands that align with our story and values!
              </p>
              <div class="flex items-center gap-x-6 mt-8 lg:mt-10">
                <a
                  href="/contact"
                  class="inline-block w-[50%] sm:w-[30%] rounded-md bg-theme-dark text-sm text-center text-white font-medium no-underline py-3"
                  >Contact Us</a
                >
              </div>
            </div>
            <InstagramStats />
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
                
                    <img
                      class="rounded-2xl object-cover max-h-[325px] w-full h-full"
                      :src="brand.imageUrl"
                    />
              
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
    name: "Western Rise",
    description: "Apparel",
    imageUrl: "/product/westernrise.JPG",
    bio: "Western Rise, a brand known for its versatile and performance-driven apparel, has a following of over 80,000 on Instagram."
  },
  {
    name: "Arcade Belts",
    description: "Belts",
    imageUrl: "/product/arcadebelts.jpg",
    bio: "Arcade Belts, a brand known for its durable and stretchy adventure belts, has a following of over 49,400 on Instagram."
  },
  {
    name: "Aventon",
    description: "Electric Bikes",
    imageUrl: "/product/aventon1.png",
    bio: "Aventon, a brand known for its high-performance e-bikes, has a following of over 131,000 on Instagram."
  },
  {
    name: "Vessi",
    description: "Shoes & Apparel",
    imageUrl: "/product/vessi-close.jpg",
    bio: "Vessi, a company known for its fully waterproof shoes and apparel, boasts a following of over 348,000 on Instagram."
  },
  {
    name: "Enjoy The Wood",
    description: "Wooden Map & Decor",
    imageUrl: "/product/enjoy-the-wood-pin.jpg",
    bio: "Enjoy The Wood, a brand known for its wooden map decor, has a following of over 466,000 on Instagram."
  },
  {
    name: "CamelBak",
    description: "Outdoor & Sporting Goods",
    imageUrl: "/product/camelbak.jpg",
    bio: "CamelBak, a brand known for its innovative hydration packs and outdoor gear, has a dedicated following of over 165,000 on Instagram."
  },
];
</script>
