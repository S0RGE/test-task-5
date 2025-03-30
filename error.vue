<template>
  <div class="error-page">
    <h1>{{ error?.statusCode || "404" }}</h1>
    <p>{{ error?.message || "Page not found" }}</p>
    <NuxtLink to="/" class="button">Return Home</NuxtLink>
  </div>
</template>

<script setup>
const error = useError();
</script>

<style scoped lang="scss">
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .button {
    margin-top: 16px;
  }
}
</style>
