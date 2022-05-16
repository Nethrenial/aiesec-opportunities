<script lang="ts" setup>
const props = defineProps<{
  loading?: boolean
}>()
</script>

<template>
<button class="base-action-button">
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
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    span {
        transition: all 0.1s ease-in-out;
    }
}
</style>
