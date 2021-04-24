<template id="yes">
  <div id="app">
    <Navbar id="DesktopNav" />
    <router-view />
    <img id="logga" src="./assets/Mark.png" alt="" />
    <Mnavbar id="MobileNav" />
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
  /*background-image: url("~@/assets/CloudY.jpg");*/
  /*background: -webkit-linear-gradient(#0b1d2600 0%, #0b1d26 70%),
    url("~@/assets/CloudY.jpg"),
    -webkit-linear-gradient(#0b1d26 0%, #0b1d26 100%);
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: right bottom, top;
  background-position-y: 150vh, 0, 130vh;*/
  background: linear-gradient(to bottom, transparent 70%, #0b1d26 100%),
    url("~@/assets/CloudY.jpg"),
    -webkit-linear-gradient(#0b1d26 0%, #0b1d26 100%);
  height: 100vmax;
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: right bottom, top;
  background-position-y: -17vh, -17vh, 130vh;
}
#logga {
  width: 120px;
  position: absolute;
  left: 2%;
  top: 0%;
}
@media only screen and (min-device-width: 700px) {
  body {
    background-size: cover;
  }
}
@media only screen and (max-device-width: 700px) {
  body {
    background-size: cover;
  }
  #DesktopNav {
    display: none;
  }
  #MobileNav {
    display: block;
    position: fixed;
    margin-left: 80vw;
    top: 0%;
  }
  #logga {
    position: absolute;
    top: -3%;
  }
}
</style>
