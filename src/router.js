import Vue from "vue";
import Router from "vue-router";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Home from "./pages/home"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: {default: Home, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 500}}
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
});

export default router;
