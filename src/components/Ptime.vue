<template>
  <div id="Ptime">
    <div id="Cbg">
      <div id="container">
        <div class="Ton" v-if="this.ok > this.eshaT">
          <p>Fajr</p>
          <p>{{ this.fajir }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Fajr</p>
          <p>{{ this.fajir }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.fajirT">
          <p>Zuhr</p>
          <p>{{ this.duhr }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Zuhr</p>
          <p>{{ this.duhr }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.duhrT">
          <p>Asr</p>
          <p>{{ this.aser }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Asr</p>
          <p>{{ this.aser }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.aserT">
          <p>maghreb</p>
          <p>{{ this.maghreb }}</p>
        </div>
        <div class="Toff" v-else>
          <p>maghreb</p>
          <p>{{ this.maghreb }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.maghrebT">
          <p>Isha</p>
          <p>{{ this.esha }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Isha</p>
          <p>{{ this.esha }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Ptime",
  data() {
    return {
      hover: false,
      day: null,
      month: null,
      fajir: "",
      duhr: "",
      aser: "",
      maghreb: "",
      esha: "",
      ok: parseInt(moment().format("HHmm ")),

      fajirT: null,
      duhrT: null,
      aserT: null,
      maghrebT: null,
      eshaT: null,
    };
  },
  computed: {},

  created() {
    fetch(
      "https://time.my-masjid.com/api/TimingsInfoScreen/GetMasjidTimings?GuidId=cd76b295-928c-454e-9ca8-b4146bea1d9b"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log();
        this.esha = result.model.salahTimings[this.s].isha;
        this.maghreb = result.model.salahTimings[this.s].maghrib;
        this.aser = result.model.salahTimings[this.s].asr;
        this.duhr = result.model.salahTimings[this.s].zuhr;
        this.fajir = result.model.salahTimings[this.s].fajr;
        this.fajirT = parseInt(
          result.model.salahTimings[this.s].fajr.replace(":", "")
        );
        this.aserT = parseInt(
          result.model.salahTimings[this.s].zuhr.replace(":", "")
        );
        this.maghrebT = parseInt(
          result.model.salahTimings[this.s].asr.replace(":", "")
        );
        this.duhrT = parseInt(
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
#Cbg {
}
.Ton {
  background: url("~@/assets/on.png");
  background-repeat: no-repeat;
  height: 160px;
  width: 180px;
}
.Toff {
  background: url("~@/assets/off.png");
  background-repeat: no-repeat;
  height: 160px;
  width: 180px;
}
#container {
  display: grid;
  grid-template-columns: 10vw 10vw 10vw 10vw 10vw;
  grid-column-gap: 1vw;

  border-radius: 1vw;
  position: absolute;
  left: 24%;
  top: 80%;
}
</style>
