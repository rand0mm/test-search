export const state = () => ({
  // для поиска по id
  foundUsersData: {},
  // для пагинации/инфинитискролла
  pagUsersData: {},
  // отображаемые найденые пользователи
  toLoadFoundUsers: null,
  // номер страницы/последнего подгруженного раздела
  lastLoadedUser: null,

});

export const getters = {
  getToLoadUsers(state) {
    return state.toLoadFoundUsers ? state.toLoadFoundUsers : [];
  },
  getLastLoadedUser(state) {
    return state.lastLoadedUser ? state.lastLoadedUser : 1;
  },
  getUser: (state) => (id) => {
    console.log(id);
    console.log(state.foundUsersData);
    console.log(state.foundUsersData[id]);
    return state.foundUsersData[id];
  },
};

export const mutations = {
  setToLoadUsers(state, value) {
    state.toLoadFoundUsers = value;
  },
  setFoundUsersData(state, value) {
    state.foundUsersData = value;
  },
  setPagUsersData(state, value) {
    state.pagUsersData = value;
  },
  setLastLoadedUser(state, value) {
    state.lastLoadedUser = state.pagUsersData?.[value] ? value : state.lastLoadedUser;
  },

};

export const actions = {

  updateLoadedUsers({ commit, state }, page) {
    if (!state.pagUsersData?.[page]) return;
    const newArray = [...state.toLoadFoundUsers, ...state.pagUsersData[page]];
    commit('setLastLoadedUser', page);
    commit('setToLoadUsers', newArray);
  },
};
