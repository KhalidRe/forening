/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import moment from "moment";
import VueSmoothScroll from "vue2-smooth-scroll";
Vue.use(VueSmoothScroll);
Vue.use(moment);

new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
