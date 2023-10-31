<template>
  <perfect-scrollbar ref="scrollbar" @ps-scroll-y="onScroll">
    <div ref="scrollContainer" class="infinite-scroll">
      <slot />
    </div>
  </perfect-scrollbar>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.getters['users/getLastLoadedUser'];
      },
      set(value) {
        this.$store.commit('users/setLastLoadedUser', value);
      },
    },
  },
  methods: {
    onScroll() {
      if (this.$refs.scrollbar.ps.reach?.y === 'end') {
        this.$store.dispatch('users/updateLoadedUsers', Number(this.currentPage) + 1);
      }
    },
  },
};
</script>

<style scoped>
.infinite-scroll {
  height: 20rem;
}
</style>
