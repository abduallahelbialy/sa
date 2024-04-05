<template>
  <div class="popup3" v-if="closePopup">
    <div class="card_pop">
      <div class="close text-left">
        <button class="c3" @click="toglemod">
          <i class="fas fa-times text-dark"></i>
        </button>
      </div>
      <div class="img_pop mb-4">
        <img src="../assets/cmcm.png" alt="" />
      </div>
      <form @submit.prevent="submitForm">
        <div class="d-flex justify-content-between align-items-center wid_size">
          <p class="m-0">Enter a new Period</p>
          <input
            type="text"
            style="width: 150px"
            v-model="periodTitle"
            placeholder="Period Title"
          />
        </div>
        <div class="form-group">
          <input type="number" v-model.number="from" placeholder="From" />
        </div>
        <div class="form-group">
          <input type="number" v-model.number="to" placeholder="To" />
        </div>
        <div class="footer_popup_button d-flex justify-content-end">
          <button
            class="cancel cancel3"
            style="color: #fd0bb4"
            @click="toglemod"
          >
            Cancel
          </button>
          <button class="confim_btn2 ml-4" type="submit" @click="toglemod">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="container">
    <div class="wrapper">
      <div class="steps">
        <ul>
          <li :class="{ 'is-active': currentStep === 1 }">
            contact information
          </li>
          <li :class="{ 'is-active': currentStep === 2 }">
            service provider information
          </li>
          <li :class="{ 'is-active': currentStep === 3 }">working hours</li>
          <li :class="{ 'is-active': currentStep === 4 }">upload images</li>
          <li :class="{ 'is-active': currentStep === 5 }">service list</li>
          <li :class="{ 'is-active': currentStep === 6 }">staff info</li>
          <li :class="{ 'is-active': currentStep === 7 }">time policy</li>
          <li :class="{ 'is-active': currentStep === 8 }">payment policy</li>
          <li :class="{ 'is-active': currentStep === 9 }">
            cancelation refund policy
          </li>
          <li :class="{ 'is-active': currentStep === 10 }">
            adding another branch
          </li>
        </ul>
      </div>

      <form class="form-wrapper">
        <fieldset
          class="section fieldset is-active mt-5"
          v-if="currentStep === 1"
        >
          <h3>Your Details</h3>
          <input type="text" name="name" id="name" placeholder="yor name" />
          <input type="text" name="email" id="email" placeholder="Email" />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="who are you representing"
          />
          <input
            type="number"
            name="email"
            id="email"
            placeholder="phone number"
          />
          <input
            type="number"
            name="email"
            id="email"
            placeholder="another phone number"
          />
          <div class="b_t_n_s d-flex flex-column">
            <div class="button bt_n2 my-2" @click="nextStep">Next</div>
            <button class="button border-0">save</button>
          </div>
        </fieldset>
        <!-- أضف باقي الستيبس هنا -->
        <fieldset
          class="section fieldset is-active mt-5 col-lg-12"
          v-if="currentStep === 2"
        >
          <h3>Your Details</h3>
          <Stetwo />
          <div class="b_t_n_s d-flex flex-column">
            <div class="button bt_n2 my-2" @click="nextStep">Next</div>
            <button class="button border-0 mb-2">save</button>
            <button class="button_preve" @click="previousStep">Previous</button>
          </div>
        </fieldset>

        <fieldset
          class="section section2 fieldset mt-5 is-active"
          style="height: 786px; margin: 307px 0; position: relative; top: -44px"
          v-if="currentStep === 3"
        >
          <div class="tabels__ my-5" style="width:auto;">
            <div class="per text-left">
              <p class="ml-3 mt-3">Period</p>
            </div>
            <table class="col-lg-12 table">
              <tr class="">
                <th>Periods</th>
                <th>Period 1</th>
                <th>Period 2</th>
                <th>Period 3</th>
                <th class="plus">
                  <button class="_plus_" @click="toglemod($event)">+</button>
                </th>
              </tr>
              <tr class="date" style="margin: 30px">
                <th>Work Houers</th>
                <td>From 6 AM - 10 AM</td>
                <td>From 6 AM - 10 AM</td>
                <td>From 6 AM - 10 AM</td>
                <td rowspan="8" class="rowspan" style="width: 5%">
                  <h4>
                    <span style="color: var(--blue)">Add a new period</span>
                    <span style="color: var(--pink)">from here -></span>
                  </h4>
                </td>
              </tr>
              <tr class="my-3" v-for="ta in tables" :key="ta.id">
                <th>Saturday</th>
                <td class="js-maaaan">
                  <input type="checkbox" name="" id="one" />
                  <label for="one">
                    <p>SELECTED</p>
                  </label>
                </td>
                <td class="js-maaaan">
                  <input type="checkbox" name="" id="two" />
                  <label for="two">
                    <p>SELECTED</p>
                  </label>
                </td>
                <td class="js-maaaan">
                  <input type="checkbox" name="" id="three" />
                  <label for="three">
                    <p>SELECTED</p>
                  </label>
                </td>
              </tr>
            </table>
          </div>
          <div class="b_t_n_s d-flex flex-column d-flex flex-column">
            <div class="button bt_n4 my-2 ta" @click="nextStep">Next</div>
            <button class="button_preve ta" @click="previousStep">
              Previous
            </button>
          </div>
        </fieldset>

        <fieldset
          class="section fieldset mt-5 is-active"
          v-if="currentStep === 4"
        >
          <Fsetup />
          <div class="b_t_n_s d-flex flex-column">
            <div class="button bt_n2 my-2" @click="nextStep">Next</div>
            <button class="button border-0 mb-2">save</button>
            <button class="button_preve" @click="previousStep">Previous</button>
          </div>
        </fieldset>
        <fieldset
          class="section fieldset is-active mt-5"
          v-if="currentStep === 5"
        >
          <div
            class="d-flex justify-content-between align-items-center flex-column"
          >
            <div
              class="left d-flex justify-content-between align-items-center coll__"
            >
              <div
                class="d-flex justify-content-between align-items-center coll_ coll_- mr-5"
              >
                <input type="text" placeholder="service title" class="mx-2" />
              </div>
              <div
                class="d-flex justify-content-between align-items-center coll_"
              >
                <input type="text" placeholder="cost" class="mx-2" />
                <input type="text" placeholder="estimated time" class="mx-2" />
                <button class="bntnt mx-2">-</button>
              </div>
            </div>
            <div
              class="btns__ d-flex justify-content-between align-items-center"
            >
              <button class="bntnt mx-2" @click="toglemod($event)">+</button>
            </div>
          </div>
          <div class="b_t_n_s d-flex flex-column">
            <div class="button bt_n2 my-2" @click="nextStep">Next</div>
            <button class="button border-0 mb-2">save</button>
            <button class="button_preve" @click="previousStep">Previous</button>
          </div>
        </fieldset>
        <fieldset
          class="section fieldset mt-5 is-active nmn"
          v-if="currentStep === 6"
        >
          <div class="parent_div position-relative">
            <div class="d-flex justify-content-between align-items-center">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="employee name"
              />
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <label
                for="e3"
                class="text-left pl-2 d-flex align-items-center vv"
              >
                <p class="m-0 text-secondary" style="font-size: 11px">
                  employee picture
                </p>
                <input type="file" name="email" id="e3" placeholder="" />
              </label>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <input
                type="text"
                name="desc"
                id="name"
                placeholder="description"
              />
            </div>
            <div
              class="m-auto w-25 btns__ d-flex justify-content-center align-items-center"
            >
              <button class="bntnt mx-2">+</button>
            </div>
            <button
              class="bntnt mx-2 position-absolute"
              style="top: 10px; right: -80px"
            >
              -
            </button>
          </div>
          <div class="b_t_n_s d-flex flex-column">
            <div class="button bt_n4 my-2" @click="nextStep">Next</div>
            <button class="button border-0 mb-2">save</button>
            <button class="button_preve" @click="previousStep">Previous</button>
          </div>
        </fieldset>

        <fieldset
          class="section fieldset is-active mt-5"
          v-if="currentStep === 7"
        >
          <h5 class="my-3">
            what is the allowable waiting time before the customer is
            transferred to the no show list
          </h5>
          <select name="" id="msms" class="mint">
            <option value="">how many minute</option>
            <option value="">5 minute</option>
            <option value="">10 minute</option>
            <option value="">15 minute</option>
            <option value="other">other</option>
          </select>
          <input
            type="number"
            name="name"
            id="name"
            class="nummin"
            placeholder="other time"
          />
          <div class="b_t_n_s d-flex flex-column">
            <div class="button bt_n4 my-2" @click="nextStep">Next</div>
            <button class="button_preve" @click="previousStep">Previous</button>
          </div>
        </fieldset>

        <fieldset
          class="section fieldset mt-5 is-active"
          v-if="currentStep === 8"
        >
          <div
            class="d-flex justify-content-between align-items-center flex-wrap amount__"
          >
            <p class="mt-1">Is it mandatory to pay a to enter the tabor?</p>
            <div class="sw mr-4">
              <input type="checkbox" hidden="hidden" id="username1" />
              <label class="switch" for="username1"></label>
            </div>
          </div>
          <div
            class="d-flex justify-content-left align-items-center flex-wrap amount__"
          >
            <p class="mt-2">Amount paid to be deducted from invoice</p>
            <input
              style="width: 230px"
              type="text"
              name="name"
              id="name"
              placeholder="**"
            />
          </div>
          <div class="b_t_n_s d-flex flex-column">
            <div class="button bt_n4 my-2" @click="nextStep">Next</div>
            <button class="button border-0 mb-2">save</button>
            <button class="button_preve" @click="previousStep">Previous</button>
          </div>
        </fieldset>

        <fieldset
          class="section fs_ fieldset mt-5 is-active"
          v-if="currentStep === 9"
        >
          <h3>incase of cancelation the customer will receive full refund</h3>
          <div class="butu">
            <button
              style="
                background-color: #5f5aff;
                padding: 10px;
                border-radius: 10px;
                margin: 0 8px;
                border: none;
                color: white;
              "
            >
              Yes
            </button>
            <button
              style="
                background-color: #fd0bb4;
                padding: 10px;
                border-radius: 10px;
                margin: 0 8px;
                border: none;
                color: white;
              "
              class="no_"
              @click="toglemoda"
            >
              no
            </button>
          </div>
          <div class="" id="show_show">
            <p class="mr-4 mt-2"></p>
            <select
              class="w-100 form-control"
              v-if="hide"
              name=""
              id="loop"
            ></select>
          </div>
          <div class="b_t_n_s d-flex flex-column">
            <div class="button bt_n4 my-2" @click="nextStep">Next</div>
            <div class="button bt_n4 my-2">Save</div>
            <button class="button_preve" @click="previousStep">Previous</button>
          </div>
        </fieldset>

        <fieldset
          class="section fieldset mt-5 is-active"
          v-if="currentStep === 10"
        >
          <h3>adding another branch</h3>
          <h5 style="font-size: 15px">do you want to add another branch?</h5>
          <div class="butu">
            <button
              class="button bt_n4"
              style="
                background-color: #5f5aff !important;
                padding: 10px;
                border-radius: 10px;
                margin: 0 8px;
                border: none;
                color: white;
              "
            >
              Yes
            </button>
            <button
              class="btn_noo"
              style="
                background-color: #fd0bb4;
                padding: 10px;
                border-radius: 10px;
                margin: 0 8px;
                border: none;
                color: white;
              "
              @click="toglemoda"
            >
              no
            </button>
          </div>
          <div class="b_t_n_s d-flex flex-column">
            <button class="button bt_n4 my-2" id="hide_hide" v-if="hide">
              Submit
            </button>
            <button class="button bt_n4 my-2">Save</button>
            <button class="button_preve" @click="previousStep">Previous</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import {
  hideElements,
  showHideElement,
  handleMintChange,
  showPopup3,
  closePopup3,
  setupSwiper,
  setupLabelClick,
  setupFormNavigation,
} from "../components/jsvue/opration";
$(document).ready(function () {
  hideElements();
  showHideElement();
  handleMintChange();
  showPopup3();
  closePopup3();
  setupSwiper();
  setupLabelClick();
  setupFormNavigation();
});
import Fsetup from "../layout/Fsetup.vue";
import Stetwo from "../layout/Stetwo.vue";
export default {
  name: "test",
  data() {
    return {
      currentStep: 1, // Start with the first step
      closePopup: false,
      hide: false,
      tables: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  },
  components: { Fsetup, Stetwo },
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
  methods: {
    nextStep() {
      // Increase currentStep by 1 to move to the next step
      this.currentStep++;
    },
    previousStep() {
      // Decrease currentStep by 1 to move to the previous step
      this.currentStep--;
    },
    toglemod(event) {
      event.preventDefault(); //
      this.closePopup = !this.closePopup;
    },
    toglemoda(event) {
      event.preventDefault(); //
      this.hide = !this.hide;
    },
  },
};
</script>

<style scoped>
#msms {
  display: block;
  padding: 10px;
  margin: 10px auto;
  background-color: #f1f1f1;
  border: none;
  outline: none;
  font-size: 14px !important;
  font-family: "Open Sans", sans-serif !important;
  width: 100%;
}

input:checked + .switch {
  background: #72da67;
}
@media (max-width: 477px) {
  .stepss {
    width: 44%;
  }
  .form-wrapper .section.is-active {
    width: 90%;
  }
  .ta {
    width: 46%;
  }
  .tabels__ {
    width: 46%;
  }
}

input:checked + .switch::before {
  left: 27px;
  background: #fff;
}

input:checked + .switch:active::before {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 150, 136, 0.2);
}

.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user .para p {
  margin: 0;
}

.para p:nth-child(1) {
  font-size: 15px;
}

.para p:nth-child(2) {
  font-size: 13px;
}

header {
  border: none;
  padding: 15px 0;
}

.main-content {
  background: #f8f8fa;
}

/* ما تاخدها عالcss */
.data_card {
  margin: 90px 0 20px !important;
  box-shadow: 0 0 10px #00000071;
  position: relative;
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
}

.now p {
  margin: 0;
}

.data_person .d-flex p {
  font-size: 55px;
  margin: 0;
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

/* dskvkds */
.names {
  background-color: white;
  padding: 10px;
  margin-top: 30px;
  width: 90%;
  border-radius: 20px;
}

header {
  z-index: 1;
}

.name {
  background-color: #f8f8fa;
  padding: 10px 25px;

  border-radius: 15px;
}

.name p {
  margin: 0;
  font-size: 14px;
}

.view_all {
  background-color: transparent;
  height: fit-content;
  font-size: 14px;
  border: none;
}

.content-body {
  border-bottom: 10px solid white;
  height: fit-content;
  position: relative;
}

body {
  background-color: #f8f8fa;
}

.container {
  overflow: hidden;
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

/* select tabel */
.select_ {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0 1em;
  color: black;
  background-color: #f8f8fa;
  background-image: none;
  cursor: pointer;
}

/* Remove IE arrow */
.select_::-ms-expand {
  display: none;
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

/* Transition */
.select:hover::after {
  color: #f39c12;
}

table {
  background-color: #f8f8fa;
}

table td {
  width: 170px;
  padding: 10px 10px;
  border: 10px solid #f8f8fa;
}

table th {
  width: 80px;
  padding: 20px 10px;
  border: 10px solid #f8f8fa;
}

table tr {
  background-color: white;
  border-radius: 10px !important;
  padding: 20px;
}

.checkbox {
  width: fit-content !important;
}

.tabels__ {
  margin-bottom: 150px !important;
}

.content-sidepar a {
  padding: 10px 15px;
  width: 100%;
  border-radius: 10px;
  color: black;
}

/* COLUMNS */

.col {
  display: block;
  float: left;
  margin: 0 0 0 1.6%;
}

.col:first-of-type {
  margin-left: 0;
}

.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after {
  clear: both;
}

.cf {
  zoom: 1;
}

@media (min-width: 390px) and (max-width: 480px) {
  main {
    /* overflow: hidden; */
  }
}

@media (max-width: 390px) {
  main {
    /* overflow: hidden; */
  }

  .fieldset {
    width: 80% !important;
  }

  .bt_n {
    width: 81%;
  }

  .container {
    padding: 0 !important;
  }

  .para p:nth-child(1) {
    font-size: 10px;
    width: fit-content !important;
    margin: 0;
    padding: 0;
  }

  .para p:nth-child(2) {
    font-size: 10px;
    width: fit-content !important;
    margin: 0;
    padding: 0;
  }
}

.wrapper {
  width: 100%;
  margin: 30px 0;
}

/* STEPS */

.steps {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  text-align: center;
}

.steps li {
  display: inline-block;
  margin: 20px;
  color: #ccc;
  padding-bottom: 5px;
}

.steps li.is-active {
  border-bottom: 1px solid #3498db;
  color: #3498db;
}

/* FORM */

.buttons {
  position: relative;
  bottom: 110px;
}

.logo {
  position: relative;
}

main {
  overflow: hidden;
}

.table {
  position: relative;
  width: 188%;
  /* right: 86px; */
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

table td {
  min-width: 180px !important;
}

.rowspan {
  min-width: 100px !important;
}

body {
  height: 100%;
}

.cvcvc label {
  display: block;
  margin: 10px auto;
  background-color: #f1f1f1;
  border: none;
  outline: none;
  font-size: 14px !important;
  font-family: "Open Sans", sans-serif !important;
  height: 42px;
  width: 20%;
  margin-left: 5px;
  cursor: pointer;
}

.nmn label {
  display: block;
  margin: 10px auto;
  background-color: #f1f1f1;
  border: none;
  outline: none;
  font-size: 14px !important;
  font-family: "Open Sans", sans-serif !important;
  height: 42px;
}

.cvv label {
  display: block;
  margin: 10px auto;
  background-color: #f1f1f1;
  border: none;
  outline: none;
  font-size: 14px !important;
  font-family: "Open Sans", sans-serif !important;
  height: 42px;
  width: 40%;
  margin-left: 5px;
  cursor: pointer;
}

@media (min-width: 390px) and (max-width: 480px) {
  .head .container div:nth-child(2) {
    width: 160px !important;
  }

  .head .container div:nth-child(1) h2 {
    font-size: 20px !important;
    position: relative;
    right: 10px;
  }

  .para p:nth-child(1) {
    font-size: 11px;
  }

  .para p:nth-child(2) {
    font-size: 10px;
  }
}

.bntnt {
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #fd0bb4;
}

.show_show {
  display: flex;
}
</style>
