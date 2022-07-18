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
  grid-template-rows: 100px 1fr;
  min-height: -webkit-fill-available;
  min-height: 100vh;
  height: 100vh;
  overflow: auto;

  @include mq(md) {
    grid-template-rows: 60px 1fr;
    grid-template-columns: 200px 1fr;
  }
}
</style>
