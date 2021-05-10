<template>
  <div id="hbg">
    <div class="Fin">
      <div>
        <p id="gText">- Oskarshamns Mångkulturella Förening</p>
      </div>

      <h1 id="Header">
        <b
          >Välkommen till en gemenskap <br />
          för dig och alla.</b
        >
      </h1>
    </div>

    <div id="Bcollection">
      <Enavbar class="Enav down" />
    </div>
    <div class="S">
      <div class="BgOpac set">
        <div class="DownArrows bounce-1"></div>
      </div>
    </div>
    <div id="DesktopCards">
      <div id="txt1">
        <h1>OM OSS</h1>
        <p>
          Oskarshamns mångkulturella föreningen jobbar med demokrati,
          integration, jämställdhet, kultur och fritid. Föreningens medlemmar
          har stort intresse för att hjälpa varandra att komma in det svenska
          samhället och samtidigt bevara sin egen kultur, språk och traditioner.
          OMKF har ett samarbetes avtal med studieförbundet NBV sedan februari
          2019. Vi befinner oss centralt i Oskarshamns gamla församlingshem
        </p>
      </div>
      <div id="img1"></div>

      <div id="img2"></div>
      <div id="txt2">
        <p>
          <strong>110</strong> medlemmar av våran ekonomi bygger på
          medlemsavgifter och donationer, bland annat ifrån föräldrar som har
          barn som är aktiva i våran förening, via swish. Vi har även en
          insammlingsbössa i våran lokal där besökare kan skänka pengar. Vi har
          även ansökt om ett 90-konto för att kunna möjliggöra det för företag,
          stiftelser och privatpersoner i Sverige och från andra länder att
          donera till våran förening. <br />
          <br />
        </p>
      </div>
    </div>
    <p id="ltxt">
      <strong>Målet</strong> med våra insamlingar är att kunna äga våran egna
      lokal, och för att kunna satsa mer på integration, språk och kultur,
      demokrati och föreläsningar om beteende, droger, alkohol och kriminalitet.
      Finans och insamlingspolicy syftar till att säkerställa och att
      medelsförvaltningen sker på ett tillfredsställande sätt, och att
      insamlings- och administrations kostnaderna inte är för höga och att medel
      används i enlighet med av OMKF fastställda ändmål och att utbetalningar
      till samarbetspartners kan kontrolleras tillförlitligt.
      <br />
      <br />
      <strong> Syftet </strong> OMKF :s Finans- och insamlingspolicy är att
      klargöra ansvarsfördelning och administrativa regler rörande hantering av
      inkomna medel i fastställa policy. EY Revisorsbyrån Annica Ericson Östra
      Torggatan 1 57230 Oskarshamn <br />
      Tel 0491 87900
    </p>

    <div id="LowSection"></div>
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
#img1 {
  background-image: url("~@/assets/Together2.png");
  width: 30vw;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgb(202, 195, 195) 1px 1px 30px 1px;
  border-radius: 4px;
}
#txt1 p {
  font-size: 1.3rem;
  width: 25vw;
  text-align: left;
}

#img2 {
  background-image: url("~@/assets/Classroom.png");
  width: 30vw;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgb(202, 195, 195) 1px 1px 30px 1px;
  border-radius: 4px;
}

#txt2 p {
  font-size: 1.3rem;
  width: 40vw;
  text-align: left;
}
#DesktopCards {
  margin-top: 50vh;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-row-gap: 50vh;
  justify-content: center;
  justify-items: center;
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
  font-size: 1.7em;
  font-weight: 600;
}
#Header {
  font-size: 3em;
  position: absolute;
  left: 28%;
  top: 35%;
  text-align: left;
}
.Enav {
  margin-top: 50vh;
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
.down {
  animation-name: down;
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
@keyframes down {
  0% {
    transform: translateY(-50vh);
  }

  95% {
    transform: translateY(2vh);
  }
  100% {
    transform: translateY(0vh);
  }
}

#LowSection {
  width: 2vw;
  height: 2vh;
  margin-top: 100vh;
  position: absolute;
}
@media only screen and (max-device-width: 850px) {
  #DesktopCards {
    margin-top: 100vh;
    display: grid;
    grid-template-columns: 1;
    grid-row-gap: 10vh;
    justify-content: center;
    justify-items: center;
  }
  #img1 {
    width: 45vw;
    height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgb(202, 195, 195) 1px 1px 30px 1px;
    border-radius: 4px;
  }
  #txt1 p {
    font-size: 1rem;
    width: 40vw;
    text-align: left;
    font-weight: 600;
  }
  #img2 {
    width: 45vw;
    height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgb(202, 195, 195) 1px 1px 30px 1px;
    border-radius: 4px;
  }

  #txt2 p {
    font-size: 1rem;
    width: 40vw;
    text-align: left;
    font-weight: 600;
  }
  #ltxt {
    font-size: 1rem;
    width: 75vw;
    text-align: left;
    font-weight: 600;
    margin-left: 5vw;
    margin-top: -3vh;
  }
  .BgOpac {
    margin-left: -29px;
  }
  #Header {
    top: 25%;
    left: 5%;
    font-size: 2.3em;
  }
  #gText {
    left: 5%;
    top: 20%;
    font-size: 1.2em;
  }
  #approval {
    font-size: 20;
    margin-top: 120vh;
  }
}
.fade-leave,
.fade-enter {
  transition: opacity 0.5s;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.Fin {
  -webkit-animation: fadein 2.5s;

  animation: fadein 2.5s;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
