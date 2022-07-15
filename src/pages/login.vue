<script lang="ts" setup>
import { createToast } from "@/components/createToast";
import { useAdminStore } from "@/stores/admin.store";
const adminStore = useAdminStore();
const router = useRouter();
const isPasswordVisible = ref(false);

const email = ref("");
const password = ref("");
const loading = ref(false);

async function onSubmit() {
  loading.value = true;
  try {
    await adminStore.login({
      email: email.value,
      password: password.value,
    });
    await router.push("/dashboard");
  } catch (error) {
    createToast((error as Error).message, {
      type: "danger",
    });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <aside class="login-background" />
  <section class="login-section flex-centered">
    <div class="login-container flex-centered flex-col">
      <h1
        class="text-4xl font-bold mb-2 text-center text-[var(--clr-text-primary)]"
      >
        Hello Again, AIESECer!
      </h1>
      <h2 class="text-md mb-8 text-center text-[var(--clr-text-secondary)]">
        Got work to do?
      </h2>
      <form class="login-form" autocomplete="off" @submit.prevent="onSubmit">
        <input type="text" autocomplete="false" class="hidden" />
        <BaseInput
          id="email"
          v-model="email"
          type="email"
          label="Email Address"
          label-for="email"
          required
        >
          <template #icon>
            <i-carbon-at />
          </template>
        </BaseInput>
        <BaseInput
          id="password"
          v-model="password"
          label="Password"
          label-for="password"
          :type="isPasswordVisible ? 'text' : 'password'"
          required
        >
          <template #icon>
            <i-akar-icons-eye-closed
              v-if="!isPasswordVisible"
              @click="isPasswordVisible = true"
            />
            <i-akar-icons-eye v-else @click="isPasswordVisible = false" />
          </template>
        </BaseInput>
        <BaseActionButton type="submit" style="width: 100%" :loading="loading">
          {{ loading ? "Signing in" : "Sign in" }}
        </BaseActionButton>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login {
  &-background {
    display: none;

    @include mq(lg) {
      display: block;
      width: 60%;
      height: 100vh;
      background-image: url(../assets/login-bg.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  &-section {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/login-bg.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @include mq(lg) {
      width: 40%;
      background-image: none;
    }
  }

  &-container {
    width: 90%;
    max-width: 500px;
    padding: 2rem;
    border-radius: 2rem;
    background-color: var(--clr-background);
    box-shadow: 5px 5px 20px 5px rgba($color: #000000, $alpha: 0.2);

    @include mq(lg) {
      box-shadow: none;
    }
  }

  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    gap: 1rem;
  }
}
</style>

<route lang="yaml">
meta:
  layout: auth
</route>
