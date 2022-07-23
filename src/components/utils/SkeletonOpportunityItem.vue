<template>
  <div class="skeleton-opportunity-item">
    <div class="skeleton-opportunity-item__image"></div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes skeleton-loading {
  0% {
    background-color: var(--clr-skeleton-1);
  }

  100% {
    background-color: var(--clr-skeleton-2);
  }
}
@keyframes skeleton-loading-reverse {
  0% {
    background-color: var(--clr-skeleton-3);
  }

  100% {
    background-color: var(--clr-skeleton-4);
  }
}
.skeleton-opportunity-item {
  animation: skeleton-loading 1s linear infinite alternate;
  border-radius: 0.5rem;
  display: flex;
  width: 100%;
  padding: 1rem;

  &__image {
    border-radius: 0.5rem;
    background-size: cover;
    aspect-ratio: 1;
    background-color: red;
    animation: skeleton-loading-reverse 1s linear infinite alternate;
    width: 10%;
  }
}
</style>
