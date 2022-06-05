<script setup lang="ts">
const props = defineProps<{
  options: string[]
  value: string
  tabindex?: number
}>()

const emit = defineEmits<{
  (event: 'optionSelect', payload: string): void
}>()

const selected = ref(props.value)

const open = ref(false)
</script>

<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open }" @click="open = !open">
      {{ props.value }}
      <i-mdi-triangle-small-up />
    </div>
    <transition name="items">
      <div v-if="open" class="items">
        <div
          v-for="(option, i) of options"
          :key="i"
          class="item"
          @click="
            () => {
              selected = option
              open = false
              emit('optionSelect', option)
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
  &-enter-from,&-leave-to {
    transform: translateY(-20px) scale(0.99);
    opacity: 0;
  }

  &-enter-active,&-leave-active {
    transition: all 0.2s ease-in-out;
  }

  &-enter-to,&-leave-from {
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
</style>
