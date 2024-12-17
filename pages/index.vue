<template>
  <Head>
    <Title>Couple of Patels | Jay + Himani </Title>
    <Meta
      name="description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Link rel="canonical" href="https://coupleofpatels.com/" />
    <Meta
      property="og:title"
      content="Couple of Patels | Jay + Himani"
    />
    <Meta
      property="og:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Meta property="og:url" content="https://coupleofpatels.com/" />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Jay + Himani"
    />
    <Meta
      property="twitter:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Metadata />
  </Head>
  <div class="container">
    <Header />
    
    <main class="max-w-custom-container mx-auto px-6 md:px-8 py-8 md:py-12">
      <div
        class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 md:mx-0 md:max-w-none md:grid-cols-2"
      >
        <div class="md:mr-5">
          <div class="mx-auto">
              <div class="prose prose-lg text-center md:text-start ">
                <div class ="flex justify-center -mb-5 -mt-12 md:mb-0 md:mt-0"><img class="md:hidden size-16 rounded-full bg-gray-50" src="/logo.png" alt="" /></div>
                <h1 class="text-4xl tracking-tight -mb-0">coupleofpatels</h1>
                <p class="leading-8 text-zinc-700 md:max-w-lg">
                  Hi there! We’re Jay and Himani, the content creators behind
                  <a
                    href="https://instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                  >. You can find all our links below!
                </p>
              </div>
              <div class="flex space-x-4 justify-center md:justify-start mt-5 mb-6">
                <a v-for="item in social" :key="item.name" :href="item.href">
                  <img :src="item.src" class="h-7" />
                </a>
              </div>
              <a v-for="item in links" :key="item.name" :href="item.href" class = "inline-block w-[100%] rounded-xl bg-theme-dark text-base font-medium text-center text-white mb-4 py-4">
                 {{item.name}}
              </a>
            </div>
        </div>
        <div class="hidden md:flex items-start justify-end md:order-second -mt-10 md:mt-0">
          <img
            src="/tourism/witches-gulch.jpg"
            alt="witches gulch"
            class="object-cover max-h-[500px] md:max-h-[650px] w-full rounded-xl shadow-xl"
          />
        </div>
      </div>
    </main>
    <Footer />
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
  }
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
    href: "/portfolio",
  }
];
</script>
