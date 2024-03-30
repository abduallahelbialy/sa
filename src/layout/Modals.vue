<template>
   <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div
        class="modal-content"
        style="background: linear-gradient(to left, var(--blue), var(--pink))"
      >
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <h3 class="mb-5 text-white fs-5 text-center">add your data</h3>
        <div class="modal-body">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Your Phonr"
            />
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Confirmation
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Two modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-contentt">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            class="d-flex justify-content-between align-items-center shadow-lg card-modal"
         v-for="mo in cardmodal" :key="mo.id" >
            <p>resturant</p>
            <input type="text" value="20$" />
          </div>
        </div>
        <div class="modal-footerr" >
          <button
          style="background-color: #fd0bb4;"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#customModal">Save</button>
        </div>
      </div>
    </div>
  </div>
<!-- three modal -->
<!-- Modal -->
<div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-contentr">
      <div class="modal-header">
        <h5 class="modal-title" id="customModalLabel">Edit Payment method</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div class="form_payment">
            <div class="body_form_payment">
                <form action="" >
                    <div class="form-group d-flex align-items-center justify-content-left">
                        <div class="d-flex align-items-center justify-content-left bb_">
                            <label for="" class="me-4 text-nowrap">Card Type</label>
                            <select name="" id="" class="select_input__">
                                <option value="">visa</option>
                                <option value="">riyad</option>
                                <option value="">palpay</option>
                                <option value="">fathi</option>
                            </select>
                        </div>
                        <div class="d-flex justify-content-center align-items-center pp">
                            <div class="d-flex justify-content-between align-items-center imgggg">
                                <img class="mx-3" src="../assets/mastercard.png" alt="">
                                <img src="../assets/visa.png" alt="">
                            </div>
                            <label for="f" id="file_">
                                <p class="m-0">صورة البطاقة</p>
                                <input type="file" name="" id="f">
                            </label>
                        </div>
                    </div>
                    <div class="from-group mb-3">
                        <label for="">Card Holder</label>
                        <input type="text" placeholder="Lorem Lorem" name="" class="input_class">
                    </div>
                    <div class="from-group">
                        <label for="">Credit\debit Card Number</label>
                        <div class="position">
                            <img src="../assets/mastercard.png" alt="">
                            <input type="number" placeholder="0000.0000.0000.0000" name="" class="input_class">
                        </div>
                    </div>
                    <div class="form-group w-100 d-flex align-items-center justify-content-between">
                        <div class="input-group w-100">
                            <label for="">Expiration Month And Year</label>
                            <input type="text" name="" placeholder="04/04" class="input_class_2">
                        </div>
                        <div class="input-group w-100" style="display: block;">
                            <label for="">CVC</label><br>
                            <input type="number" name="" placeholder="737" class="input_class_2"/>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-item-center">
                        <p style="position: relative;top: 10px;" class="span__">All Rights Are Save <span
                                style="color: var(--pink);">Tabor</span></p>
                       
                    </div>
                </form>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        
         <div class="buttons_form_payment gap-3 d-flex">
                            <button class="cans_btn" type="button" data-bs-dismiss="modal">Cancel</button>
                            <button class="conf_btn" type="button"  data-bs-toggle="modal" data-bs-target="#myCustomModal">Confirmation</button>
                        </div>
      </div>
    </div>
  </div>
</div>
<!-- four Modal -->
<div class="modal fade" id="myCustomModal" tabindex="-1" aria-labelledby="myCustomModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  <div class="bg-white card_succ">
                
                <div class="img_succ">
                    <h4 class="my-4 mx-2" style="color: var(--pink); font-size:15px;">Want to save your card data</h4>
                </div>
            </div>      </div>
     
    <div class=" d-flex gap-2 justify-content-center mb-3">

     <button class="popup_btn ques_yes_popup mt-4  " style="width: 30%;" data-bs-toggle="modal" data-bs-target="#myOtherModal">Yes</button>
            <button class="popup_btn ques_no_popup mt-4" data-bs-dismiss="modal" style="width: 30%;" >No</button>
    </div>
    </div>
  </div>
</div>

<!-- fiv Modal -->
<div class="modal fade" id="myOtherModal" tabindex="-1" aria-labelledby="myOtherModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-contentrr">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
 <div class="success_popup">
            <div class="bg-white card_succ">
             
                <div class="img_succ">
                    <img src="../assets/Group 38912.png" alt="">
                    <h4 class="mt-4" style="color: var(--pink);">You are in tabor</h4>
                </div>
                <div class="data_succ">
                    <div class="d-flex justify-content-between align-items-center my-3 pop_up_col">
                        <p>your turn in tabor</p>
                        <p>12</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center my-3 pop_up_col">
                        <p>staff name</p>
                        <p>name of staff</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center my-3 pop_up_col">
                        <p>paid amount</p>
                        <p style="color: var(--pink);font-weight: bold;">2$</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center my-3 pop_up_col">
                        <p>place</p>
                        <p><a class="text-dark mr-2"
                                href="https://www.google.com/maps/@31.4950695,34.4752707,15z?entry=ttu"><i
                                    class="fas fa-map-marker-alt"></i></a>Jeddah Street</p>
                    </div>
                </div>
            </div>
        </div> 
       </div>
      <div class="modal-footer d-flex justify-content-center">
                    <button class="popup_btn close_success_popup mt-4" style="width: 100%;" data-bs-dismiss="modal">wait for your appointment</button>

      </div>
    </div>
  </div>
</div>

<!-- ----end modals--- -->
</template>

<script>
export default {
name:"Modals",
data (){
    return{
              cardmodal: [{ id: 1 }, { id: 2 }, {id:3},],

    }
}
}
</script>

<style scoped>
.modal-footerr {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    justify-content: flex-start;
    padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);
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
@media (max-width:477px) {
  .modal-contentr,.modal-contentrr{
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
