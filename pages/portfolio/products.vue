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
      <div class="overflow-hidden">
        <div class="container">
          <Header />
          <div class="space-y-20 md:space-y-32 py-8 md:py-20">
            <div class="max-w-custom-container mx-auto px-6 md:px-8">
              <div class="prose sm:prose-lg pb-12 md:pb-20">
                <h1 class="tracking-tight">Product Partnerships</h1>
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
                    >Rate Sheet <span aria-hidden="true">→</span>
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
                  <h2 class="tracking-tight">Past Collaborations</h2>
                  <p class="leading-8">
                    Check out some of the incredible brands we've had the pleasure of
                    partnering with in the past.
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
          </div>
          <Footer />
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
