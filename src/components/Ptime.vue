<template>
  <div>
    <div id="Ptime">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: {
    
  },
  data() {
    return {
      day: null,
      month: null,
      fajir: "",
      duhr: "",
      aser: "",
      maghreb: "",
      esha: "",
      s: null,
    };
  },
  created() {
    fetch(
      "https://time.my-masjid.com/api/TimingsInfoScreen/GetMasjidTimings?GuidId=cd76b295-928c-454e-9ca8-b4146bea1d9b"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.model.salahTimings[this.s].fajr);
        console.log(result.model.salahTimings[this.s].zuhr);
        console.log(result.model.salahTimings[this.s].asr);
        console.log(result.model.salahTimings[this.s].maghrib);
        console.log(result.model.salahTimings[this.s].isha);
        this.esha = result.model.salahTimings[this.s].isha;
        this.maghreb = result.model.salahTimings[this.s].maghrib;
        this.aser = result.model.salahTimings[this.s].asr;
        this.duhr = result.model.salahTimings[this.s].zuhr;
        this.fajir = result.model.salahTimings[this.s].fajr;
      });
  },
  methods: {},
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
<style></style>
