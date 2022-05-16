<script setup lang="ts">
// Props
const props = defineProps<{
  modelValue: string | number
  label: string
  labelFor: string
  fixedLabel?: boolean
}>()

//  Emits
const emit = defineEmits<{
  (event: 'update:modelValue', payload: string | number): void
}>()

const { label, labelFor, modelValue } = toRefs(props)
</script>

<template>
  <div class="base-input">
    <input
      :value="modelValue"
      v-bind="$attrs"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <label
      :for="labelFor"
      :class="modelValue !== '' || fixedLabel ? 'focused' : ''"
    >
      {{ label }}
    </label>
    <div class="icon">
      <slot name="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-input {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    background-color: var(--clr-background);
    transition: all 0.2s ease-in-out;

    &.focused {
      top: 0;
      padding-inline: 0.2rem;
      font-size: 0.8rem;
      color: var(--clr-primary);
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }

  &:nth-child(3) {
    svg {
      cursor: pointer;
    }
  }

  input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--clr-text-disabled);
    width: 100%;
    background-color: var(--clr-background);
    color: var(--clr-text);

    &:focus {
      outline: 2px solid var(--clr-primary);
      border: 1px solid transparent;

      & + label {
        top: 0;
        padding-inline: 0.2rem;
        font-size: 0.8rem;
        color: var(--clr-primary);
      }
    }
  }

  &-checkbox {
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;

    input {
      margin-right: 1rem;
    }
  }
}
</style>
