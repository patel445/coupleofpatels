<template>
  <Head>
    <Title>Couple of Patels | Experience Portfolio</Title>
    <Meta
      name="description"
      content="We love using our platform to help businesses like yours gain more visibility and grow."
    />
    <Link
      rel="canonical"
      href="https://coupleofpatels.com/partnerships/experiences"
    />
    <Meta
      property="og:title"
      content="Couple of Patels | Experience Portfolio"
    />
    <Meta
      property="og:description"
      content="We love using our platform to help businesses like yours gain more visibility and grow."
    />
    <Meta
      property="og:url"
      content="https://coupleofpatels.com/partnerships/experiences"
    />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Experience Portfolio"
    />
    <Meta
      property="twitter:description"
      content="We love using our platform to help businesses like yours gain more visibility and grow."
    />
    <Metadata />
  </Head>
      <div class="overflow-hidden">
        <div class="container">
          <Header />
          <div class="space-y-20 md:space-y-32 py-8 md:py-20">
            <div class="lg:max-w-custom-container max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
              <div class="prose sm:prose-lg pb-12 md:pb-20">
                <h1 class="tracking-tight">Experience Partnership</h1>
                <p class="leading-8 text-zinc-700 sm:max-w-md">
                   We’re Jay and Himani, the adventure travel content creators behind <a
                    href="https://instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                  >, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers.
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
                    src="/experience/spray-paint.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/experience/shot-of-art-finished.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover object-bottom"
                    src="/experience/spin-art.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/experience/axe-throwing.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/experience/shot-of-art.jpg"
                  />
                </div>
              </div>
            </section>
            <section id="past-collabs">
              <div
                class="lg:max-w-custom-container max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-5"
              >
                <div class="xl:col-span-2 prose sm:prose-lg">
                  <h2 class="tracking-tight">Past Collaborations</h2>
                  <p class="text-zinc-700 leading-8">
                    Check out
                    some of the incredible experiences we've had the pleasure of
                    partnering with in the past.
                  </p>
                </div>
                <ul
                  class="-mt-12 space-y-8 md:space-y-12 divide-y divide-zinc-200 xl:col-span-3"
                >
                  <li
                    v-for="experience in experiences"
                    :key="experience.name"
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pt-8 md:pt-12"
                  >
                    <a :href="experience.link" target="_blank">
                      <img
                        class="rounded-2xl object-cover max-h-[325px] w-full h-full"
                        :src="experience.imageUrl"
                      />
                    </a>
                    <div class="flex-auto max-w-xl">
                      <h3
                        class="text-lg text-zinc-900 font-semibold leading-8 tracking-tight"
                      >
                        {{ experience.name }}
                      </h3>
                      <p class="text-base text-zinc-700 leading-7">
                        {{ experience.description }}
                      </p>
                      <p class="mt-6 mb-4 text-base text-zinc-700 leading-7">
                        {{ experience.bio }}
                      </p>
                      <a
                        :href="experience.link"
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
</template>
<script setup>

const experiences = [
  {
    name: "Shot of Art",
    description: "Arts & Fun",
    imageUrl: "/experience/shot-of-art-finished.jpg",
    bio: "Shot of Art, known for its private art experiences, boasts a following of over 143,000 on Instagram.",
    link: "https://instagram.com/reel/C49LxFirSsJ/",
  },
  {
    name: "Spin Art Nation Chicago",
    description: "Arts & entertainment",
    imageUrl: "/experience/spin-art.jpg",
    bio: "Spin Art Nation, a interactive art experience that combines paint, various canvases, and a spinning platform to create unique and dynamic artworks.",
    link: "https://instagram.com/reel/CzkedyiLatf/",
  },
  {
    name: "BullsEye Axe Throwing Lounge",
    description: "Recreation Center",
    imageUrl: "/experience/axe-throwing.jpg",
    bio: "BullsEye Axe Throwing Lounge, Chicagoland’s premier axe throwing lounge.",
    link: "https://instagram.com/reel/Cz9zP6Us8QT/",
  },
  {
    name: "Studio W.I.P",
    description: "Arts & entertainment",
    imageUrl: "/experience/spray-paint.jpg",
    bio: "Studio W.I.P, the original Spray Paint and Sip, offers a unique street art experience in the studio.",
    link: "https://instagram.com/reel/C0f0L3ug8Ml/",
  },
];

</script>
