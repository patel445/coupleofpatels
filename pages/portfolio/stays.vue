<template>
    <Head>
    <Title>Couple of Patels | Stay Portfolio</Title>
    <Meta
      name="description"
      content="We love using our platform to help promote stays like yours gain more visibility and increased traffic."
    />
    <Link
      rel="canonical"
      href="https://coupleofpatels.com/portfolio/stays"
    />
    <Meta property="og:title" content="Couple of Patels | Stay Portfolio" />
    <Meta
      property="og:description"
      content="We love using our platform to help promote stays like yours gain more visibility and increased traffic."
    />
    <Meta
      property="og:url"
      content="https://coupleofpatels.com/portfolio/stays"
    />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Stay Portfolio"
    />
    <Meta
      property="twitter:description"
      content="We love using our platform to help promote stays like yours gain more visibility and increased traffic."
    />
    <Metadata />
  </Head>
      <div class="overflow-hidden">
        <div class="container">
          <Header />
          <div class="space-y-20 md:space-y-32 py-8 md:py-20">
            <div class="max-w-custom-container mx-auto px-6 md:px-8">
              <div class="prose sm:prose-lg pb-12 md:pb-20">
                <h1 class="tracking-tight">Stay Partnerships</h1>
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
                    src="/stay/owl-house-shasta.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/stay/mountainshadowsresort.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover object-bottom"
                    src="/stay/owl-house.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/stay/neighborhood.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/stay/stony-pool.jpg"
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
                    Check out some of the incredible stays we've had the pleasure of
                    partnering with in the past.
                  </p>
                </div>
                <ul
                  class="-mt-12 space-y-12 divide-y divide-zinc-200 xl:col-span-3"
                >
                  <li
                    v-for="stay in stays"
                    :key="stay.name"
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pt-12"
                  >
                    <a :href="stay.link" target="_blank">
                      <img
                        class="rounded-2xl object-cover max-h-[325px] w-full h-full"
                        :src="stay.imageUrl"
                      />
                    </a>
                    <div class="flex-auto max-w-xl">
                      <h3
                        class="text-lg text-zinc-900 font-semibold leading-8 tracking-tight"
                      >
                        {{ stay.name }}
                      </h3>
                      <p class="text-base text-zinc-700 leading-7">
                        {{ stay.description }}
                      </p>
                      <p class="mt-6 mb-4 text-base text-zinc-700 leading-7">
                        {{ stay.bio }}
                      </p>
                      <a
                        :href="stay.link"
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

const stays = [
  {
    name: "Mountain Shadows Resort Scottsdale",
    description: "Boutique Resort",
    imageUrl: "/stay/mountainshadows.jpg",
    bio: "Boutique luxury resort located just below Camelback Mountain with an 18-hole golf course",
    link: "https://www.instagram.com/reel/DAE_-CjvzBC/",
  },
  {
    name: "The Bunkies",
    description: "Vacation Rental",
    imageUrl: "/stay/bunkies.png",
    bio: "Modern getaway just 90 minutes from Chicago and in a marina resort called Heritage Harbor",
    link: "https://www.instagram.com/reel/C7VNxIqJ66K/",
  },
  {
    name: "Owl House Airbnb",
    description: "Airbnb",
    imageUrl: "/stay/owl-house-shasta.jpg",
    bio: "The Owl House, an airbnb with a vintage 1963 Shasta imbedded in a fully equipped home",
    link: "https://instagram.com/reel/C4zJbTsLPVS/",
  },
  {
    name: "Stony Creek Peoria",
    description: "Hotel",
    imageUrl: "/stay/stonycreek.jpg",
    bio: "Stony Creek, where you can expect an exceptionally personal home-away-from-home experience",
    link: "https://instagram.com/reel/C1qWLBVry8E/",
  },
  {
    name: "The Neighborhood Hotel®",
    description: "Hotel",
    imageUrl: "/stay/theneighborhood.jpg",
    bio: "The Neighborhood Hotel, a home away from home where thoughtful design meets genuine comfort, is a home styled hotel",
    link: "https://instagram.com/reel/C2Bhi4JL9T1/",
  },
];
</script>
