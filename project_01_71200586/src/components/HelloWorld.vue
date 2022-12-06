<template>
    <div class="bagian1">
      <h1>Daftar Menu</h1>
      <nav>
        <router-link to="/makanan"><h2>Makanan</h2></router-link>
        <router-link to="/minuman"><h2>Minuman</h2></router-link>
        <router-link to="/snack"><h2>Snack</h2></router-link>
        <router-link to="/checkout"><h2 id="check">Checkout</h2></router-link>
      </nav>
    </div>

    <div class="bagian2">
      <h1>Selamat Datang di Aplikasi MacDonal, Silakan Pesan Makanan Anda</h1>
    </div>
  <router-view/>
</template>

<style scoped>
.bagian1 {
  float:left;
  width: 250px;
  margin: 0;
  background-color: coral;
  height: 750px;
}

.bagian2 {
  float: right;
  width: 680px;
}

.bagian1 h1 {
  color: white;
  margin-left: 20px;
}

h2 {
  color: white;
  margin-left: 20px;
  font-size: 18px;
}

#check {
  color: black;
  text-decoration: none;
  text-align: center;
  text-decoration-line: none;
  margin-top: 500px;
  margin-left: 60px;
  margin-bottom: 150px;
  margin-right: 40px;
  background-color: yellow;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: -20px;
  border-style: none;
  border-radius: 2px;
}

.bagian2 h1{
  text-align: left;
  margin-left: -400px;
  margin-top: 300px;
}
</style>