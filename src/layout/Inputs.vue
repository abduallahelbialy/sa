<template>
   <section class="sec8">
        <div class="container">
          <div class="form-card-index2 wow fadeIn col-lg-12">
            <div class="d-flex align-items-center justify-content-start">
              <img src="../assets/Group 44504.png" alt="" />
              <div class="paragraph6">
                <h4>DON'T BE SHY</h4>
                <p>What are you waiting for !! Contact us now</p>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-lg-12 form-sec7">
                <form action="" >
                  <div class="d-flex w-100 justify-content-left my-4 eds">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="your Name"
                        id="input-index"
                        class="ii"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="category"
                        placeholder="your mobile number"
                        id="input-index"
                        class="ii"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        name="category"
                        placeholder="your email"
                        id="input-index"
                        class="ii"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <textarea
                      name=""
                      id="textarea-index"
                      class="ti"
                      cols="50"
                      rows="10"
                      required
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button type="submit" class="save-btn-8">send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
name:"oneInput"
}
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
