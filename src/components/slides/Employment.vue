.slide { @include slide; }<template>
  <div class="slide">
    03 employmentContent Here
  </div>
</template>
<script>
export default {
  name: "EmploymentSlide"
};
</script>
<style lang="scss" scoped>
@import "./sharedSlideCSS.scss";

.slide {
  @include slide;
}
</style>
