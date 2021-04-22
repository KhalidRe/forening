<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Oskarshamns MKF</router-link>
      <router-link to="/about">Om oss</router-link>
      <router-link to="/Contact">Kontakta oss</router-link>
    </div>
    <router-view />
    <img id="logga" src="./assets/Mark.png" alt="" />
  </div>
</template>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
body {
  background-image: url("~@/assets/Mwall.png");
  background-repeat: no-repeat;
  background-position: 0vmax;
  background-size: cover;
}
#logga {
  width: 120px;
  position: absolute;
  left: 2%;
  top: 0%;
}
</style>
