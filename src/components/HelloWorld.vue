<template>
  <div class="main_wrapper">
   <div class="background_text">FOOD</div>
    <div class="navbar">
      <div>
        <img class="logo" src="../assets/efc_logo.svg"/>
      </div>
      <div class="rightnav">
          <a href="#" class="link">HOME</a>
          <a href="#" class="link">ABOUT US</a>
          <a href="#" class="link">SERVICES</a>
          <a href="#" class="link">DELIVERY</a>
          <a href="#" class="link">CONTACT US</a>
          <a href="#" class="link">
            <img class="cart" src="../assets/cart1.svg"/>
          </a>          
      </div>
    </div>
  <div class="content">
    <div>
      <button class="menu_btn"><img src="../assets/lines.svg"/></button>
    </div>
    <div class="left">
      <img  class="leaf" src="../assets/leaf.svg"/>
      <p class="yummy">YUMMY</p>
      <p class="lb">
      <span class="breakfast">BREAKFAST!</span>
      </p>
      <p class="offer">ORDER BREAKFAST THE EASY WAY YUMMY BREAKFAST (25% OFFER)</p>
      <button class="order_btn">
        <img src="../assets/cart1.svg"/> ORDER NOW
      </button>
    </div>
    <div class="yummy_food">       
      <img src="../assets/plate.svg"/>
    </div>
  </div> 
  <div>
  <a href="#"><img class="arrow" src="../assets/arrow.png"/></a>
  <div class="social_icons">
    <a href="#"><img src="../assets/facebook.svg"/></a>
    <a href="#"><img src="../assets/instagram.svg"/></a>
    <a href="#"><img src="../assets/twitter.svg"/></a>
  </div>
  </div>
  <p class="copy_right"> ©2019 ALL RIGHT RESERVED BY <b>ABDULLAH SAJOL</b></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
.main_wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.main_wrapper::after {
  content: url("../assets/triangle.svg");
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
.rightnav {
  margin-left: 800px;
}
.navbar {
  margin-top: 22px;
}
 a.link{
  text-decoration: none;
  margin: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  color: #2C3C27;
  cursor: pointer;
}
 a.link:hover{
    color: #918A4C;
}
.logo {
  float: left;
}
.background_text {
  position: absolute;
  top: -230px;
  left: -20px;
  font-size: 328px;
  letter-spacing: 0.02em;
  opacity: 0.05;
  font: bold;
  z-index: 999;
  color: #FEF6E7;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
.cart{
  position: absolute;
  right: 28px;
  border-radius: 50%;
  background: black;
  padding: 15px;
  z-index: 999;
}
.content { 
  display: grid;
  grid-template-columns: 1fr 3fr  3fr;
}
.leaf {
  margin: 80px 0px 0px 340px;
}
.yummy {
  font-size: 120px;
  margin-top: -25px;
  color: #FEF6E7;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.breakfast {
  font-size: 112px;
  color: #23331E;
}
.menu_btn {
  margin: 320px 0px 0px -70px;
  border: none;
  background: #FEF6E7;
}
.lb{
  margin-top: -160px;
}
.offer {
  margin-top: -25px;
  font-size: 15px;
  color: #263621;
  opacity: 0.75;
}
.order_btn {
  background: #00AA51;
  border-radius: 35px;
  color: #ffffff;
  margin-top: 40PX;
  padding: 15px 27px 15px 27px;
  font: bold;
  font-weight: 500;
  font-size: 16px;
}
button{
  cursor: pointer;
  outline: none;
}
.yummy_food img {
  position: relative;
  right: 360px;
}
.left {
  text-align: justify;
  margin-left: 130px;
}
.arrow {
  margin: -60px 0px 0px 45px;
}
.social_icons {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2em 2em 2em;
  z-index: 1;
  right: 30px;
  bottom: 190px;
}
.copy_right {
  position: absolute;
  font-size: 11px;
  font-style: normal;
  color: #918A4C;
  z-index: 1;
  right: 30px;
  bottom: 40px;
}
@media screen and (max-width: 1320px) {

}
@media screen and (max-width: 980px) {

}
@media screen and (max-width: 680px) {

}
</style>
