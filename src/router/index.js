import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Wrappers
import SettingsWrapper from "../wrappers/SettingsWrapper.vue";

// Pages
import Welcome from "../pages/Welcome.vue";
import DashBoard from "../pages/Dashboard.vue";
import Profile from "../pages/Profile.vue";
import Messages from "../pages/Messages.vue";
import StreamPage from "../pages/Streams.vue";
import Settings from "../pages/Settings.vue"
import NotFound from "../pages/NotFound.vue";

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Welcome },
    { path: '/dashboard', component: DashBoard, meta: { authRequired: false } },
    { path: '/profile', component: Profile, meta: { authRequired: false } },
    { path: '/streams', component: StreamPage, meta: { authRequired: false } },
    {
      path: '/settings', component: SettingsWrapper, meta: { authRequired: false },
      children: [
        {
          path: "",
          redirect: 'account'
        },
        {
          path: ":page",
          component: Settings,
          props: true
        }
      ]
    },
    {
      path: '/messages',
      component: Messages,
      meta: { authRequired: false },
      children: [
        {
          path: ":id",
          component: NotFound,
          // TODO: send some parameter and catch on Messages page 
        }
      ]
    },
    { path: "*", redirect: "/" },
    // { path: "/settings", redirect: "/" },
  ]
});

// TODO check for auth token 
router.beforeEach((to, from, next) => {
  if (to.matched.some(routeValue => routeValue.meta.authRequired)) {
    if (localStorage.getItem('auth_token') === null) {
      next({
        path: '/',
        // params: { nextUrl: to.fullPath }
      })
    } else {
      next();
    }
  } else {
    next();
  }

})

export default router;