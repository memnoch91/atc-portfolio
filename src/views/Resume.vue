<template>
  <div class="resume_container">
    <main class="main">
      <transition tag="div" name="slide-fade">
        <router-view></router-view>
      </transition>
      <ul class="slide_bar__select columns">
        <SlideButton
          v-for="(button, index) in buttonsArray"
          :key="index"
          :buttonData="button"
        />
      </ul>
    </main>
  </div>
</template>

<script>
/**
 * !!!IMPORST
 * note to Self major change on the 5th July changed from slider on Array
 * to dynamic components as per example in vueDocs
 */
import SlideButton from "@/components/SlideButton.vue";
import BUTTON_DATA from "@/services/slideSelectButtonsData.js";
/* FIREBASE DB HERE */
// import { DB } from "@/services/firebase.js";

export default {
  components: {
    SlideButton
  },
  data() {
    return {
      buttonsArray: BUTTON_DATA
    };
  }
};
</script>

<style lang="scss" scoped>

.resume_container {
  color: lightgoldenrodyellow;
  background-color: rgb(0, 0, 78);
  justify-content: center;
  .main {
    width: 100%;
    .fade {
      &-enter-active,
      &-leave-active {
        transition: opacity 0.5s;
      }
      &-enter, 
      &-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
    }
    .slide-fade-enter-active {
      transition: all 0.3s ease;
    }
    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
      display: none;
    }
    .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }
    .slide_bar__select {
      margin-top: 10px;
      &.columns {
        justify-content: center;
      }
    }
  }
}

// .prev_button,
// .next_button {
//   position: absolute;
// }
// .prev_button {
//   top: 50%;
//   left: 0;
// }
// .next_button {
//   top: 50%;
//   right: 0;
// }
// .change_slide {
//   color: hotpink;
//   font-size: 24px;
//   background-color: transparent;
//   outline: none;
//   border: none;
// }
</style>
