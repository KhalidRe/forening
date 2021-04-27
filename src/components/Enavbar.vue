<template>
  <div>
    <div id="nav">
      <router-link id="start" to="/forelasning">Föreläsningar</router-link>
      <router-link id="Evenemang" to="/event">Evenemang</router-link>
      <router-link id="Highlights" to="/highlight">Höjdpunkter</router-link>
      <router-link id="Btider" to="/salat">Bönetider</router-link>
    </div>
  </div>
</template>
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
}
#nav a:hover {
  box-shadow: 0px 0px 10px 5px #ccc;
  border-radius: 25px;
  text-decoration: none;
}
#nav a.router-link-exact-active {
}
</style>
