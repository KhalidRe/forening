<!-- eslint-disable -->
<template>
  <div id="Ptime">
    <div id="Cbg">
      <div id="container">
        <div class="Ton" v-if="this.ok < this.eshaT && this.ok < this.fajirT">
          <p>Fajir</p>
          <p>{{ this.salat.fajr }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Fajir</p>
          <p>{{ this.salat.fajr }}</p>
        </div>
        <div
          class="Ton"
          v-if="this.ok > this.fajirT && this.ok < this.shouruqT"
        >
          <p>Shorouq</p>
          <p>{{ this.salat.shouruq }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Shorouq</p>
          <p>{{ this.salat.shouruq }}</p>
        </div>
        <div class="Ton" v-if="this.ok > this.shouruqT && this.ok < this.duhrT">
          <p>Dhuhr</p>
          <p>{{ this.salat.zuhr }}</p>
        </div>
        <div class="Toff" v-else>
          <p>Dhuhr</p>
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
    <table id="HeadList">
      <tr class="tr1">
        <th>Månad</th>
        <th>Dag</th>
        <th>Fajir</th>
        <th>Shorouq</th>
        <th>Dhuhr</th>
        <th>Asr</th>
        <th>Maghreb</th>
        <th>Isha</th>
      </tr>
      <tr id="LowList" v-for="item in array" :key="item.day">
        <td>
          {{ item.month }}
        </td>
        <td>
          {{ item.day }}
        </td>
        <td>
          {{ item.fajr }}
        </td>
        <td>
          {{ item.shouruq }}
        </td>
        <td>
          {{ item.zuhr }}
        </td>
        <td>
          {{ item.asr }}
        </td>
        <td>
          {{ item.maghrib }}
        </td>
        <td>
          {{ item.isha }}
        </td>
      </tr>
    </table>
  </div>
</template>
<!-- eslint-disable -->
<script>
import moment from "moment";
export default {
  name: "Ptime",
  data() {
    return {
      times: [],
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
      shouruqT: null,
      duhrT: null,
      aserT: null,
      maghrebT: null,
      eshaT: null,
      all: "",
      salat: "",
      esha: "",
      array: [],
    };
  },
  computed: {},

  created() {
    fetch(
      "https://time.my-masjid.com/api/TimingsInfoScreen/GetMasjidTimings?GuidId=cd76b295-928c-454e-9ca8-b4146bea1d9b"
    )
      .then((response) => response.json())
      .then((result) => {
        this.times = result;
        for (this.i = 0; this.i <= 31; this.i++) {
          this.Month = result.model.salahTimings[this.s + this.i];
          this.array.push(result.model.salahTimings[this.s + this.i]);
        }

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
        this.salat = result.model.salahTimings[this.s];
        console.log(this.fajirT);
      });
    this.shorouqT = parseInt(
      result.model.salahTimings[this.s].shouruq.replace(":", "")
    );
    console.log(this.ok);
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
td {
  height: 40px;
  font-size: 1em;
  color: white;
  font-weight: 600;
  overflow: hidden;
  width: 100vw;
}
tr:nth-child(even) {
  background: rgb(7, 199, 224);
  overflow: hidden;
}
#HeadList {
  position: absolute;
  overflow: hidden;
  width: 100%;
  margin-top: -478px;
  -webkit-animation: fadein 1s;
  left: 0%;
  animation: fadein 1s;
  background-color: #17aec8;
}
.tr1 {
  background-color: #091c3f;
}

.Ton {
  background: url("~@/assets/On.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 170px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #423a3a;
  font-size: 20px;
  font-weight: 600;
  background-size: contain;
}
.Toff {
  background: url("~@/assets/off.png");

  background-repeat: no-repeat;
  background-size: contain;
  width: 170px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #423a3a;
  font-weight: 600;
  font-size: 20px;
}

#container {
  display: grid;
  grid-template-columns: 125px 125px 125px 125px 125px 125px;
  grid-column-gap: 50px;
  border-radius: 50px;
  justify-items: center;
}
#Cbg {
  background: url("~@/assets/mosknbg.png");
  height: 1250px;
  background-position: center;
  background-position-y: -50px;
  background-size: 1900px;

  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
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

@media only screen and (max-device-width: 381px) {
  #HeadList {
    font-size: 4vw;
  }
  .Ton {
    width: 50vw;
    height: 5vh;
  }
  .Toff {
    width: 50vw;
    height: 5vh;
  }
}
@media only screen and (max-device-width: 873px) {
  .Ton {
    background: url("~@/assets/Longon.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 300px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    color: #423a3a;
    font-size: 20px;
    font-weight: 600;
    gap: 10px;
  }
  .Toff {
    background: url("~@/assets/Longoff.png");

    background-repeat: no-repeat;
    background-size: contain;
    width: 300px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    color: #423a3a;
    font-weight: 600;
    font-size: 20px;
    gap: 10px;
  }
  #container {
    display: grid;
    grid-template-columns: 125px;
    grid-row-gap: 5px;
    justify-items: center;
  }
  #Cbg {
    height: 1200px;
    background-position: center;
    background-position-y: 0px;
    background-size: 1500px;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0%;
    padding: 0%;
    position: relative;
  }
  #HeadList {
    margin-top: -353px;
  }
  td {
    font-size: 1em;
    color: white;
    font-weight: 600;
  }
}
</style>
