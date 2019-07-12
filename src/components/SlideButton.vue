<template>
  <li class="slides_button__container column">
    <router-link :to="buttonData.content.href | appendPathParent" 
    :class="buttonData.styles.bulmaClasses.buttonType"
    class="slide_button">
      {{ buttonData.content.text | toUpperCase }}
    </router-link>  
  </li>
</template>
<script>
export default {
  name: "SlideButton",
  props: {
    buttonData: Object
  },
  filters: {
    toUpperCase(str) { 
      return str.toString().toUpperCase();
    },
    appendPathParent(str) {
      return "/resume/" + str;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../node_modules/bulma/bulma.sass";
.slides_button__container {
  margin-bottom: 0;
  .slide_button {
    width: 99%;
  }
}
.slides_button {
  width: 100%;
}
</style>
