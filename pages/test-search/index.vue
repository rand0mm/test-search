<template>
  <main class="content container">
    <h2 class="caption-center">
      Выберите сотрудника, чтобы посмотреть его профиль
    </h2>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isShowUsersFriends: false,
    };
  },
  computed: {},
  watch: {
  },
};
</script>

<style lang="scss" scoped>
.caption-center {
  text-align: center;
  margin-top: 10rem;
  color: #76787D;
  font-size: 14px;
  font-weight: 400;

}

</style>
