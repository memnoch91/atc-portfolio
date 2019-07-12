.slide { @include slide; }<template>
  <div class="slide">
    01 profileContentHere
  </div>
</template>
<script>
export default {
  name: "ProfileSlide"
};
</script>
<style lang="scss" scoped>
@import "./sharedSlideCSS.scss";

.slide {
  @include slide;
}
</style>
