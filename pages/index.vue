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
      content="Couple of Patels | Indian Adventure Travelers"
    />
    <Meta
      property="og:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Meta property="og:url" content="https://coupleofpatels.com/" />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Indian Adventure Travelers"
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
              <div class="prose sm:prose-lg">
                <h1 class="tracking-tight">@coupleofpatels</h1>
                <p class="leading-8 text-zinc-700 sm:max-w-lg">
                  Hi there! We’re Jay and Himani, the content creators behind
                  <a
                    href="https://instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                  >. You can find all our links and socials below!
                </p>
              </div>
              <div class="flex flex-1 space-x-4 items-center mt-5">
                <a v-for="item in social" :key="item.name" :href="item.href">
                  <img :src="item.src" class="h-7" />
                </a>
              </div>
            </div>
        </div>
        <div class="items-start justify-end md:order-second">
          <img
            src="/tourism/witches-gulch.jpg"
            alt="witches gulch"
            class="object-cover max-h-[600px] w-full rounded-xl shadow-xl"
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
    name: "Blog",
    href: "https://blog.coupleofpatels.com/",
    src: "/blog.svg",
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
  }
];
</script>
