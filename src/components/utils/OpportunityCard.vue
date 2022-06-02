<script lang="ts" setup>
import type { Opportunity } from '~/types'
const props = defineProps<{
  opportunity: Opportunity
}>()
</script>

<template>
  <div class="opportunity-card">
    <div
      class="opportunity-card__image"
      :style="{ backgroundImage: `url(${props.opportunity.poster})` }"
    ></div>
    <div class="opportunity-card__body">
      <h3>{{ props.opportunity.title }}</h3>
      <p>{{ props.opportunity.country }}</p>
    </div>
    <span
      class="link-background"
      @click="$router.push(`/opportunities/${props.opportunity.function === 'OGT' ? `ogt/${props.opportunity.id}` : `ogv/${props.opportunity.id}`}`)"
    >
      <p>Learn More</p>
      <RouterLink :to="`/opportunities/${props.opportunity.id}`">
        <i-ic-outline-navigate-next />
      </RouterLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
html.dark {
  .opportunity-card {
    box-shadow: 1px 1px 5px 1px rgba($color: #000000, $alpha: 0.5);
  }
}
.opportunity-card {
  background-color: var(--clr-foreground);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 1px 1px 5px 1px rgba($color: #000000, $alpha: 0.2);

  &__image {
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background-size: cover;
    aspect-ratio: 1;
  }

  &__body {
    padding: 0.5rem;
    padding-bottom: 7rem;
    height: 5.625rem;
    display: flex;
    flex-direction: column;

    @include mq(sm) {
      padding: 1rem;
      padding-bottom: 7rem;
    }

    h3 {
      flex: 1;
      line-height: 1.2rem;
      font-size: 1rem;
      font-weight: 900;
      color: var(--clr-text-primary);

      @include mq(sm) {
        line-height: 1.3rem;
        font-size: 1rem;
      }
    }

    p {
      line-height: 0.9rem;
      font-size: 0.8rem;
      font-weight: 300;
      color: var(--clr-text-secondary);
      @include mq(sm) {
        line-height: 1rem;
        font-size: 0.9rem;
      }
    }
  }

  span.link-background {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    background-color: var(--clr-primary-opaque);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      width: calc(100% - 2rem);
    }
    a {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--clr-primary);
      color: #fff;
      font-size: 2rem;
      transition: all 0.3s ease-in-out;
    }

    &:hover a {
      left: 100%;
      transform: translate(-100%, -50%);
    }

    p {
      position: absolute;
      width: 40px;
      font-size: 0.3rem;
      opacity: 0;
      left: 10%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease-in-out;
    }

    &:hover p {
      width: 100%;
      opacity: 1;
      font-size: 0.8rem;
      left: 100%;
      top: 50%;
      transform: translate(-75%, -50%);
    }
  }
}
</style>
