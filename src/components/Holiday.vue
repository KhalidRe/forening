<template>
  <div id="Holiday">
    <div id="grid">
      <div class="conts">
        <div class="DivC">
          <p class="Date">11</p>
        </div>
        <div class="contText">
          <p class="text">Mars</p>
          <h4 class="text">Lailat Al Miraj</h4>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">28</p></div>
        <div class="contText">
          <p class="text">Mars</p>
          <h4 class="text">Lailat Al Bara'ah</h4>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">12</p></div>
        <div class="contText">
          <p class="text">april</p>
          <h4 class="text">Ramadan</h4>
          <p class="text">
            Läs Mer
          </p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">9</p></div>
        <div class="contText">
          <p class="text">Maj</p>
          <h4 class="text">Laylat Al Qadr</h4>
          <p class="text">
            Läs Mer
          </p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">13</p></div>
        <div class="contText">
          <p class="text">Maj</p>
          <h4 class="text">Eid Al Iftar</h4>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">19</p></div>
        <div class="contText">
          <p class="text">July</p>
          <h4 class="text">Waqf Al Arafa - Hajj</h4>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">22</p></div>
        <div class="contText">
          <p class="text">July</p>
          <h4 class="text">Eid Al Adha</h4>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">9</p></div>
        <div class="contText">
          <p class="text">Augusti</p>
          <h4 class="text">Hijra - Islamisk Nyår</h4>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">18</p></div>
        <div class="contText">
          <p class="text">Augusti</p>
          <h4 class="text">Day of Ashura / Muharram</h4>
          <p class="text">Läs Mer</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">19</p></div>
        <div class="contText">
          <p class="text">October</p>
          <h4 class="text">Profetens Födelsedag</h4>
          <p class="text">Läs Mer</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Holiday",
};
</script>
<style scoped>
.text {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 5px;
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
  width: 24vw;
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
  grid-template-columns: 125px 125px;
  grid-row-gap: 0vh;
  grid-column-gap: 70vh;

  justify-items: center;
  margin-top: 2vh;
  margin-right: 10vw;
}
#Holiday {
  display: flex;
  justify-content: center;
  width: 99vw;
  height: 70vh;
  color: black;
  margin-top: 100px;

  background-repeat: no-repeat;
}
</style>
