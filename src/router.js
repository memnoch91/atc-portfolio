import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("./views/ArtGallery.vue")
    },
    {
      path: "/resume",
      name: "resume",
      redirect: "/resume/profile",
      component: () => import("./views/Resume.vue"),
      children: [
        {
          path: "profile",
          name: "profile",
          component: () => import("./components/slides/Profile.vue")
        },
        {
          path: "projects",
          name: "projects",
          component: () => import("./components/slides/Projects.vue")
        },
        {
          path: "employment",
          name: "employment",
          component: () => import("./components/slides/Employment.vue")
        },
        {
          path: "education",
          name: "education",
          component: () => import("./components/slides/Education.vue")
        },
        {
          path: "life",
          name: "life",
          component: () => import("./components/slides/Life.vue")
        }
      ]
    }
  ]
});
