<!-- eslint-disable -->
<template id="yes">
  <div id="app">
    <Social id="social" />
    <Notification id="notification" />
    <Navbar id="DesktopNav" />

    <router-view />

    <img id="logga" src="./assets/Mark.png" alt="" />
    <Mnavbar id="MobileNav" />
  </div>
</template>
<!-- eslint-disable -->
<script>
import Navbar from "@/components/Navbar.vue";
import Mnavbar from "@/components/Mnavbar.vue";
import Social from "@/components/Social.vue";
import Notification from "@/components/Notification.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Mnavbar,
    Social,
    Notification,
  },
};
</script>
<!-- eslint-disable -->
<style>
#notification {
  position: absolute;
  left: 20%;
  top: 4%;
}
#social {
  position: absolute;
  left: 10%;
  top: 4%;
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
  background: linear-gradient(to bottom, transparent 70%, #12303f 100%),
    linear-gradient(40deg, rgba(42, 85, 31, 0), rgba(95, 30, 30, 0)),
    url("~@/assets/CloudY.jpg"),
    -webkit-linear-gradient(#12303f 0%, #12303f 100%);
  height: 100vmax;
  background-repeat: no-repeat, no-repeat, no-repeat, repeat;
  background-position: right bottom, top;
  background-position-y: -20vh, -20vh, -20vh, 0vh;
  background-size: cover;
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
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  #logga {
    position: absolute;
    top: -3%;
  }
}
@media only screen and (max-device-width: 850px) {
  #DesktopNav {
    display: none;
  }
  #MobileNav {
    display: block;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 1%;
    width: 100%;
  }
}
</style>
