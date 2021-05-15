<!-- eslint-disable -->
<template>
  <div id="slides">
    <div class="card">
      <div class="card_part card_part-one">
        <div class="picdesc"><h1>Körsång med våra stjärnor</h1></div>
      </div>

      <!-- Photo 2 -->
      <div class="card_part card_part-two">
        <div class="picdesc">
          <h1>Föreningens Fotbollslag</h1>
          <p class="mobtext">
            Med tränare Mustafa, sekriterare Abdelouahab Boussefres <br />
            på prisutdelningen
          </p>
        </div>
      </div>

      <!-- Photo 3 -->
      <div class="card_part card_part-three">
        <div class="picdesc">
          <h1>Ordförande: Abdou Elbany</h1>
          <h2>Utbildningsansvarig: Khaled Hasoumi</h2>
        </div>
      </div>

      <!-- Photo 4 -->
      <div class="card_part card_part-four">
        <div class="picdesc"><h1>Utbildning</h1></div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {};
</script>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

#slides {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
}
.picdesc {
  position: absolute;
  top: 60%;
  font-size: 0.8em;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.322);
}
@media only screen and (max-device-width: 548px) {
  .picdesc {
    position: absolute;
    top: 55%;
    font-size: 0.8em;
    text-align: left;
    background-color: rgba(255, 255, 255, 0);
  }
}
.mobtext {
  font-size: 18px;
}
.card {
  position: relative;

  width: 700px;
  height: 400px;
  overflow: hidden;

  border-radius: 5px;
}

/*Light blue cover above the slide show*/
.card::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 900;

  display: block;
  width: 100%;
  height: 100%;
}

.card_part {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  transform: translateX(700px);
  background-image: url(~@/assets/Körsång.jpg);

  animation: opaqTransition 28s cubic-bezier(0, 0, 0, 0.97) infinite;
  background-size: contain;
  background-repeat: no-repeat;
}

.card_part.card_part-two {
  z-index: 6;
  background-image: url(~@/assets/Fotbollslag.jpg);
  animation-delay: 7s;
}

.card_part.card_part-three {
  z-index: 5;
  background-image: url(~@/assets/Ordförande.jpg);
  animation-delay: 14s;
}

.card_part.card_part-four {
  z-index: 4;
  background-image: url(~@/assets/Utbildning.jpg);
  animation-delay: 21s;
}

@keyframes opaqTransition {
  3% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  28% {
    transform: translateX(-700px);
  }
  100% {
    transform: translateX(-700px);
  }
}
</style>
