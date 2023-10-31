<template>
  <div id="app">
    <header class="header">
      <div class="header__wrapper">
        <NuxtLink class="header__logo" to="/test-search/">
          <img
            src="@/assets/img/logo.svg"
            alt="Логотип"
            width="121"
            height="33"
          >
        </NuxtLink>
        <div class="header__user">
          Пользователь
        </div>
      </div>
    </header>
    <div class="content-container">
      <Sidebar />
      <nuxt />
    </div>
    <portal-target name="destination" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('users/getLocal');
  },
};
</script>
