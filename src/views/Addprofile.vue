<template>
  <Modals />
  <main>
    <div class="container">
      <div class="row">
        <section class="sec1-profile col-lg-11 m-auto">
          <div class="parent">
            <swiper  :navigation="{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }"
                     :modules="modules" class="mySwiper">
              <swiper-slide v-for="Slide in Slides" :key="Slide.id">
                <div class="layer_img_silde_swiper">
                  <h2>Abduallah Bialy</h2>
                  <div
                    class="location d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="../assets/svgexport-6 (17).png"
                      style="width: 20px; height: 20px"
                      alt=""
                    />
                    <p class="m-0 ml-2">Jeddah Street</p>
                  </div>
                </div>
                <img src="../assets/NoPath - Copy (18).png" alt="" />
              </swiper-slide>
            </swiper>
            <div
              class="d-flex justify-content-between"
              style="position: relative; bottom: 217px"
            >
              <div class="swiper-button-next">
                <img src="../assets/Group 39244.png" alt="" />
              </div>
              <div class="swiper-button-prev">
                <img src="../assets/Group 39245.png" alt="" />
              </div>
            </div>
            <div class="profile_img">
              <img src="../assets/WhatsApp Image 2023-11-21 at 10.32.29 AM.jpeg" alt="" />
            </div>
          </div>
        </section>
        <section class="sec2-profile">
          <div class="tabs mb-5">
            <input type="radio" name="tabs" id="tabone" checked="checked" />
            <label for="tabone" id="label" class="mb-2"
              >Al Shallal Recreational Park</label
            >
            <div class="tab my-4">
              <div class="container">
                <div
                  class="input_bedon_lazma d-flex justify-content-center col-lg-12 my-5"
                >
                  <button class="border-pink ml-5">
                    <i class="fas fa-plus"></i> add new customer to
                    the fastest tabor
                  </button>
                </div>
                <div class="cards_profile d-flex justify-content-between">
                  <div
                    class="card_prof"
                    v-for="profl in profiles"
                    :key="profl.id"
                  >
                    <div class="img__">
                      <div class="layer_card_img_prof"></div>
                      <img src="../assets/NoPath - Copy (16).png" alt="" />
                    </div>
                    <div class="data_card">
                      <h4 style="color: #cf3645" class="mb-4">
                        barber not available
                      </h4>
                      <p class="text-secondary">
                        Your reservation cannot be accepted because the barber
                        is not available
                      </p>
                    </div>
                    <button class="send_card text-white">
                      <p
                        class="m-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        notify me if the barber back to work
                      </p>
                    </button>
                  </div>
                  <div
                    class="card_prof"
                    v-for="wating in watings"
                    :key="wating.id"
                  >
                    <div class="img__">
                      <div class="layer_card_img_prof"></div>
                      <img src="../assets/NoPath - Copy (16).png" alt="" />
                    </div>
                    <div class="data_card">
                      <h4 style="color: #46ce37" class="mb-4">
                        barber is not available
                      </h4>
                      <h3>22</h3>
                      <p class="text-secondary" style="font-size: 14px">
                        waiting list
                      </p>
                    </div>
                    <button
                      class="send_card text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <p class="mb-2">Send an alert</p>
                      <p class="m-0" id="title_bottom_button">
                        You will be notifyed when your appointment comes up
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tabtwo" />
            <label for="tabtwo" id="label" class="mb-2"
              >Al Shallal Recreational Park</label
            >
            <div class="tab my-4">
              <div class="container">
                <div class="cards_profile d-flex justify-content-between">
                  <div
                    class="card_prof"
                    v-for="profl in profiles"
                    :key="profl.id"
                  >
                    <div class="img__">
                      <div class="layer_card_img_prof"></div>
                      <img src="../assets/NoPath - Copy (16).png" alt="" />
                    </div>
                    <div class="data_card">
                      <h4 style="color: #cf3645" class="mb-4">
                        barber not available
                      </h4>
                      <p class="text-secondary">
                        Your reservation cannot be accepted because the barber
                        is not available
                      </p>
                    </div>
                    <button class="send_card text-white">
                      <p
                        class="m-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        notify me if the barber back to work
                      </p>
                    </button>
                  </div>
                  <div
                    class="card_prof"
                    v-for="wating in watings"
                    :key="wating.id"
                  >
                    <div class="img__">
                      <div class="layer_card_img_prof"></div>
                      <img src="../assets/NoPath - Copy (16).png" alt="" />
                    </div>
                    <div class="data_card">
                      <h4 style="color: #46ce37" class="mb-4">
                        barber is not available
                      </h4>
                      <h3>22</h3>
                      <p class="text-secondary" style="font-size: 14px">
                        waiting list
                      </p>
                    </div>
                    <button class="send_card text-white" 
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      <p class="mb-2">Send an alert</p>
                      <p class="m-0" id="title_bottom_button">
                        You will be notifyed when your appointment comes up
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tabthree" />
            <label for="tabthree" id="label"
              >Al Shallal Recreational Park</label
            >
            <div class="tab my-4">
              <div class="container">
                <div class="cards_profile d-flex justify-content-between">
                  <div
                    class="card_prof"
                    v-for="profl in profiles"
                    :key="profl.id"
                  >
                    <div class="img__">
                      <div class="layer_card_img_prof"></div>
                      <img src="../assets/NoPath - Copy (16).png" alt="" />
                    </div>
                    <div class="data_card">
                      <h4 style="color: #cf3645" class="mb-4">
                        barber not available
                      </h4>
                      <p class="text-secondary">
                        Your reservation cannot be accepted because the barber
                        is not available
                      </p>
                    </div>
                    <button class="send_card text-white">
                      <p
                        class="m-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        notify me if the barber back to work
                      </p>
                    </button>
                  </div>
                  <div
                    class="card_prof"
                    v-for="wating in watings"
                    :key="wating.id"
                  >
                    <div class="img__">
                      <div class="layer_card_img_prof"></div>
                      <img src="../assets/NoPath - Copy (16).png" alt="" />
                    </div>
                    <div class="data_card">
                      <h4 style="color: #46ce37" class="mb-4">
                        barber is not available
                      </h4>
                      <h3>22</h3>
                      <p class="text-secondary" style="font-size: 14px">
                        waiting list
                      </p>
                    </div>
                    <button class="send_card text-white"  data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      <p class="mb-2">Send an alert</p>
                      <p class="m-0" id="title_bottom_button">
                        You will be notifyed when your appointment comes up
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tabfour" />
            <label for="tabfour" id="label">Al Shallal Recreational Park</label>
            <div class="tab my-4">
              <div class="container">
                <div class="cards_profile d-flex justify-content-between">
                  <div
                    class="card_prof"
                    v-for="profl in profiles"
                    :key="profl.id"
                  >
                    <div class="img__">
                      <div class="layer_card_img_prof"></div>
                      <img src="../assets/NoPath - Copy (16).png" alt="" />
                    </div>
                    <div class="data_card">
                      <h4 style="color: #cf3645" class="mb-4">
                        barber not available
                      </h4>
                      <p class="text-secondary">
                        Your reservation cannot be accepted because the barber
                        is not available
                      </p>
                    </div>
                    <button class="send_card text-white">
                      <p
                        class="m-0"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        notify me if the barber back to work
                      </p>
                    </button>
                  </div>
                  <div
                    class="card_prof"
                    v-for="wating in watings"
                    :key="wating.id"
                  >
                    <div class="img__">
                      <div class="layer_card_img_prof"></div>
                      <img src="../assets/NoPath - Copy (16).png" alt="" />
                    </div>
                    <div class="data_card">
                      <h4 style="color: #46ce37" class="mb-4">
                        barber is not available
                      </h4>
                      <h3>22</h3>
                      <p class="text-secondary" style="font-size: 14px">
                        waiting list
                      </p>
                    </div>
                    <button class="send_card text-white"  data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      <p class="mb-2">Send an alert</p>
                      <p class="m-0" id="title_bottom_button">
                        You will be notifyed when your appointment comes up
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="buttons_price d-flex justify-content-center align-item-center my-5 pt-5"
          >
            <button class="pink-white-btn mx-3">
              Complete the browsing process
            </button>
            <button
              class="sign_in d-flex justify-content-between align-items-center mx-3"
            >
              <span class="enter">Enter the fastest queue</span>
              <span class="price">2$</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import {
  hideListPopup,
  setupSwiper,
  updateNumtaboor,
  setupLabelClick,
  setupWOW,
} from "../components/jsvue/add";
import Modals from "../layout/Modals.vue";
$(document).ready(function () {
  hideListPopup();
  setupSwiper();
  updateNumtaboor();
  setupLabelClick();
  setupWOW();
});
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default {
  name: "Add",
  data() {
    return {
      hide: false,
            modules: [Navigation],

      cardmodal: [{ id: 1 }, { id: 2 }, { id: 3 }],
      profiles: [{ id: 1 }, { id: 2 }],
      watings: [{ id: 1 }, { id: 2 }],
      Slides:[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  },
  components: { Modals, Swiper, SwiperSlide },
  methods: {
    show() {
      this.hide = true;
    },
  },

  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.modal-footerr {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  justify-content: flex-start;
  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
  background-color: var(--bs-modal-footer-bg);
  border-bottom-right-radius: var(--bs-modal-inner-border-radius);
  border-bottom-left-radius: var(--bs-modal-inner-border-radius);
}
.modal-contentt {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: var(--bs-modal-bg);
  background-clip: padding-box;
  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
  border-radius: var(--bs-modal-border-radius);
  outline: 0;
}
.form-control {
  display: block;
  width: 82%;
  padding: 10px;
  margin: auto;
}
.modal-footer {
  border-top: none;
}
.modal-content {
  width: 70%;
  margin: auto;
}
@media (max-width: 477px) {
  .modal-contentr,
  .modal-contentrr {
    width: 349px !important;
  }
  .form-group label {
    color: black !important;
    font-size: 10px;
  }
  form .form-group[data-v-868f7181] {
    position: relative;
    width: fit-content;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
  }
  .select_input__[data-v-868f7181] {
    width: 100% !important;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 2px;
  }
  .modal-content[data-v-868f7181] {
    width: 87%;
    margin: auto;
  }
}
.modal-contentr {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 700px;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: var(--bs-modal-bg);
  background-clip: padding-box;
  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
  border-radius: var(--bs-modal-border-radius);
  outline: 0;
}
.modal-contentrr {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 700px;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: var(--bs-modal-bg);
  background-clip: padding-box;
  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
  border-radius: var(--bs-modal-border-radius);
  outline: 0;
}
.card-modal {
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 5px;
}
.card-modal input {
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 4px;
}
.modal-header {
  border-bottom: none;
}
.sign_in {
  padding: 10px 40px;
  background: linear-gradient(to left, #5f5aff, #fd0bb5);
  color: white;
  border: none;
  border-radius: 10px;
}

.links {
  height: fit-content;
}

.links a {
  margin: 0 10px;
  color: black;
  transition: 0.5s;
}

.links a:hover {
  color: #fd0bb5;
  text-decoration: none;
}

header {
  border-bottom: 1px solid rgb(223, 223, 223);
}

header .container {
  align-items: center;
  padding: 15px 0;
}

form {
  margin: 0;
  padding: 0 !important;
}

.input {
  padding: 15px 10px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 3px;
  width: 100% !important;
}

.active_tab {
  background: #fd0bb5;
  border: 1px solid #fd0bb5 !important;
  color: white !important;
  font-weight: 600;
}

.active_tab:hover {
  background: #fd0bb46c !important;
  border: 1px solid #fd0bb460 !important;
  color: white !important;
  font-weight: 600;
}

form .form-group {
  position: relative;
  width: fit-content;
  width: 90%;
}

form .form-group button {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fd0bb5;
  border: none;
  padding: 10px 20px;
  border-radius: 7px;
}

.buttons .tabs_ {
  width: 47%;
  text-align: center;
  padding: 15px 0;
  height: fit-content;
  border: 1px solid #5f5aff;
  color: #5f5aff;
  border-radius: 3px;
  transition: 0.5s;
}

.buttons .tabs_:hover {
  padding: 15px 0;
  text-decoration: none;
  height: fit-content;
  border: 1px solid #5f5aff;
  color: #5f5aff;
  background-color: #605aff4b;
}

/** * Tabs */
.tabpos {
  position: relative;
  top: 45px;
  left: 30px;
  margin: 0 5px;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.tabs label {
  height: fit-content;
}

.tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 1rem;
  background: #fff;
}

.tabs input[type="radio"] {
  display: none;
}

.tabs input[type="radio"]:checked + label {
  color: #fd0bb5;
  border-bottom: 1px solid #fd0bb5;
  font-weight: 600;
}

.tabs input[type="radio"]:checked + label + .tab {
  display: block;
  padding: 0;
}

.card_back {
  height: 300px;
  width: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  position: relative;
  margin: 10px 0px;
}

.card_back .layer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, #fd0bb5, transparent, transparent);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.card_back .layer p {
  position: absolute;
  bottom: 0;
  left: 52px;
  color: white;
}

.card_back .layer .img_btn {
  position: absolute;
  width: fit-content;
  padding: 0;
  border: none;
  background: transparent;
  top: 20px;
  right: 20px;
  color: white;
}

.card_back .layer .img_btn img {
  /* background-color: red; */
  position: relative;
  width: 22px;
}

.cards {
  flex-wrap: wrap;
}

.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1111;
}

.loading img {
  width: 200px;
  /* تعديل الحجم حسب الحاجة */
}

.cards {
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
  padding: 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.layer_img_silde_swiper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.678), transparent);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 110px;
  justify-content: end;
  color: white;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile_img {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 95px;
  z-index: 11;
}

.profile_img img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 7px;
  border: 1px solid #fd0bb5;
  box-shadow: 0 5px 10px rgb(177, 177, 177);
}

.swiper-button-next {
  position: absolute;
  right: -45px;
}

.swiper-button-next img {
  width: 40px;
}

.swiper-button-prev {
  position: absolute;
  left: -22px;
}

.swiper-button-prev img {
  width: 40px;
}

.tabs #label {
  left: 20px;
  font-size: 12px;
  padding: 0.8rem 1rem;
  width: 210px;
}

.tabs input[type="radio"]:checked + #label {
  background: var(--pink);
  color: white;
}

.form-group {
  position: relative;
  margin: 15px auto;
}

.form-group img {
  left: 29px;
  top: 10px;
  width: 14px;
}

main {
  overflow: hidden;
}

@media (min-width: 994px) and (max-width: 1201px) {
  .tabs #label {
    left: 0;
  }

  .send_card p:nth-child(2) {
    font-size: 12px;
  }
}

@media (min-width: 768px) and (max-width: 994px) {
  .tabs #label {
    left: 0;
    font-size: 10px;
    width: 164px;
    padding: 0.8rem 0.2rem !important;
  }

  .swiper-slide {
    width: 100% !important;
  }

  .card_prof {
    margin: 15px 0;
    width: 46% !important;
  }

  .cards_profile {
    flex-wrap: wrap;
  }
}

@media (min-width: 605px) and (max-width: 767px) {
  .tabs #label {
    left: 0;
    font-size: 10px;
    width: 124px;
    padding: 0.8rem 0.2rem !important;
    margin-right: 0.4rem;
  }
  .swiper-slide {
    width: 100% !important;
  }
  .card_prof {
    width: 46% !important;
    margin: 15px 0;
  }

  .cards_profile {
    flex-wrap: wrap;
  }
}

@media (min-width: 481px) and (max-width: 605px) {
  .tabs #label {
    left: 0;
    font-size: 10px;
    width: 35%;
    padding: 0.8rem 0.2rem !important;
    margin-right: 0.4rem;
  }
  .swiper-slide {
    width: 100% !important;
  }
  .profile_img img {
    width: 147px;
    height: 147px;
  }

  .swiper-button-next {
    position: absolute;
    right: -10px;
  }

  .swiper-button-prev {
    position: absolute;
    left: 10px;
  }

  .data_card h4 {
    font-size: 17px !important;
  }

  .data_card p {
    font-size: 14px !important;
  }

  .card_prof {
    width: 49% !important;
    margin: 15px 0;
  }

  .cards_profile {
    flex-wrap: wrap;
  }

  .send_card p:nth-child(2) {
    font-size: 10px;
  }
}

@media (min-width: 390px) and (max-width: 480px) {
  .tabs #label {
    left: 0;
    font-size: 10px;
    width: 110px;
    padding: 0.8rem 0.2rem !important;
    margin-right: 0.4rem;
  }

  .profile_img img {
    width: 147px;
    height: 147px;
  }

  .swiper-button-next {
    position: absolute;
    right: -10px;
  }

  .swiper-button-prev {
    position: absolute;
    left: 10px;
  }

  .data_card h4 {
    font-size: 30px !important;
    margin-bottom: 12px !important;
  }

  .data_card p {
    font-size: 15px !important;
  }

  .card_prof {
    width: 100% !important;
    margin: 15px 0;
  }

  .cards_profile {
    flex-wrap: wrap;
  }

  .send_card p:nth-child(1) {
    font-size: 25px;
  }

  .sign_in {
    padding: 10px 24px;
  }

  .send_card p:nth-child(2) {
    font-size: 10px;
  }
}

@media (max-width: 390px) {
  .tabs #label {
    left: 0;
    font-size: 10px;
    width: 90%;
    padding: 0.8rem 0.2rem !important;
    margin-right: 0.4rem;
  }

  .profile_img img {
    width: 147px;
    height: 147px;
  }

  .swiper-button-next {
    position: absolute;
    right: -10px;
  }

  .swiper-button-prev {
    position: absolute;
    left: 10px;
  }

  .data_card h4 {
    font-size: 15px !important;
    margin-bottom: 12px !important;
  }

  .data_card p {
    font-size: 11px !important;
  }

  .card_prof {
    width: 100% !important;
    margin: 15px 0;
  }

  .cards_profile {
    flex-wrap: wrap;
  }

  .send_card p:nth-child(1) {
    font-size: 17px;
  }

  .sign_in {
    padding: 10px 24px;
  }

  .send_card p:nth-child(2) {
    font-size: 10px;
  }

  .layer_img_silde_swiper h2 {
    position: relative;
    right: 40px;
    font-size: 25px;
  }

  .location {
    position: relative;
    right: 40px;
    font-size: 15px;
  }
}

.parent_popup .form {
  display: flex;
  flex-direction: column !important;
}

#file_ {
  width: 100px;
  height: 40px;
  border: 1px dashed var(--pink);
  display: flex;
  justify-content: center;
  align-items: center !important;
  font-size: 12px;
  position: relative;
  left: 70px;
}

#file_ input {
  /* opacity: 0; */
  display: none;
}

.imgggg {
  position: relative;
  left: 28px;
  /* bottom: 24px; */
}

.imgggg img:nth-child(1) {
  width: 40px;
}

.imgggg img:nth-child(2) {
  width: 40px;
}

.select_input__ {
  width: 51% !important;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 2px;
}

.form_payment {
  margin: 0 15px;
}
.success_popup {
  width: 100%;
  margin: auto;
}
.data_succ {
  width: 100%;
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
.btn_tsrf:hover {
  text-decoration: none;
}
</style>
