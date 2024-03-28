<template>
  <main style="margin-top: 50px">
    <div class="container">
      <div class="row">
        <div
          class="loginCard bg-white d-flex justify-content-between align-item-center col-md-12 mx-auto py-5 px-4"
          style="height: 86%"
        >
          <div class="col-lg-6 img"></div>
          <div class="col-lg-5 form">
            <div class="cardForm p-4">
              <form @submit.prevent="submitForm">
                <h2>Login</h2>
                <div class="form-group" :class="{ 'has-error': !isUsernameValid }">
                  <img src="../assets/Iconly-Broken-Profile.svg" alt="" />
                  <input
                    class="input-login-style"
                    type="number"
                    v-model="username"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="form-group" :class="{ 'has-error': !isPasswordValid }">
                  <img src="../assets/svgexport-17 (50).svg" alt="" />
                  <input
                    class="input-login-style"
                    type="password"
                    v-model="password"
                    placeholder="Password"
                  />
                </div>
                <div class="d-flex justify-content-between links_login align-item-center">
                  <div class="check d-flex align-item-center">
                    <input
                      class="input-login-style"
                      type="checkbox"
                      name="remember"
                      id=""
                    />
                    
                    <span>Remember me</span>
                  </div>
                  <div class="forgot">
                    <router-link to="/Forget">Forget Password?</router-link>
                  </div>
                  
                </div>
                <button type="submit" class="btn-light mt-3">Login</button>
              </form>
            </div>
               <div v-if="showErrorMessage" class="error-message text-center">
              Please enter valid username and password.
            </div>
           
            <div class="sign-up d-flex align-items-center justify-content-center">
              <p class="text-black-50">
                New here?<router-link to="/register" class="text-dark">Sign Up</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
   data() {
    return {
      username: "",
      password: "",
      showErrorMessage: false
    };
  },
  computed: {
    isUsernameValid() {
      return /^\d{10}$/.test(this.username);
    },
    isPasswordValid() {
      return this.password.length >= 6;
    }
  },
 methods: {
    submitForm() {
      if (this.isUsernameValid && this.isPasswordValid) {
        console.log("Form submitted successfully!");
        this.$router.push('/');
        this.username = "";
        this.password = "";
        this.showErrorMessage = false;
      } else {
        this.showErrorMessage = true;
      }
    }
  }
};
</script>

<style scoped>
@media (max-width: 477px) {
  .loginCard {
    width: 90%;
  }
  .error-message[data-v-08aaad4e] {
    color: black;
    margin-top: 10px;
    font-size: 13px;
}
  .input-login-style {
    padding: 7px 7px 7px 57px !important;
    border-radius: 10px;
    width: 100% !important;
    margin: auto;
    border: none;
  }
  .input-login-style::placeholder {
    font-size: 12px;
  }
  .check span {
    font-size: 10px !important;
    text-wrap: nowrap;
  }
  .check {
    width: 37% !important;
    justify-content: left !important;
    align-items: center;
  }
  .btn-light {
    width: 66% !important;
  }
}
@media (max-width:799px) {
    .loginCard {
   
    display: flex !important;
    justify-content: center !important;
}
}
@media (max-width:992px) {
    .loginCard {
   
    display: flex !important;
    justify-content: center !important;
}
}
.has-error input {
  border-color: black;
}
.error-message {
  color: black;
  margin-top: 10px;
}
.cardForm {
  background: linear-gradient(to right, #5f5aff, #fd0bb5);
}
.img {
  background-image: url("../assets/Group 44490.png");
  background-size: cover;
  background-repeat: no-repeat;
}

main {
  height: 615px;
}

main .container {
  height: 615px;
}

main .container .row {
  height: 685px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginCard {
  border-radius: 40px;
  margin-bottom: 180px !important;
  color: white;
  background: linear-gradient(to right, #5f5aff, #fd0bb5);

  padding: 70px 50px !important;
  /* min-height: 620px !important; */
}

.cardForm {
  border-radius: 20px;
  text-align: center;
  padding: 49px 35px !important;
  height: 95%;
  width: 87%;
  position: relative;
}

.cardForm h2 {
  margin: 20px 0 45px;
}

.form-group {
  position: relative;
  margin: 15px auto;
}

.input-login-style {
  padding: 7px 7px 7px 35px;
  border-radius: 10px;
  width: 90%;
  margin: auto;
  border: none;
}

.form-group img {
  position: absolute;
  left: 29px;
  top: 10px;
  width: 14px;
}

.btn-light {
  padding: 10px 100px;
  color: #fd0bb5;
  border-radius: 10px;
  border: none;
  position: absolute;
  bottom: 30px;
  left: 97px;
}

.check {
  width: 50%;
  justify-content: left !important;
  font-size: 12px;
  align-items: center;
}

.links_login {
  padding: 10px 10px 30px;
}

.links_login div a,
span {
  color: white;
  font-weight: 500;
}

.check input {
  width: fit-content;
  padding: 0;
  margin: 0;
  margin: 0 10px 0 10px;
}

.forgot {
  margin: 0 5px 0 0px;
  font-size: 12px;
}

.sign-up {
  padding: 30px 0 20px 0;
  text-align: center;
}

.sign-up p {
  margin: 0;
  padding: 0;
  color: #c7c7c7;
  font-weight: 600;
}

.sign-up p a {
  color: #fd0bb5;
  margin-left: 12px;
}

.form {
  display: flex;
  flex-direction: column;
}

@media (min-width: 994px) and (max-width: 1201px) {
  .cardForm {
    border-radius: 20px;
    text-align: center;
    padding: 49px 35px !important;
    height: 95%;
    width: 100%;
    position: relative;
  }

  .cardForm h2 {
    margin: 20px 0 45px;
  }

  .form-group {
    position: relative;
    margin: 15px auto;
  }

  .input-login-style {
    padding: 7px 7px 7px 35px;
    border-radius: 10px;
    width: 90%;
    margin: auto;
    border: none;
  }

  .form-group img {
    position: absolute;
    left: 29px;
    top: 10px;
    width: 14px;
  }

  .btn-light {
    padding: 10px 100px;
    color: #fd0bb5;
    border-radius: 10px;
    border: none;
    position: absolute;
    bottom: 30px;
    left: 45px;
  }

  .check {
    width: 50%;
    justify-content: left !important;
    font-size: 10px;
    align-items: center;
  }

  .links_login {
    padding: 10px 10px 30px;
  }

  .links_login div a,
  span {
    color: white;
    font-weight: 500;
  }

  .check input {
    width: fit-content;
    padding: 0;
    margin: 0;
    margin: 0 4px 0 0px;
  }

  .forgot {
    margin: 0 5px 0 0px;
    font-size: 10px;
  }
}

@media (min-width: 605px) and (max-width: 767px) {
  .cardForm {
    border-radius: 20px;
    text-align: center;
    padding: 49px 35px !important;
    height: 95%;
    width: 100% !important;
    position: relative;
  }

  .cardForm h2 {
    margin: 20px 0 45px;
  }

  .form-group {
    position: relative;
    margin: 15px auto;
  }

  .input-login-style {
    padding: 7px 7px 7px 35px;
    border-radius: 10px;
    width: 90%;
    margin: auto;
    border: none;
  }

  .form-group img {
    position: absolute;
    left: 29px;
    top: 10px;
    width: 14px;
  }

  .btn-light {
    padding: 10px 74px;
    color: #fd0bb5;
    border-radius: 10px;
    border: none;
    position: absolute;
    bottom: 30px;
    left: 52px;
  }

  .check {
    width: 50%;
    justify-content: left !important;
    font-size: 10px;
    align-items: center;
  }

  .links_login {
    padding: 10px 10px 30px;
  }

  .links_login div a,
  span {
    color: white;
    font-weight: 500;
  }

  .check input {
    width: fit-content;
    padding: 0;
    margin: 0;
    margin: 0 4px 0 0px;
  }

  .forgot {
    margin: 0 5px 0 0px;
    font-size: 10px;
    position: relative;
    top: 6px;
  }
}

@media (min-width: 768px) and (max-width: 994px) {
  .cardForm {
    border-radius: 20px;
    text-align: center;
    padding: 49px 35px !important;
    height: 95%;
    width: 100% !important;
    position: relative;
  }

  .cardForm h2 {
    margin: 20px 0 45px;
  }

  .form-group {
    position: relative;
    margin: 15px auto;
  }

  .input-login-style {
    padding: 7px 7px 7px 35px;
    border-radius: 10px;
    width: 90%;
    margin: auto;
    border: none;
  }

  .form-group img {
    position: absolute;
    left: 29px;
    top: 10px;
    width: 14px;
  }

  .btn-light {
    padding: 10px 74px;
    color: #fd0bb5;
    border-radius: 10px;
    border: none;
    position: absolute;
    bottom: 30px;
    left: 45px;
  }

  .check {
    width: 50%;
    justify-content: left !important;
    font-size: 10px;
    align-items: center;
  }

  .links_login {
    padding: 10px 10px 30px;
  }

  .links_login div a,
  span {
    color: white;
    font-weight: 500;
  }

  .check input {
    width: fit-content;
    padding: 0;
    margin: 0;
    margin: 0 4px 0 0px;
  }

  .forgot {
    margin: 0 5px 0 0px;
    font-size: 10px;
    position: relative;
    top: 6px;
  }
}

@media (min-width: 390px) and (max-width: 480px) {
}

@media (min-width: 481px) and (max-width: 605px) {
  .cardForm {
    border-radius: 20px;
    text-align: center;
    padding: 49px 35px !important;
    height: 95%;
    width: 100% !important;
    position: relative;
  }

  .cardForm h2 {
    margin: 20px 0 45px;
  }

  .form-group {
    position: relative;
    margin: 15px auto;
  }

  .form-group {
    width: fit-content;
    position: relative;
    left: 0;
    width: 100%;
  }

  .input-login-style {
    padding: 7px 7px 7px 35px;
    border-radius: 10px;
    width: 90%;
    margin: auto;
    border: none;
  }

  .form-group img {
    position: absolute;
    left: 29px;
    top: 10px;
    width: 14px;
  }

  .btn-light {
    padding: 10px 74px;
    color: #fd0bb5;
    border-radius: 10px;
    border: none;
    position: absolute;
    bottom: 30px;
    left: 55px;
    width: 51vw;
  }

  .check {
    width: 50%;
    justify-content: left !important;
    align-items: center;
  }
  .check span {
    font-size: 12px !important;
  }
  .links_login div a {
    font-size: 12px !important;
  }
  .links_login {
    padding: 10px 10px 30px;
  }

  .links_login div a,
  span {
    color: white;
    font-weight: 500;
  }

  .check input {
    width: fit-content;
    padding: 0;
    margin: 0;
    margin: 0 4px 0 0px;
  }

  .forgot {
    margin: 0 5px 0 0px;
    font-size: 12px !important;
    position: relative;
    top: 5px;
  }
}

@media (min-width: 390px) and (max-width: 480px) {
  .cardForm {
    border-radius: 20px;
    text-align: center;
    padding: 49px 35px !important;
    height: 95%;
    width: 100% !important;
    position: relative;
  }

  .cardForm h2 {
    margin: 20px 0 45px;
  }

  .form-group {
    position: relative;
    margin: 15px auto;
  }

  .form-group {
    width: fit-content;
    position: relative;
    left: 0;
    width: 100%;
  }

  .input-login-style {
    padding: 7px 7px 7px 35px;
    border-radius: 10px;
    width: 90%;
    margin: auto;
    border: none;
  }

  .form-group img {
    position: absolute;
    left: 20px;
    top: 10px;
    width: 14px;
  }

  .btn-light {
    padding: 5px 10px;
    color: #fd0bb5;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    position: absolute;
    bottom: 40px;
    left: 50px;
    width: 20vw;
  }

  .check {
    width: 50%;
    justify-content: left !important;
    align-items: center;
  }
  .check span {
    font-size: 10px !important;
  }
  .links_login div a {
    font-size: 10px !important;
  }
  .links_login {
    padding: 10px 10px 30px;
  }

  .links_login div a,
  span {
    color: white;
    font-weight: 500;
  }

  .check input {
    width: fit-content;
    padding: 0;
    margin: 0;
    margin: 0 4px 0 0px;
  }

  .forgot {
    margin: 0 5px 0 0px;
    font-size: 12px !important;
    position: relative;
    top: 1px;
  }
}
@media (max-width: 390px) {
  .cardForm {
    border-radius: 20px;
    text-align: center;
    padding: 49px 35px !important;
    height: 95%;
    width: 100% !important;
    position: relative;
  }

  .cardForm h2 {
    margin: 20px 0 45px;
  }

  .form-group {
    position: relative;
    margin: 15px auto;
  }

  .form-group {
    width: fit-content;
    position: relative;
    left: 0;
    width: 100%;
  }
  .loginCard {
    padding: 70px 20px !important;
  }
  .input-login-style {
    padding: 7px 7px 7px 35px;
    border-radius: 10px;
    width: 90%;
    margin: auto;
    border: none;
  }

  .form-group img {
    position: absolute;
    left: 20px;
    top: 10px;
    width: 14px;
  }

  .btn-light {
    padding: 5px 10px;
    color: #fd0bb5;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    position: absolute;
    bottom: 40px;
    left: 50px;
    width: 20vw;
  }

  .check {
    width: 50%;
    justify-content: left !important;
    align-items: center;
  }
  .check span {
    font-size: 10px !important;
  }
  .links_login div a {
    font-size: 10px !important;
  }
  .links_login {
    padding: 10px 10px 30px;
  }

  .links_login div a,
  span {
    color: white;
    font-weight: 500;
  }

  .check input {
    width: fit-content;
    padding: 0;
    margin: 0;
    margin: 0 4px 0 0px;
  }

  .forgot {
    margin: 0 5px 0 0px;
    font-size: 12px !important;
    position: relative;
    top: 1px;
  }
}
</style>
