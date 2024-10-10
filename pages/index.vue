<template>
  <Head>
    <Title>Couple of Patels | Indian Adventure Travelers</Title>
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
    <section id="background" class="relative isolate">
      <svg
        class="absolute inset-x-0 top-0 -z-10 h-[50rem] w-full stroke-zinc-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-zinc-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
    </section>
    <main
      class="max-w-custom-container mx-auto px-6 md:px-8 py-8 md:pb-16 space-y-20 md:space-y-36"
    >
      <section id="homepage-hero">
        <div class="overflow-hidden">
          <div class="mx-auto md:flex lg:pt-2 gap-x-12 md:items-center">
            <div class="relative max-w-lg md:shrink-0">
              <div class="prose sm:prose-lg">
                <h1 class="tracking-tight">
                  Welcome to <br />Couple of Patels
                </h1>
                <p class="leading-8 text-zinc-700 sm:max-w-md">
                   We’re Jay and Himani, the adventure travel content creators behind <a
                    href="https://instagram.com/coupleofpatels"
                    class="text-primary-hover no-underline"
                    >@coupleofpatels</a
                  >, where we share everything from hikes and adventure sports to local spots, stays, and food with our amazing community of fellow adventure travel lovers
                </p>
              </div>
              <div class="flex items-center gap-x-6 mt-8 md:mt-10">
                <a
                  href="/portfolio"
                  class="inline-block w-[45%] rounded-md bg-theme-dark text-sm font-medium text-center text-white py-3"
                  >Work With Us</a
                >
                <a
                  href="https://instagram.com/coupleofpatels"
                  class="hidden md:block text-sm font-semibold leading-6 text-zinc-700 hover:text-primary"
                  >Our Instagram <span aria-hidden="true">→</span></a
                >
              </div>
            </div>
            <div
              class="mt-14 flex justify-end gap-8 sm:-mt-52 sm:justify-start sm:pl-16 md:pl-0 lg:-mt-20"
            >
              <div
                class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 md:order-last lg:pt-36 xl:order-none xl:pt-80"
              >
                <div class="relative">
                  <img
                    src="/stay/owl-house-shasta.jpg"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                  />
                </div>
              </div>
              <div
                class="mr-auto w-44 flex-none space-y-8 sm:mr-0 -mt-6 sm:pt-52 lg:pt-36"
              >
                <div class="relative">
                  <img
                    src="/product/enjoy-the-wood-point.jpg"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                  />
                </div>

                <div class="relative">
                  <img
                    src="/experience/shot-of-art-finished.jpg"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                  />
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 -mt-28 sm:mt-0">
                <div class="relative">
                  <img
                    src="/tourism/witches-gulch.jpg"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                  />
                </div>
                <div class="relative">
                  <img
                    src="/tourism/maquoketa-caves.jpg"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InstagramCaro />
    </main>
    <Footer />
  </div>
</template>
