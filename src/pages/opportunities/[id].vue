<script lang="ts" setup>
import { format } from "date-fns";
import { useOpportunitiesStore } from "@/stores";
import type { Opportunity } from "@/types";
const props = defineProps<{
  id: string;
}>();

const opportunityStore = useOpportunitiesStore();
const opportunity = ref<Opportunity>();

// head management
const head = reactive({
  title: "Opportunity | AIESEC",
  meta: [{ name: "description", content: "Opportunity Description" }],
});

useHead(head);

onMounted(async () => {
  opportunity.value = await opportunityStore.getOpportunityById(props.id);
  head.title = `${opportunity.value?.title} in ${opportunity.value?.country} | AIESEC`;
  head.meta = [
    {
      name: "description",
      content: `${opportunity.value?.description}`,
    },
  ];
});
</script>

<template>
  <div class="opportunity-page">
    <div v-if="opportunity" class="opportunity-container">
      <header class="opportunity-header">
        <div class="opportunity-header__container">
          <a
            @click.prevent="$router.back()"
            class="cursor-pointer flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[var(--clr-background)] text-[var(--clr-primary)]"
          >
            <i-ep-back />
          </a>
          <h2>Opportunity Details</h2>
        </div>
      </header>
      <section class="opportunity-body">
        <aside class="opportunity-figure shadow-md">
          <img
            :src="opportunity?.poster"
            :alt="`Poster for ${opportunity?.title}`"
          />
        </aside>
        <article class="opportunity-info shadow-md">
          <a href="#" class="apply-now"> Apply Now </a>
          <h1 class="text-[var(--clr-text-primary)] font-bold">
            {{ opportunity?.title }}
          </h1>
          <p class="my-2">
            Posted on
            {{ format(opportunity.createdAt.toDate(), "yyyy MMM dd") }}
          </p>
          <img
            :src="opportunity?.poster"
            :alt="`Poster for ${opportunity?.title}`"
          />
          <div class="flex items-center gap-4">
            <div
              class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg"
            >
              <i-flat-color-icons-globe class="w-[24px] h-[24px]" />
              <div>
                <div class="font-bold">{{ opportunity.country }}</div>
                <div class="text-xs font-light">Country</div>
              </div>
            </div>
            <div
              v-if="opportunity.function === 'OGV'"
              class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg"
            >
              <i-flat-color-icons-collaboration class="w-[24px] h-[24px]" />
              <div>
                <div class="font-bold">
                  {{ opportunity.category }}
                </div>
                <div class="text-xs font-light">Volunteering</div>
              </div>
            </div>

            <div
              v-if="opportunity.function === 'OGT'"
              class="flex items-center gap-4 my-4 bg-[var(--clr-background)] w-max p-2 rounded-lg"
            >
              <i-flat-color-icons-money-transfer class="w-[24px] h-[24px]" />
              <div>
                <div class="font-bold">
                  {{ opportunity.currency }}{{ opportunity.salary }}
                </div>
                <div class="text-xs font-light">Salary</div>
              </div>
            </div>
          </div>
          <h3 v-if="opportunity.timeslots.length > 0" class="font-bold mb-4">
            Available timeslots
          </h3>
          <div
            v-if="opportunity.timeslots.length > 0"
            class="bg-[var(--clr-background)] rounded-lg p-2 flex items-center flex-wrap gap-y-2 gap-x-4 px-4 py-2"
          >
            <div
              v-for="timeslot in opportunity.timeslots"
              :key="timeslot.begin.toDate().getTime()"
              class="flex items-center gap-4 w-full mt-2 text-[var(--clr-text-primary)]"
            >
              <i-flat-color-icons-calendar />
              <span>
                {{ format(timeslot.begin.toDate(), "yyyy MMM") }}
                to
                {{ format(timeslot.end.toDate(), "yyyy MMM") }}
              </span>
            </div>
          </div>
          <h3 class="font-bold my-4">Description</h3>
          <p class="bg-[var(--clr-background)] p-4 rounded-lg">
            {{ opportunity?.description }}
          </p>
        </article>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.opportunity-page {
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  min-height: calc(100vh - 60px);
  background: radial-gradient(
    circle,
    rgba(152, 82, 255, 1) 0%,
    rgba(0, 89, 255, 1) 36%,
    rgba(127, 83, 255, 1) 98%
  );

  @include mq(sm) {
    background-image: none;
    background-color: var(--clr-background);
  }
}

.opportunity-header {
  background: radial-gradient(
    circle,
    rgba(152, 82, 255, 1) 0%,
    rgba(0, 89, 255, 1) 36%,
    rgba(127, 83, 255, 1) 98%
  );
  height: 15vh;

  @include mq(sm) {
    height: 20vh;
  }

  @include mq(md) {
    height: 25vh;
  }
  @include mq(lg) {
    height: 30vh;
  }
  @include mq(xl) {
    height: 35vh;
  }
  @include mq(xxl) {
    height: 40vh;
  }

  &__container {
    @include container-level2;
    height: 100%;
    position: relative;

    a {
      position: absolute;
      top: 50%;
      left: 0rem;
      transform: translate(0%, -50%);

      @include mq(sm) {
      }

      @include mq(md) {
      }

      @include mq(lg) {
        top: 40%;
      }

      @include mq(xl) {
      }

      @include mq(xxl) {
      }
    }

    h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 1.5rem;
      color: #fff;
      font-weight: bolder;

      @include mq(sm) {
        font-size: 1.8rem;
      }

      @include mq(md) {
        font-size: 2.2rem;
      }

      @include mq(lg) {
        top: 40%;
        font-size: 2.5rem;
      }

      @include mq(xl) {
        font-size: 2.8rem;
      }

      @include mq(xxl) {
        font-size: 3rem;
      }
    }
  }
}

.opportunity {
  &-body {
    @include container-level2;
    transform: translateY(0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    @include mq(sm) {
      transform: translateY(-1%);
    }

    @include mq(md) {
      transform: translateY(-2%);
    }

    @include mq(lg) {
      flex-direction: row;
      align-items: flex-start;
      transform: translateY(-5%);
      margin: 0 auto;
      gap: 2rem;
    }

    @include mq(xl) {
      transform: translateY(-7%);
    }

    @include mq(xxl) {
      transform: translateY(-8%);
    }
  }

  &-figure {
    background-color: var(--clr-foreground);
    border-radius: 1rem;
    width: 100%;
    aspect-ratio: 1;
    display: none;

    @include mq(lg) {
      width: 40%;
      display: block;
    }

    img {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 1rem;
    }
  }

  &-info {
    background-color: var(--clr-foreground);
    border-radius: 1rem;
    padding: 1rem;
    padding-bottom: 4.5rem;
    width: 100%;

    @include mq(sm) {
      padding: 1rem;
      padding-bottom: 1rem;
    }
    @include mq(md) {
      padding: 1.25rem;
    }
    @include mq(lg) {
      width: 60%;
      padding: 1.5rem;
    }
    @include mq(xl) {
      padding: 1.8rem;
    }
    @include mq(xxl) {
      padding: 2rem;
    }

    h1 {
      font-size: 1.25rem;
      line-height: 1.25rem;

      @include mq(sm) {
        font-size: 1.375rem;
        line-height: 1.5rem;
      }
      @include mq(md) {
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
      @include mq(lg) {
        font-size: 1.675rem;
        line-height: 2rem;
      }
      @include mq(xl) {
        font-size: 1.775rem;
        line-height: 2.125rem;
      }
      @include mq(xxl) {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }
    }

    img {
      display: block;
      width: 100%;
      aspect-ratio: 1;
      border-radius: 0.5rem;

      @include mq(lg) {
        display: none;
      }
    }
  }
}

.apply-now {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: radial-gradient(
    circle,
    rgba(152, 82, 255, 1) 0%,
    rgba(127, 0, 255, 1) 97%
  );
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
  }

  @include mq(sm) {
    top: 1rem;
    right: 2rem;
    bottom: auto;
    left: auto;
  }

  @include mq(lg) {
    top: 2rem;
  }
}

.timeslot {
  margin-top: 0.5rem;
  color: #fff;
  width: 100%;
}
</style>

<route lang="yaml">
meta:
  layout: main
</route>
