<script setup lang="ts">
import { format } from 'date-fns'

const timeslots = ref<Array<{ begin: Date; end: Date }>>([])

const isEnteringNewSlot = ref(false)
const beginTime = ref('')
const endTime = ref('')

defineExpose({
  timeslots,
})

function deleteTimeSlot(index: number) {
  timeslots.value.splice(index, 1)
}

function onSubmit() {
  if (beginTime.value !== '' && endTime.value !== '') {
    const begin = new Date(beginTime.value)
    const end = new Date(endTime.value)
    const timeSlot = {
      begin,
      end,
    }
    timeslots.value.push(timeSlot)
    cancelForm()
  }
}

function cancelAndCloseForm() {
  isEnteringNewSlot.value = false
}
function cancelForm() {
  beginTime.value = ''
  endTime.value = ''
}
</script>

<template>
  <div class="timeslots-group">
    <div class="timeslots">
      <div
        v-for="(timeslot, index) in timeslots"
        :key="timeslot.begin.toDateString()"
        class="timeslots__item"
        @click="deleteTimeSlot(index)"
      >
        <p>
          <span class="begin">
            {{ format(timeslot.begin, 'yyyy MMM') }}
          </span>
          <span> - </span>
          <span class="end">
            {{ format(timeslot.end, 'yyyy MMM') }}
          </span>
        </p>

        <i-carbon-close />
      </div>
      <button
        class="new-time-slot__toggle"
        type="button"
        @click="isEnteringNewSlot = true"
      >
        + add new
      </button>
    </div>

    <form
      v-if="isEnteringNewSlot"
      class="new-time-slot__form"
      @submit.prevent="onSubmit"
    >
      <BaseInput
        id="begin-time"
        v-model="beginTime"
        type="date"
        label="Begin time"
        label-for="begin time"
        placeholder=""
        :fixed-label="true"
      />
      <BaseInput
        id="end-time"
        v-model="endTime"
        type="date"
        label="End time"
        label-for="end-time"
        placeholder=" "
        :fixed-label="true"
      />
      <div class="buttons">
        <button class="cancel" type="button" @click="cancelAndCloseForm">
          Cancel
        </button>
        <button class="confirm" type="submit">Confirm</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.timeslots-group {
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--clr-text-disabled);
  width: 100%;
}

.timeslots {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: var(--clr-accent);
    color: var(--clr-light);
    font-size: 0.8rem;
    font-weight: 900;
    position: relative;
    cursor: pointer;

    svg {
      cursor: pointer;
    }
  }
}

.new-time-slot {
  margin-top: 1rem;
  &__toggle {
    padding: 6px 1rem;
    border-radius: 0.5rem;
    color: var(--clr-primary);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--clr-primary-opaque);
    }
  }

  &__form {
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @include mq(md) {
      grid-template-columns: repeat(2, 1fr);
    }

    & > div {
      &:first-child {
        grid-column: 1 / 2;
        grid-row: 1/ 2;

        @include mq(md) {
          grid-column: 1/ 2;
          grid-row: 1 / 2;
        }
      }

      &:nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;

        @include mq(md) {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }
      }

      &:last-child {
        grid-column: 1 / 2;
        grid-row: 3/ 4;

        @include mq(md) {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
        }
      }
    }
  }
}

.cancel {
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: var(--clr-error);
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--clr-error-opaque);
  }
}

.confirm {
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: var(--clr-success);
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--clr-success-opaque);
  }
}
</style>
