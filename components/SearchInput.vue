<template>
  <div class="content__add add">
    <h2 class="add__caption">
      Поиск сотрудников
    </h2>
    <label class="add__label" for="users">
      <input
        v-model="searchStr"
        class="add__input"
        type="text"
        name="users"
        placeholder="Введите id или имя"
        autocomplete="off"
        @focus.prevent="isShowFoundData = true"
      >
    </label>
    <h2 class="add__caption">
      Результат
    </h2>
    <infinite-scroll
      v-if="isShowFound && !isLoading"
      class="users add__users"
      :class="{ add_error: isSomeAxiosError }"
    >
      <ul class="users__list">
        <li
          v-for="user in users"
          :key="'foundUser-' + user.id"
          class="users__item"
          @click.prevent="choiceUser(user.id)"
        >
          <span v-if="!isSomeAxiosError" class="users__photo">
            <img
              class="users__img"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
              :alt="'фото' + user.username"
            >
          </span>
          <div class="users__info-container">
            <span class="users__name">{{ user.username }} </span>
            <span class="users__email">{{ user.email }} </span>
          </div>
        </li>
      </ul>
    </infinite-scroll>
    <div v-else-if="isLoading" class="add__not-found">
      Загрузка...
    </div>
    <div v-else class="add__not-found">
      Ничего не найдено
    </div>
  </div>
</template>

<script>
const toUpperCase = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const formatNumberString = (array) => array.map((number) => `id=${number}`).join('&');
const formatWordString = (array) => array.map((word) => `username=${word}`).join('&');
const idWordSplitter = (value) => {
  const parts = value.split(',').map((part) => part.trim());
  const numbersArray = [];
  const wordsArray = [];

  parts.forEach((part) => {
    if (!isNaN(part)) {
      numbersArray.push(parseFloat(part));
    } else {
      wordsArray.push(toUpperCase(part));
    }
  });
  const ids = formatNumberString(numbersArray);
  const words = formatWordString(wordsArray);
  return {
    words,
    ids,
  };
};

export default {
  data() {
    return {
      searchStr: '',
      delay: null,
      isSomeAxiosError: false,
      isShowFoundData: false,
      isLoading: false,
    };
  },
  computed: {
    isShowFound() {
      return this.isShowFoundData ? this.users.length > 0 : false;
    },
    users() {
      return this.foundUsers
        ? this.foundUsers.map((i) => {
          // console.log('данные по юзерам', i);
          const newUser = {
            id: i.id,
            username: `${i.username}`,
            email: `${i.email}`,
          };
          return newUser;
        })
        : [];
    },
    foundUsers: {
      get() {
        return this.$store.getters['users/getToLoadUsers'];
      },
      set(value) {
        this.$store.commit('users/setToLoadUsers', value);
      },
    },
  },
  watch: {
    searchStr() {
      this.delay = clearTimeout(this.delay);
      this.delay = setTimeout(async () => {
        const str = this.searchStr;
        this.foundUsers = [];
        const order = idWordSplitter(str);
        if (order.words.length > 0) {
          this.search(order.words);
        } else if (order.ids.length > 0) {
          this.search(order.ids);
        }
      }, 600);
    },
  },
  beforeMount() {
    window.addEventListener('click', (e) => {
      if (!e.target.closest('.add')) {
        // this.isShowFoundData = false;
      }
    });
  },
  methods: {
    async search(value) {
      // запрос отдельно по строке
      try {
        this.isLoading = true;
        const res = await this.$axios(
          `https://jsonplaceholder.typicode.com/users?${value}`,
        );
        if (res.error) {
          this.isSomeAxiosError = true;
          throw res.error.error_msg;
        }
        if (res?.data.length && !this.isSomeAxiosError) {
          this.saveToStore(res.data);
        }
      } catch (error) {
        this.foundUsers = [
          {
            first_name: 'Ошибка при запросе',
            last_name: error.message || error,
          },
        ];
      } finally {
        this.isLoading = false;
      }
    },
    choiceUser(id) {
      console.log('test selected');
      this.$router.push({ path: `/test-search/user/${id}` });
    },
    // формирование обьектов для стора по загруженному списку
    saveToStore(array) {
      const objArray = {};
      const pagObj = {};
      let page = 1;
      let counter = 0;
      const initialLoaded = [];
      array.map((i) => {
        if (initialLoaded.length < 5) {
          initialLoaded.push(i);
        }
        if (initialLoaded.length === 5 && counter > 4 && page === 1) {
          this.foundUsers = initialLoaded;
        }
        page = counter > 4 ? Number(page) + 1 : page;
        counter = counter > 4 ? 0 : Number(counter) + 1;

        objArray[i.id] = i;
        if (pagObj[page]) {
          pagObj[page].push(i);
        } else {
          pagObj[page] = [i];
        }
        return i;
      });
      this.$store.commit('users/setFoundUsersData', objArray);
      this.$store.commit('users/setPagUsersData', pagObj);
      this.$store.commit('users/setLastLoadedUser', 1);
      return objArray;
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  &__label {
    margin-bottom: 1.5rem;
  }
  &__caption {
    margin-bottom: 1rem;
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  &__not-found {
    color: #76787D;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

</style>
