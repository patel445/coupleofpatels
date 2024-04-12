<template>
  <section id="instagram-stats">
    <dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div v-for="stat in stats" :key="stat.id" class="overflow-hidden border rounded-xl shadow-lg p-6 sm:p-7">
        <p class="text-base font-semibold text-zinc-700">{{ stat.name }}</p>
        <p class="mt-3 text-3xl font-semibold tracking-tight text-primary ">{{ stat.value }}</p>
      </div>
    </dl>
  </section>
</template>
<script setup>
const stats = [
  { id: 1, name: "Instagram Followers", value: "13,500" },
  { id: 2, name: "Posts", value: "125" },
  { id: 3, name: "Followers From Midwest", value: "90%" }
];
</script>
