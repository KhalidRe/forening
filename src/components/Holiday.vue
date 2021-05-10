<template>
  <div id="Holiday">
    <div id="grid">
      <div class="conts">
        <div class="DivC">
          <p class="Date">11</p>
        </div>
        <div class="contText">
          <h4>Maj</h4>
          <p>Lailat Al Miraj</p>
          <p>Firar profeten Muhammeds uppstigning till himlen.</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">28</p></div>
        <div class="contText">
          <h4>Mars</h4>
          <p>Lailat Al Bara'ah</p>
          <p>info</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">12</p></div>
        <div class="contText">
          <h4>april</h4>
          <p>Ramadan</p>
          <p>Info</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">9</p></div>
        <div class="contText">
          <h4>Maj</h4>
          <p>Laylat Al Qadr</p>
          <p>Info</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">13</p></div>
        <div class="contText">
          <h4>Maj</h4>
          <p>Eid Al Iftar</p>
          <p>Info</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">19</p></div>
        <div class="contText">
          <h4>July</h4>
          <p>Waqf Al Arafa - Hajj</p>
          <p>info</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">22</p></div>
        <div class="contText">
          <h4>July</h4>
          <p>Eid Al Adha</p>
          <p>Info</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">9</p></div>
        <div class="contText">
          <h4>Augusti</h4>
          <p>Hijra - Islamisk Nyår</p>
          <p>Info</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">18</p></div>
        <div class="contText">
          <h4>Augusti</h4>
          <p>Day of Ashura / Muharram</p>
          <p>Info</p>
        </div>
      </div>
      <div class="conts">
        <div class="DivC"><p class="Date">19</p></div>
        <div class="contText">
          <h4>October</h4>
          <p>Profetens Födelsedag</p>
          <p>Info</p>
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
.contText {
  color: white;
  text-align: left;
}
.conts {
  display: flex;
  gap: 1vh;
  width: 30vw;
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
  grid-column-gap: 50vh;

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
