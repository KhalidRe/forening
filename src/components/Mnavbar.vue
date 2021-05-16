<!-- eslint-disable -->
<template>
  <div class="Mmenu" :class="{ 'Mmenu--hidden': !showNavbar }">
    <div id="cont">
      <div id="flexing">
        <router-link id="H" to="/"></router-link>|
        <router-link id="F" to="/forelasning"></router-link>|
        <router-link id="E" to="/event"></router-link>|
        <router-link id="L" to="/highlight"></router-link>|
        <router-link id="S" to="/salat"></router-link>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {
  components: {},

  data() {
    return {
      toggle: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  onScroll() {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < 0) {
      return;
    }
    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
      return;
    }
    this.showNavbar = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  },
};
</script>
<style scoped>
.Mmenu {
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  margin-left: -1vw;
}
.Mmenu.Mmenu--hidden {
  box-shadow: none;
  transform: translate3d(0, 100%, 0);
}
#cont {
  box-shadow: 0 8px 6px 5px black;
  background-color: rgb(23, 166, 223);
  width: 100vw;
  height: 7vh;
  margin-top: 5px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#flexing {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  height: 50px;
}
#S {
  background-image: url("~@/assets/prayiconW.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 5px;
  width: 50px;
  height: 50px;
}
#H {
  background-image: url("~@/assets/homeiconW.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
}
#F {
  background-image: url("~@/assets/bookiconW.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
}
#E {
  background-image: url("~@/assets/calendericonW.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
}
#L {
  background-image: url("~@/assets/stariconW.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
}
@media only screen and (max-device-width: 438px) {
  .Mmenu {
    transform: translate3d(0, -0%, 0);
    transition: 0.1s all ease-out;
  }
  .Mmenu.Mmenu--hidden {
    box-shadow: none;
    transform: translate3d(0, 100%, 0);
  }
  #S {
    width: 40px;
    height: 50px;
    background-position-y: 10px;
  }
  #H {
    width: 40px;
    height: 50px;
    background-position-y: 5px;
  }
  #E {
    width: 40px;
    height: 50px;
    background-position-y: 8px;
    background-size: 35px;
  }
  #L {
    width: 40px;
    height: 50px;
    background-position-y: 10px;
    background-size: 35px;
  }
  #F {
    width: 40px;
    height: 50px;
    background-position-y: 7px;
    background-size: 40px;
  }
  #cont {
    width: 100vw;
  }
  #flexing {
    gap: 4vw;
  }
}
</style>
