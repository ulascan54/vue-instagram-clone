import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/direct",
    name: "Direct",
    component: () => import(/* webpackChunkName: "about" */ "../views/direct"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import(/* webpackChunkName: "about" */ "../views/explore"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import(/* webpackChunkName: "about" */ "../views/profile"),
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/post"),
      },
      {
        path: "igtv",
        name: "ProfileIGTV",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/igtv"),
      },
      {
        path: "save",
        name: "ProfileSave",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/save"),
      },
      {
        path: "tag",
        name: "ProfileTag",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/tag"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
