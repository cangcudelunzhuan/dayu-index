<template lang="pug">
  .outwrap
    nav-box(ref="navbox" :class="{'navfixed':navfixed}" :active="active" @goindex="goindex")
    banner-box(class="ani")
    wealth(class="ani")
    func(class="ani")
    bottom(class="ani")
    p.icp 浙 ICP 备 XXXXXX 文衍春秋版权所有
</template>

<script>
import bannerBox from '@/components/index/banner'
import navBox from '@/components/index/nav'
import wealth from '@/components/index/wealth'
import func from '@/components/index/func'
import bottom from '@/components/index/bottom'
import $ from 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  components: {
    bannerBox,
    navBox,
    wealth,
    func,
    bottom
  },
  data () {
    return {
      navfixed: false,
      active: 0
    }
  },
  mounted () {
    let vm = this
    $(window).scroll(() => {
      vm.scrolls()
    })
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      startEvent: 'DOMContentLoaded'
    })
  },
  methods: {
    scrolls () {
      let vm = this
      let top = $(window).scrollTop()
      let nav = this.$refs.navbox.$el.offsetHeight
      if (top > nav) {
        vm.navfixed = true
      } else {
        vm.navfixed = false
      }
      let ani = $('.ani')
      ani.each((i, item) => {
        let thisTop = $(item).offset().top
        let xh = $(window).height() / 3
        let ff = top + nav + xh - thisTop
        if (ff > 0) {
          vm.active = i
        }
      })
    },
    goindex (ac) {
      let nav = this.$refs.navbox.$el.offsetHeight
      // let xh = $(window).height()/6
      let ani = $('.ani')
      let scrolltop = ani.eq(ac).offset().top - nav + 2
      $('html,body').animate({scrollTop: scrolltop + 'px'}, 800)
    }
  }
}
</script>
<style lang="stylus" scoped>
.outwrap
  position relative
  overflow hidden
  .icp
    text-align center
    padding 56px
    font-size 12px
</style>
