<template>
  <div class="input-cont">
    <div class="signup-close">
      <div class="modal-close">
        <img src="../../assets/img/sms.svg" alt="" />
        <img src="../../assets/img/closebtn.svg" alt="" />
      </div>
      <span class="signup-text">Credit card info</span>
    </div>
    <div class="credit-card-form">
      <h1 v-if="getUserName">Hello {{ getUserName }}</h1>
      <div class="form-group">
        <label for="card-number">Card Number</label>
        <input type="text" id="card-number" placeholder="Card number" v-model="card.number" required />
      </div>
      <div class="form-group">
        <label for="card-holder">Card Holder</label>
        <input type="text" id="card-holder" placeholder="Card holder's name" v-model="card.name" required />
      </div>
      <div class="form-row">
        <div class="form-group form-column">
          <label for="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" placeholder="MM/YY" v-model="card.exp_date" required />
        </div>
        <div class="form-group form-column">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="CVV" v-model="card.ccv" maxlength="3" required />
        </div>
      </div>
      <button type="submit" class="click-button" @click="process" :disabled="isDisabled">Pay Now</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { ref, computed } from "vue";
  import { useUserStore } from "../../store/user";

  const { getUserName } = storeToRefs(useUserStore());
  const card = ref({
    number: "",
    name: "",
    exp_date: "",
    ccv: "",
  });

  const isDisabled = computed((): Boolean => {
    return Object.values(card.value).some((x) => x === null || x === "");
  });

  const process = (): void => {
    console.log(card.value, "card information");
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

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 29px;
  }
  .relative {
    position: relative;
  }
  .credit-card-form {
    max-width: 400px;
    margin: auto;
    padding: 1em;
    border-radius: 10px;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    color: #424242;
    align-content: center;
  }

  .credit-card-form h2 {
    margin-bottom: 10%;
    font-size: 24px;
  }

  .credit-card-form .form-group {
    margin-bottom: 15px;
  }

  .credit-card-form label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
    color: #777;
  }

  .credit-card-form input[type="text"],
  .credit-card-form select {
    height: 56px;
    padding-left: 16px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #ccc;
    background: var(--neutral-neutral-100, #fff);
  }

  .credit-card-form .form-row {
    display: flex;
  }

  .credit-card-form button[type="submit"] {
    width: 100%;
    padding: 14px;
    background-color: #1187f4;
    color: #fff;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: "Montserrat", sans-serif;
  }

  .credit-card-form button[type="submit"]:focus {
    outline: none;
    font-family: "Montserrat", sans-serif;
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
    opacity: 0.2;
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
