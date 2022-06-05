<script lang="ts" setup>
const props = defineProps<{
  options: string[]
  modelValue: string
  name: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', payload: string): void
}>()
</script>

<template>
  <div class="radio-button-group">
    <label v-for="option in props.options" :key="option" :for="option">
      <input
        :id="option" type="radio"
        :name="props.name"
        :value="option"
        :class="`${option === props.modelValue ? true : false}`"
        @change="emit('update:modelValue', option)"
      >
      <div class="wrapper">
        <div class="ball" />
      </div>
      {{ option }}
    </label>
    <span>
      What is the function?
    </span>
  </div>
</template>

<style lang="scss" scoped>
.radio-button-group {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--clr-text-disabled);
  width: 100%;
}

span {
    position: absolute;
    background-color: var(--clr-background);
    top: -0.8em;
    font-size: 0.8rem;
    color: var(--clr-primary);
}

label {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
}

input {
    display: none;

    + .wrapper {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
        border: 2px solid var(--clr-primary);
        cursor: pointer;

        .ball {
            background-color: var(--clr-background);
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transition: all 0.2s ease-in-out;
        }
    }
    &.true + .wrapper {
        .ball {
            background-color: var(--clr-primary);
            width: 50%;
            height: 50%;
        }
    }
}
</style>
