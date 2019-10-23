<template lang="pug">
  .back(:style="{height: height + 'px'}" ref="bottom" data-aos="fade")
    .contains
      img(src="./image/iphone@2x.png" class="bottomIphone" data-aos="fade-left")
      span.bottomRight(data-aos="fade-right")
        h1 资产升值，尽在指尖
        p 下载“大鱼财富”APP，轻松管理你的财富
        .downloadBox
          .downleft
            .items
              img(src="./image/ios.png")
              span IOS下载
              .back
            .items
              img(src="./image/android.png")
              span Android下载
              .back
          img(src="./image/erwei.png" class="erwei")
</template>

<script>
export default {
  mounted () {
    let clientWidth = this.$refs.bottom.clientWidth
    this.height = clientWidth * 756 / 2533 < 758 ? 756 : clientWidth * 758 / 2533
  },
  data () {
    return {
      height: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.back
  width 100%
  background-size 100%
  position relative
  display flex
  align-items center
  @media screen and (max-width: 1920px)
    background #3686f7 url('./image/bottomback.png') center no-repeat
  @media screen and (min-width: 1921px)
    background #3686f7 url('./image/bottomback@2x.png') center no-repeat
  .contains
    display flex
    .bottomIphone
      width 306px
      display block
      height 421px
    .bottomRight
      display flex
      margin-left 108px
      justify-content center
      flex-direction column
      h1
        font-size 38px
        color #fff
        line-height 54px
        text-align left
      p
        color #fff
        font-size 26px
        line-height 26px
        margin-top 17px
      .downloadBox
        display flex
        margin-top 42px
        text-align left
        .items
          border 1px solid #fff
          width 254px
          height 52px
          display flex
          align-items center
          justify-content center
          cursor pointer
          position relative
          z-index 9
          img
            width 16px
          span
            font-size 18px
            color #fff
            margin-left 15px
            position relative
          .back
            position absolute
            border-radius 0
            display block
            height 100%
            left 0
            position absolute
            top 0
            -webkit-transition all .4s
            -moz-transition all .4s
            -o-transition all .4s
            transition all .4s
            width 100%
            background #fff
            border-radius 0
            opacity 0
            z-index -1
        .items:hover
          border 1px solid hsla(0,0%,100%,.3)
          .back
            left 0
            top 0
            width 100%
            height 100%
            border-radius 0
            background #fff
            opacity 0.3
            box-shadow 0px 1px 10px 0px rgba(76,97,241,0.2)
        .items+.items
          margin-top 21px
        .erwei
          width 130px
          height 129px
          margin-left 30px
</style>
