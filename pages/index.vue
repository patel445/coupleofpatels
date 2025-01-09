<template>
  <Head>
    <Title>Couple of Patels | Jay + Himani</Title>
    <Meta
      name="description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Link rel="canonical" href="https://coupleofpatels.com/" />
    <Meta property="og:title" content="Couple of Patels | Jay + Himani" />
    <Meta
      property="og:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Meta property="og:url" content="https://coupleofpatels.com/" />
    <Meta property="twitter:title" content="Couple of Patels | Jay + Himani" />
    <Meta
      property="twitter:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Metadata />
  </Head>
  <div class="sm:px-8 lg:px-16">
    <div class="container">
      <Header />
      <section
        class="lg:max-w-custom-container max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-10"
      >
        <div
          class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2 mx-auto"
        >
          <div class="lg:mr-6">
            <div class="mx-auto">
              <div class="prose prose-lg text-center lg:text-start">
                <div class="flex justify-center -mb-5 -mt-12 lg:mb-0 lg:mt-0">
                  <img
                    class="lg:hidden size-16 rounded-full bg-gray-50"
                    src="/logo.png"
                    alt=""
                  />
                </div>
                <h1 class="text-4xl tracking-tight -mb-2">coupleofpatels</h1>
                <p class="leading-8 text-zinc-700 mx-auto max-w-xl lg:max-w-lg">
                  Hi there! We’re Jay and Himani, the content creators behind
                  <a
                    href="https://instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                  >. Check out all our links below. Let's Connect!
                </p>
              </div>
              <div
                class="flex space-x-4 justify-center lg:justify-start mt-5 mb-7"
              >
                <a v-for="item in social" :key="item.name" :href="item.href">
                  <img :src="item.src" class="h-6" />
                </a>
              </div>
              <a
                v-for="item in links"
                :key="item.name"
                :href="item.href"
                class="inline-block w-[100%] rounded-xl border border-2 border-theme text-base font-medium text-center mb-4 py-4"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
          <div
            class="hidden lg:flex items-start justify-end lg:order-second -mt-10 lg:mt-0"
          >
            <img
              src="/partner/death-valley.jpg"
              alt="biking"
              class="object-cover max-h-[500px] lg:max-h-[675px] w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>
<script setup>
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
  },
];
const links = [
  {
    name: "Mexico City Itinerary: 5-Day Travel Guide",
    href: "https://blog.coupleofpatels.com/p/5-perfect-days-in-mexico-city-travel",
  },
  {
    name: "Our Latest YouTube Video",
    href: "https://youtu.be/aBjKbuGoFqY?si=7YfyP79m2hrP63l6",
  },
  {
    name: "Detailed Itineraries & Travel Guides",
    href: "https://blog.coupleofpatels.com/",
  },
  {
    name: "Shop Our Favorites (Amazon Store)",
    href: "https://www.amazon.com/shop/coupleofpatels",
  },
  {
    name: "Shop Our LTK",
    href: "https://www.shopltk.com/explore/coupleofpatels",
  },
  {
    name: "Work With Us",
    href: "/partnerships",
  },
];
</script>
