<template>
    <section
        class="sec5 wow rotateInUpLeft col-lg-12 d-flex align-items-center justify-content-between"
      id="contact" >
        <div class="col-lg-4 left-sec5 wow bounceIn">
          <p>Are you a business owner ! join us</p>
        </div>
        <div class="col-lg-8 right-sec5">
          <form action="" >
            <div class="d-flex justify-content-left my-4 flex-wrap">
              <div class="form-group">
                <label for="">your name</label> <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="input-index"
                  required
                />
              </div>
              <div class="form-group">
                <label for="">Category</label> <br />
                <select
                  name="category"
                  id="input-index"
                  class="wid other_choice"
                  required
                >
                  <option value="">Women's Salons</option>
                  <option value="">Men's Salons</option>
                  <option value="">Restaurants</option>
                  <option value="">Clinics</option>
                  <option value="">SPA</option>
                  <option value="">Customer Service Companies</option>
                  <option value="">Car Service</option>
                  <option value="">car wash</option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-left my-4 flex-wrap">
              <div class="form-group">
                <label for="">Company / institution name</label> <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Company name"
                  id="input-index"
                  required
                />
              </div>
              <div class="append_"></div>
              <div class="form-group hd">
                <label for="">your mobile number</label> <br />
                <input
                  type="number"
                  name="category"
                  placeholder="number"
                  id="input-index"
                  class="i_i i_i2"
                  required
                />
              </div>
            </div>
            <div class="d-flex flex-wrap app">
              <div class="form-group">
                <label for="">your email</label> <br />
                <input
                  type="email"
                  name="category"
                  placeholder="email"
                  id="input-index"
                  required
                />
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="save-btn">Send</button>
            </div>
          </form>
        </div>
      </section>
      
</template>

<script>
export default {
name:"Twoinput",
}
</script>

<style scoped>
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
</style>