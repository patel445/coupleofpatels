<template>
  <div class="container">
    <Header />
    <main>
      <div class="relative isolate">
        <div
          class="max-w-custom-container mx-auto grid grid-cols-1 md:grid-cols-2"
        >
          <div class="relative lg:static px-6 md:px-8 py-8 md:py-20">
            <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-zinc-100 ring-1 ring-zinc-900/10 lg:w-1/2"
            >
              <svg
                class="absolute inset-0 h-full w-full stroke-zinc-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="white"
                />
                <svg x="100%" y="-1" class="overflow-visible fill-zinc-50">
                  <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <figure class="pb-4 md:pb-6 hidden md:flex">
              <img
                class="max-h-[450x] w-full object-cover object-top rounded-xl"
                src="/tourism/chicago.jpg"
                alt="Chicago Tourism"
              />
            </figure>
            <h2 class="text-3xl font-bold tracking-tight">
              Get in touch
            </h2>
            <figure class="mt-5 md:hidden">
              <img
                class="max-h-[325px] sm:max-h-[450px] w-full object-cover object-top rounded-xl"
                src="/tourism/chicago.jpg"
                alt="Chicago Tourism"
              />
            </figure>
            <p class="leading-8 mt-6 text-zinc-700">
              Are you interested in collaborations, user-generated content
              (UGC), custom itineraries, or something else entirely? Let's talk! We'd love to know
              what you have in mind! Feel free to drop us a message right here
              or email us at
              <a href="mailto:coupleofpatels@gmail.com" class="text-primary-hover text-bold no-underline"
                >coupleofpatels@gmail.com</a
              >
              with all the specifics. We're looking forward to hearing from you!
            </p>
          </div>
          <form method="POST"  class="px-6 md:px-8 py-8 md:py-20">
            <div class="mx-auto">
              <div class="elfsight-app-086d227a-e4a1-4668-ae02-023bcabc38ea" data-elfsight-app-lazy></div>
            </div>
          </form>
        </div>
      </div>
    </main> 
    <Footer />
  </div>
</template>
