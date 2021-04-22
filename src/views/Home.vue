<template>
  <div>
    <h1 id="Header"><b>Välkomna</b></h1>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#Line {
  background-color: green;
  width: 100px;
  height: 5px;
  position: absolute;
  margin-top: 3vh;
  margin-left: 30vw;
}
#Header {
  margin-top: 18.5vh;
  margin-right: 17vw;
}
@media only screen and (max-device-width: 631px) {
  #line {
  }
  #Header {
  }
  body {
  }
}
</style>
