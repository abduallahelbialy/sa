<template>
   
                <div class="content">
                <div class="one active">
                  <h2 style="color: #fc40b9">nearest</h2>
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
                        
                        <div
                          class="card_back wow slideInDown"
                          style="background-image: url('../assets/NoPath.png')"
                        >
                          <div class="layer" style="background: linear-gradient(to top, #FD0BB5, transparent, transparent) !important;">
                            <form action="">
                              <input type="hidden" value="1" name="status" />
                              <button type="submit" class="img_btn">
                                <img src="../assets/he.png" alt="" />
                              </button>
                            </form>
                            <img :src="sild.img" alt="" class="img-silder" />
                                <router-link to="/Add">
                            <p>{{ sild.title }}</p>
                                </router-link>

                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div class="swiper-button-next">
                    <img src="../assets/Group 39244.png" alt="" />
                  </div>
                  <div class="swiper-button-prev">
                    <img src="../assets/Group 39245.png" alt="" />
                  </div>

                  <h2 style="color: #fc40b9">most crowded tabor</h2>
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
                    <swiper-slide v-for="sild in sildersTwo" :key="sild.id">
                      <div class="swiper-zoom-container">
                        <div
                          class="card_back wow slideInDown"
                          style="background-image: url('../assets/NoPath.png')"
                        >
                          <div class="layer" style="background: linear-gradient(to top, #FD0BB5, transparent, transparent) !important;">
                            <form action="">
                              <input type="hidden" value="1" name="status" />
                              <button type="submit" class="img_btn">
                                <img src="../assets/he.png" alt="" />
                              </button>
                            </form>
                            <img :src="sild.img" alt="" class="img-silder" />

                              <router-link to="/Add">
                            <p>{{ sild.title }}</p>
                                </router-link>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div class="swiper-button-next">
                    <img src="../assets/Group 39244.png" alt="" />
                  </div>
                  <div class="swiper-button-prev">
                    <img src="../assets/Group 39245.png" alt="" />
                  </div>

                  <h2 style="color: #fc40b9">tabor for you</h2>
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
                        <div
                          class="card_back wow slideInDown"
                          style="background-image: url('../assets/NoPath.png')"
                        >
                          <div class="layer" style="background: linear-gradient(to top, #FD0BB5, transparent, transparent) !important;">
                            <form action="">
                              <input type="hidden" value="1" name="status" />
                              <button type="submit" class="img_btn">
                                <img src="../assets/he.png" alt="" />
                              </button>
                            </form>
                            <img :src="sild.img" alt="" class="img-silder" />

                              <router-link to="/Add">
                            <p>{{ sild.title }}</p>
                                </router-link>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div class="swiper-button-next">
                    <img src="../assets/Group 39244.png" alt="" />
                  </div>
                  <div class="swiper-button-prev">
                    <img src="../assets/Group 39245.png" alt="" />
                  </div>

                  <h2 style="color: #fc40b9">new service provider</h2>
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
                        <div
                          class="card_back wow slideInDown"
                          style="background-image: url('../assets/NoPath.png')"
                        >
                          <div class="layer" style="background: linear-gradient(to top, #FD0BB5, transparent, transparent) !important;">
                            <form action="">
                              <input type="hidden" value="1" name="status" />
                              <button type="submit" class="img_btn">
                                <img src="../assets/he.png" alt="" />
                              </button>
                            </form>
                            <img :src="sild.img" alt="" class="img-silder" />

                              <router-link to="/Add">
                            <p>{{ sild.title }}</p>
                                </router-link>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div class="swiper-button-next">
                    <img src="../assets/Group 39244.png" alt="" />
                  </div>
                  <div class="swiper-button-prev">
                    <img src="../assets/Group 39245.png" alt="" />
                  </div>
                </div>
                
              </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/zoom";
import slide from "../assets/NoPath.png";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper/modules";
export default {
name:"Swipe",
 components: {
    Swiper,
    SwiperSlide,
    
  },
    data() {
    return {
      activeTap: "1",

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
      sildersTwo: [
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
    };
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
}
</script>

<style scoped>
.activea{
    color:#fc40b9;
    text-decoration:underline;
}
.actives{
    background-color:#fc40b9;
    color:#fff !important;
    border:none;
}
@media (max-width: 477px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
@media (max-width: 477px) {
  .img-silder {
    width: 100% !important;
  }
}
a {
  text-decoration: none;
}
main {
  overflow: hidden;
}
.img-silder {
  width: 89%;
  position: relative;
  z-index: -1;
}
.swiper-button-next {
  right: 20px;
  position: relative;
  bottom: 185px;
  right: -1229px;
  z-index: 111;
}

.swiper-button-prev {
  left: 20px;
  position: relative;
  bottom: 195px;
}

.swiper-button-next img {
  width: 50px;
}

.swiper-button-prev img {
  width: 50px;
}

.swiper-button-next2 {
  right: 20px;
  position: relative;
  bottom: 250px;
  width: fit-content;
  right: -1120px;
  z-index: 111;
}

.swiper-button-prev2 {
  left: 0px;
  width: fit-content;
  position: relative;
  bottom: 285px;
}

.swiper-button-next2 img {
  width: 50px;
}

.swiper-button-prev2 img {
  width: 50px;
}

.swiper-button-next3 {
  right: 0px;
  position: relative;
  bottom: 255px;
  width: fit-content;
  right: -1120px;
  z-index: 111;
}

.swiper-button-prev3 {
  left: 00px;
  width: fit-content;
  position: relative;
  bottom: 305px;
}

.swiper-button-next3 img {
  width: 50px;
}

.swiper-button-prev3 img {
  width: 50px;
}

.swiper-button-next4 {
  right: 20px;
  position: relative;
  bottom: 255px;
  width: fit-content;
  right: -1120px;
  z-index: 111;
}

.swiper-button-prev4 {
  left: 0px;
  position: relative;
  bottom: 305px;
  width: fit-content;
}

.swiper-button-next4 img {
  width: 50px;
}

.swiper-button-prev4 img {
  width: 50px;
}

.active_tab {
  background: #5f5aff;
  border: 1px solid #5f5aff !important;
  color: white !important;
  font-weight: 600;
}

.active_tab:hover {
  background: #5f5aff !important;
  border: 1px solid #5f5aff !important;
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
  background-color: #5f5aff;
  border: none;
  padding: 10px 20px;
  border-radius: 7px;
}

.buttons .tabs_ {
  width: 50%;
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
  color: #fff;
  background-color: #5f5aff;
}

select {
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  flex: 1;
  color: black;
  padding: 0 25px;
  background-color: var(--darkgray);
  background-image: none;
  cursor: pointer;
  border: 1px solid rgb(224, 224, 224);
}

/* Remove IE arrow */
select::-ms-expand {
  display: none;
}

/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  width: 16em;
  height: 3em;
  border-radius: 0.25em;
  overflow: hidden;
}

/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: -3px;
  right: 0px;
  padding: 1em;
  transition: 0.25s all ease;
  pointer-events: none;
  color: gray;
}

/* Transition */
.select:hover::after {
  color: #5f5aff;
}

ul.tabs {
  list-style: none;
  display: flex;
  position: relative;
  left: 12px;
  top: 23px;
}

ul li {
  cursor: pointer;
  padding: 10px;
  border: 1px solid transparent;
  transition: 0.2s;
}

ul li.active {
  color: #5f5aff;
  border-bottom-color: #5f5aff;
  border-right-color: transparent;
  border-left-color: transparent;
}

ul li:hover {
  border-top-color: #5f5aff;
  color: #5f5aff;
}

.content {
  /* background-color: #ddd; */
}

.content .one {
  padding: 20px;
  display: none;
  height: fit-content;
}

.content .three {
  padding: 20px;
  display: none;
  height: fit-content;
}

.content .two {
  padding: 20px;
  display: none;
  height: fit-content;
}

.content div .cards {
  height: 100%;
}

.content div .cards .card_back {
  margin: 10px 0;
}

.content div.active {
  display: block;
}

.tabs input[type="radio"]:checked + label {
  color: #5f5aff;
  border-bottom: 1px solid #5f5aff;
  font-weight: 600;
}

@media (max-width: 390px) {
  .swiper-slide {
    width: 95% !important;
    margin: 0 5px;
  }

  .swiper-button-next {
    position: relative;
    bottom: 220px;
    right: -274px;
    z-index: 111;
  }

  .swiper-button-prev {
    position: relative;
    bottom: 242px;
    right: -250px;
    z-index: 111;
  }

  .swiper-button-next2 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    right: -248px;
    z-index: 111;
  }
  .swiper-button-prev2 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next3 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    right: -248px;
    z-index: 111;
  }
  .swiper-button-prev3 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next4 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    right: -248px;
    z-index: 111;
  }
  .swiper-button-prev4 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
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
    left: 17px !important;
    font-size: 11px !important;
  }
}

@media (min-width: 390px) and (max-width: 480px) {
  .swiper-slide {
    width: 95% !important;
    margin: 0 5px;
  }
  .swiper-button-next {
    position: relative;
    bottom: 220px;
    right: -321px;
    z-index: 111;
  }

  .swiper-button-prev {
    position: relative;
    bottom: 242px;
    right: -250px;
    z-index: 111;
  }

  .swiper-button-next2 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    right: -292px;
    z-index: 111;
  }
  .swiper-button-prev2 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next3 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    right: -292px;
    z-index: 111;
  }
  .swiper-button-prev3 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next4 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    right: -292px;
    z-index: 111;
  }
  .swiper-button-prev4 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
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
    left: 17px !important;
    font-size: 13px !important;
  }
}
@media (min-width: 481px) and (max-width: 605px) {
  .swiper-button-next {
    position: relative;
    bottom: 220px;
    left: 415px;
    z-index: 111;
  }

  .swiper-button-prev {
    position: relative;
    bottom: 242px;
    right: -250px;
    z-index: 111;
  }

  .swiper-button-next2 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 388px;
    z-index: 111;
  }
  .swiper-button-prev2 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next3 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 388px;
    z-index: 111;
  }
  .swiper-button-prev3 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next4 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 388px;
    z-index: 111;
  }
  .swiper-button-prev4 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
}
@media (min-width: 605px) and (max-width: 767px) {
  .swiper-button-next {
    position: relative;
    bottom: 220px;
    left: 415px;
    z-index: 111;
  }

  .swiper-button-prev {
    position: relative;
    bottom: 242px;
    right: -250px;
    z-index: 111;
  }

  .swiper-button-next2 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 388px;
    z-index: 111;
  }
  .swiper-button-prev2 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next3 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 388px;
    z-index: 111;
  }
  .swiper-button-prev3 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next4 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 388px;
    z-index: 111;
  }
  .swiper-button-prev4 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
}
@media (min-width: 994px) and (max-width: 1201px) {
  ul.tabs {
    left: 120px !important;
  }

  .swiper-slide {
    width: 34%;
    margin: 0 5px;
  }
  .swiper-button-next {
    position: relative;
    bottom: 220px;
    left: 870px;
    z-index: 111;
  }

  .swiper-button-prev {
    position: relative;
    bottom: 242px;
    right: -250px;
    z-index: 111;
  }

  .swiper-button-next2 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 848px;
    z-index: 111;
  }
  .swiper-button-prev2 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next3 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 848px;
    z-index: 111;
  }
  .swiper-button-prev3 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next4 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 848px;
    z-index: 111;
  }
  .swiper-button-prev4 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
}

@media (min-width: 768px) and (max-width: 994px) {
  ul.tabs {
    left: 70px !important;
  }
  .swiper-button-next {
    position: relative;
    bottom: 220px;
    left: 600px;
    z-index: 111;
  }

  .swiper-button-prev {
    position: relative;
    bottom: 242px;
    right: -250px;
    z-index: 111;
  }

  .swiper-button-next2 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 588px;
    z-index: 111;
  }
  .swiper-button-prev2 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next3 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 588px;
    z-index: 111;
  }
  .swiper-button-prev3 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  .swiper-button-next4 {
    position: relative;
    bottom: 220px;
    width: fit-content;
    left: 588px;
    z-index: 111;
  }
  .swiper-button-prev4 {
    position: relative;
    bottom: 270px;
    right: -250px;
    z-index: 111;
  }
  ul.tabs li {
    width: fit-content !important;
  }
}

@media (min-width: 994px) and (max-width: 1201px) {
  .swiper-slide {
    width: 34% !important;
    margin: 0 5px;
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
}
</style>
