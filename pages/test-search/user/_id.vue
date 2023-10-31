<template>
  <main class="content container">
    <NuxtLink class="btn btn_back" to="/test-search">
      Сбросить поиск
    </NuxtLink>
    <div class="profile">
      <div class="profile__photo">
        <span class="profile__photo-container">
          <img
            class="profile__img"
            :src="user.photo"
            :alt="'фото' + user.username"
          >
        </span>
      </div>
      <div class="profile__info">
        <h4 class="profile__username">
          {{ user.username }}
        </h4>
        <div class="profile__part">
          <div class="profile__part-title">
            Email:
          </div>
          <div class="profile__part-value">
            {{ user.email }}
          </div>
        </div>
        <div class="profile__part">
          <div class="profile__part-title">
            Phone:
          </div>
          <div class="profile__part-value">
            {{ user.phone }}
          </div>
        </div>
        <div class="profile__part profile__part_about">
          <h6 class="profile__part-title">
            О себе:
          </h6>
          <p>
            Мой вебсайт :
            {{ user.website }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    user() {
      const user = this.$store.getters['users/getUser'](this.$route.path.split('/')[3]);
      console.log(user);
      return {
        phone: user.phone,
        username: user.username,
        email: user.email,
        photo: user.photo ? user.photo : 'https://cdn.quasar.dev/img/parallax2.jpg',
        website: user.website,
      };
    },
  },
};
</script>

<style lang="scss">
.profile {
  display: flex;
  justify-content: space-between;
  &__photo {
    width: calc(50% - 10px)
  }
  &__info {
    width: calc(50% - 10px)
  }
  &__part {
    display: flex;
    align-items: center;
    margin-bottom: .6rem;
    &_about {
      flex-wrap: wrap;
      .profile__part-title {
        width: 100%;
      }
    }
  }
  &__username {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: .6rem;
  }
  &__part-title {
    color: #333;
    font-size: .8rem;
    font-weight: 600;
    margin-right: .2rem;
  }
  &__part-value {
    color: #76787D;
    font-size: .8rem;

  }
}

</style>
