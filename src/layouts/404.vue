<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="not-found">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
