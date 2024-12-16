<template>
  <footer>
    <div
      class="border-t max-w-custom-container mx-auto px-6 md:px-8 py-8 sm:flex sm:items-center sm:justify-between"
    >
      <div class="mb-5 sm:mb-0 text-left">
        <p class="text-15">&copy; 2024 COUPLE OF PATELS LLC</p>
      </div>
      <div class="flex sm:mt-0">
        <div class="flex flex-1 space-x-4">
          <a
            href="/terms"
            class="text-15 hover:text-[#BC9690]"
          >
            Terms & Privacy
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useEmailSubscription } from "~/composables/useEmailSubscription";

const { email, message, isSuccess, handleSubmit } = useEmailSubscription();
</script>
