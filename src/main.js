/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import moment from "moment";

Vue.use(moment);

new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
