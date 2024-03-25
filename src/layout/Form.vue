<template>
  <section class="sec6">
    <div class="container">
      <div class="form-card-index col-lg-12 wow fadeIn">
        <div class="d-flex align-items-center justify-content-start">
          <img src="../assets/Group 44504.png" alt="" />
          <div class="paragraph6">
            <h4>Didn't find your favorite place! Send an invitation to join</h4>
            <p>We are honored to have you join us</p>
          </div>
        </div>
        <div class="d-flex">
          <div class="col-lg-9 form-sec6">
            <form @submit.prevent="submitForm">
              <div class="d-flex trans justify-content-left my-4">
                <div class="form-group">
                  <label for="name">Your Name</label> <br />
                  <input type="text" id="name" name="name" placeholder="Name" class="i_i" required />
                </div>
                <div class="form-group">
                  <label for="mobile">Your mobile number</label> <br />
                  <input type="text" id="mobile" name="mobile" placeholder="Your mobile number" class="i_i" required pattern="[0-9]{11}" />
                </div>
              </div>
              <div class="d-flex trans justify-content-left my-4">
                <div class="form-group">
                  <label for="company">Company / institution name</label> <br />
                  <input type="text" id="company" name="company" placeholder="Company name" class="i_i" required />
                </div>
                <div class="form-group">
                  <label for="category">Category</label> <br />
                  <select id="category" name="category" class="i_i wid other_choice2" required>
                    <option value="">Select category</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="spa">Spa</option>
                    <option value="women_salons">Women's Salons</option>
                    <option value="men_salons">Men's Salons</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="d-flex trans justify-content-left my-4">
                <div class="form-group company">
                  <label for="company_email">Company email</label> <br />
                  <input type="email" id="company_email" name="company_email" placeholder="Company email" class="i_i" required />
                </div>
                <div class="append_2"></div>
                <div class="form-group">
                  <label for="company_mobile">Company mobile number</label> <br />
                  <input type="text" id="company_mobile" name="company_mobile" placeholder="Company mobile number" class="i_i" required pattern="[0-9]{10}" />
                </div>
              </div>
              <div class="compadd"></div>
              <div class="text-center">
                <div class="col-lg-3 s6">
                  <img src="../assets/vgexport-6 (3).png" alt="" />
                  <div class=" position-relative">

                  <button type="submit" class="send
                   position-absolute">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name:"Form",
 methods: {
    submitForm() {
      
      console.log("Form submitted");
    }
  }
}
</script>

<style scoped>
/* static */
.send{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -189px);
    background: linear-gradient(to top, var(--blue), #ABA8FF);
    padding: 7px 60px;
    width: auto;
    margin-top: 20px;
    border: none;
    color: white;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -ms-border-radius: 7px;
    -o-border-radius: 7px;
}
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
  .send {
    top: 50%;
    left: 152%;
    transform: translate(-50%, 101px);
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
      .send {
    top: 50%;
    left: 152%;
    transform: translate(-50%, 101px);
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
      .send {
    top: 50%;
    left: 152%;
    transform: translate(-50%, 101px);
}
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
      .send {
    top: 50%;
    left: 152%;
    transform: translate(-50%, 101px);
}
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
    right: -311px;
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
