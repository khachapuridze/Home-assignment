<template>
  <div>
    <div class="container">
      <hr class="divider" />
      <div class="text">Or</div>
    </div>
    <div class="socials-cont">
      <img src="/img/google.svg" alt="" />
      <img src="/img/fb.svg" alt="" />
      <img src="/img/apple.svg" alt="" />
    </div>
    <p class="social-text">
      By creating an account you agree to the privacy policy and to receive economic and marketing comunnications from
      AvaTrade. You can remove yourself from the mailing list at anytime.
    </p>
    <p class="partner">Have a partner number? <a href="">Click here</a></p>
  </div>
</template>

<script setup></script>

<style scoped>
  .socials-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    margin: 31px 0px;
  }
  .social-text {
    text-align: center;
    color: #5d6a75;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .partner {
    text-align: center;
    color: #343434;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .container {
    position: relative;
    text-align: center;
  }

  .divider {
    width: 100%;
    margin: 0;
    border: 1px solid #ccc;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 8px;
    border-radius: 4px;
    font-family: Arial, sans-serif;
  }
  a {
    color: #1187f4;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }
</style>
