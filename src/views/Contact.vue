<template>
  <div>
    <div>
      <p id="gText">- Oskarshamns Mångkulturella Förening</p>
    </div>

    <h1 id="Header">
      <b>Kontakta Oss</b>
    </h1>
    <div id="Bcollection">
      <Enavbar class="Enav up" />
    </div>
    <div id="approval">
      <p>
        Kontakta oss Hör av dig till oss på Oskarshamns mångkulturella
        föreningen om du har några frågor. Fyll gärna i kontaktformuläret så hör
        vi av oss till dig! <br />
        Besöksadress: Södralånggatan 11B 572 55 Oskarshamn <br />
        E post:
        <a class="links" href="mailto: mkfioh@gmail.com">mkfioh@gmail.com</a>
      </p>
    </div>
    <div id="Styrelse">
      <h2 id="StH">OMKF består av Styrelse Ordförande:</h2>
      <br />
      <p id="StP">
        <br />
        <strong> Styrelse Ordförande:</strong> Abdou Elbany <br />
        <strong> Sekreterare: </strong> Abdelouahab Boussefres <br />
        <strong> Kassör: </strong> Jusuf Mohamad 4 <br />
        <strong> ledamöter: </strong> Faton Ejupi, Faruk Tuzlo, Basim Twmae &
        Mohammed Ezzat
      </p>
    </div>
  </div>
</template>
<script>
import Enavbar from "@/components/Enavbar.vue";
export default {
  components: {
    Enavbar,
  },
  methods: {},
};
</script>
<style scoped>
.links {
  color: #ffc02c;
}
#Styrelse {
  margin-top: 30vh;
  margin-left: 1vw;
}
#StH {
  float: left;
}
#StP {
  font-size: 1.2em;

  text-align: left;
}
#approval {
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
#approval p {
  font-size: 2em;
  width: 70vw;
  color: rgb(255, 255, 255);
}
.S .BgOpac {
  -webkit-transition: 1s;
}
.S div.BgOpac:hover {
  box-shadow: 0px 0px 50px 1px rgb(90, 142, 255);
}
#gText {
  color: #ffc02c;
  top: 30%;
  left: 28%;
  position: absolute;
  font-size: 1.4vw;
  font-weight: 600;
}
#Header {
  font-size: 3.5vw;
  position: absolute;
  left: 28%;
  top: 35%;
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
    font-size: 1.2em;
  }
}
</style>
