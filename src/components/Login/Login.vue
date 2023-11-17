<template>
  <div class="input-cont">
    <div class="signup-close">
      <div class="modal-close">
        <img src="../../assets/img/sms.svg" alt="" />
        <img src="../../assets/img/closebtn.svg" alt="" />
      </div>
      <span class="signup-text">SIgn-Up, It's Free!</span>
    </div>
    <div class="signup-decription">
      <div class="signup-title">
        <span class="signup-title-text">SIgn-Up</span>
        <span class="signup-title-text">Login</span>
      </div>
      <div class="inputs">
        <div class="relative">
          <input
            v-model="userName"
            type="text"
            id="login"
            class="fadeIn second email"
            name="login"
            @blur="validateUsername"
            @input="validateUsername"
            placeholder="Email"
            required
          />
          <transition name="fade">
            <div v-if="errors.userName" class="error">{{ errors.userName }}</div>
          </transition>
        </div>
        <div class="relative">
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            id="password"
            class="fadeIn third password"
            name="login"
            @blur="validatePassword"
            @input="validatePassword"
            required
          />
          <transition name="fade">
            <div v-if="errors.password" class="error">{{ errors.password }}</div>
          </transition>
        </div>
      </div>
      <div class="button-cont">
        <button @click="login" class="button-cont create-button" :disabled="isDisabled">Create My Account</button>
      </div>
      <LoginFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  import { useUserStore } from "../../store/user";
  import LoginFooter from "./LoginFooter.vue";

  const { loginUser } = useUserStore();
  const userName = ref("");
  const password = ref("");

  const router = useRouter();

  const errors = ref({
    userName: "",
    password: "",
  });

  const validateUsername = (): void => {
    if (!userName.value) errors.value.userName = "User name is required";
    else errors.value.userName = "";
  };
  const validatePassword = (): void => {
    if (!password.value) errors.value.password = "Password is required";
    else errors.value.password = "";
  };
  const isDisabled = computed((): Boolean => !password.value || !userName.value);
  const login = (): void => {
    loginUser(userName.value, password.value).then(() => {
      router.push({ path: "/", replace: true });
    });
  };
</script>
<style scoped>
  .signup-close {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 16px;
  }
  .modal-close {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 14px;
  }
  .signup-text {
    color: #1187f4;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .signup-title {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 29px;
  }
  .signup-title-text {
    color: #1187f4;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 29px;
  }
  .relative {
    position: relative;
  }
  .email {
    background-image: url("../../assets/img/email.svg");
    background-repeat: no-repeat;
    background-position: 10px center;
  }
  .password {
    background-image: url("../../assets/img/pass.svg"), url("../../assets/img/notsee.svg");
    background-repeat: no-repeat;
    background-position: 10px center, right 10px center;
  }
  input {
    height: 56px;
    padding-left: 52px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #ccc;
    background: var(--neutral-neutral-100, #fff);
  }
  .create-button {
    cursor: pointer;
    border-radius: 25px;
    opacity: 0.35;
    background: #1187f4;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    max-width: 240px;
    height: 50px;
  }
  .button-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 29px;
  }
  .image-container {
    position: relative;
  }

  .line-img {
    display: block;
    width: 100%; /* Make sure the image takes up the full width of the container */
    height: auto;
  }

  .centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 20px;
  }
  a {
    color: #1187f4;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }

  /* STRUCTURE */

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    height: 80vh;
    padding: 20px;
  }

  #formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding-right: 30px;
    position: relative;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    text-align: center;
    height: 100%;
  }
  /* TABS */

  /* FORM TYPOGRAPHY*/

  button:disabled {
    background: gainsboro;
    box-shadow: unset;
    cursor: not-allowed;
  }

  .error {
    color: #cc0033;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0 0;
    position: absolute;
    bottom: -16px;
    left: 5px;
  }

  /* ANIMATIONS */

  /* Simple CSS3 Fade-in Animation */
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fadeIn {
    opacity: 0;
    -webkit-animation: fadeIn ease-in 1;
    -moz-animation: fadeIn ease-in 1;
    animation: fadeIn ease-in 1;

    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    animation-duration: 1s;
  }

  .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Simple CSS3 Fade-in Animation */
  .underlineHover:after {
    display: block;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: #56baed;
    content: "";
    transition: width 0.2s;
  }

  .underlineHover:hover {
    color: #0d0d0d;
  }

  .underlineHover:hover:after {
    width: 100%;
  }

  /* OTHERS */

  *:focus {
    outline: none;
  }

  #icon {
    width: 60%;
  }

  * {
    box-sizing: border-box;
  }
</style>

<style lang="scss" scoped></style>
