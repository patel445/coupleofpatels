<template>
  <Head>
    <Title>Couple of Patels | Portfolio</Title>
    <Meta
      name="description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Link rel="canonical" href="https://coupleofpatels.com/portfolio" />
    <Meta property="og:title" content="Couple of Patels | Portfolio" />
    <Meta
      property="og:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Meta property="og:url" content="https://coupleofpatels.com/portfolio" />
    <Meta property="twitter:title" content="Couple of Patels | Portfolio" />
    <Meta
      property="twitter:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Metadata />
  </Head>
  <div class="overflow-hidden">
    <div class="container">
      <Header />
      <main class="space-y-20 md:space-y-32">
        <section id="hero">
          <div class="relative">
            <div class="relative z-10 md:w-full md:max-w-xl xl:max-w-3xl">
              <svg
                class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 lg:translate-x-3/4 xl:translate-x-1/2 transform fill-white md:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>
              <div class="relative px-6 md:px-8 lg:px-0 xl:px-16 py-8 md:py-32">
                <div class="mx-auto lg:pl-12">
                  <div class="prose sm:prose-lg">
                    <h1 class="tracking-tight">Work With Us!</h1>
                    <p class="leading-8 text-zinc-700 sm:max-w-lg">
                      Hi there! We’re Jay and Himani, the adventure travel content creators behind <a
                    href="https://instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                     >. We share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers. Interested in working together?
                      Check out our work below to see what we do and how we
                      could collaborate. Let's create something amazing
                      together!
                    </p>
                  </div>
                  <div class="flex items-center gap-x-6 mt-8 md:mt-10">
                    <a
                      href="/contact"
                      class="inline-block w-[50%] sm:w-[40%] rounded-md bg-theme-dark text-sm font-medium text-center text-white py-3"
                      >Contact Us</a
                    >
                    <a
                      href="#our-work"
                      class="text-sm font-semibold leading-6 hover:text-primary"
                      >Our Work <span aria-hidden="true">→</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-zinc-50 md:absolute md:inset-y-0 md:right-0 md:w-1/2"
            >
              <img
                class="object-cover object-top max-h-[500px] w-full sm:max-h-full md:h-full"
                src="/product/enjoy-the-wood-point.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <div class="max-w-custom-container mx-auto px-6 md:px-8">
          <InstagramStats />
        </div>
        <section>
          <div class="flex justify-center gap-5 sm:gap-8 -mt-4 -mb-8 py-4">
            <div
              class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="/tourism/waterfall-custer.jpg"
              />
            </div>
            <div
              class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="/tourism/frankenmuth.jpg"
              />
            </div>
            <div
              class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover object-bottom"
                src="/tourism/witches-gulch.jpg"
              />
            </div>
            <div
              class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="/tourism/high-cliff.jpg"
              />
            </div>
            <div
              class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="/tourism/turkey-run-hike.jpg"
              />
            </div>
          </div>
        </section>
        <section
          class="max-w-custom-container mx-auto px-6 md:px-8"
          id="our-work"
        >
          <div class="mx-auto max-w-3xl lg:mx-0 prose sm:prose-lg">
            <h2 class="tracking-tight">Our Work</h2>
            <p class="leading-8">
              Explore examples of our past projects and find out about our
              pricing and the benefits of partnering with us.
            </p>
          </div>
          <ul
            description="list"
            class="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 md:gap-y-14"
          >
            <li v-for="kit in mediakits" :key="kit.name">
              <a :href="kit.url">
                <div
                  class="relative aspect-[3/2] w-full rounded-2xl overflow-hidden"
                >
                  <img
                    class="w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-50"
                    :src="kit.imageUrl"
                    alt=""
                  />
                  <div
                    class="absolute inset-0 bg-[#d1aba0] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-40"
                  ></div>
                </div>
              </a>
              <a :href="kit.url">
                <h2
                  class="mt-6 font-semibold font-semibold leading-6 hover:text-primary"
                >
                  {{ kit.name }} <span aria-hidden="true">→</span>
                </h2>
              </a>
            </li>
          </ul>
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
        <div class="max-w-custom-container mx-auto px-6 md:px-8 pb-8 md:pb-16">
          <InstagramCaro />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
const mediakits = [
  {
    name: "Tourism Board Partnerships",
    imageUrl: "/tourism/mackinac.jpg",
    url: "portfolio/tourism",
  },
  {
    name: "Stay Partnerships",
    imageUrl: "/stay/owl-house.jpg",
    url: "portfolio/stays",
  },
  {
    name: "Product Partnerships",
    imageUrl: "/product/enjoy-the-wood-book.jpg",
    url: "portfolio/products",
  },
  {
    name: "Experience Partnerships",
    imageUrl: "/experience/shot-of-art.jpg",
    url: "portfolio/experiences",
  }
];
</script>
