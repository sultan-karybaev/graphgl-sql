<template>
  <div>
    <i :class="active ? 'active' : ''"></i>

    <span>click anywhere</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    anim () {
      this.active = true
    }
  }
}
</script>

<style lang="stylus" scoped="">
  i
    position absolute
    height 60px
    width 60px
    background #fff
    margin -30px
    border-radius 100%
    opacity 1
    transform scale(0)
    z-index 9999
    &.active
      transition transform 400ms ease, opacity 400ms ease
      opacity 0
      transform scale(1)

  span
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    font-size 18px
    color rgba(255,255,255,.8)
    letter-spacing .1em
    transition none

</style>
