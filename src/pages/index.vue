<template>
  <div class="portal-links-container">
    <h1 class="text-4xl text-center mt-4 font-semibold px-4">
      How will you choose to develop yourself with AIESEC?
    </h1>
    <h2
      class="text-2xl text-center text-[var(--clr-text-secondary)] mt-6 mb-8 px-4"
    >
      Join our Global Exchange Programs
    </h2>
    <div class="portal-links">
      <div
        class="portal-links__item"
        :style="{
          '--background': `linear-gradient(to left,var(--clr-error) 0%,var(--clr-error-2) 100%)`,
        }"
      >
        <div class="portal-links__item--info">
          <img src="../assets/ogtv-logo.png" alt="OGV Logo" />
          <p class="text-center mt-6">
            Ambitious enough to believe you can make a positive impact in our
            world? We believe you can, through volunteering abroad towards the
            UN Global Goals!
          </p>
          <ul>
            <li>
              <i-typcn-tick />
              6-8 Weeks
            </li>
            <li>
              <i-typcn-tick />
              International NGOs
            </li>
            <li>
              <i-typcn-tick />
              Volunteer
            </li>
          </ul>
          <RouterLink to="/opportunities" class="ogv">Discover</RouterLink>
        </div>
      </div>
      <div
        class="portal-links__item"
        :style="{
          '--background': `linear-gradient(to left,var(--clr-orange) 0%,var(--clr-orange-2) 100%)`,
        }"
      >
        <div class="portal-links__item--info">
          <img src="../assets/ogte-logo.png" alt="OGV Logo" />
          <p class="text-center mt-6">
            Does a professional teaching experience in abroad excites you?
            Differentiate yourself through an international teaching internship!
          </p>
          <ul>
            <li>
              <i-typcn-tick />
              9-78 Weeks
            </li>
            <li>
              <i-typcn-tick />
              Educational Institutes
            </li>
            <li>
              <i-typcn-tick />
              Intern
            </li>
          </ul>
          <RouterLink to="/opportunities?type=ogt&q=teacher" class="ogte"
            >Discover</RouterLink
          >
        </div>
      </div>
      <div
        class="portal-links__item"
        :style="{
          '--background': `linear-gradient(to left,var(--clr-teal-2) 0%,var(--clr-teal) 100%)`,
        }"
      >
        <div class="portal-links__item--info">
          <img src="../assets/ogta-logo.png" alt="OGV Logo" />
          <p class="text-center mt-6">
            Searching for a dynamic, professional internship opportunity? Start
            an internship program abroad to level up yourself!
          </p>
          <ul>
            <li>
              <i-typcn-tick />
              6-8 Weeks and 9-78 Weeks
            </li>
            <li>
              <i-typcn-tick />
              MNCs, SMEs, Start-Ups, NGOs
            </li>
            <li>
              <i-typcn-tick />
              Intern
            </li>
          </ul>
          <RouterLink to="/opportunities?type=ogv" class="ogta"
            >Discover</RouterLink
          >
        </div>
      </div>
    </div>
    <h2 class="text-2xl text-center text-[var(--clr-text-secondary)] my-6 px-4">
      Nothing specific on your mind yet?
      <br />
      <RouterLink to="/opportunities" class="text-xl text-[var(--clr-primary)]">
        Browse all opportunities
      </RouterLink>
    </h2>
  </div>
</template>

<route lang="yaml">
meta:
  layout: landing
</route>

<style lang="scss" scoped>
.portal-links-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  padding-block: 2rem;
  overflow-x: hidden;
}
.portal-links {
  @include container-level2;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  gap: 2rem;
  padding: 1rem;

  @include mq(md) {
    // have two in top and 1 in bottom
    flex-direction: row;
    justify-content: space-between;
  }

  &__item {
    // background-color: var(--clr-foreground);
    background: var(--background);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.3rem;
    border-radius: 1rem;
    position: relative;

    img {
      width: 75%;
    }

    &::after {
      position: absolute;
      content: "";
      top: 10px;
      left: 0;
      right: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      transform: scale(0.8);
      filter: blur(25px);
      background: var(--background);
      transition: opacity 0.5s;

      @include mq(md) {
        transform: scale(0.85);
      }

      @include mq(xl) {
        transform: scale(0.9);
      }
    }

    &:hover::after {
      opacity: 0;
    }

    &--info {
      background-color: var(--clr-background);
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }

    ul {
      margin-block: 1.5rem;
      width: 100%;
    }

    li {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      padding-block: 0.25rem;
      justify-content: center;

      svg {
        color: var(--clr-success);
      }
    }

    a {
      width: 100%;
      padding: 0.5rem 1rem;
      background: var(--background);
      margin-top: auto;
      display: grid;
      place-items: center;
      border-radius: 0.5rem;
      font-weight: 600;
      color: #fff;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-0.25rem);
      }
    }
  }
}
</style>
