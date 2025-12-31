<template>
  <Head>
    <Title>Couple of Patels | Shop Our Favorites</Title>
    <Meta
      name="description"
      content="Shop all the items we love and use daily."
    />
    <Link rel="canonical" href="https://coupleofpatels.com/shop-our-favorites" />
    <Meta property="og:title" content="Couple of Patels | Shop Our Favorites" />
    <Meta
      property="og:description"
      content="Shop all the items we love and use daily."
    />
    <Meta property="og:url" content="https://coupleofpatels.com/shop-our-favorites" />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Shop Our Favorites"
    />
    <Meta
      property="twitter:description"
      content="Shop all the items we love and use daily."
    />
    <Metadata />
  </Head>
  <div class="sm:px-8 lg:px-16">
  <div class="container">
    <Header />
    <div class="relative pt-12 pb-28 lg:py-20">
      <div class="absolute inset-0">
        <img
          class="h-full w-full object-cover image-top"
          src="/tourism/louisville-bridge.jpg"
          alt=""
        />
        <div
          class="absolute inset-0 bg-[#BC9690] mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div class="relative  mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div class="prose sm:prose-lg">
          <h1 class="text-white mb-0 sm:mb-0">Shop Our Favorites</h1>
          <p class="font-medium text-slate-100">
            Shop all the items we love and use daily.
          </p>
        </div>
      </div>
    </div>
    <main
      class=" mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:pt-16 lg:pb-20"
    >
      <section class="relative -mt-20 lg:-mt-28">
        <h2 class="sr-only">Shop Now</h2>
        <div
          class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-4 lg:gap-x-8"
        >
          <div
            v-for="link in shoppingLinks"
            :key="link.name"
            class="flex flex-col rounded-2xl bg-white shadow-xl"
          >
            <div class="relative flex-1 px-4 sm:px-8 lg:px-12 pb-8 pt-16">
              <a
                :href="link.href"
                class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-theme-dark p-5 shadow-lg"
              >
                <img :src="link.image" class="h-6 text-hover" />
              </a>
              <div class="prose sm:prose-lg">
                <h3>
                  {{ link.name }}
                </h3>
                <p class="text-zinc-700">
                  {{ link.description }}
                </p>
              </div>
            </div>
            <div class="rounded-bl-2xl rounded-br-2xl bg-slate-50 p-6 lg:px-8">
              <a :href="link.href" class="font-medium text-primary-hover">
                Shop Now
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  </div>
</template>
<script setup>
const shoppingLinks = [
  {
    name: "Amazon Store",
    href: "https://shop.coupleofpatels.com",
    description:
      "Shop the items we use every day, like our travel essentials and photography gear",
    image: "/amazon.svg",
  },
  {
    name: "LTK Page",
    href: "https://shopltk.com/explore/coupleofpatels",
    description:
      "Visit our LTK page to shop the complete looks and gear featured in our pictures",
    image: "/ltk.svg",
  },
  {
    name: "Vessi",
    href: "https://crrnt.app/VESSI/D39JpLgp",
    description:
      "We absolutely love our Vessi Waterproof Shoes and accessories",
    image: "/shopping.svg",
  },
];
</script>
