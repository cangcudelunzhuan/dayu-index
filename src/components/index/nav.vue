<template lang="pug">
  .navposition
    .contains
      span
        img(src="./image/dayu-logo.png" class="logoimg")
      ul.navwrap
        li.bz-buttonAnimat.counterclockwise.both(:class="{active:ac===i}" @click="goac(i)" v-for="(item, i) in nav") {{item.name}}
</template>

<script>
export default {
  props: ['active'],
  computed: {
    ac () {
      return this.active
    }
  },
  data () {
    return {
      nav: [
        {name: '首页'},
        {name: '新手指引'},
        {name: '主要功能'},
        {name: 'APP下载'}
      ]
    }
  },
  methods: {
    // goTop () {
    //   $('html,body').animate({scrollTop: '0px'}, 800)
    // },
    goac (ac) {
      this.$emit('goindex', ac)
    }
  }
}
</script>

<style lang="stylus" scoped>
.navposition
  position absolute
  width 100%
  top 0
  left 0
  .contains
    display flex
    align-items center
    justify-content: space-between
    z-index 11
    position relative
    .logoimg
      width 173px
      height 55px
      margin 36px 0
      display block
      cursor pointer
    .navwrap
      display flex
      align-items center
      li
        list-style none
        font-size 24px
        color #fff
        line-height 80px
        cursor pointer
        position relative
        border-bottom 2px solid transparent
      .bz-buttonAnimat:nth-of-type(1)::before, .bz-buttonAnimat:nth-of-type(1) .inner::before,
      .bz-buttonAnimat:nth-of-type(2)::before, .bz-buttonAnimat:nth-of-type(2) .inner::before,
      .bz-buttonAnimat:nth-of-type(3)::before, .bz-buttonAnimat:nth-of-type(3) .inner::before,
      .bz-buttonAnimat:nth-of-type(4)::before, .bz-buttonAnimat:nth-of-type(4) .inner::before
        background-color transparent
      .bz-buttonAnimat:nth-of-type(1)::after,
      .bz-buttonAnimat:nth-of-type(2)::after,
      .bz-buttonAnimat:nth-of-type(3)::after,
      .bz-buttonAnimat:nth-of-type(4)::after,
      .bz-buttonAnimat:nth-of-type(1) .inner::after,
      .bz-buttonAnimat:nth-of-type(2) .inner::after,
      .bz-buttonAnimat:nth-of-type(3) .inner::after,
      .bz-buttonAnimat:nth-of-type(4) .inner::after
        background-color #eef3f8
        bottom -2px
      li+li
        margin-left 65px
      .active
        border-bottom 2px solid hsla(0,0%,100%,.8)
.navposition:after
  position absolute
  content ''
  width 100%
  height 100%
  background rgba(255,255,255,1)
  opacity 0.05
  top 0
  left 0
  z-index 1
.navfixed
  position fixed
  z-index 99
  background #3686f7
</style>
