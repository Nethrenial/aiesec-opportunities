<script setup lang="ts">
// Props
const props = defineProps<{
  modelValue: string | number;
  label: string;
  labelFor: string;
}>();

//  Emits
const emit = defineEmits<{
  (event: "update:modelValue", payload: string | number): void;
}>();

const { label, labelFor, modelValue } = toRefs(props);

const input = ref<HTMLInputElement>();

function onClickLabel() {
  input.value?.focus();
}
</script>

<template>
  <div class="base-textarea">
    <textarea
      v-bind="$attrs"
      ref="input"
      :value="modelValue"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <label
      :for="labelFor"
      :class="modelValue !== '' ? 'focused' : ''"
      @click="onClickLabel"
      >{{ label }}</label
    >
    <div class="icon">
      <slot name="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-textarea {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  label {
    position: absolute;
    top: 1.3rem;
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
    top: 1.3rem;
    transform: translateY(-50%);
    right: 1rem;
  }

  &:nth-child(3) {
    svg {
      cursor: pointer;
    }
  }

  textarea {
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
