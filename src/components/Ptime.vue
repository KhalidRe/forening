<template>
  <div id="Ptime">
    <div id="Cbg">
      <div id="container">
        <div class="Ton" v-if="this.ok > this.eshaT && this.ok < this.fajirT">
          <p>Fajr</p>
          <p>{{ this.salat.fajr }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Fajr</p>
          <p>{{ this.salat.fajr }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.fajirT && this.ok < this.duhrT">
          <p>Zuhr</p>
          <p>{{ this.salat.zuhr }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Zuhr</p>
          <p>{{ this.salat.zuhr }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.duhrT && this.ok < this.aserT">
          <p>Asr</p>
          <p>{{ this.salat.asr }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Asr</p>
          <p>{{ this.salat.asr }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.aserT && this.ok < this.maghrebT">
          <p>Maghreb</p>
          <p>{{ this.salat.maghrib }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Maghreb</p>
          <p>{{ this.salat.maghrib }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.maghrebT && this.ok < this.eshaT">
          <p>Isha</p>
          <p>{{ this.salat.isha }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Isha</p>
          <p>{{ this.salat.isha }}</p>
        </div>
      </div>
    </div>
    <div>
      {{ this.Month }}
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Ptime",
  data() {
    return {
      MonthDH: "",
      MonthF: "",
      MonthA: "",
      MonthM: "",
      MonthI: "",
      Monthday: "",
      Month: null,
      ok: parseInt(moment().format("HHmm ")),
      i: 0,
      fajirT: null,
      duhrT: null,
      aserT: null,
      maghrebT: null,
      eshaT: null,
      all: "",
      salat: "",
    };
  },
  computed: {},

  created() {
    fetch(
      "https://time.my-masjid.com/api/TimingsInfoScreen/GetMasjidTimings?GuidId=cd76b295-928c-454e-9ca8-b4146bea1d9b"
    )
      .then((response) => response.json())
      .then((result) => {
        for (this.i = 0; this.i <= 31; this.i++) {
          this.Month = result.model.salahTimings[this.s + this.i];
        }
        this.salat = result.model.salahTimings[this.s];
        this.fajirT = parseInt(
          result.model.salahTimings[this.s].fajr.replace(":", "")
        );
        this.duhrT = parseInt(
          result.model.salahTimings[this.s].zuhr.replace(":", "")
        );
        this.aserT = parseInt(
          result.model.salahTimings[this.s].asr.replace(":", "")
        );
        this.maghrebT = parseInt(
          result.model.salahTimings[this.s].maghrib.replace(":", "")
        );
        this.eshaT = parseInt(
          result.model.salahTimings[this.s].isha.replace(":", "")
        );
      });
  },
  methods: {
    f() {},
  },
  mounted() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff =
      now -
      start +
      (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    this.s = day;
  },
};
</script>
<style scoped>
#Ptime {
  position: relative;
}
.Ton {
  background: url("~@/assets/on.png");
  background-repeat: no-repeat;
  height: 8vw;
  width: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #423a3a;
  font-size: 22px;
  font-weight: 600;
  background-size: contain;
}
.Toff {
  background: url("~@/assets/off.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 8vw;
  width: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #423a3a;
  font-weight: 600;
  font-size: 20px;
}

#container {
  display: grid;
  grid-template-columns: 10vw 10vw 10vw 10vw 10vw;
  grid-column-gap: 1vw;
  border-radius: 1vw;
  justify-items: center;
}
#Cbg {
  -webkit-animation: fadein 3s;

  animation: fadein 3s;
  background: url("~@/assets/mosknbg.png");
  height: 150vh;
  background-position: center;
  background-position-y: -5vh;
  background-size: 100vw;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0%;
  padding: 0%;
  position: relative;
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
