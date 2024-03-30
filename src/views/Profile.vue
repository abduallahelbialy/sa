<template>
  <main>
    <div class="top-section-img">
      <div class="img_prof">
        <span><i class="fas fa-camera" @click="uploadImage"></i></span>
        <img src="../assets/Iconly-Light-outline-Camera.png" alt="" />
      </div>
    </div>
    <section class="sec1-tabs">
      <div class="container">
        <ul class="tabs ">
          <li class="mb-3" id="label"  @click="activeTap = '1'"
              :class="{ active: activeTap === '1' }" >my information</li>
          <li class="mb-3" id="label"  @click="activeTap = '2'"
              :class="{ active: activeTap === '2' }" >my current tabor</li>
          <li class="mb-3" id="label"  @click="activeTap = '3'"
              :class="{ active: activeTap === '3' }" >previous tabor</li>
          <li class="mb-3" id="label"  @click="activeTap = '4'"
              :class="{ active: activeTap === '4' }">favorite list</li>
        </ul>
        <div class="content">
          <div class="onen active"  v-if="activeTap === '1'" >
            <div class="tab my-4">
              <div class="container">
                <form action="" method="">
                  <div class="d-flex w-100 kha_">
                    <div class="form-group">
                      <label for="">your Name</label><br />
                      <input class="inpo" type="text" name="" id="" required />
                    </div>
                    <div class="form-group">
                      <label for="">Email</label><br />
                      <input class="inpo" type="text" name="" id="" required />
                    </div>
                  </div>
                  <div class="d-flex w-100 kha_">
                    <div class="form-group">
                      <label for="">Mobile phone</label><br />
                      <div class="d-flex zeft">
                        <span class="ml-2 mr-1">+966</span>
                        <input class="inpo" type="number" name="" id="low" required />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">country</label><br />
                      <select name="" id="khara" class="khara_" >
                        <option value="">palestine</option>
                        <option value="">eygpt</option>
                        <option value="">usa</option>
                      </select>
                    </div>
                  </div>
                  <div class="d-flex w-100 kha_">
                    <div class="form-group">
                      <label for="">date of birth</label><br />
                      <input type="date" name="" id="date" class="jj_data"  />
                    </div>
                    <div class="form-group">
                      <label for="">region city</label><br />
                      <select name="" id="khara" class="khara_" >
                        <option value="">gaza</option>
                        <option value="">mansoura</option>
                        <option value="">quds</option>
                        <option value="">zeft</option>
                      </select>
                    </div>
                  </div>
                  <div class="switch-button my-5 ml-2">
                    <input class="switch-button-checkbox" type="checkbox" />

                    <label class="switch-button-label" for=""
                      ><span class="switch-button-label-span">MALE</span></label
                    >
                  </div>
                  <div class="save_btn">
                    <button type="submit">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="two"  v-if="activeTap === '2'">
            <div class="tab my-4">
              <div class="container">
                <div
                  class="col-lg-12 d-flex justify-content-center align-items-center"
                >
                  <div
                    class="col-lg-12 d-flex justify-content-center align-items-start cards____"
                  >
                    <div class="card_prof bg-white col-lg-6" id="card_proff">
                      <div class="_img_">
                        <div class="layer_card_img_prof"></div>
                        <img src="../assets/NoPath - Copy (16).png" alt="" />
                      </div>
                      <div class="data_card mt-4">
                        <div
                          class="switch-data_card w-100 d-flex justify-content-between align-items-center"
                        >
                          <!-- <span>Lorem Lorem</span> -->
                        </div>
                        <div class="data_person">
                          <div class="data_parent">
                            <div class="">
                              <h4>Name Salon</h4>
                              <p class="text-secondary" style="font-size: 12px">
                                Ahmed Mohsen Beu Beu
                              </p>
                              <p class="text-secondary" style="font-size: 12px">
                                <a href="" class="text-dark mr-2"
                                  ><i class="fas fa-map-marker-alt"></i></a
                                >Gaza
                              </p>
                            </div>
                            <div class="text-center queues">
                              <p style="font-size: 19px; font-weight: bold">
                                <span class="font-weight-bold"
                                  >your turn in tabor is :</span
                                >28
                              </p>
                              <p>
                                <span
                                  class="text-secondary"
                                  style="font-size: 14px"
                                  >price :</span
                                ><span style="font-size: 14px">128</span>
                              </p>
                              <div class="d-flex justify-content-center">
                                <button
                                  class="btn mx-2"
                                  style="
                                    color: white;
                                    font-size: 12px;
                                    background: var(--pink);
                                  "
                                >
                                  Cancel
                                </button>
                                <button
                                  class="btn mx-2"
                                  style="
                                    color: white;
                                    font-size: 12px;
                                    background: var(--blue);
                                  "
                                >
                                  Go Back
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="three"  v-if="activeTap === '3'">
            <div class="tab my-4">
              <div class="container">
                <div class="col-lg-12 previous-reservations">
                  <form action="" class="w-100">
                    <div
                      class="top-flex d-flex justify-content-between align-items-center"
                    >
                      <p>previous reservations</p>
                      <p>paid amount</p>
                    </div>
                    <div class="cards_previous">
                      <div
                        class="card_p d-flex justify-content-between align-items-center"
                        v-for="previou in previous"
                        :key="previou.id"
                      >
                        <div
                          class="photo_title d-flex align-items-center justify-content-between"
                        >
                          <img :src="previou.img" alt="" />
                          <div class="titles">
                            <p class="mb-1">{{ previou.date }}</p>
                          </div>
                          <div class="titles">
                            <p class="mb-1">{{ previou.title }}</p>
                            <p style="font-size: 12px; margin-left: 10px">
                              {{ previou.description }}
                            </p>
                          </div>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center imgcost"
                        >
                          <h5 class="text-secondary">{{ previou.pay }}</h5>
                          <div class="dowload-img mt-4">
                            <label
                              for="fileInput"
                              class="custom-file-upload"
                              v-if="!imageUrl && !isLoading"
                            >
                              <i
                                class="fas fa-camera"
                                @click="handleFileUpload"
                              ></i>
                            </label>
                            <img
                              v-if="imageUrl"
                              :src="imageUrl"
                              alt="Selected Image"
                              class="img-roud"
                            />
                            <div v-if="isLoading">جاري التحميل...</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="four"  v-if="activeTap === '4'">
            <div class="tab my-4">
              <div class="container">
                <div class="swiper mySwiper">
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
                    <swiper-slide v-for="sild in silders" :key="sild.id">
                      <div class="swiper-zoom-container">
                        <div class="card_back wow slideInDown">
                          <div class="layer">
                            <form action="">
                              <input type="hidden" value="1" name="status" />
                              <button type="submit" class="img_btn" >
                                <img src="../assets/he.png" alt="" />
                              </button>
                            </form>
                            <div class=" position-relative img-sild">

                            <img src="../assets/NoPath.png" alt="" class=" img-fluid">
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
                <div class="swiper-button-next" id="ne">
                  <img src="../assets/Group 39244.png" alt="" />
                </div>
                <div class="swiper-button-prev" id="ln">
                  <img src="../assets/Group 39245.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {
  setupSwitchButton,
  setupListClick,
  setupWOW,
} from "../components/jsvue/profile";
$(document).ready(function () {
  setupSwitchButton();
  setupListClick();

  setupWOW();
});
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/zoom";
import slide from "../assets/NoPath.png";

import imgpr from "../assets/../assets/NoPath.png";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper/modules";
import { watch } from "vue";
export default {
  name: "profile",
  data() {
    return {
activeTap: "1",
      imageUrl: null,
      isLoading: false,
            currentPath: this.$route.path, //   

      silders: [
        { id: 1, title: "Lorem ipsum dolor sit amet.", img: slide },
        { id: 2, title: "Lorem ipsum dolor sit amet", img: slide },
        { id: 3, title: "Lorem ipsum dolor sit amet", img: slide },
        { id: 4, title: "Lorem ipsum dolor sit amet", img: slide },
        { id: 5, title: "Lorem ipsum dolor sit amet", img: slide },
        { id: 6, title: "Lorem ipsum dolor sit amet", img: slide },
        { id: 7, title: "Lorem ipsum dolor sit amet", img: slide },
        { id: 8, title: "Lorem ipsum dolor sit amet", img: slide },
        { id: 9, title: "Lorem ipsum dolor sit amet", img: slide },
      ],

      previous: [
        {
          id: 1,
          img: imgpr,
          title: "Lorem Lorem Lorem",
          date: "28/3/2024",
          description: "Lorem ipsum.",
          pay: "2$",
        },
        {
          id: 2,
          img: imgpr,
          title: "Lorem Lorem Lorem",
          date: "28/3/2024",
          description: "Lorem ipsum.",
          pay: "2$",
        },
        {
          id: 3,
          img: imgpr,
          title: "Lorem Lorem Lorem",
          date: "28/3/2024",
          description: "Lorem ipsum.",
          pay: "2$",
        },
        {
          id: 4,
          img: imgpr,
          title: "Lorem Lorem Lorem",
          date: "28/3/2024",
          description: "Lorem ipsum.",
          pay: "2$",
        },
      ],
    };
  },
   

  methods: {
    handleFileUpload() {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*"; 
      fileInput.addEventListener("change", this.onFileChosen);
      fileInput.click();
    },
    onFileChosen(event) {
      const file = event.target.files[0];
      if (file) {
        this.isLoading = true; 
        const reader = new FileReader();
        reader.onload = () => {
          localStorage.setItem("uploadedImage", reader.result);
          this.imageUrl = reader.result;
          this.isLoading = false; 
        };
        reader.readAsDataURL(file);
      }
    },
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
  watch: {
    currentPath(newPath, oldPath) {
      if (newPath === oldPath) {
        return;
      }
    }
  },
  mounted() {
    const uploadedImage = localStorage.getItem("uploadedImage");
    if (uploadedImage) {
      this.imageUrl = uploadedImage;
    }
  },
  
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
@media (max-width:477px) {
  .previous-reservations {
    
    width: 100%;
}
.swiper-button-next,.swiper-button-prev{
  display: none;
}
.save_btn button {
    position: relative !important;
    right: 113px !important;
}
.tab form input {
    width: 272px !important;
    position: relative;
    left: 37px;
}
.tab form {
    width: 100%;
    margin: auto;
}
.khara_ {
    width: 272px !important;
    position: relative;
    left: 40px;
}
.form-group .d-flex span {
    width: 80px;
}
#low {
    width: 191px !important;
    right: 30px;
}
.zeft span {
    position: relative;
    left: 46px;
}
.titles p {
    /* width: 90px; */
    font-size: 9px !important;
}
.img-roud[data-v-f32632b7] {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
}
}
@media (max-width:799px) {
  .previous-reservations {
    
    width: 100%;
}
.swiper-button-next,.swiper-button-prev{
  display: none;
}
.save_btn button {
    position: relative !important;
    right: 113px !important;
}
.tab form input {
    width: 272px !important;
    position: relative;
    left: 37px;
}
.tab form {
    width: 100%;
    margin: auto;
}
.khara_ {
    width: 272px !important;
    position: relative;
    left: 40px;
}
.form-group .d-flex span {
    width: 80px;
}
#low {
    width: 191px !important;
    right: 30px;
}
.zeft span {
    position: relative;
    left: 46px;
}
.titles p {
    /* width: 90px; */
    font-size: 9px !important;
}
.img-roud[data-v-f32632b7] {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
}
.cards____ .card_prof {
    width: 100% !important;
}
}
.dowload-img {
  text-align: center;
  margin-top: 20px;
}
.img-dao {
  width: 5px !important;
  height: 10px !important;
}
/* #fileInput {
  display: none;
} */
#ne{
    right: 42px !important;
    top:788px !important;
}
#ln{
    left: 42px !important;
    top:788px !important;
}
.img-sild{
    z-index: -1;
}
.img-roud {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
}
.custom-file-upload {
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  display: inline-block;
}
.swiper-slide {
  width: 34%;
  margin: 0 5px;
}

.swiper-slide .card_back {
  width: 100%;
}

.swiper-slide .card_back .layer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.5s;
  background: linear-gradient(
    to top,
    #fd0bb5,
    transparent,
    transparent
  ) !important;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.swiper-slide .card_back .layer p {
  position: absolute;
  left: 57px !important;
}

.card_back {
  height: 350px;
  width: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  position: relative;
  margin: 10px 0px;
}

@media (max-width: 390px) {
  .swiper-slide {
    width: 95% !important;
    margin: 0 5px;
  }
.imgcost{
  flex-direction: column;
}
  .btn {
    padding: 7px !important;
    margin: 0 5px !important;
  }

  .swiper-slide .card_back {
    width: 100%;
  }

  .swiper-slide .card_back .layer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.5s;
    background: linear-gradient(
      to top,
      #5f5aff,
      transparent,
      transparent
    ) !important;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .swiper-slide .card_back .layer p {
    position: absolute;
    left: 37px !important;
    font-size: 11px !important;
  }

  .swiper-button-next {
    /* position: relative; */
    top: 820px !important;
  }

  .swiper-button-prev {
    /* position: relative; */
    top: 820px !important;
  }
}

@media (min-width: 390px) and (max-width: 480px) {
  .swiper-slide {
    width: 95% !important;
    margin: 0 5px;
  }

  .swiper-button-next {
    /* position: relative; */
    top: 820px !important;
  }

  .swiper-button-prev {
    /* position: relative; */
    top: 820px !important;
  }

  .swiper-slide .card_back {
    width: 100%;
  }

  .swiper-slide .card_back .layer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.5s;
    background: linear-gradient(
      to top,
      #5f5aff,
      transparent,
      transparent
    ) !important;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .swiper-slide .card_back .layer p {
    position: absolute;
    left: 57px !important;
    font-size: 13px !important;
  }
}

.swiper-button-next {
  /* position: relative; */
  top: 620px;
}

.swiper-button-prev {
  /* position: relative; */
  top: 620px;
}

@media (min-width: 994px) and (max-width: 1201px) {
  .swiper-slide {
    width: 34%;
    margin: 0 5px;
  }
}

@media (min-width: 994px) and (max-width: 1201px) {
  .swiper-slide {
    width: 34% !important;
    margin: 0 5px;
  }

  .swiper-slide .card_back .layer p {
    position: absolute;
    left: 57px !important;
    font-size: 13px !important;
  }
}

@media (min-width: 1200px) {
  .swiper-slide {
    width: 34% !important;
    margin: 0 5px;
  }
}

@media (min-width: 1280px) {
  .swiper-slide {
    width: 34% !important;
    margin: 0 5px;
  }
}

@media (min-width: 1470px) {
  .swiper-slide {
    width: 34% !important;
    margin: 0 5px;
  }
}

@media (min-width: 481px) and (max-width: 605px) {
  .tab form input {
    /* width: 186px !important; */
  }

  .one .tab .container form .d-flex:nth-child(2) input:nth-child(3) {
    width: 392px !important;
  }

  #low {
    width: 322px !important;
  }

  .switch-button {
    left: 3px;
  }

  .tabs li {
    width: 130px !important;
  }

  .save_btn button {
    right: 307px !important;
  }

  .swiper-slide .card_back .layer p {
    position: absolute;
    left: 87px !important;
    font-size: 15px !important;
  }
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

ul.tabs {
  list-style: none;
  display: flex;
  position: relative;
  left: 270px;
  /* top: 15px; */
}

.container {
  overflow: hidden;
}

._img_ {
  position: absolute;
  width: 130px;
  max-height: 130px;
  border-radius: 15px;
  top: -40px;
  border: 1px solid #707070;
}

._img_ img {
  width: 100%;
  border-radius: 15px;
  position: relative;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
}

.data_card {
  margin: 90px 0 20px !important;
  box-shadow: 0 0 10px #fd0bb5;
  position: relative;
  height: 278px;
}
.card_prof {
  box-shadow: 0 0 10px#5F5AFF;
}
._img_ .layer_card_img_prof {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(
    to top,
    #fd0bb49f,
    transparent,
    transparent,
    transparent
  );
  z-index: 11;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
}

ul li {
  cursor: pointer;
  padding: 10px;
  border: 1px solid white;
  transition: 0.2s;
}

ul li.active {
  color: white !important;
  background: linear-gradient(to left, var(--blue), var(--pink)) !important;
  border-bottom-color: #fd0bb5;
  border-right-color: transparent;
  border-left-color: transparent;
}

ul li:hover {
  border-top-color: #fd0bb5;
  color: #fd0bb5;
}

.content {
  /* background-color: #ddd; */
}

.content .one {
  padding: 20px;
  height: fit-content;
}

.content .three {
  padding: 20px;
  height: fit-content;
}

.content .four {
  padding: 20px;
  height: fit-content;
}

.content .two {
  padding: 20px;
  height: fit-content;
}

.content div .cards {
  height: 100%;
}

.content div .cards .card_back2 {
  margin: 10px 0;
}

.content div.active {
  display: block;
}

.cards____ .card_prof {
  width: 24%;
  margin: 60px 5px;
}

.data_person .d-flex p {
  font-size: 55px;
  margin: 0;
}

.data_parent span {
  color: black !important;
}

.cards____ {
  flex-wrap: wrap;
}

.tab .cards {
  flex-wrap: wrap;
}
#khara {
  border: 1px solid gray;
  padding: 10px;
  width: 430px;
  border-radius: 7px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -o-border-radius: 7px;
  margin: 0 10px;
}
</style>
