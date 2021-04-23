<template id="yes">
  <div id="app">
    <Navbar id="DesktopNav" />
    <Mnavbar id="MobileNav" />
    <router-view />
    <img id="logga" src="./assets/Mark.png" alt="" />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Mnavbar from "@/components/Mnavbar.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Mnavbar,
  },
};
</script>
<style>
h1 {
}
#MobileNav {
  display: none;
}
#app {
  font-family: Chronicle Display;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

body {
  background-image: url("~@/assets/CloudY.jpg");
  background-repeat: no-repeat;
  background-position-y: -17.6vh;
  width: 100vw;
}
#logga {
  width: 120px;
  position: absolute;
  left: 2%;
  top: 0%;
}
@media only screen and (min-device-width: 1280px) {
  body {
    background-size: cover;
  }
}
@media only screen and (max-device-width: 631px) {
  #DesktopNav {
    display: none;
  }
  #MobileNav {
    display: block;
    position: fixed;
    left: 80%;
    top: 0%;
  }
  #logga {
    position: absolute;
    top: -3%;
  }
}
</style>
