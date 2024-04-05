<template>
  <div class="d-flex cvcvc">
    <div class="col-lg-6 col-md-4 m-2">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Service Provider Name that will appered to customer"
      />
      <input type="text" name="email" id="email" placeholder="Company Name" />
      <select name="category" id="msms">
        <option value="">resturant</option>
        <option value="">spa</option>
        <option value="">women' Salons</option>
        <option value="">men' Salons</option>
        <option value="">other</option>
      </select>
      <div class="d-flex justify-content-between align-items-center size_w">
        <input type="text" name="email" id="email" placeholder="cr number" />
        <label
          for="e1"
          class="text-left pl-2 d-flex align-items-center justify-content-center"
          style="padding: 0 !important"
        >
          <p
            class="m-0 text-secondary"
            style="font-size: 11px; width: fit-content"
          >
            <i class="fas fa-camera"></i>
          </p>
          <input
            type="file"
            name="email"
            id="e1"
            placeholder=""
            class="d-none"
          />
        </label>
      </div>
      <div class="d-flex justify-content-between align-items-center size_w">
        <input type="text" name="email" id="email" placeholder="tax number" />
        <label
          for="e1"
          class="text-left pl-2 d-flex align-items-center justify-content-center"
          style="padding: 0 !important"
        >
          <p
            class="m-0 text-secondary"
            style="font-size: 11px; width: fit-content"
          >
            <i class="fas fa-camera"></i>
          </p>
          <input
            type="file"
            name="email"
            id="e1"
            placeholder=""
            class="d-none"
          />
        </label>
      </div>
      <div class="d-flex justify-content-between align-items-center size_w">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="wasel mail number"
        />
        <label
          for="e1"
          class="text-left pl-2 d-flex align-items-center justify-content-center"
          style="padding: 0 !important"
        >
          <p
            class="m-0 text-secondary"
            style="font-size: 11px; width: fit-content"
          >
            <i class="fas fa-camera"></i>
          </p>
          <input
            type="file"
            name="email"
            id="e1"
            placeholder=""
            class="d-none"
          />
        </label>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="attachment of signed tabor contract"
        />
        <label
          for="e1"
          class="text-left pl-2 d-flex align-items-center justify-content-center"
          style="padding: 0 !important"
        >
          <p
            class="m-0 text-secondary"
            style="font-size: 11px; width: fit-content"
          >
            <i class="fas fa-camera"></i>
          </p>
          <input
            type="file"
            name="email"
            id="e1"
            placeholder=""
            class="d-none"
          />
        </label>
      </div>
    </div>
    <div class="col-lg-6 col-md-4 m-2">
        
      <select name="country" id="msms">
        <option value="" disabled>country</option>
        <option value="">palestine</option>
        <option value="">eygpt</option>
        <option value="">sudan</option>
        <option value="">usa</option>
        <option value="">other</option>
      </select>
      <select name="city" id="msms">
        <option value="" disabled>city</option>
        <option value="">gaza</option>
        <option value="">hebron</option>
        <option value="">jerusalem</option>
        <option value="">london</option>
        <option value="">other</option>
      </select>
      <div class="d-flex justify-content-between align-items-center">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="attachment of signed tabor contract"
        />
        <label
          for="e1"
          class="text-left pl-2 d-flex align-items-center justify-content-center"
          style="padding: 0 !important"
        >
          <p
            class="m-0 text-secondary"
            style="font-size: 11px; width: fit-content"
          >
            <i class="fas fa-camera"></i>
          </p>
          <input
            type="file"
            name="email"
            id="e1"
            placeholder=""
            class="d-none"
          />
        </label>
      </div>
      <input
        type="text"
        name="google"
        id="email"
        placeholder="google location"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Setwo",
  data() {
    return {
      currentStep: 1, // Start with the first step
      closePopup: false,
      hide: false,
      tables: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
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
