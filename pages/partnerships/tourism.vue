<template>
  <Head>
    <Title>Couple of Patels | Tourism Board Partnerships</Title>
    <Meta
      name="description"
      content="We love using our platform to help spread the word and increase tourism in your area."
    />
    <Link
      rel="canonical"
      href="https://coupleofpatels.com/partnerships/tourism"
    />
    <Meta
      property="og:title"
      content="Couple of Patels | Tourism Board Partnerships"
    />
    <Meta
      property="og:description"
      content="We love using our platform to help spread the word and increase tourism in your area."
    />
    <Meta
      property="og:url"
      content="https://coupleofpatels.com/partnerships/tourism"
    />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Tourism Board Partnerships"
    />
    <Meta
      property="twitter:description"
      content="We love using our platform to help spread the word and increase tourism in your area."
    />
    <Metadata />
  </Head>
  <div class="overflow-hidden">
    <div class="sm:px-8 lg:px-16">
      <div class="container">
        <Header />
        <div class="space-y-20 lg:space-y-32 py-8 lg:py-20">
          <div
            class=" mx-auto px-4 sm:px-8 lg:px-12"
          >
            <div class="prose sm:prose-lg pb-12 lg:pb-20">
              <h1 class="tracking-tight">Tourism Board Partnership</h1>
              <p class="leading-8 sm:max-w-2xl">
                Hi there! We’re Jay and Himani, the adventure travel content
                creators behind
                <a
                  href="https://instagram.com/coupleofpatels"
                  class="text-primary-hover no-underline"
                  >@coupleofpatels</a
                >. 
                Our love for exploring turned into a passion for inspiring others. With a loyal community of adventure travelers who trust our recommendations, we’re excited to showcase your destination and drive more visitors your way!
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
            <div class="flex justify-center gap-5 sm:gap-8 -mb-4 sm:-mb-0">
              <div
                class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
              >
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  src="/tourism/turkey-run-hike.jpg"
                />
              </div>
              <div
                class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
              >
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  src="/tourism/kzoo.jpg"
                />
              </div>
              <div
                class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
              >
                <img
                  class="absolute inset-0 h-full w-full object-cover object-bottom"
                  src="/tourism/oregon-illinois.jpg"
                />
              </div>
              <div
                class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
              >
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  src="/tourism/nauvoo.JPG"
                />
              </div>
              <div
                class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
              >
                <img
                  class="absolute inset-0 h-full w-full object-cover"
                  src="/tourism/lacrossebikeride.jpg"
                />
              </div>
            </div>
          </section>
          <section id="past-collabs">
            <div
              class=" mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 xl:grid-cols-5"
            >
              <div class="xl:col-span-2 prose sm:prose-lg">
                <h2 class="tracking-tight">Past Collaborations</h2>
                <p class="leading-8">
                  Check out some of the incredible places we've had the pleasure
                  of partnering with in the past.
                </p>
              </div>
              <ul
                class="-mt-12 space-y-12 xl:col-span-3"
              >
                <li
                  v-for="place in places"
                  :key="place.name"
                  class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 pt-12"
                >
                  <a :href="place.link" target="_blank">
                    <img
                      class="rounded-2xl object-cover max-h-[325px] w-full h-full"
                      :src="place.imageUrl"
                    />
                  </a>
                  <div class="flex-auto max-w-xl">
                    <h3
                      class="text-lg text-zinc-900 font-semibold leading-8 tracking-tight"
                    >
                      {{ place.name }}
                    </h3>
                    <p class="text-base text-zinc-700 leading-7">
                      {{ place.description }}
                    </p>
                    <a
                      :href="place.link"
                      v-if="place.link"
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
const places = [
   {
    name: "Illinois",
    description: "@enjoyillinois",
    imageUrl: "/tourism/southern-illinois.jpg",
    link: "https://www.instagram.com/reel/DLI54mgP59k/"
    },
     {
    name: "Southwest Michigan",
    description: "@swmichigan",
    imageUrl: "/tourism/southwest-michigan.jpg",
    link: "https://www.instagram.com/reel/DJuFbg0xNL3/",
  },
     {
    name: "North Dakota",
    description: "@northdakotalegendary",
    imageUrl: "/tourism/north-dakota.jpg",
    link: "https://www.instagram.com/reel/DL50_HdvfHK/",
  },
   {
    name: "La Crosse, Wisconsin",
    description: "@explorelacrosse",
    imageUrl: "/tourism/lacrosse-shrine.jpg",
    link: "https://www.instagram.com/reel/DBKbHY7vvj_/",
  }
  ,
  {
    name: "Oregon, Illinois",
    description: "@visitoregonil",
    imageUrl: "/tourism/oregon-illinois.jpg",
    link: "https://www.instagram.com/reel/DKxhObRPfcW/",
  },
  {
    name: "Kalamazoo, Michigan",
    description: "@discoverkzoo",
    imageUrl: "/tourism/kzoo.jpg",
    link: "https://www.instagram.com/p/DN8oCcBjhbg/",
  },
  {
    name: "Eua Claire, Wisconsin",
    description: "@visiteauclaire",
    imageUrl: "/tourism/eau-claire.png",
    link: "https://www.instagram.com/reel/DFI6zbDvXBm/",
  },
  {
    name: "Nauvoo, Illinois",
    description: "@beautiful.nauvoo",
    imageUrl: "/tourism/nauvoo-2.JPG",
    link: "https://www.instagram.com/reel/DIxIsaavJAQ/",
  },
   {
    name: "Festival Country, Indiana",
    description: "@festcounntryin",
    imageUrl: "/tourism/festival-country.jpg",
    link: "https://www.instagram.com/reel/DMgawjuvR8K/",
  }
];
</script>
