<template lang="pug">
  .bannerBack(:style="{height:height+'px'}" ref="bannerBack" data-aos="fade")
    .contains.left
      h2(data-aos="zoom-out") 投资服务平台
      h2(data-aos="zoom-out") 财富增值工具
      .downloadBox(data-aos="zoom-out")
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
      .bottom
        .contains.bottombox
          .bottomiterm(v-for="(it, i) in bottomdata" :key="i")
            .imgbox
              img(:src="it.imgurl" )
            h3 {{it.title}}
            p {{it.mes}}
</template>

<script>
export default {
  data () {
    return {
      height: 0,
      bottomdata: [
        {
          imgurl: 'static/image/beijing.png',
          title: '国资背景',
          mes: '国资企业无锡市惠山经济发展总公司100%全资控股'
        },
        {
          imgurl: 'static/image/qukuai.png',
          title: '区块链技术',
          mes: '采用分布式服务器技术，7*24小时不间断安全运行并无缝切换，有效防范入侵。'
        },
        {
          imgurl: 'static/image/cunguan.png',
          title: '资金银行存管',
          mes: '资金均由民生银行设立托管账户进行存管，确保资金专款专项专用。'
        }
      ]
    }
  },
  mounted () {
    let clientWidth = this.$refs.bannerBack.clientWidth
    this.height = clientWidth * 803 / 1920 < 803 ? 803 : clientWidth * 803 / 1920
  }
}
</script>

<style lang="stylus" scoped>
.bannerBack
  width 100%
  background-size 100%
  margin-bottom 90px
  position relative
  @media screen and (max-width: 1920px)
    background #3686f7 url('./image/bannerback@1x.png') center no-repeat
    background-size 100%
  @media screen and (min-width: 1921px)
    background #3686f7 url('./image/bannerback@2x.png') center no-repeat
    background-size 100%
  .left
    text-align left
    padding-top 238px
    h2
      font-size 60px
      color #fff
      line-height 65px
    .downloadBox
      display flex
      margin-top 69px
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
    .bottom
      position absolute
      width 100%
      left 0
      bottom -90px
      .bottombox
        display flex
        padding 31px 0
        background #fff
        border-radius 10px
        box-shadow 0px 1px 10px 0px rgba(76,97,241,0.2)
        .bottomiterm
          text-align center
          width 33.33%
          position relative
          .imgbox
            width 89px
            margin 0 auto
            img
              width 87px
              height 62px
              /* border 1px dashed #999 */
              transition all 0.1s ease-in-out
              -o-transition all 0.1s ease-in-out
              -moz-transition all 0.1s ease-in-out
              -webkit-transition all 0.1s ease-in-out
          h3
            font-size 16px
            margin-top 23px
          p
            font-size 14px
            color #7F8699
            line-height 18px
            width 248px
            margin 23px auto 0 auto
            transition all 0.1s ease-in-out
            -o-transition all 0.1s ease-in-out
            -moz-transition all 0.1s ease-in-out
            -webkit-transition all 0.1s ease-in-out
        .bottomiterm:hover
          img
            transform translateY(10px)
            /* border 1px dotted #3686f7 */
            /* box-shadow 0px 1px 10px 0px rgba(76,97,241,0.2) */
          p
            transform translateY(-10px)
        .bottomiterm+.bottomiterm:before
          position absolute
          content ''
          height 50%
          width 1px
          background #dcdcdc
          margin auto 0
          left 0
          top 0
          bottom 0
</style>
