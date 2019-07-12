<template>
  <div class="slide">
    <div class="bulmaCards">
      
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectsSlide"
};
</script>
<style lang="scss" scoped>
@import "./sharedSlideCSS.scss";
.slide {
  @include slide;
}
</style>
