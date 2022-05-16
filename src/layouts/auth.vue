<template>
  <main class="auth">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.auth {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    @include mq("lg") {
        flex-direction: row;
    }
}
</style>
