<template>
  <div id="Ptime">
    <div id="container">
      <div class="Toff" v-if="date < fajr">
        <p>Fajr</p>
        <p>{{ this.fajir }}</p>
      </div>
      <div class="Ton" v-else>
        <p>Fajr</p>
        <p>{{ this.fajir }}</p>
      </div>
      <div>
        <p>Zuhr</p>
        <p>{{ this.duhr }}</p>
      </div>
      <div>
        <p>Asr</p>
        <p>{{ this.aser }}</p>
      </div>
      <div>
        <p>maghreb</p>
        <p>{{ this.maghreb }}</p>
      </div>
      <div>
        <p>Isha</p>
        <p>{{ this.esha }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ptime",
  data() {
    return {
      Cdate: "",
      hover: false,
      day: null,
      month: null,
      fajir: "",
      duhr: "",
      aser: "",
      maghreb: "",
      esha: "",
      ok: "",
    };
  },

  created() {
    fetch(
      "https://time.my-masjid.com/api/TimingsInfoScreen/GetMasjidTimings?GuidId=cd76b295-928c-454e-9ca8-b4146bea1d9b"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.model.salahTimings[this.s].fajr.replace(":", ""));
        this.esha = result.model.salahTimings[this.s].isha;
        this.maghreb = result.model.salahTimings[this.s].maghrib;
        this.aser = result.model.salahTimings[this.s].asr;
        this.duhr = result.model.salahTimings[this.s].zuhr;
        this.fajir = result.model.salahTimings[this.s].fajr;
        this.fajirT = result.model.salahTimings[this.s].fajr.replace(":", "");
        this.aserT = result.model.salahTimings[this.s].zuhr.replace(":", "");
        this.maghrebT = result.model.salahTimings[this.s].asr.replace(":", "");
        this.duhrT = result.model.salahTimings[this.s].maghrib.replace(":", "");
        this.eshaT = result.model.salahTimings[this.s].isha.replace(":", "");
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
    let CurrentDate = now.getHours() + "" + now.getMinutes();
    let intDate = parseInt(CurrentDate);
    console.log(intDate);
    this.Cdate = CurrentDate;
  },
};
</script>
<style scoped>
.Ton {
  background: url("~@/assets/off.png");
}
.Toff {
  background: url("~@/assets/on.png");
}
#container {
  display: grid;
  grid-template-columns: 10vw 10vw 10vw 10vw 10vw;
  grid-column-gap: 0vw;
  background-color: #6d96bb;
  width: 50vw;
  border-radius: 1vw;
}
</style>
