<template>
  <main class="main">
    <DefaultHeader />
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;

  @include mq(md) {
    grid-template-rows: 60px 1fr;
    grid-template-columns: 200px 1fr;
  }
}
</style>
