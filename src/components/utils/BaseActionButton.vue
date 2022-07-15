<script lang="ts" setup>
const props = defineProps<{
  loading?: boolean;
  outline?: boolean;
}>();
</script>

<template>
  <button
    class="base-action-button flex items-center justify-center gap-4"
    :class="props.outline ? 'outlined' : ''"
  >
    <i-eos-icons-loading v-if="props.loading" />
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.base-action-button {
  background-color: var(--clr-primary);
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  span {
    transition: all 0.1s ease-in-out;
  }

  &.outlined {
    background-color: transparent;
    color: var(--clr-primary);
    border: 0.1rem solid var(--clr-primary);
    padding: 0.4rem 0.9rem;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
      background-color: var(--clr-primary-opaque);
    }
  }
}
</style>
