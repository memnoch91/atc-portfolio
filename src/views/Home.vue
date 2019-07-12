<template>
  <div class="home">
    <label for="userSearch">
      Search:
      <input type="text" id="userSearch" v-model="searchQuery" />
    </label>
    <ul>
      <UserCard v-for="user in filteredUsers" :key="user.id" :user="user" />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue";
import getUsers from "@/services/getUsers.js";
export default {
  name: "home",
  components: {
    UserCard
  },
  data() {
    return {
      users: [],
      searchQuery: ""
    };
  },
  mounted() {
    getUsers().then(res => {
      return (this.users = res);
    });
  },
  computed: {
    filteredUsers() {
      const searchQuery = this.searchQuery;
      if (!searchQuery) {
        return this.users;
      } else {
        return this.users.filter(user => {
          return user.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
    }
  }
};
</script>
