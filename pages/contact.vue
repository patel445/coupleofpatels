<template>
  <div class="container">
    <Header />
    <main>
      <div class="relative isolate">
        <div
          class="max-w-custom-container mx-auto grid grid-cols-1 md:grid-cols-2"
        >
          <div class="relative lg:static px-6 md:px-8 py-8 md:py-16">
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
          <form method="POST" action="/api/contact" class="px-6 md:px-8 py-8 md:py-16">
            <div class="mx-auto">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    for="first-name"
                    class="block text-sm font-semibold leading-6 "
                    >First name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-[#d1aba0] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last-name"
                    class="block text-sm font-semibold leading-6 "
                    >Last name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-[#d1aba0] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6 "
                    >Email</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-[#d1aba0] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6 "
                    >Message</label
                  >
                  <div class="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="10"
                      class="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-[#d1aba0] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-end">
                <div class="cf-turnstile" data-sitekey="0x4AAAAAAAW6xt42NVIDh3j8"></div>
                <button
                  type="submit"
                  class="inline-block w-[100%] sm:w-[40%] rounded-md bg-theme-dark text-sm font-medium text-center text-white py-3"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main> 
    <Footer />
  </div>
</template>
