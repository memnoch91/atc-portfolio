<template>
  <div id="app" class="hero is-fullheight">
    <nav id="nav" class="hero-head">
      <router-link to="/">Home |</router-link>
      <!-- <router-link to="about">About | </router-link> -->
      <!-- <router-link to="gallery">Gallery | </router-link> -->
      <router-link to="/resume">Resume</router-link>
    </nav>
    <router-view class="hero-body" />
    <button class="button">wqeq</button>
    <footer class="hero-foot">made by ATC</footer>
  </div>
</template>

<style lang="scss">
@import "/styles/main.scss";

$app-width: 95vmin;
* {
  box-sizing: border-box;
}

body {
  line-height: 1;
}

html {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
}

body,
div,
img {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

.viewport {
  width: $app-width;
  height: calc(#{$app-width} * (9 / 16));
}

</style>
