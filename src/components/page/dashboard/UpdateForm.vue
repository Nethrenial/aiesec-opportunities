<script setup lang="ts">
import { useAdminStore } from "@/stores";
import type BaseImageInput from "@/components/utils/BaseImageInput.vue";
import type { OGVCategory, Opportunity, Timeslot } from "@/types";
import { CATEGORY_OPTIONS, COUNTRIES } from "@/utils";
import { createToast } from "mosha-vue-toastify";
import type TimeSlotInputGroup from "./TimeSlotInputGroup.vue";

const props = defineProps<{
  opportunity: Opportunity;
}>();

const emit = defineEmits<{
  (event: "cancelUpdate"): void;
}>();

const adminStore = useAdminStore();

const title = ref(props.opportunity.title);
const description = ref(props.opportunity.description);
const country = ref(props.opportunity.country);
const salary = ref(props.opportunity.salary as number);
const currency = ref(props.opportunity.currency as string);
const poster = ref(props.opportunity.poster);
const selectedCategory = ref<OGVCategory>(
  props.opportunity.category as OGVCategory
);
const opportunityLink = ref(props.opportunity.opportunityLink);
// #endregion

// Refs to get selected image and selected timeslots
const timeslotInputGroup = ref<InstanceType<typeof TimeSlotInputGroup>>();
const baseImageInput = ref<InstanceType<typeof BaseImageInput>>();

// Function to submit the form
async function onSubmit() {
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
    !timeslots
  ) {
    createToast("Please input all the details correctly", {
      type: "danger",
    });
    return;
  }
  if (
    props.opportunity.function === "OGT" &&
    (!salary.value ||
      isNaN(parseFloat(String(salary.value))) ||
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
    if (props.opportunity.function === "OGT") {
      await adminStore.updateOpportunityById(
        {
          id: props.opportunity.id,
          country: country.value,
          description: description.value,
          function: "OGT",
          poster: baseImageInput.value?.selectedImageFile as File,
          title: title.value,
          timeslots: timeslotInputGroup.value?.timeslots as Timeslot[],
          currency: currency.value,
          salary: parseFloat(String(salary.value)),
          opportunityLink: opportunityLink.value,
        },
        baseImageInput.value?.selectedImageFile
          ? undefined
          : props.opportunity.poster
      );
    } else if (props.opportunity.function === "OGV") {
      await adminStore.updateOpportunityById(
        {
          id: props.opportunity.id,
          country: country.value,
          description: description.value,
          function: "OGV",
          poster: baseImageInput.value?.selectedImageFile as File,
          title: title.value,
          timeslots: timeslotInputGroup.value?.timeslots as Timeslot[],
          category: selectedCategory.value,
          opportunityLink: opportunityLink.value,
        },
        baseImageInput.value?.selectedImageFile
          ? undefined
          : props.opportunity.poster
      );
    }
    createToast("Successfully updated", {
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

// Ref to show the spinner in button when form is submitting
const loading = ref(false);

function cancelEditForm() {
  emit("cancelUpdate");
}
</script>

<template>
  <div
    class="update-form-wrapper bg-[var(--clr-background)] p-4 rounded-xl flex flex-col"
  >
    <h3 class="text-xl font-bold ml-4">Update existing opportunity details</h3>
    <form
      class="update-form flex"
      :class="props.opportunity.function"
      @submit.prevent="onSubmit"
    >
      <div class="update-form__text">
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

        <BaseInput
          v-if="props.opportunity.function === 'OGT'"
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
          v-if="props.opportunity.function === 'OGT'"
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
          v-if="props.opportunity.function === 'OGV'"
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
        <TimeSlotInputGroup
          ref="timeslotInputGroup"
          :slots="
            props.opportunity.timeslots.map((o) => {
              return { begin: o.begin.toDate(), end: o.end.toDate() };
            })
          "
        />
      </div>
      <div class="update-form__image">
        <img :src="poster" :alt="props.opportunity.title" />
        <BaseImageInput
          ref="baseImageInput"
          label="Change the current poster"
          label-for="poster"
          @image-selected="
            (payload) => {
              poster = payload;
            }
          "
        >
          <template #icon>
            <i-bi-card-image />
          </template>
        </BaseImageInput>
      </div>
    </form>
    <div class="flex gap-10 mt-8">
      <BaseActionButton
        class="w-full py-2 px-4 text-[var(--clr-info)]"
        @click="cancelEditForm"
        :flat="true"
      >
        Cancel
      </BaseActionButton>
      <BaseActionButton
        class="w-full py-2 px-4 text-[var(--clr-warning)]"
        :warning="true"
        :loading="loading"
        @click="onSubmit"
      >
        Update
      </BaseActionButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.update-form-wrapper {
  max-height: 85vh;
  max-width: 95vw;
  height: 85vh;
  overflow-y: auto;

  @include mq(md) {
    max-height: 95vh;
    height: 95vh;
  }
}
.update-form {
  flex-direction: column;
  margin-top: 1rem;

  &__image {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      border-radius: 0.5rem;
    }
  }

  &__text {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @include mq(md) {
    flex-direction: row-reverse;
    &__image {
      width: 50%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        border-radius: 0.5rem;
      }
    }

    &__text {
      width: 50%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
