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
    <Meta property="og:title" content="Couple of Patels | Tourism Board Partnerships" />
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
        <div class="container">
          <Header />
          <div class="space-y-20 md:space-y-32 py-8 md:py-20">
            <div class="lg:max-w-custom-container max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
              <div class="prose sm:prose-lg pb-12 md:pb-20">
                <h1 class="tracking-tight">Tourism Board Partnership</h1>
                <p class="leading-8 sm:max-w-3xl">
                  Hi there! We’re Jay and Himani, the adventure travel content creators behind <a
                    href="https://instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                  >. Our passion for exploring began with a shared love for the outdoors and the excitement of discovering new places together. Through sharing our journeys, we’ve built a loyal community of like-minded adventure travelers who trust our recommendations and share our enthusiasm. We’re now genuinely excited about the chance to work together and help promote tourism in your area!
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
                class="flex justify-center gap-5 sm:gap-8 -mb-4 sm:-mb-0"
              >
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
                    src="/tourism/frankenmuth.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover object-bottom"
                    src="/tourism/lacrossedowntown.jpg"
                  />
                </div>
                <div
                  class="relative aspect-[9/10] w-44 sm:w-72 flex-none rounded-xl sm:rounded-2xl overflow-hidden -rotate-2"
                >
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/tourism/lacrosse-shrine.jpg"
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
                class="lg:max-w-custom-container max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-5"
              >
                <div class="xl:col-span-2 prose sm:prose-lg">
                  <h2 class="tracking-tight">Past Collaborations</h2>
                  <p class="leading-8">
                    Check out some of the incredible places we've had the pleasure of
                    partnering with in the past.
                  </p>
                </div>
                <ul
                  class="-mt-12 space-y-12 divide-y divide-zinc-200 xl:col-span-3"
                >
                  <li
                    v-for="place in places"
                    :key="place.name"
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pt-12"
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
                      <p class="mt-6 mb-4 text-base text-zinc-700 leading-7">
                        {{ place.bio }}
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
</template>
<script setup>
const places = [
  {
    name: "La Crosse, Wisconsin",
    description: "@explorelacrosse",
    imageUrl: "/tourism/viewsfromgrandad.jpg",
    bio: "We partnered with the La Crosse Tourism Board on an exciting fall project to promote adventure-based tourism in the region!",
    link: "https://www.instagram.com/reel/DBKbHY7vvj_/",
  },
  {
    name: "Dublin, Ohio",
    description: "@visitdublinohio",
    imageUrl: "/tourism/dublin.jpg",
    bio: "In collaboration with @visitdublinohio, we made a reel that brings Galena’s charm to life, highlighting all the must-sees and hidden gems it has to offer!",
    link: "https://www.instagram.com/reel/C51dQjBvZJC/",
  },
  {
    name: "Galena, Illinois",
    description: "@visitgalena",
    imageUrl: "/tourism/galena-downtown.jpg",
    bio: "Proud to collaborate with @visitgalena in capturing the best of this beautiful town! Our reel is a guide to all things Galena.",
    link: "https://www.instagram.com/reel/CzaNHHJrj-i/",
  }
];
</script>
