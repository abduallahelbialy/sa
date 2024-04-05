<template>
  
  <div class="q_p opa">
    <div classw-100 text-md-right class="question_popup">
      <div class="bg-white card_succ">
        <div class="close_">
          <button class="btn" style="font-size: 20px">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="img_succ">
          <h4 class="my-4 mx-3" style="color: var(--pink)">
            Has the work been completed
          </h4>
        </div>
      </div>
      <button class="popup_btn ques_yes_popup mt-4" style="width: 45%">
        Yes
      </button>
      <span style="color: #fd0bb4">or</span>
      <button class="popup_btn ques_no_popup mt-4" style="width: 45%">
        No
      </button>
      <button class="popup_btn ques_no_popup mt-4" style="width: 96%">
        no show up
      </button>
    </div>
    <div class="card_pop_ cp_">
      <div class="close text-left">
        <button class="c2"><i class="fas fa-times text-dark"></i></button>
      </div>
      <form action="" method="post">
        <div class="form-group">
          <select name="" id="sell_">
            <option value="">Card</option>
            <option value="">Cash</option>
          </select>
        </div>
        <div class="datapay">
          <div class="d-flex justify-content-between align-items-center my-2">
            <p class="m-0" style="font-size: 13px">Total invoice value</p>
            <div class="df d-flex">
              <button
                class="btn"
                id="menu_"
                type="button"
                style="background-color: #5f5aff; color: white"
              >
                menu
              </button>
              <form action="" method="post">
                <input
                  style="width: 70px"
                  type="number"
                  name=""
                  id="input_click"
                />
              </form>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center my-2">
            <p class="m-0" style="font-size: 13px">
              Value of the amount paid to enter the queue
            </p>
            <p class="text-danger m-0">280$</p>
          </div>
          <div class="d-flex justify-content-between align-items-center my-2">
            <p class="m-0" style="font-size: 13px">
              Amount required for payment
            </p>
            <p class="text-danger m-0">210$</p>
          </div>
          <div class="d-flex justify-content-between align-items-center my-2">
            <p class="m-0" style="font-size: 13px">Tax</p>
            <p class="text-danger m-0">5$</p>
          </div>
          <div class="tm d-flex m-auto">
            <h5 style="color: #fd0bb4" class="mr-2">Received</h5>
            <i
              style="font-size: 25px; color: #5f5aff"
              class="fas fa-check-circle"
            ></i>
          </div>
        </div>
        <div class="footer_popup_button d-flex justify-content-center">
          <button
            class="cancel cancel2 close d-flex justify-content-center_"
            style="color: #fd0bb4"
            type="button"
          >
            paid
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="loading">
    <img class="wow hinge" src="../assets/Group 43398.png" alt="" />
  </div>
  <main class="d-flex justify-content-between">
    <!-- popups -->
    <div class="popup">
      <div class="popup_one">
        <div class="close text-left">
          <button class="c"><i class="fas fa-times"></i></button>
        </div>
        <br />
        <div class="body_popup">
          <div class="search">
            <form action="">
              <i class="fas fa-search"></i>
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                class="search_input"
              />
            </form>
          </div>
          <br />
          <div class="tabel_content">
            <div
              class="head_ d-flex justify-content-between align-items-center"
            >
              <h6 class="ml-2">phone number</h6>
              <h6 class="ml-2">actions</h6>
            </div>
            <div class="bodys">
              <div
                class="body_content d-flex justify-content-between align-items-center"
                v-for="people in peoples"
                :key="people.id"
              >
                <p class="mx-1">{{ people.phone }}</p>
                <div class="d-flex justify-content-center ">
                  <button
                    class="btn go mx-2"
                    style="
                      color: white;
                      font-size: 12px;
                      background: var(--pink);
                    "
                  >
                    cancel
                  </button>
                  <button
                    class="mx-1 btn mx-2"
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
          <div class="footer_popup_button d-flex justify-content-end">
            <button class="cancel">Cancel</button>
            <button class="confim_btn ml-4">Confirm</button>
          </div>
        </div>
      </div>
    </div>
    <div class="popup2">
      <div class="card_pop">
        <div class="close text-left">
          <button class="c2"><i class="fas fa-times text-dark"></i></button>
        </div>
        <div class="img_pop mb-4">
          <img src="../assets/cmcm.png" alt="" />
        </div>
        <form action="" method="post">
          <p>enter customer phone number</p>
          <div class="form-group d-flex">
            <span>+972</span>
            <input type="number" name="" id="" placeholder="05155450405" />
          </div>
          <div class="form-group">
            <input type="text" name="" id="name_order" placeholder="name" />
          </div>
          <div class="footer_popup_button d-flex justify-content-end">
            <button class="cancel cancel2" style="color: #fd0bb4" type="button">
              Cancel
            </button>
            <button class="confim_btn2 ml-4">Confirm</button>
          </div>
        </form>
      </div>
    </div>
<!-- //navdashboard// -->
    <div
      class="left_popu d-flex justify-content-between align-items-center flex-row-reverse"
    >
      <button class="btn" id="door">
        <i class="fas fa-ellipsis-v"></i>
      </button>

      <div class="menu_pop d-flex justify-content-between align-items-center ">
        <router-link
          to="#"
          class="user my-4 d-flex justify-content-left align-items-center"
        >
          <img src="../assets/NoPath - Copy (16).png" alt="" />
          <div class="para ml-2">
            <p>Account</p>
          </div>
          </router-link>
        <router-link
          to="/homecontrol"
          class="my-4 customer d-flex justify-content-left align-items-center "
        >
          <i class="fas fa-home"></i>
          <div class="para ml-2">
            <p>Home</p>
          </div>
        </router-link>
     
        <router-link
 to="/test"
           class="my-4 customer d-flex justify-content-left align-items-center"
        >
          <i class="fas fa-sliders-h"></i>
          <div class="para ml-2">
            <p>Setup</p>
          </div>
        </router-link>
        <router-link
          to=""
          class="my-4 customer d-flex justify-content-left align-items-center"
        >
          <i class="fas fa-file-alt"></i>
          <div class="para ml-2">
            <p>Reports</p>
          </div>
        </router-link>
        <router-link
          to=""
          class="my-4 customer d-flex justify-content-left align-items-center"
        >
          <i class="fas fa-user-plus"></i>
          <div class="para ml-2">
            <p>Create New User</p>
          </div>
        </router-link>
      </div>
    </div>
    <!-- end popups -->
    <div class="col-lg-2 p-0 aside">
      <aside class="bg-white text-center col-lg-12 p-3">
        
        <div class="logo mr-5 mb-5">
          <router-link to="/homecontrol">
          <div >

            <img id="logo" src="../assets/1234567.png" alt="" class=" img-fluid"  style="width:100%"/>
          </div>
          </router-link>
        </div>
        <div class="content-sidepar text-left px-2">
          <p class="mb-4 ml-3">Admin tools</p>
          <router-link 
            to="#"
            class="user my-4 d-flex justify-content-left align-items-center"
          >
            <img src="../assets/NoPath - Copy (16).png" alt="" />
            <div class="para ml-2">
              <p>Account</p>
            </div>
          </router-link>
          <router-link
            to="/homecontrol"
            class="my-4 customer d-flex justify-content-left align-items-center" 
          >
            <i class="fas fa-home"></i>
            <div class="para ml-2 ">
              <p>Home</p>
            </div>
          </router-link>
        
          <router-link
            to="/test"
            class="my-4 customer d-flex justify-content-left align-items-center"
          >
            <i class="fas fa-sliders-h"></i>
            <div class="para ml-2">
              <p>Setup</p>
            </div>
          </router-link>
          <router-link
            to="#"
            class="my-4 customer d-flex justify-content-left align-items-center"
          >
            <i class="fas fa-file-alt"></i>
            <div class="para ml-2">
              <p>Reports</p>
            </div>
          </router-link>
          <router-link
            to="#"
            class="my-4 customer d-flex justify-content-left align-items-center"
          >
            <i class="fas fa-user-plus"></i>
            <div class="para ml-2">
              <p>Create New User</p>
            </div>
          </router-link>
        </div>
      </aside>
    </div>
    <div class="col-lg-10 main-content p-0 main_">
      <header class="bg-white head col-lg-12">
        <div
          class="container d-flex justify-content-between align-items-center"
        >
          <div class="col-lg-6 d-flex justify-content-start align-items-center">
            <div class="d-flex gap-3">

            <h2 class="mr-5">Operation</h2>
            <div class="switch_ ml-5 d-flex align-items-center gap-2">
              <span>open</span>
              <div class="sw">
                <input type="checkbox" hidden="hidden" id="username" />
                <label class="switch" for="username"></label>
              </div>
            </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-end">
            <div class="user d-flex justify-content-left align-items-center">
              <img src="../assets/NoPath - Copy (16).png" alt="" />
              <div class="para ml-2 p-2">
                <p>Abduallah ahmed</p>
                <p class="text-secondary">Web Dev</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
       
        <div class="content-body px-3" style="padding:7rem 0px;">

          <!-- ////pages router dashbord/// -->
          <router-view />
        </div>
       
      </div>
    </div>
  </main>
</template>

<script>
import {
  menuClickHandler,
  selectChangeHandler,
  hidePopups,
  closeListClickHandler,
  showPopupOnClick,
  nowElementsClickHandler,
  questionYesClickHandler,
  closeButtonClickHandler,
  questionNoClickHandler,
  c2ClickHandler,
  cClickHandler,
  c2ClickHandlerPopup2,
  setupSwiper,
  setupLabelClick,
} from "../components/jsvue/dash";
$(document).ready(function () {
  menuClickHandler();
  selectChangeHandler();
  hidePopups();
  closeListClickHandler();
  showPopupOnClick();
  nowElementsClickHandler();
  questionYesClickHandler();
  closeButtonClickHandler();
  questionNoClickHandler();
  c2ClickHandler();
  cClickHandler();
  c2ClickHandlerPopup2();
  setupSwiper();
  setupLabelClick();
});
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import { Zoom, Navigation } from "swiper/modules";
export default {
  name: "Dashbord",
  data() {
      return {
              currentPath: window.location.pathname,

      names: [
        { id: 1, phone: "01028924906", num: "1" },
        { id: 2, phone: "01028924906", num: "2" },
        { id: 3, phone: "01028924906", num: "3" },
      ],
      sildone: [{ id: 1 }, { id: 2 }, { id: 3 }],
      sildtwo: [{ id: 1 }, { id: 2 }, { id: 3 }],
      peoples: [
        { id: 1, phone: "01028924906" },
        { id: 2, phone: "01128924906" },
        { id: 4, phone: "01028924906" },
        { id: 5, phone: "01028924906" },
        { id: 6, phone: "01028924906" },
        { id: 7, phone: "01028924906" },
        { id: 8, phone: "01028924906" },
        { id: 9, phone: "01028924906" },
        { id: 10, phone: "01028924906" },
        { id: 11, phone: "01028924906" },
        { id: 12, phone: "01028924906" },
        { id: 13, phone: "01028924906" },
        { id: 14, phone: "01028924906" },
        { id: 15, phone: "01028924906" },
        { id: 16, phone: "01028924906" },
        { id: 17, phone: "01028924906" },
        { id: 18, phone: "01028924906" },
        { id: 19, phone: "01028924906" },
        { id: 20, phone: "01028924906" },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation],
    };
  },
  computed: {
   currentPath() {
     return this.$route.path;
   },
 },
 watch: {
   $route(to, from) {
     // Update the currentPath when the route changes
     this.currentPath = to.path;
   },
 },
};
</script>

<style scoped>
a{
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
@media (max-width:477px) {
  .switch {
    display: inline-block;
    position: relative;
    top: 0px !important;
    display: flex !important;
    gap: 16px !important;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    background: red;
    transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    cursor: pointer;
}
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
