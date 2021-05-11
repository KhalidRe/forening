<!--eslint-disable-->
<template>
  <div id="Notification">
    <div id="bell"></div>
    <div id="hide">
      <p>
        På grund av risk för smittpsridning av coronavirsuet kommer OMKF att
        hålla utbildningar på distans.
      </p>
      <br />
      <p>Mer information snart på Facebook Gruppen.</p>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script>
export default {
  name: "Notification",
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style scoped>
#bell {
  width: 50px;
  height: 50px;
  background: url("~@/assets/Bell.png");
  background-repeat: no-repeat;
  background-size: contain;
}

#hide {
  position: absolute;
  z-index: 10;
  background: url("~@/assets/Notifbox.png");
  width: 300px;
  height: 350px;
  background-repeat: no-repeat;
  background-size: contain;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  color: black;
  font-size: 1.2em;
  font-weight: 500;
  left: -127px;
  top: 40px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

#bell:hover + #hide {
  visibility: visible;
  opacity: 1;
}
#hide > p {
  width: 250px;
  margin-top: 50px;
}
</style>
