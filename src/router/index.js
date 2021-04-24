import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Forelasning from "../views/Forelasning.vue";
import Event from "../views/Event.vue";
import Highlight from "../views/Highlight.vue";
import Salat from "../views/Salat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/forelasning",
    name: "Forelasning",
    component: Forelasning,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/highlight",
    name: "Highlight",
    component: Highlight,
  },
  {
    path: "/salat",
    name: "Salat",
    component: Salat,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
