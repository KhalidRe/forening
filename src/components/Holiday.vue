<!-- eslint-disable -->
<template>
  <div id="Holiday">
    <div id="grid">
      <div class="conts">
        <div class="DivC">
          <p class="Date">11</p>
        </div>
        <div class="contText">
          <p class="text">Mars</p>
          <h3 class="text">Lailat Al Miraj</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">28</p></div>
        <div class="contText">
          <p class="text">Mars</p>
          <h3 class="text">Sahban</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">12</p></div>
        <div class="contText">
          <p class="text">april</p>
          <h3 class="text">Ramadan</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">9</p></div>
        <div class="contText">
          <p class="text">Maj</p>
          <h3 class="text">Laylat Al Qadr</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">13</p></div>
        <div class="contText">
          <p class="text">Maj</p>
          <h3 class="text">Eid Al Iftar</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">19</p></div>
        <div class="contText">
          <p class="text">July</p>
          <h3 class="text">Waqf Al Arafa - Hajj</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">22</p></div>
        <div class="contText">
          <p class="text">July</p>
          <h3 class="text">Eid Al Adha</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">9</p></div>
        <div class="contText">
          <p class="text">Augusti</p>
          <h3 class="text">Hijra - Islamisk Nyår</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">18</p></div>
        <div class="contText">
          <p class="text">Augusti</p>
          <h3 class="text">Day of Ashura / Muharram</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">19</p></div>
        <div class="contText">
          <p class="text">October</p>
          <h3 class="text">Profetens Födelsedag</h3>
          <p class="text">Läs Mer</p>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "Holiday",
};
</script>
<style scoped>
.text {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 1vh;
}
.contText {
  color: white;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;

  font-weight: 600;
}
.conts {
  display: flex;
  gap: 0vh;
  width: 400px;
}
.DivC {
  display: flex;
  width: 5vw;
  height: 10vh;
  background-color: white;
  border-radius: 10px;
  mix-blend-mode: screen;
  justify-items: center;
  justify-content: center;
}
.Date {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 5vh;
  font-weight: 600;
  margin-top: 1vh;
}
#grid {
  display: grid;
  grid-template-columns: 10vw 10vw;
  grid-row-gap: 0vh;
  grid-column-gap: 30vw;

  justify-items: center;
  margin-top: 2vh;
  margin-right: 10vw;
  align-items: center;
}
#Holiday {
  display: flex;
  justify-content: center;

  height: 70vh;
  color: black;
  margin-top: 100px;

  background-repeat: no-repeat;
}
@media only screen and (max-device-width: 750px) {
  .conts {
    width: 45vw;
  }
  .DivC {
    width: 10vw;
    height: 10vh;
  }
  #grid {
    display: grid;
    grid-template-columns: 30vw 0vw;
    justify-items: center;
    margin-top: 2vh;
    align-items: center;
    overflow: hidden;
  }
  .contText {
    font-weight: 600;
    font-size: 15px;
  }
  h4 {
    font-size: 20px;
    font-weight: 600;
  }
  .Date {
    font-size: 4vh;
    font-weight: 600;
    margin-top: 1vh;
  }
}
@media only screen and (max-device-width: 927px) {
  #grid {
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-row-gap: 0vh;
    grid-column-gap: 0vw;

    justify-items: center;
    margin-top: 2vh;
    margin-left: 15vw;
    align-items: center;
    overflow: hidden;
  }
}
@media only screen and (max-device-width: 440px) {
  .conts {
    width: 50vw;
  }
  .DivC {
    width: 10vw;
    height: 10vh;
  }
  #grid {
    display: grid;
    grid-template-columns: 40vw 50vw;
    grid-row-gap: 0vh;
    grid-column-gap: 0vw;

    justify-items: center;
    margin-top: 2vh;
    margin-left: 15vw;
    align-items: center;
    overflow: visible;
  }
  .contText {
    font-weight: 500;
    font-size: 4vw;
  }
  h4 {
    font-size: 4vw;
    font-weight: 600;
  }
  .Date {
    font-size: 4vh;
    font-weight: 600;
    margin-top: 1vh;
  }
}
</style>
