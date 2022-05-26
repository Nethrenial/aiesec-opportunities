<script setup lang="ts">
const props = defineProps<{
  options: string[]
  tabindex?: number
  label: string
  labelFor: string
  modelValue: string
  isDefaultIcon?: boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', payload: string): void
}>()

const filteredOptions = computed(() => {
  return props.options.filter(val => {
    return val.toLowerCase().includes(props.modelValue.toLocaleLowerCase())
  })
})

let open = $ref(false)
const items = ref<HTMLDivElement>()
const input = ref<HTMLInputElement>()

onClickOutside(items, (e: PointerEvent) => {
  const eventTarget = e.target as HTMLElement
  if (eventTarget !== input.value)
    open = false
})

function onInput(value: string) {
  emit('update:modelValue', value)
}

function onClick(value: string) {
  open = false
  emit('update:modelValue', value)
}

function onClickLabel(event: MouseEvent) {
  input.value?.focus()
}
</script>

<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="base-input">
      <input
v-bind="$attrs" ref="input" :value="props.modelValue" role="button"
        @input="($event) => onInput(($event.target as HTMLInputElement).value)" @focus="open = true"
/>
      <label
:id="`${props.labelFor}-label`" :for="props.labelFor"
        :class="props.modelValue.trim() !== '' ? 'focused' : ''" @click="onClickLabel"
>
        {{
            props.label
        }} </label>
      <div class="icon pointer-events-none" :class="[open ? 'open' : '', props.isDefaultIcon ? 'default' : '']">
        <slot name="icon">
        </slot>
        <i-mdi-triangle-small-up v-if="props.isDefaultIcon" />
      </div>
    </div>

    <transition name="items">
      <div v-if="open" ref="items" class="items" :aria-labelledby="`${props.labelFor}-label`">
        <div
v-for="(option, i) of filteredOptions" :key="i" class="item" @click="
          () => {
            onClick(option)
          }
        "
>
          {{ option }}
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
}

.selected {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--clr-text-disabled);
  width: 100%;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    flex: 1;
  }

  svg {
    transform: rotate(90deg) scale(1.5);
    transition: all 0.2s ease-in-out;
    stroke: var(--clr-primary);
    fill: var(--clr-primary);
    color: var(--clr-primary);
  }

  &.open {
    border: 1px solid transparent;
    outline: 2px solid var(--clr-primary);
    border-radius: 6px 6px 0px 0px;

    svg {
      transform: rotate(180deg) scale(1.5);
    }
  }
}

.icon {

  &.default {
      svg {
    transform: rotate(90deg) scale(1.5);
    transition: all 0.2s ease-in-out;
    stroke: var(--clr-primary);
    fill: var(--clr-primary);
    color: var(--clr-primary);
  }

  }
  &.open.default {

    svg {
      transform: rotate(180deg) scale(1.5);
    }

  }

}

.items {
  border-radius: 0px 0px 6px 6px;
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  top: 50px;
  box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.3);
  max-height: 180px;
  background-color: var(--clr-background);

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--clr-background);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-primary);
    border-radius: 100px;
  }

  // Animations
  &-enter-from,
  &-leave-to {
    transform: translateY(-20px) scale(0.99);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }

  &-enter-to,
  &-leave-from {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
}

.item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
}

.items div:hover {
  background-color: var(--clr-primary);
  color: var(--clr-light);
}

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

      &+label {
        top: 0;
        padding-inline: 0.2rem;
        font-size: 0.8rem;
        color: var(--clr-primary);
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-box-shadow: 0 0 0px 1000px var(--clr-background) inset;
      box-shadow: 0 0 0px 1000px var(--clr-background) inset;
      outline: 2px solid var(--clr-primary);
      border: 1px solid transparent;
      font-size: 1.2rem;

      &+label {
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
