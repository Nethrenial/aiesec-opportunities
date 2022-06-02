<template>
  <div class="skeleton-opportunity-card">
    <div class="skeleton-opportunity-card__image"></div>
    <div class="skeleton-opportunity-card__body"></div>
    <div class="skeleton-opportunity-card__link">A</div>
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
.skeleton-opportunity-card {
  background-color: var(--clr-foreground);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  &__image {
    border-radius: 0.5rem 0.5rem 0 0;
    background-size: cover;
    aspect-ratio: 1;
    background-color: red;
    animation: skeleton-loading-reverse 1s linear infinite alternate;
  }

  &__body {
    padding: 0.5rem;
    padding-bottom: 7rem;
    height: 5.625rem;
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    animation: skeleton-loading 1s linear infinite alternate;

    @include mq(sm) {
      padding: 1rem;
      padding-bottom: 7rem;
    }
  }

  &__link {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: transparent;
    animation: skeleton-loading-reverse 1s linear infinite alternate;
  }
}
</style>
