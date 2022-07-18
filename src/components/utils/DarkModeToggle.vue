<script setup lang="ts">
import { isDark, toggleDark } from "@/composables";
const props = defineProps<{
  inverted?: boolean;
}>();
</script>

<template>
  <div
    class="toggle"
    :class="[isDark ? 'dark' : '', props.inverted ? 'inverted' : '']"
    @click="toggleDark()"
  >
    <div
      class="toggle-nob grid-centered"
      :class="[isDark ? 'dark' : '', props.inverted ? 'inverted' : '']"
    >
      <i-emojione-crescent-moon v-if="isDark" />
      <i-twemoji-sun v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toggle {
  width: 60px;
  height: 30px;
  border-radius: 100px;
  position: relative;
  padding: 0.2rem;
  background-color: var(--clr-background);
  cursor: pointer;

  &.inverted {
    background-color: var(--clr-foreground);
  }

  &-nob {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    transform-origin: center;
    background-color: var(--clr-foreground);

    &.dark {
      transform: translateX(30px);
    }

    &.inverted {
      background-color: var(--clr-background);
    }
  }
}
</style>
