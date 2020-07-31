<template>
  <b-card
    fluid
    :img-width="200"
    :img-src="user.avatar"
    img-alt="Card image"
    img-left
    class="mb-3"
  >
    <b-list-group flush>
      <b-list-group-item
        ><span class="font-weight-bold">First Name:</span>
        {{ user.first_name }}</b-list-group-item
      >
      <b-list-group-item
        ><span class="font-weight-bold">Last Name:</span>
        {{ user.last_name }}</b-list-group-item
      >
      <b-list-group-item
        ><span class="font-weight-bold">Email:</span>
        {{ user.email }}</b-list-group-item
      >
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  name: "User",
  computed: {
    user() {
      return this.$store.getters.users.find(
        (user) => user.id == this.$route.params.id
      );
    },
  },
};
</script>
