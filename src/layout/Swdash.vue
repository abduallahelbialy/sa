<template>
   <div class="content-b my-5">
    <!-- Swiper -->
    <swiper
      :style="{
        '--swiper-navigation-color': '#fc40b9',
        '--swiper-pagination-color': '#fc40b9',
      }"
      :zoom="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="soldone in sildone" :key="soldone.id">
        <div class="two">
          <div class="card_prof bg-white">
            <div class="_img_">
              <div class="layer_card_img_prof"></div>
              <img src="../assets/NoPath - Copy (16).png" alt="" />
            </div>
            <div class="data_card mt-4">
              <div
                class="switch-data_card w-100 d-flex justify-content-between align-items-center"
              >
                <span>Lorem Lorem</span>
                <div class="sw">
                  <input type="checkbox" hidden="hidden" id="username1" />
                  <label class="switch" for="username1"></label>
                </div>
              </div>
              <div class="data_person">
                <div class="data_parent">
                  <div class="d-flex align-items-center">
                    <p>12</p>
                    <span class="ml-3">person</span>
                  </div>
                  <div class="text-center queues">
                    <p class="m-0 text-secondary">in tabor</p>
                  </div>
                </div>
              </div>
            </div>
            <button class="send_card text-white py-4">
              <i class="fas fa-plus"></i> add customer to tabor
            </button>
          </div>
          <div class="names">
            <div
              class="name my-2 d-flex justify-content-between align-items-center"
              v-for="na in names"
              :key="na.id"
            >
              <p>{{ na.phone }}</p>
              <p>{{ na.num }}</p>
            </div>
            <button class="view_all">
              <p class="m-0">view All</p>
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-for="soldtwo in sildtwo" :key="soldtwo.id">
        <div class="two">
          <div class="card_prof bg-white">
            <div class="_img_">
              <div class="layer_card_img_prof"></div>
              <img src="../assets/NoPath - Copy (16).png" alt="" />
            </div>
            <div class="data_card mt-4">
              <div
                class="switch-data_card w-100 d-flex justify-content-between align-items-center"
              >
                <span>Lorem Lorem</span>
                <div class="sw">
                  <input type="checkbox" hidden="hidden" id="username4" />
                  <label class="switch" for="username4"></label>
                </div>
              </div>
              <div class="data_person">
                <div class="data_parent">
                  <div class="d-flex align-items-center">
                    <p>12</p>
                    <span class="ml-3">person</span>
                  </div>
                  <div class="text-center queues">
                    <p class="m-0 text-secondary">in tabor</p>
                  </div>
                </div>
              </div>
              <button
                id="now_"
                class="text-dark text-decoration-none now d-flex justify-content-between align-items-center"
              >
                <p>0555</p>
                <span id="now_">Now</span>
              </button>
            </div>
            <button class="send_card text-white py-4">
              <i class="fas fa-plus"></i> add customer to tabor
            </button>
          </div>
          <div class="names">
            <div
              class="name my-2 d-flex justify-content-between align-items-center"
              v-for="na in names"
              :key="na.id"
            >
              <p>{{ na.phone }}</p>
              <p>{{ na.num }}</p>
            </div>

            <button class="view_all">
              <p class="m-0">view All</p>
              <i class="fas fa-chevron-down"></i>
            </button>
          </div></div
      ></swiper-slide>
    </swiper>

    <div class="swiper-button-next">
      <img src="../assets/Group 39244.png" alt="" />
    </div>
    <div class="swiper-button-prev">
      <img src="../assets/Group 39245.png" alt="" />
    </div>
    <div class="cards_profile d-flex justify-content-between"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import { Zoom, Navigation } from "swiper/modules";
export default {
name:"Swdash",
data(){
    return{
         sildone: [{ id: 1 }, { id: 2 }, { id: 3 }],
      sildtwo: [{ id: 1 }, { id: 2 }, { id: 3 }],
       names: [
        { id: 1, phone: "01028924906", num: "1" },
        { id: 2, phone: "01028924906", num: "2" },
        { id: 3, phone: "01028924906", num: "3" },
      ],
    }
},
components:{Swiper, SwiperSlide},
 setup() {
    return {
      modules: [Zoom, Navigation],
    };
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
header {
  border: none;
  padding: 15px 0;
}

.q_p {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 20px;
  left: 0;
  right: 0;
  z-index: 111111111111111111111111111111111111111111;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #fd0bb433, #605aff36);
}

.opa {
  opacity: 0;
}

.question_popup {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
}

#now_ {
  cursor: pointer;
}

#search_in {
  width: 140px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px !important;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

/* ما تاخدها عالcss */
.data_card {
  margin: 90px 0 20px !important;
  box-shadow: 0 0 10px #00000071;
  position: relative;
}

.check {
  width: 100%;
}

.now {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 20px;
  background: #05c5523d;
  border: 1px solid #05c552;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.now span {
  background: white;
  padding: 3px 5px;
  border-radius: 10px;
  font-size: 12px;
  color: black;
}

.now p {
  margin: 0;
}

.data_person .d-flex p {
  font-size: 55px;
  margin: 0;
}

.data_parent span {
  color: black !important;
}

.switch-data_card {
  position: relative;
  bottom: 30px;
}

.queues p {
  font-size: 20px;
}

.two {
  width: 100%;
}

/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  width: 11em;
  height: 3em;
  border-radius: 0.25em;
  overflow: hidden;
}

/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: -3px;
  right: 0;
  padding: 1em;
  background-color: #f8f8fa;
  border-left: 1px solid rgb(191, 191, 191);
  transition: 0.25s all ease;
  pointer-events: none;
}

/* ما تاخده من هان */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-wrapper {
  height: 749px !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  width: 300.333px !important;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  height: 791px !important;
}

.card_prof {
  width: 90%;
}

@media (max-width: 760px) {
  .swiper-button-next {
    right: 20px;
  }

  .swiper-button-prev {
    left: 20px;
  }
}

.swiper-button-next {
  position: absolute;
  top: 400px;
  right: -20px;
}

.swiper-button-prev {
  position: absolute;
  top: 400px;
  left: 10px;
}

.swiper-button-prev img {
  width: 40px;
}

.swiper-button-next img {
  width: 40px;
}

.now:hover {
  text-decoration: none;
}

/* dskvkds */
.container {
  overflow: hidden;
}
.search form {
  width: 100%;
}
.logo {
  position: relative;
}

.logo #door {
  position: absolute;
  right: -50px;
  top: 10px;
  font-size: 20px;
  color: #5f5aff;
}

.trans3 {
  display: none;
}

main {
  overflow: hidden;
}

@media (max-width: 390px) {
  .sel_ect {
    width: 100% !important;
  }
}

@media (min-width: 390px) and (max-width: 480px) {
  .swiper-slide {
    width: 364.333px !important;
  }

  .sel_ect {
    width: 100% !important;
  }

  .sell_ {
    width: 100% !important;
  }
}

.cp_ {
  display: none !important;
}

#sell_ {
  border: 1px solid gray;
  padding: 10px;
  width: 380px;
  border-radius: 7px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -o-border-radius: 7px;
  margin: 0 10px;
}

.list_popup__ {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 91111111111111111111;
  background-color: rgba(0, 0, 0, 0.301);
  display: flex;
}

.cardform_ {
  width: 70%;
  border-radius: 15px;
  background-color: white;
  overflow: auto;
  height: 83%;
}

.input_check:checked + label {
  background-color: #fd0bb4;
  content: "Selected";
}

.nice-style {
  border: 1px solid rgb(220, 220, 220);
  border-radius: 14px;
}
</style>
