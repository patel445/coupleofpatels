<template>
  <Head>
    <Title>Couple of Patels | Our Services</Title>
    <Meta
      name="description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Link rel="canonical" href="https://coupleofpatels.com/services" />
    <Meta property="og:title" content="Couple of Patels | Our Services" />
    <Meta
      property="og:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Meta property="og:url" content="https://coupleofpatels.com/services" />
    <Meta
      property="twitter:title"
      content="Couple of Patels | Our Services"
    />
    <Meta
      property="twitter:description"
      content="We’re Jay and Himani, the adventure travel content creators behind @coupleofpatels, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers."
    />
    <Metadata />
  </Head>
  <div class="overflow-hidden">
    <div class="sm:px-8 lg:px-16">
      <div class="container">
        <Header />
        <main class="">
          <section id="hero">
            <div class="relative">
              <div class="relative z-10 lg:w-full lg:max-w-xl xl:max-w-3xl">
                <svg
                  class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 lg:translate-x-3/4 xl:translate-x-1/2 transform fill-white lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>
                <div
                  class="relative px-4 sm:px-8 lg:px-12 lg:px-0 xl:px-16 py-8 lg:py-32"
                >
                  <div class="mx-auto lg:pl-12">
                    <div class="prose sm:prose-lg">
                      <h1 class="tracking-tight">
                        We can be your professional creators
                      </h1>
                      <p class="leading-8 text-zinc-700 sm:max-w-lg">
                        We love working with amazing brands to bring their vision to life! From photography and videography to drone shots, ad creation, and engaging writing—we do it all to help businesses grow and stand out.
                        <br><br>
                        Curious about what we can create together? Take a look below at some of the exciting projects we’ve worked on across different industries.
                      </p>
                    </div>
                    <div class="flex items-center gap-x-6 mt-8 lg:mt-10">
                      <a
                        href="/contact"
                        class="inline-block w-[50%] sm:w-[40%] rounded-md bg-theme-dark text-sm font-medium text-center text-white py-3"
                        >Contact Us</a
                      >
                      <a
                        href="#our-work"
                        class="text-sm font-semibold leading-6 text-hover"
                        >Our Work <span aria-hidden="true">→</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-zinc-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
              >
                <img
                  class="object-cover object-top max-h-[500px] w-full sm:max-h-full lg:h-full"
                  src="/product/enjoy-the-wood-point.jpg"
                  alt=""
                />
              </div>
            </div>
          </section>
          <div
            class="lg:max-w-custom-container max-w-3xl mx-auto px-4 sm:px-8 lg:px-12"
          >
          </div>
        
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
const mediakits = [
  {
    name: "Tourism Board Partnerships",
    imageUrl: "/tourism/mackinac.jpg",
    url: "partnerships/tourism",
  },
  {
    name: "Stay Partnerships",
    imageUrl: "/stay/owl-house.jpg",
    url: "partnerships/stays",
  },
  {
    name: "Product Partnerships",
    imageUrl: "/product/enjoy-the-wood-book.jpg",
    url: "partnerships/products",
  },
  {
    name: "Experience Partnerships",
    imageUrl: "/experience/shot-of-art.jpg",
    url: "partnerships/experiences",
  },
];
</script>
