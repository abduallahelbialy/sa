<template>
  <div class="pop_parent">
    <div class="container">
      <div class="row">
        <div
          style="height: 500px"
          class="loginCard bg-white col-md-10 p-0 col-lg-10 m-auto"
          v-if="show"
        >
          <div
            class="col-lg-12 womens_up d-flex justify-content-between align-item-center"
          >
            <div
              class="close text-left"
              style="position: relative; right: 50px; top: 20px"
            >
              <button class="c2">
                <i class="text-white fas fa-times text-dark" @click="toimg"></i>
              </button>
            </div>
            <div class="paragraph paragraph2 col-lg-6 mr-5">
              <h2 class="mb-5">WOMEN'S SALON</h2>
              <button class="buttons_join" style="color: #fd0bb5">
                Join tabor
              </button>
            </div>
            <div class="paragraphman paragraph2 col-lg-6 mr-5"></div>
          </div>
          <div
            class="col-lg-12 mens_down d-flex justify-content-between align-item-center"
          >
            <!-- <div class="image_ col-lg-5 mr-5"></div> -->
            <div class="paragraph col-lg-6 mr-5">
              <h2 class="mb-5">MEN'S SALON</h2>
              <button class="buttons_join" style="color: #5f5aff">
                Join tabor
              </button>
            </div>
            <div class="paragraphmana paragraph2 col-lg-6 mr-5"></div>
          </div>
        </div>
      </div>
      <button class="button_sec1" @click="toimg">Join tabor</button>
      <section class="sec1 col-lg-12 section-animation">
        <div class="layout_main_idea">
          <button class="main-btn wow bounceInDown" @click="toimg">
            <p>Join tabor</p>
            <img src="../assets/People.png" alt="" />
          </button>
        </div>
      </section>
      <section
        class="sec2 col-lg-12 d-flex justify-content-between align-items-center"
      >
        <div class="col-lg-6 left-sec2 wow bounceIn"></div>
        <div class="col-lg-5 right-sec2 wow bounceInRight">
          <!-- <img src="../assets/sahm.png" alt="" /> -->
          <h2>your time is gold</h2>
          <p style="color: #5f5aff; font-size: 24px; font-weight: bold">
            TABOR
          </p>
          <p>
            our platform enables your customers to be aware of the congestion
            levels and avoid wasting their time in waiting, as they can queue
            electronically through the tabor Management System before arriving
            at your location"
          </p>
          <p>Our team is the best to save your time</p>
          <button>Join tabor</button>
        </div>
      </section>
      <section class="sec3 col-lg-12" id="sec3">
        <div class="container">
          <div class="top-section text-center">
            <h3>which business we serve</h3>
            <p>
              Any business that involves customer reception is susceptible to
              long tabor
            </p>
          </div>
          <div class="cards-index d-flex justify-content-between">
            <div
              class="card-index wow fadeIn text-center"
              v-for="ser in serves"
              :key="ser.id"
            >
              <img :src="ser.img" alt="" />
              <h5>{{ ser.title }}</h5>
            </div>
          </div>
        </div>
      </section>
      <section class="sec4 col-lg-12">
        <div class="col-lg-5 left-sec4">
          <h4>Why us</h4>
          <div class="features">
            <div
              class="d-flex justify-content-left align-items-center featuer"
              v-for="arr in arros"
              :key="arr.id"
            >
              <img :src="arr.img" alt="" />
              <p class="wow fadeInLeft" data-wow-delay=".8s">
                {{ arr.title }}
              </p>
            </div>

            <!-- Other features omitted for brevity -->
          </div>
        </div>
        <div class="col-lg-7 right-sec4 wow fadeInRightBig"></div>
      </section>
      <!-- Sections 5 to 8 omitted for brevity -->
    <Twoinput/>
      <Form/>
      <section class="sec7 col-lg-12">
        <div class="top-section text-center">
          <h3>our clients</h3>
        </div>
        <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="sw in serves" :key="sw.id"
            ><div class="card_back wow slideInDown" >
              <div class="layer">
                <form action="">
                  <input type="hidden" value="1" name="status" />
                  <button type="submit" class="img_btn">
                    <img src="../assets/he.png" alt="" />
                  </button>
                </form>
                <img :src="sw.img" alt="" />
                <p >Lorem ipsum dolor sit amet.</p>
              </div>
            </div></swiper-slide
          >
         

          <!-- <div class="swiper-button-next">
            <img src="../assets/Group 39244.png" alt="" />
          </div>
          <div class="swiper-button-prev me-5">
            <img src="../assets/Group 39245.png" alt="" />
          </div> -->
        </swiper>
      </section>
     <Inputs/>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import Inputs from '../layout/Inputs.vue'
import Twoinput from '../layout/Twoinput.vue'
import Form from '../layout/Form.vue'
import one from "../assets/c2.png";
import c from "../assets/c1.png";
import two from "../assets/c3.png";
import three from "../assets/c4.png";
import four from "../assets/c5.png";
import five from "../assets/c6.png";
import six from "../assets/c7.png";
import sefen from "../assets/c8.png";
import ar from "../assets/Group 44504.png";
export default {
  name: "home",
  data() {
    return {
      show: false,
      serves: [
        { id: 1, title: "women's salons", img: one },
        { id: 2, title: " men's salons", img: two },
        { id: 3, title: " restaurants", img: three },
        { id: 4, title: " clinics", img: five },
        { id: 5, title: " spa", img: c },
        { id: 6, title: " customer service companies", img: six },
        { id: 7, title: " car service", img: four },
        { id: 8, title: " car service", img: sefen },
      ],
      arros: [
        { id: 1, title: "organizing customer reception", img: ar },
        { id: 2, title: "ease of use", img: ar },
        { id: 3, title: "online payment", img: ar },
        { id: 4, title: "approved system by the zakat authority", img: ar },
        { id: 5, title: "brilliant data about your customers", img: ar },
        { id: 6, title: "reports on employee performance", img: ar },
        { id: 7, title: "customers can evaluate the experience", img: ar },
        { id: 8, title: "without a subscription fee", img: ar },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Inputs,
    Twoinput,
    Form,
  },
  methods: {
    toimg() {
      this.show = !this.show;
    },
  },
  mounted() {
    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Handle other jQuery functionality
    $(".main-btn").click(() => {
      $(".pop_parent_").toggleClass("ac_tive");
    });

    $(".button_sec1").click(() => {
      $(".pop_parent_").toggleClass("ac_tive");
    });

    $(".right-sec2 button").click(() => {
      $(".pop_parent_").toggleClass("ac_tive");
    });

    $(".close").click(() => {
      $(".pop_parent_").toggleClass("ac_tive");
    });

    $(".other_choice").change(() => {
      console.log("changes");
      if ($(".other_choice").val() == "other") {
        $(".append_").append(`
            <div class="form-group">
              <label for="">category Name</label> <br>
              <input type="text" name="name" placeholder="category Name" id="input-index">
            </div>
          `);
        $(".hd").remove();
        $(".app").append(`
            <div class="form-group">
              <label for="">your mobile number</label> <br>
              <input type="number" name="category" placeholder="number" name="category" id="input-index" class="i_i i_i2">
            </div>
          `);
      }
    });

    $(".other_choice2").change(() => {
      console.log("changes2");
      if ($(".other_choice2").val() == "other") {
        $(".append_2").append(`
            <div class="form-group">
              <label for="">category Name</label> <br>
              <input type="text" name="name" placeholder="category Name" class="i_i">
            </div>
          `);

        $(".company").remove();
        $(".compadd").append(`
            <div class="form-group ">
              <label for="">company email</label> <br>
              <input type="email" name="category" placeholder="Modifier Name" name="category" class="i_i">
            </div>
          `);
      }
    });

    window.onscroll = () => {
      if (window.scrollY >= 590) {
        $(".button_sec1").css({
          bottom: "50px",
          right: "76px",
        });
      } else {
        $(".button_sec1").css({
          bottom: "2750px",
          right: "2950px",
        });
      }
    };

    $("label").click(function () {
      $(".tab").hide();
      $(this).next(".tab").fadeIn(500);
    });

    new WOW().init();
  },
};
</script>

<style scoped>
/* static */
.loginCard {
  background: linear-gradient(to right, #5f5aff, #fd0bb5);
  border-radius: 40px;
  color: white;
  width: 67%;
  max-height: 500px !important;
}

.mens_down {
  background-color: #5f5aff;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  padding: 10px 80px;
  height: 300px;
}
.paragraphman {
  background-image: url(../assets/womens.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 390px;
  width: 100%;
  height: 100%;
}
.paragraphmana {
  background-image: url(../assets/mens.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 390px;
  width: 100%;
  height: 100%;
}
.card_back {
  height: 350px;
  width: 92%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  position: relative;
  margin: 10px 0px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.card_back .layer p {
  position: absolute;
  bottom: 0;
  left: 40px;
  color: white;
}

.layout_main_idea {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  animation: scale 0.5s infinite ease-in;
  align-items: center;
  overflow: hidden;
  -webkit-animation: scale 0.5s infinite ease-in;
}
@media (max-width: 477px) {
  .card-index {
    width: 46% !important;
    flex-direction: column;
  }
  .left-sec5 {
    display: none !important;
  }
  .save-btn-6 {
    right: -90%;
  }
  .swiper-button-prev, .swiper-button-next{
    display: none !important;
  }
  .form-sec6 {
    padding: 0 !important;
  }
  .form-sec6 form div .form-group input {
    width: 261px !important;
  }
}
@media (max-width: 799px) {
  .left-sec5 {
    display: none !important;
  }
  .form-sec6 {
    padding: 0 !important;
  }
  .form-sec6 form div .form-group input {
    width: 261px !important;
  }
  .loginCard {
    width: 91%;
  }
  .save-btn-6 {
    right: -260px;
  }
  .s6 {
    height: fit-content;
    text-align: center;
    position: relative;
    top: -32px;
  }
  .card-index img {
    width: 95px;
    margin-bottom: 20px;
  }
  .card-index h5 {
    color: black;
    font-size: 16px;
  }
}
@media (max-width: 992px) {
  .card-index img {
    width: 95px;
    margin-bottom: 20px;
  }
  .card-index h5 {
    color: black;
    font-size: 16px;
  }
  .left-sec5 {
    display: none !important;
  }
  .form-sec6 {
    padding: 0 !important;
  }
  .form-sec6 form div .form-group input {
    width: 261px !important;
  }
  .save-btn-6 {
    right: -260px;
  }
  .s6 {
    height: fit-content;
    text-align: center;
    position: relative;
    top: -32px;
  }
}
@media (max-width: 1024px) {
  .card-index {
    width: 20%;
  }
  .left-sec5 {
    display: none !important;
  }
  .form-sec6 {
    padding: 0 !important;
  }
  .form-sec6 form div .form-group input {
    width: 261px !important;
  }
  .save-btn-6 {
    right: -260px;
  }
  .s6 {
    height: fit-content;
    text-align: center;
    position: relative;
    top: -32px;
  }
  .eds {
    flex-direction: column;
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }

  50% {
    transform: scale(0.99);
    -webkit-transform: scale(0.99);
    -moz-transform: scale(0.99);
    -ms-transform: scale(0.99);
    -o-transform: scale(0.99);
  }

  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }
}

.section-animation {
  animation: scale_ 0.5s infinite ease-in;
  -webkit-animation: scale_ 0.5s infinite ease-in;
}

@keyframes scale_ {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

main {
  overflow: hidden;
}

.i_i2 {
  width: 90% !important;
}

.wid {
  width: 380px !important;
}

@media (min-width: 768px) and (max-width: 994px) {
  .form-group label {
    font-size: 14px;
  }

  .wid {
    width: 248px !important;
  }
}

@media (min-width: 390px) and (max-width: 480px) {
  .wid {
    width: 265px !important;
  }
}

@media (min-width: 481px) and (max-width: 605px) {
  .wid {
    width: 237px !important;
  }
}

@media (max-width: 390px) {
  .i_i {
    width: 242px !important;
  }
}

@media (min-width: 994px) and (max-width: 1201px) {
  .wid {
    width: 248px !important;
  }
}

@media (min-width: 605px) and (max-width: 767px) {
  .wid {
    width: 220px !important;
  }
}
</style>
