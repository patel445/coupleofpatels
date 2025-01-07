<template>
  <section id="instagram-stats">
    <dl
      class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 md:grid-cols-4"
    >
      <div
        v-for="stat in stats"
        :key="stat.id"
        class="flex flex-col bg-zinc-100 p-8"
      >
        <dt class="text-sm font-semibold leading-6 text-zinc-700">
          {{ stat.name }}
        </dt>
        <dd
          class="order-first text-3xl font-semibold tracking-tight"
        >
          {{ stat.value }}
        </dd>
      </div>
    </dl>
  </section>
</template>
<script setup>
const stats = [
  { id: 1, name: "Instagram Followers", value: "32,100" },
  { id: 2, name: "Posts", value: "219" },
  { id: 4, name: "Engagement", value: "7%" },
  { id: 3, name: "Past Collabs", value: "53" },
];
</script>
