import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
var audio = new Audio(require("./assets/Bismallah.mp3"));
audio.play();

new Vue({
  router,
  mounted() {
    var audio = new Audio("src/assets/Bismallah.mp3");
    audio.play();
  },
  render: (h) => h(App),
}).$mount("#app");
