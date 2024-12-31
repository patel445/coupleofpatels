<template>
  <Head>
    <Title>Couple of Patels | Our Courses</Title>
    <Meta
      name="description"
      content="Insightful Courses Designed for Influencers and Creators"
    />
    <Link rel="canonical" href="https://coupleofpatels.com/courses" />
    <Meta property="og:title" content="Couple of Patels | Our Courses" />
    <Meta
      property="og:description"
      content="Insightful Courses Designed for Influencers and Creators"
    />
    <Meta property="og:url" content="https://coupleofpatels.com/courses" />
    <Meta property="twitter:title" content="Couple of Patels | Our Courses" />
    <Meta
      property="twitter:description"
      content="Insightful Courses Designed for Influencers and Creators"
    />
    <Metadata />
  </Head>
  <div class="container">
    <Header />
    <main class="lg:max-w-custom-container max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-8 md:pb-20">
      <section>
        <div class="flex flex-col prose sm:prose-lg">
          <h1 class="font-bold tracking-tight">Our Courses</h1>
        </div>
        <p class="mt-6 mb-8 md:mb-12 max-w-3xl text-zinc-700">
          Unlock the secrets that have led to our success!
        </p>
        <div
          class="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 lg:gap-x-18"
        >
          <div v-for="course in courses"
                    :key="course.alt">
            <div class="w-full overflow-hidden rounded-2xl">
              <a :href="course.link">
              <img
               :src="course.imageUrl"
                :alt="course.alt"
              />
            </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script setup>
const courses = [
  {
    imageUrl: "/stay-collab-poster-art.png",
    alt: "How to land collabs with airbnb & stays",
    link: "https://stan.store/coupleofpatels"
  },
];
</script>
