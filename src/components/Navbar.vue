<template>
  <div>
    <div id="nav">
      <router-link id="start" to="/">Start Sida</router-link>
      <router-link id="kontakt" to="/contact">Kontakta oss</router-link>
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
  background: linear-gradient(#000000, #b1b1b100);
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
  left: 3%;
  top: 20%;
}
#kontakt {
  float: right;
}
</style>
