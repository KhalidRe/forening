<!-- eslint-disable -->
<template>
  <div>
    <div>
      <p id="gText">- Oskarshamns Mångkulturella Förening</p>
    </div>

    <h1 id="Header">
      <b>Högtider</b>
    </h1>
    <div id="Bcollection">
      <Enavbar class="Enav up" />
    </div>

    <div id="HolidayC"><Holiday /></div>
    <Flipcards id="s1" />
  </div>
</template>
<!-- eslint-disable -->
<script>
import Enavbar from "@/components/Enavbar.vue";
import Holiday from "../components/Holiday.vue";
import Flipcards from "../components/Flipcards.vue";
export default {
  components: {
    Enavbar,
    Holiday,
    Flipcards,
  },
  methods: {},
};
</script>
<style scoped>
#s1 {
}
#HolidayC {
  margin-top: 30vh;
  background-image: linear-gradient(to right, #5492b1 20%, #035179 100%);
}
#approval {
  font-size: 50px;
  margin-top: 100vh;
}
.S .BgOpac {
  -webkit-transition: 1s;
}
.S div.BgOpac:hover {
  box-shadow: 0px 0px 50px 1px rgb(90, 142, 255);
}
#gText {
  color: #ffc02c;
  top: 25%;
  left: 10%;
  position: absolute;
  font-size: 1.7em;
  font-weight: 600;
}
#Header {
  font-size: 3em;
  position: absolute;
  left: 10%;
  top: 30%;
  text-align: left;
}
.Enav {
  margin-top: 0vh;
  animation: move 1500ms ease-in-out;
  animation-iteration-count: 1;
}
.BgOpac {
  background-image: url("~@/assets/Opac.png");
  background-repeat: no-repeat;
  background-size: 100px;
  width: 100px;
  height: 66px;
  position: absolute;
  left: 45.3vw;
  top: 82vh;
  border-radius: 30px;
}

.DownArrows {
  background-image: url("~@/assets/Arrows.png");
  background-repeat: no-repeat;
  background-size: 65px;
  background-position-x: 18px;
  background-position-y: 5px;
  width: 100px;
  height: 70px;
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
}
.bounce-1 {
  animation-name: bounce-1;
  animation-timing-function: linear;
}
.up {
  animation-name: up;
}
@keyframes bounce-1 {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  25% {
    transform: translateY(4.25px);
    opacity: 0.3;
  }
  50% {
    transform: translateY(8.5px);
    opacity: 0.6;
  }
  75% {
    transform: translateY(12.75px);
    opacity: 1;
  }
  100% {
    transform: translateY(17px);
    opacity: 0;
  }
}
@keyframes up {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
#LowSection {
  width: 2vw;
  height: 2vh;
  margin-top: 100vh;
  position: absolute;
}
@media only screen and (max-device-width: 631px) {
}
@media only screen and (max-device-width: 631px) {
  .BgOpac {
    margin-left: -29px;
  }
  #Header {
    top: 25%;
    left: 5%;
    font-size: 3em;
  }
  #gText {
    left: 5%;
    top: 20%;
    font-size: 1em;
  }
  #approval {
    font-size: 50px;
    margin-top: 120vh;
  }
  @media only screen and (max-device-width: 750px) {
    #gText {
      top: 15%;
      left: 10%;
    }
    #Header {
      left: 10%;
      top: 20%;
    }
  }
}
</style>
