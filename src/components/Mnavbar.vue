<template>
  <div>
    <div id="menuButton" v-on:click="toggle = !toggle">
      <tasty-burger-button
        type="emphatic"
        color="#3CBF74"
        :active-color="activeColor"
      />
    </div>
    <transition id="yes" name="fade">
      <div v-on:click="toggle = !toggle" v-if="toggle" id="mnav">
        <router-link class="select" to="/">Oskarshamns MKF</router-link>
        <router-link class="select" to="/about">Om oss</router-link>
        <router-link class="select" to="/contact">Kontakta oss</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import { TastyBurgerButton } from "vue-tasty-burgers";

export default {
  components: {
    "tasty-burger-button": TastyBurgerButton,
  },
  methods: {},
  mounted: {},

  data() {
    return {
      activeColor: "green",

      toggle: false,
    };
  },
};
</script>
<style scoped>
.select {
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 800;
}
#mnav {
  background-color: white;
  border-radius: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding: 30px;
  top: 100%;
  left: -180%;
  position: absolute;
  box-shadow: 0px 0px 100px 2000px rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
