<!--eslint-disable-->
<template>
  <div>
    <div id="nav">
      <router-link id="start" to="/forelasning">Föreläsningar</router-link>
      <router-link id="Evenemang" to="/event">Händelser</router-link>
      <router-link id="Highlights" to="/highlight">Högtider</router-link>
      <router-link id="Btider" to="/salat">Bönetider</router-link>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#nav {
  padding: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#nav a {
  color: #000000;
  margin-right: 2vw;
  padding: 10px;
  background-color: #d8d9da;
  border-radius: 5px;
  font-weight: 550;
  -webkit-transition: 1s;
  text-decoration: none;
}
#nav a:hover {
  box-shadow: 0px 0px 10px 5px #ccc;
  border-radius: 25px;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
@media only screen and (max-device-width: 850px) {
  #nav {
    display: none;
  }
}
</style>
