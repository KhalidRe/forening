<!-- eslint-disable -->
<template>
  <div class="wrapper">
    <div class="slideshows">
      <div class="slideshow slideshow--hero">
        <div class="slides">
          <div class="slide slide1">
            <div class="desc">
              <h1>
                Körsång <br />
                Med våra stjärnor
              </h1>
            </div>
          </div>
          <div class="slide slide2">
            <div class="desc">
              <h1>Föreningens Fotbollslag</h1>
              <p>
                Med tränare Mustafa, sekriterare Abdelouahab Boussefres på
                prisutdelningen
              </p>
            </div>
          </div>
          <div class="slide slide3">
            <div class="desc">
              <h1></h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="slideshow slideshow--contrast slideshow--contrast--before">
        <div class="slides">
          <div class="slide slide1"></div>
          <div class="slide slide2"></div>
          <div class="slide slide3"></div>
        </div>
      </div>
      <div class="slideshow slideshow--contrast slideshow--contrast--after">
        <div class="slides">
          <div class="slide slide1"></div>
          <div class="slide slide2"></div>
          <div class="slide slide3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "Slides",
};
</script>
<style lang="scss" scoped>
@media only screen and (max-device-width: 600px) {
  .desc {
    position: absolute;
    z-index: 999;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 15%;
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.wrapper {
  position: relative;
  height: 100vh;
  width: 99vw;
  overflow: hidden;
  margin-left: -1vh;
}

.slideshow {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);

  &--hero {
    z-index: 3;
    left: 0;
    top: 50%;
    // width: 100%;
    height: 85%;
    transform: translateY(-50%) skewY(-10deg);
    transform-origin: center;
    overflow: hidden;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

    .slides {
      position: absolute;
      left: 0;
      top: -10%;
      width: 100vw;
      height: 100vh;
      animation: 11s slideshow-hero-mobile -3s infinite;
    }

    .slide1 {
      background-image: url(~@/assets/Körsång.jpg);
      animation: 20s slides-set-1 -0.1s infinite;
    }
    .slide2 {
      background-image: url(~@/assets/Fotbollslag.jpg);
      animation: 20s slides-set-2 -0.1s infinite;
      background-size: contain;
    }
    .slide3 {
      background-image: url(~@/assets/Ordförande.jpg);
      animation: 20s slides-set-3 -0.1s infinite;
      background-size: contain;
    }

    @media (min-width: 600px) {
      left: 50%;
      top: 0;
      width: 67%;
      height: 100%;
      transform: translateX(-50%) skewX(-10deg);

      .slides {
        top: 0;
        left: -25%;
        height: 100%;
        animation: 11s slideshow-hero -3s infinite;
      }
    }
  }

  &--contrast {
    z-index: 1;
    width: 100%;
    height: 50%;
    transform: none;

    .slide {
      // filter: blur(3px);
    }

    &--before {
      left: 0;

      .slides {
        width: 100vw;
      }
    }

    &--after {
      z-index: 2;
      left: auto;
      right: 0;

      .slides {
        width: 100vw;
        left: auto;
        right: 0;
      }
    }

    .slides {
      animation: 14s slideshow-contrast -5s infinite;
    }

    .slide1 {
      background-image: linear-gradient(
          to bottom,
          rgba(200, 200, 75, 0.25) 0,
          rgba(200, 75, 75, 0.5) 100%
        ),
        url(~@/assets/Körsång.jpg);
      // background-image: url(../img/slideshow/hero-1.jpg);
      animation: 20s slides-set-1 -0.2s infinite;
    }
    .slide2 {
      background-image: linear-gradient(
          to bottom,
          rgba(200, 200, 75, 0.25) 0,
          rgba(200, 75, 75, 0.5) 100%
        ),
        url(~@/assets/Fotbollslag.jpg);
      // background-image: url(../img/slideshow/hero-2.jpg);
      animation: 20s slides-set-2 -0.2s infinite;
    }
    .slide3 {
      background-image: linear-gradient(
          to bottom,
          rgba(200, 200, 75, 0.25) 0,
          rgba(200, 75, 75, 0.5) 100%
        ),
        url(~@/assets/Ordförande.jpg);
      // background-image: url(../img/slideshow/hero-3.jpg);
      animation: 20s slides-set-3 -0.2s infinite;
    }

    &--after {
      top: auto;
      bottom: 0;

      .slides {
        animation: 13s slideshow-contrast -13s infinite;
      }
      .slide {
        background-position: right;
      }
      .slide1 {
        animation: 20s slides-set-1 infinite;
      }
      .slide2 {
        animation: 20s slides-set-2 infinite;
      }
      .slide3 {
        animation: 20s slides-set-3 infinite;
      }
    }

    @media (min-width: 600px) {
      width: 50%;
      height: 100%;

      &--after {
        top: 0;
        bottom: auto;

        .slides {
          width: 50vw;
        }
      }
    }
  }
}

.slides,
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@keyframes slideshow-hero-mobile {
  0% {
    transform: scale(1) skewY(10deg);
  }
  50% {
    transform: scale(1.05) skewY(10deg);
  }
  100% {
    transform: scale(1) skewY(10deg);
  }
}

@keyframes slideshow-hero {
  0% {
    transform: scale(1) skewX(10deg);
  }
  50% {
    transform: scale(1.05) skewX(10deg);
  }
  100% {
    transform: scale(1) skewX(10deg);
  }
}

@keyframes slideshow-contrast {
  0% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

@keyframes slides-set-1 {
  0% {
    opacity: 1;
    // transform: translateY(0);
    transform: scale(1);
  }
  31% {
    opacity: 1;
    // transform: translateY(0);
    transform: scale(1);
  }
  34% {
    opacity: 0;
    // transform: translateY(100px);
    transform: scale(1.05);
  }
  97% {
    opacity: 0;
    // transform: translateY(-100px);
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    // transform: translateY(0);
    transform: scale(1);
  }
}
@keyframes slides-set-2 {
  0% {
    opacity: 0;
    // transform: translateY(-100px);
    transform: scale(1.05);
  }
  31% {
    opacity: 0;
    // transform: translateY(-100px);
    transform: scale(1.05);
  }
  34% {
    opacity: 1;
    // transform: translateY(0);
    transform: scale(1);
  }
  64% {
    opacity: 1;
    // transform: translateY(0);
    transform: scale(1);
  }
  67% {
    opacity: 0;
    // transform: translateY(100px);
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
    // transform: translateY(100px);
    transform: scale(1.05);
  }
}
@keyframes slides-set-3 {
  0% {
    opacity: 0;
    // transform: translateY(-100px);
    transform: scale(1.05);
  }
  64% {
    opacity: 0;
    // transform: translateY(-100px);
    transform: scale(1.05);
  }
  67% {
    opacity: 1;
    // transform: translateY(0);
    transform: scale(1);
  }
  97% {
    opacity: 1;
    // transform: translateY(0);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    // transform: translateY(100px);
    transform: scale(1.05);
  }
}
</style>
