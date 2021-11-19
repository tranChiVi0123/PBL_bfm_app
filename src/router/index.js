import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      allowAnonymous: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
    meta: {
      allowAnonymous: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
export default router;
