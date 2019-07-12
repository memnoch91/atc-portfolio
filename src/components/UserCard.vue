<template>
  <li>
    <span>{{ user.name }}</span> |
    <span>{{ user.email }}</span>
    <br />
    <br />
  </li>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    user: Object
  }
};
</script>
<style lang="scss" scoped></style>
