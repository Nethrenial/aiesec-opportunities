<script setup lang="ts">
import type { COUNTRIES } from "@/utils";

const props = defineProps<{
  countries: typeof COUNTRIES;
  tabindex?: number;
  label?: string;
  labelFor?: string;
  modelValue: string;
  isDefaultIcon?: boolean;
  high?: boolean;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();

const filteredCountries = computed(() => {
  return props.countries.filter((val) => {
    return val.toLowerCase().includes(props.modelValue.toLocaleLowerCase());
  });
});

let open = $ref(false);
const items = ref<HTMLDivElement>();
const input = ref<HTMLInputElement>();

onClickOutside(items, (e) => {
  const eventTarget = (e as unknown as PointerEvent).target as HTMLElement;
  if (eventTarget !== input.value) open = false;
});

function onInput(value: string) {
  emit("update:modelValue", value);
}

function onClick(value: string) {
  open = false;
  emit("update:modelValue", value);
}

function onClickLabel() {
  input.value?.focus();
}
</script>

<template>
  <div class="country-filter" :tabindex="tabindex" @blur="open = false">
    <div class="input-wrapper">
      <label
        :id="`${props.labelFor}-label`"
        :for="props.labelFor"
        class="inline-block ml-1 mb-2 bg-transparent text-[var(--clr-text-primary)] font-bold"
        @click="onClickLabel"
        v-if="props.label"
      >
        {{ props.label }}
      </label>
      <input
        v-bind="$attrs"
        ref="input"
        :value="props.modelValue"
        role="button"
        @input="($event) => onInput(($event.target as HTMLInputElement).value)"
        @focus="open = true"
        placeholder="Filter by country"
      />

      <div
        class="icon pointer-events-none"
        :class="[open ? 'open' : '', props.isDefaultIcon ? 'default' : '']"
      >
        <slot name="icon"> </slot>
        <i-mdi-triangle-small-up v-if="props.isDefaultIcon" />
      </div>
    </div>

    <transition name="items">
      <div
        v-if="open"
        ref="items"
        class="items"
        :aria-labelledby="`${props.labelFor}-label`"
        :class="props.high ? 'high' : 'low'"
      >
        <div
          v-for="(option, i) of filteredCountries"
          :key="i"
          class="item"
          @click="
            () => {
              onClick(option);
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
.country-filter {
  position: relative;
  // width: 100%;
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
  top: 75px;
  box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.3);
  max-height: 180px;
  background-color: var(--clr-background);

  &.high {
    top: 45px;
  }

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

.input-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  label {
    transition: all 0.2s ease-in-out;
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
    width: 100%;
    background-color: var(--clr-background);
    color: var(--clr-text);
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1) inset;

    &:focus {
      outline: 2px solid var(--clr-primary);
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
