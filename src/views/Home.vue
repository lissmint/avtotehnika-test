<template>
  <div class="home">
    <div>
      <b-form-input class="mb-2" v-model="search" type="search"></b-form-input>
      <b-button
        class="mb-2"
        variant="outline-primary"
        @click="showForm = !showForm"
        >{{ showForm ? "Hide" : "Add User" }}</b-button
      >

      <b-card bg-variant="light" v-if="showForm" class="mb-2">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            label-cols-sm="3"
            label="First Name:"
            label-align-sm="right"
            label-for="nested-first"
          >
            <b-form-input
              id="nested-first"
              v-model="firstName"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Last name:"
            label-align-sm="right"
            label-for="nested-last"
          >
            <b-form-input
              id="nested-last"
              v-model="lastName"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Email:"
            label-align-sm="right"
            label-for="nested-email"
          >
            <b-form-input
              id="nested-email"
              type="email"
              required
              v-model="email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Avatar:"
            label-align-sm="right"
            label-for="nested-url"
          >
            <b-form-input
              id="nested-url"
              type="url"
              v-model="avatar"
              required
            ></b-form-input>
            <b-form-invalid-feedback :state="validation">
              Please use either jpg or jpeg image
            </b-form-invalid-feedback>
          </b-form-group>

          <b-button
            type="submit"
            variant="success"
            class="mx-auto"
            style="width: 100%;"
            >Add</b-button
          >
        </b-form>
      </b-card>

      <b-list-group>
        <b-list-group-item
          class="d-flex align-items-center"
          v-for="user in searchedUsers"
          :key="user.id"
        >
          <b-avatar variant="info" :src="user.avatar" class="mr-3"></b-avatar>
          <span class="mr-auto">
            <b-link :to="`/user/${user.id}`"
              >{{ user.first_name }} {{ user.last_name }}</b-link
            >
          </span>
          <b-button
            pill
            variant="danger"
            @click="$store.dispatch('removeUser', user.id)"
            >Remove</b-button
          >
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    search: "",
    showForm: false,
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
  }),
  computed: {
    searchedUsers() {
      return this.search
        ? this.$store.getters.users.filter(this.isSearched)
        : this.$store.getters.users;
    },
    validation() {
      let url = this.avatar.split(".");
      let res = url[url.length - 1];
      return res == "jpg" || res == "jpeg";
    },
  },
  methods: {
    isSearched(user) {
      let search = this.search.toLowerCase().trim();
      let fullName = `${user.first_name} ${user.last_name}`;
      return fullName.toLowerCase().includes(search);
    },
    onSubmit() {
      this.$store.commit("addUser", {
        id: Date.now(),
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        avatar: this.avatar,
      });

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.avatar = "";
      this.showForm = false;
    },
  },
};
</script>
