<script setup lang="ts">
import { useAdminStore } from "@/stores";
import type { Opportunity } from "@/types";
import { createToast } from "mosha-vue-toastify";

const adminStore = useAdminStore();

const props = defineProps<{
  opportunity: Opportunity;
}>();

const loading = ref(false);
const isAwaitingDeleteConfirmation = ref(false);
const isEditFormOpen = ref(false);

function askForDeletePermission() {
  isAwaitingDeleteConfirmation.value = true;
}

async function confirmDelete() {
  loading.value = true;
  await adminStore.deleteOpportunity(props.opportunity.id);
  loading.value = false;
  createToast("Opportunity is deleted successfully");
}

function closeDeleteConfirmation() {
  isAwaitingDeleteConfirmation.value = false;
}

function openEditForm() {
  isEditFormOpen.value = true;
}

function cancelEditForm() {
  isEditFormOpen.value = false;
}
</script>

<template>
  <div class="opportunity-item">
    <div class="opportunity-item--image">
      <img
        :src="props.opportunity.poster"
        alt="o.title"
        class="img"
        loading="lazy"
      />
    </div>

    <h3 class="opportunity-item--title px-2 font-bold text-lg">
      {{ props.opportunity.title }}
    </h3>
    <div class="opportunity-item--more px-4 pb-5">
      <p
        class="opportunity-item--country flex items-center gap-2 -translate-y-2"
      >
        Country :-
        {{ props.opportunity.country }}
      </p>
      <p
        class="opportunity-item--function flex items-center gap-2 -translate-y-2"
      >
        Function :-
        {{ props.opportunity.function }}
      </p>
      <p class="opportunity-item--wage">
        {{
          props.opportunity.function === "OGT"
            ? "Salary :- " +
              props.opportunity.currency +
              " " +
              props.opportunity.salary
            : "Category :- " + props.opportunity.category
        }}
      </p>
    </div>
    <div class="opportunity-item--buttons">
      <button class="opportunity-item--edit" @click="openEditForm">
        <i-clarity-edit-line />
      </button>
      <button class="opportunity-item--delete" @click="askForDeletePermission">
        <i-fluent-delete-28-regular />
      </button>
    </div>
  </div>
  <Modal
    v-model="isAwaitingDeleteConfirmation"
    :close="closeDeleteConfirmation"
    :options="{
      closeClickDimmed: false,
    }"
  >
    <div class="delete-modal bg-[var(--clr-background)] p-4 rounded-xl z-40">
      <h3 class="text-xl font-bold">
        Do you really want to delete this opportunity?
      </h3>
      <div class="flex gap-10 mt-8">
        <BaseActionButton
          class="w-full py-2 px-4 text-[var(--clr-info)]"
          @click="closeDeleteConfirmation"
          :flat="true"
        >
          Cancel
        </BaseActionButton>
        <BaseActionButton
          class="w-full py-2 px-4 text-[var(--clr-error)]"
          :danger="true"
          :loading="loading"
          @click="confirmDelete"
        >
          Confirm
        </BaseActionButton>
      </div>
    </div>
  </Modal>
  <Modal
    v-model="isEditFormOpen"
    :close="cancelEditForm"
    :options="{
      closeClickDimmed: false,
    }"
  >
    <UpdateForm
      @cancel-update="cancelEditForm"
      :opportunity="props.opportunity"
      class="z-40"
    />
  </Modal>
</template>

<style lang="scss" scoped>
.opportunity-item {
  display: grid;
  grid-template-columns: 125px 1fr;
  grid-template-rows: repeat(7, 25px);
  background-color: var(--clr-foreground);
  border-radius: 1rem;

  &--image {
    display: none;
    border-radius: 1rem;
    padding: 1rem;

    .img {
      display: none;
      border-radius: 0.5rem;
    }
  }

  &--title {
    grid-column: 1 / -1;
    grid-row: 1 / 3;
  }

  &--more {
    grid-column: 1 / -1;
    grid-row: 3 / 6;
  }

  &--buttons {
    grid-column: 1 / -1;
    grid-row: 6 / -1;
    display: flex;
    padding: 0.5rem;
    gap: 0.5rem;

    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-weight: 600;
      width: 100%;
      border-radius: 0.5rem;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  &--edit {
    background-color: var(--clr-warning);
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgb(255, 204, 0);
      color: #fff;
    }
  }

  &--delete {
    background-color: var(--clr-error);
    color: #fff;
    width: 50%;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgb(239, 40, 0);
      color: #fff;
    }
  }

  @include mq(md) {
    grid-template-columns: 150px 1fr 150px;
    grid-template-rows: repeat(6, 25px);

    &--image {
      display: block;
      grid-column: 1 / 2;
      grid-row: 1 / -1;

      .img {
        display: block;
      }
    }

    &--title {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }

    &--more {
      grid-column: 2 / 3;
      grid-row: 3 / 6;
    }

    &--buttons {
      grid-column: 3 / -1;
      grid-row: 1 / 3;
      //   flex-direction: column;
      transform: translate(-1rem, 1rem);

      & > button {
        gap: 0.5rem;
        height: 100%;
        width: 100%;

        span {
          display: none;
        }
      }
    }
  }
}
</style>
