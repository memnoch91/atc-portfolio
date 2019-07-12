.slide { @include slide; }<template>
  <div class="slide">
    05 lifeContent Here
  </div>
</template>
<script>
export default {
  name: "LifeSlide"
};
</script>
<style lang="scss" scoped>
@import "./sharedSlideCSS.scss";

.slide {
  @include slide;
}
</style>
