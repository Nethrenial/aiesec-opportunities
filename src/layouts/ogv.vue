<template>
  <main class="ogv">
    <DefaultHeader />
    <OGVSidePanel />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style lang="scss" scoped>
.ogv {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px calc(100vh - 60px);

  @include mq(md) {
    grid-template-columns: 200px 1fr;
  }
  @include mq(lg) {
    grid-template-columns: 250px 1fr;
  }

  @include mq(xl) {
    grid-template-columns: 300px 1fr;
  }
}
</style>
