import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers: (state, users) => (state.users = users),
    addUser: (state, user) => state.users.push(user),
  },
  getters: {
    users: (state) => state.users,
  },
  actions: {
    getData(store) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "https://reqres.in/api/users?page=1", true);
      xhr.onload = () => {
        let users = JSON.parse(xhr.responseText).data;
        store.commit("setUsers", users);
      };
      xhr.send();
    },
    removeUser(store, id) {
      let filtered = store.state.users.filter((a) => a.id != id);
      store.commit("setUsers", filtered);
    },
  },
});
