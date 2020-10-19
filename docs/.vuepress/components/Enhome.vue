<template>
  <div class="home-page">
    <h1>DEVELOPER FRIENDLY NODEJS WEB FRAMEWORK</h1>
    <p>MAKE IT EASIER TO USE</p>
    <button @click="pushGuide">START</button>
    <footer>copyright&copy;2020 chyan.co | powered by vuepress</footer>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector(".navbar").style.background = "transparent";
  },
  destroyed() {
    document.querySelector(".navbar").style.background = "#fff";
  },
  methods: {
    pushGuide() {
      this.$router.push("/overview/en/Introduction");
    },
  },
};
</script>

<style lang="stylus">
.home-page {
  background-image: url("/bg.svg")
  height: 100%
  width: 100%
  background-repeat: no-repeat
  background-size: cover
  display: flex
  flex-flow: column nowrap
  align-items: center
  justify-content: center
  h1 {
    margin 0
    line-height 1
    color: $accentColor
    margin-top -100px
    text-align center
    user-select none
  }
  p{
    margin 0 0 32px
    font-weight 300
    user-select none
  }
  button {
    outline none
    user-select none
    border 2px solid rgba($accentColor, 0.8)
    border-radius 6px
    background transparent
    font-size 18px
    height 40px
    width 138px
    color $accentColor
    cursor pointer
    box-shadow none
    transition 0.3s
    &:hover {
      border 2px solid $accentColor
      box-shadow 0 0 5px rgba($accentColor, 0.7)
      // animation: button-focus 1s
    }
  }
  footer {
    position absolute
    bottom 28px
    font-size 12px
    color rgba($accentColor, 0.8)
    user-select none
  }
}
@keyframes button-focus {
  form {
    box-shadow: 0 0 0 6px #fff, 0 0 0 8px $accentColor !important
  }
  to {
    box-shadow: 0 0 0 0px #fff, 0 0 0 2px $accentColor !important
  }
}
</style>
