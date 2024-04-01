<template>
  <div class="content-body px-3" style="padding: 1rem 0px">
    <div class="customer_btn">
      <span>Customers</span>
      <button class="border-pink ml-5">
        <i class="fas fa-plus"></i> add new customer to the fastest tabor
      </button>
    </div>
  </div>
 <Swdash/>
  <div class="tabels_content py-5">
    <div class="tabels__ my-5">
      <p class="ml-3" style="color: #5f5aff; font-size: 20px">
        Currently in service
      </p>
      <table class="col-lg-12">
        <tr class="">
          <th></th>
          <th colspan="6">
            <span style="color: #fd0bb4">search </span
            ><input
              style="width: 77%"
              type="search"
              name=""
              id="search_in"
              v-model="searchTerm"
            />
          </th>
        </tr>
        <tr class="">
          <th></th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Phone Number
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Name
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Staff
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            paid amount
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Status
          </th>
          <th>Actions</th>
        </tr>
        <tr class="my-3" v-for="tr in filteredTables" :key="tr.id">
          <td class="checkbox">
            <input type="checkbox" name="" id="" class="check" />
          </td>
          <td>{{ tr.phone }}</td>
          <td>{{ tr.name }}</td>
          <td>{{ tr.namtwo }}</td>
          <td>{{ tr.num }}</td>
          <td>{{ tr.na }}</td>
          <td>
            <div class="select">
              <select class="select_">
                <option value="1">{{ tr.case }}</option>
                <option value="3">{{ tr.casetwo }}</option>
                <option value="4">{{ tr.casethree }}</option>
                <option value="5">{{ tr.no }}</option>
                <option value="6">{{ tr.casefour }}</option>
              </select>
            </div>
          </td>
        </tr>
      </table>
      <div class="pagination d-flex justify-content-between align-items-center">
        <a href="#"> <i class="fas fa-chevron-left"></i></a>
        <router-link to="#" class="a" v-for="pa in paging" :key="pa.id">{{
          pa.num
        }}</router-link>

        <a href="#"><i class="fas fa-chevron-right"></i></a>
      </div>
    </div>
    <div class="tabels__ my-5">
      <p class="ml-3" style="color: #5f5aff; font-size: 20px">In tabor</p>
      <table class="col-lg-12">
        <tr class="">
          <th></th>
          <th colspan="6">
            <span style="color: #fd0bb4">search </span
            ><input style="width: 77%" type="search" name="" id="search_in" />
          </th>
        </tr>
        <tr class="">
          <th></th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Phone Number
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Name
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Staff
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            paid amount
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Status
          </th>
          <th>Actions</th>
        </tr>
        <tr class="my-3" v-for="trr in tabletwo" :key="trr.id">
          <td class="checkbox">
            <input type="checkbox" name="" id="" class="check" />
          </td>
          <td>{{ trr.phone }}</td>
          <td>{{trr.name}}</td>
          <td>{{trr.namtwo}}</td>
          <td>{{trr.num}}</td>
          <td>{{trr.na}}</td>
          <td>
            <div class="select">
              <select class="select_">
                <option value="1">{{trr.case}}</option>
                <option value="2">{{trr.casetwo }}</option>
                <option value="3">{{trr.casethree}}</option>
              </select>
            </div>
          </td>
        </tr>
      </table>
      <div class="pagination d-flex justify-content-between align-items-center">
        <a href="#"> <i class="fas fa-chevron-left"></i></a>
           <router-link to="#" class="a" v-for="pa in paging" :key="pa.id">{{
          pa.num
        }}</router-link>
        <a href=""><i class="fas fa-chevron-right"></i></a>
      </div>
    </div>
    <div class="tabels__ my-5">
      <p class="ml-3" style="color: #5f5aff; font-size: 20px">finished</p>
      <table class="col-lg-12">
        <tr class="">
          <th></th>
          <th colspan="6">
            <span style="color: #fd0bb4">search </span
            ><input style="width: 77%" type="search" name="" id="search_in" />
          </th>
        </tr>
        <tr class="">
          <th></th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Phone Number
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Name
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Staff
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            paid amount
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Status
          </th>
          <th>Actions</th>
        </tr>
        
        <tr class="my-3" v-for="trs in tablethree" :key="trs.id">
          <td class="checkbox">
            <input type="checkbox" name="" id="" class="check" />
          </td>
          <td>{{ trs.phone }}</td>
          <td>{{ trs.name }}</td>
          <td>{{ trs.namtwo }}</td>
          <td>{{ trs.num }}</td>
          <td>{{ trs.na }}</td>
          <td>
            <div class="select">
              <select class="select_">
                <option value="2">{{trs.case}}</option>
                <option value="3">{{trs.casetwo}}</option>
              </select>
            </div>
          </td>
        </tr>
      
      
      </table>
      <div class="pagination d-flex justify-content-between align-items-center">
        <a href=""> <i class="fas fa-chevron-left"></i></a>
          <router-link to="#" class="a" v-for="pa in paging" :key="pa.id">{{
          pa.num
        }}</router-link>
        <a href=""><i class="fas fa-chevron-right"></i></a>
      </div>
    </div>

    <div class="tabels__ my-5">
      <p class="ml-3" style="color: #5f5aff; font-size: 20px">canceled</p>
      <table class="col-lg-12">
        <tr class="">
          <th></th>
          <th colspan="6">
            <span style="color: #fd0bb4">search </span
            ><input style="width: 77%" type="search" name="" id="search_in" />
          </th>
        </tr>
        <tr class="">
          <th></th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Phone Number
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Name
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Staff
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            paid amount
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Status
          </th>
          <th>Actions</th>
        </tr>
        <tr class="my-3" v-for="four in tablefour" :key="four.id">
          <td class="checkbox">
            <input type="checkbox" name="" id="" class="check" />
          </td>
          <td>{{ four.phone }}</td>
          <td>{{four.name}}</td>
          <td>{{four.namtwo}}</td>
          <td>{{ four.num }}</td>
          <td>{{four.na}}</td>
          <td>
            <div class="select">
              <select class="select_">
                <option value="1">{{four.case}}</option>
                <option value="1">{{four.casetwo}}</option>
              </select>
            </div>
          </td>
        </tr>
    
      </table>
      <div class="pagination d-flex justify-content-between align-items-center">
        <a href=""> <i class="fas fa-chevron-left"></i></a>
         <router-link to="#" class="a" v-for="pa in paging" :key="pa.id">{{
          pa.num
        }}</router-link>
        <a href=""><i class="fas fa-chevron-right"></i></a>
      </div>
    </div>
    <div class="tabels__ my-5">
      <p class="ml-3" style="color: #5f5aff; font-size: 20px">no show up</p>
      <table class="col-lg-12">
        <tr class="">
          <th></th>
          <th colspan="6">
            <span style="color: #fd0bb4">search </span
            ><input style="width: 77%" type="search" name="" id="search_in" />
          </th>
        </tr>
        <tr class="">
          <th></th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Phone Number
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Name
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Staff
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            paid amount
          </th>
          <th>
            <button style="background: transparent; border: none">
              <i class="fas fa-sort-amount-down-alt"></i>
            </button>
            Status
          </th>
          <th>Actions</th>
        </tr>
        <tr class="my-3" v-for="ts in tablefive" :key="ts.id">
          <td class="checkbox">
            <input type="checkbox" name="" id="" class="check" />
          </td>
          <td>{{ts.phone}}</td>
          <td>{{ts.name}}</td>
          <td>{{ts.namtwo}}</td>
          <td>{{ts.num}}</td>
          <td>{{ts.na}}</td>
          <td>
            <div class="select">
              <select class="select_">
                <option value="1">{{ts.case}}</option>
              </select>
            </div>
          </td>
        </tr>
   
      </table>
      <div class="pagination d-flex justify-content-between align-items-center">
        <a href=""> <i class="fas fa-chevron-left"></i></a>
         <router-link to="#" class="a" v-for="pa in paging" :key="pa.id">{{
          pa.num
        }}</router-link>
        <a href=""><i class="fas fa-chevron-right"></i></a>
      </div>
    </div>
  </div>
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
import Swdash from '../layout/Swdash.vue'
export default {
  name: "homecontrol",
  data() {
    return {
      paging: [
        { id: 1, num: "1" },
        { id: 2, num: "2" },
        { id: 3, num: "3" },
        { id: 4, num: "4" },
      ],
      searchTerm: "",
      tabletwo: [
        {
          id: 1,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
          case: "cancel",
          casetwo: "go back",
          casethree: "waiting",
        },
        {
          id: 2,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
          case: "cancel",
          casetwo: "on service",
          casethree: "go back",
        },
        {
          id: 3,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
          case: "cancel",
          casetwo: "on service",
          casethree: "go back",
        },
      ],
      tablethree: [
        {
          id: 1,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
          case: "on service",
          casetwo: "finished",
          
        },
        {
          id: 2,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
           case: "on service",
          casetwo: "finished",
        },
        {
          id: 3,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
           case: "on service",
          casetwo: "finished",
        },
      ],
      tablefour: [
        {
          id: 1,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen four",
          num: "22",
          na: "Now",
          case: "canceled",
          casetwo: "waiting",
          
        },
        {
          id: 2,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "20",
          na: "Now",
          case: "canceled",
          casetwo: "waiting",
        },
        {
          id: 3,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
          case: "canceled",
          casetwo: "waiting",
        },
      ],
      tablefive: [
        {
          id: 1,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen four",
          num: "22",
          na: "Now",
          case: "on service",
         
          
        },
        {
          id: 2,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "20",
          na: "Now",
           case: "on service",
        },
        {
          id: 3,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
            case: "on service",
        },
      ],
      tables: [
        {
          id: 1,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "hassen mohamed",
          num: "22",
          na: "Now",
          case: "finished",
          casetwo: "on service",
          casethree: "go back",
          no: "no show up",
          casefour: "cancel",
        },
        {
          id: 2,
          phone: "01128924906",
          name: "Abdallah ahmed",
          namtwo: "omar mohamed",
          num: "22",
          na: "Now",
          case: "finished",
          casetwo: "on service",
          casethree: "go back",
          no: "no show up",
          casefour: "cancel",
        },
        {
          id: 3,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "omar mohamed",
          num: "19",
          na: "Now",
          case: "finished",
          casetwo: "on service",
          casethree: "go back",
          no: "no show up",
          casefour: "cancel",
        },
        {
          id: 4,
          phone: "01028924906",
          name: "samy ahmed",
          namtwo: "omar mohamed",
          num: "22",
          na: "Now",
          case: "finished",
          casetwo: "on service",
          casethree: "go back",
          no: "no show up",
          casefour: "cancel",
        },
        {
          id: 5,
          phone: "01028924906",
          name: "Abdallah ahmed",
          namtwo: "omar mohamed",
          num: "22",
          na: "Now",
          case: "finished",
          casetwo: "on service",
          casethree: "go back",
          no: "no show up",
          casefour: "cancel",
        },
      ],
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
  computed: {
    filteredTables() {
      return this.tables.filter(
        (tr) =>
          tr.phone.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          tr.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          tr.namtwo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          tr.num.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    Swdash
  },
  setup() {
    return {
      modules: [Zoom, Navigation],
    };
  },
};
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
