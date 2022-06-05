<script setup lang="ts">
// Props
const props = defineProps<{
  label: string;
  labelFor: string;
}>();

const imageInput = ref<HTMLInputElement>();

const selectedImageFile = ref<File | null>(null);
const selectedImageString = ref("");

defineExpose({
  selectedImageFile,
});

function setImage($event: Event) {
  const eventTarget = $event.target as HTMLInputElement;
  const files = eventTarget.files;
  if (files) {
    selectedImageFile.value = files[0];
    selectedImageString.value = URL.createObjectURL(files[0]);
  }
}
</script>

<template>
  <div class="base-input">
    <div
      class="input"
      @click="
        () => {
          imageInput?.click();
        }
      "
    >
      <p>
        {{ selectedImageFile?.name }}
      </p>
    </div>
    <input
      v-bind="$attrs"
      ref="imageInput"
      type="file"
      class="hidden"
      :class="selectedImageString !== '' ? 'focused' : ''"
      @change="setImage"
    />
    <label
      :for="props.labelFor"
      :class="selectedImageString !== '' ? 'focused' : ''"
    >
      {{ props.label }}
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

  & > div {
    p {
      max-width: 22ch;
      overflow: hidden;
      text-overflow: ellipsis;

      @include mq(sm) {
        max-width: 45ch;
      }
      @include mq(md) {
        max-width: 60ch;
      }
      @include mq(lg) {
        max-width: 70ch;
      }
      @include mq(xl) {
        max-width: 80ch;
      }
      @include mq(xxl) {
        max-width: 90ch;
      }
    }
  }

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
    top: 0.8rem;
    // transform: translateY(-50%);
    right: 1rem;
  }

  &:nth-child(3) {
    svg {
      cursor: pointer;
    }
  }

  .input {
    height: 42px;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--clr-text-disabled);
    width: 100%;
    cursor: pointer;

    &.focused {
      outline: 0;

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
