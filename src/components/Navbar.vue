<!-- eslint-disable -->
<template>
  <div>
    <div id="nav">
      <router-link id="start" to="/">Start Sida</router-link>
      <router-link id="kontakt" to="/contact">Kontakta oss</router-link>
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
}
#nav a {
  font-weight: bold;
  color: #ffffff;
  margin-right: 1vw;
  padding: 10px;
  -webkit-transition: 1s;
  font-size: 18px;
}
#nav a:hover {
  box-shadow: 0px 0px 10px 5px #ccc;
  border-radius: 25px;
  text-decoration: none;
  font-size: 20px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#start {
  position: absolute;
  left: 40px;
  top: 100px;
  text-decoration: none;
}
#kontakt {
  right: 3%;
  position: absolute;
  text-decoration: none;
}
</style>
