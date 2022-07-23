<script setup lang="ts">
// #region Importing library code
import { createToast } from "mosha-vue-toastify";
// #endregion
// #region Importing custom code
import { createOpportunity } from "@/api";
// import { seedInFirebase } from "@/api/seed.api";
import type TimeSlotInputGroup from "@/components/page/dashboard/TimeSlotInputGroup.vue";
import type BaseImageInput from "@/components/utils/BaseImageInput.vue";
import type { OGVCategory, OGXFunction, Timeslot } from "@/types";
import { CATEGORY_OPTIONS, COUNTRIES, FUNCTION_OPTIONS } from "@/utils";

// #endregion

// #region Refs to hold form data
const title = ref("");
const description = ref("");
const country = ref("");
const salary = ref("");
const currency = ref("");
const selectedFunction = ref<OGXFunction>(FUNCTION_OPTIONS[0]);
const selectedCategory = ref<OGVCategory>(CATEGORY_OPTIONS[0]);
const opportunityLink = ref("");
// #endregion

// Refs to get selected image and selected timeslots
const timeslotInputGroup = ref<InstanceType<typeof TimeSlotInputGroup>>();
const baseImageInput = ref<InstanceType<typeof BaseImageInput>>();

// Ref to show the spinner in button when form is submitting
const loading = ref(false);

// Function to submit the form
async function onSubmit() {
  const posterImageFile = baseImageInput.value?.selectedImageFile;
  const timeslots = timeslotInputGroup.value?.timeslots;
  if (
    !title.value ||
    title.value.trim() === "" ||
    !description.value ||
    description.value.trim() === "" ||
    !country.value ||
    country.value.trim() === "" ||
    !opportunityLink.value ||
    opportunityLink.value.trim() === "" ||
    !posterImageFile ||
    !timeslots
  ) {
    createToast("Please input all the details correctly", {
      type: "danger",
    });
    return;
  }
  if (
    selectedFunction.value === "OGT" &&
    (!salary.value ||
      isNaN(parseFloat(salary.value)) ||
      !currency.value ||
      currency.value.trim() === "")
  ) {
    createToast("Please input all the details correctly", {
      type: "danger",
    });
    return;
  }
  try {
    loading.value = true;
    if (selectedFunction.value === "OGT") {
      await createOpportunity({
        country: country.value,
        description: description.value,
        function: "OGT",
        poster: baseImageInput.value?.selectedImageFile as File,
        title: title.value,
        timeslots: timeslotInputGroup.value?.timeslots as Timeslot[],
        currency: currency.value,
        salary: parseFloat(salary.value),
        opportunityLink: opportunityLink.value,
      });
    } else if (selectedFunction.value === "OGV") {
      await createOpportunity({
        country: country.value,
        description: description.value,
        function: "OGV",
        poster: baseImageInput.value?.selectedImageFile as File,
        title: title.value,
        timeslots: timeslotInputGroup.value?.timeslots as Timeslot[],
        category: selectedCategory.value,
        opportunityLink: opportunityLink.value,
      });
    }
    createToast("Successfully added", {
      type: "success",
    });
  } catch (error) {
    createToast((error as Error).message, {
      type: "danger",
    });
  } finally {
    loading.value = false;
  }
}

// async function seedData() {
//   loading.value = true;
//   try {
//     await seedInFirebase(100);
//     createToast("Successfully seeded", {
//       type: "success",
//     });
//   } catch (error) {
//     createToast((error as Error).message, {
//       type: "danger",
//     });
//   } finally {
//     loading.value = false;
//   }
// }
</script>

<template>
  <h1 class="text-xl my-4">Add a new Opportunity</h1>
  <form
    class="add-new-form"
    :class="selectedFunction"
    @submit.prevent="onSubmit"
  >
    <BaseInput
      id="title"
      v-model="title"
      type="text"
      label="Title"
      label-for="title"
      required
    >
      <template #icon>
        <i-ic-round-title />
      </template>
    </BaseInput>

    <BaseSearchAndSelectInput
      id="country"
      v-model="country"
      :options="COUNTRIES as unknown as string[]"
      label="Country"
      label-for="country"
    >
      <template #icon>
        <i-gis-search-country class="pointer-events-none" />
      </template>
    </BaseSearchAndSelectInput>
    <BaseInput
      id="link"
      v-model="opportunityLink"
      type="text"
      label="Link"
      label-for="link"
      required
    >
      <template #icon>
        <i-eva-link-fill />
      </template>
    </BaseInput>
    <BaseRadioInputGroup
      v-model="selectedFunction"
      :options="FUNCTION_OPTIONS"
      name="function"
    />
    <BaseTextarea
      id="description"
      v-model="description"
      type="text"
      label="Description"
      label-for="description"
      :textarea="true"
      required
      rows="5"
    >
      <template #icon>
        <i-fluent-text-description-24-filled />
      </template>
    </BaseTextarea>
    <BaseImageInput ref="baseImageInput" label="Poster" label-for="poster">
      <template #icon>
        <i-bi-card-image />
      </template>
    </BaseImageInput>
    <BaseInput
      v-if="selectedFunction === 'OGT'"
      id="salary"
      v-model="salary"
      type="number"
      label="Salary"
      label-for="salary"
      required
    >
      <template #icon>
        <i-bx-money />
      </template>
    </BaseInput>
    <BaseInput
      v-if="selectedFunction === 'OGT'"
      id="currency"
      v-model="currency"
      type="text"
      label="Currency"
      label-for="currency"
      required
    >
      <template #icon>
        <i-bi-currency-exchange />
      </template>
    </BaseInput>
    <BaseSearchAndSelectInput
      v-if="selectedFunction === 'OGV'"
      id="category"
      v-model="selectedCategory"
      :options="CATEGORY_OPTIONS"
      label="Category"
      label-for="category"
    >
      <template #icon>
        <i-bx-category class="pointer-events-none" />
      </template>
    </BaseSearchAndSelectInput>
    <TimeSlotInputGroup ref="timeslotInputGroup" :slots="[]" />
    <BaseActionButton :loading="loading">
      {{ loading ? "Creating" : "Create" }}
    </BaseActionButton>
    <!-- <BaseActionButton :loading="loading" type="button" @click="seedData">
      {{ loading ? "Seeding" : "seed" }}
    </BaseActionButton> -->
  </form>
</template>

<style lang="scss" scoped>
.add-new-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @include mq(lg) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  div {
    &:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      @include mq(lg) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
    }

    &:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;

      @include mq(lg) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }
    }

    &:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;

      @include mq(lg) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
    }

    &:nth-child(4) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;

      @include mq(lg) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    }

    &:nth-child(5) {
      grid-column: 1 / 2;
      grid-row: 5 / 6;

      @include mq(lg) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }
    }

    &:nth-child(6) {
      grid-column: 1 / 2;
      grid-row: 6 / 7;

      @include mq(lg) {
        grid-column: 1 / 3;
        grid-row: 4 / 5;
      }
    }
  }

  &.OGV {
    & div {
      &:nth-child(7) {
        grid-column: 1 / 2;
        grid-row: 7 / 8;

        @include mq(lg) {
          grid-column: 1 / 3;
          grid-row: 5 / 6;
        }
      }

      &:nth-child(8) {
        grid-column: 1 / 2;
        grid-row: 8 / 9;

        @include mq(lg) {
          grid-column: 1 / 3;
          grid-row: 6 / 7;
        }
      }
    }
  }

  &.OGT {
    & > div {
      &:nth-child(7) {
        grid-column: 1 / 2;
        grid-row: 7 / 8;

        @include mq(lg) {
          grid-column: 1 / 2;
          grid-row: 5 / 6;
        }
      }

      &:nth-child(8) {
        grid-column: 1 / 2;
        grid-row: 8 / 9;

        @include mq(lg) {
          grid-column: 2 / 3;
          grid-row: 5 / 6;
        }
      }

      &:nth-child(9) {
        grid-column: 1 / 2;
        grid-row: 9 / 10;

        @include mq(lg) {
          grid-column: 1 / 3;
          grid-row: 6 / 7;
        }
      }
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
