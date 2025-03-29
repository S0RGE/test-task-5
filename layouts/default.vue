<template>
  <div>
    <AppHeader />
    <div class="container">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>


<style lang="scss" scoped>
header.header {
  margin-bottom: 120px;
}

footer.footer {
  margin-top: 80px;
}
</style>