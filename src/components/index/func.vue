<template lang="pug">
  .grayback
    .contains
      index-title(:data="postdata")
        .funccard()
      .funccard
        .item(v-for="(item, i) in carddata" :key="i" :data-aos="item.aos" data-aos-offset="200")
          section
            img(:src="item.img")
            p {{item.title}}
            .cardmes {{item.mes}}
</template>

<script>
import indexTitle from './indexTitle'
export default {
  components: {
    indexTitle
  },
  data () {
    return {
      postdata: {
        title: '主要功能',
        pspan: [
          '项目业务一目了然',
          '资讯新闻实时更新',
          '安全交易有保障 ',
          '简洁操作易上手'
        ]
      },
      carddata: [
        {
          img: 'static/image/func1.png',
          title: '财富业务',
          mes: '优质项目精选，智能投资顾问，满足各种理财需求',
          aos: 'flip-left'
        },
        {
          img: 'static/image/func2.png',
          title: '新闻播报',
          mes: '城市、行业新闻推送，及时掌握重要资讯。',
          aos: 'flip-up'
        },
        {
          img: 'static/image/func3.png',
          title: '安全保障',
          mes: '政府增信、银行存管、合法合规、技术支撑、回购保障，多维度安全保障，解除后顾之忧。',
          aos: 'flip-up'
        },
        {
          img: 'static/image/func4.png',
          title: '新手指引',
          mes: '流程操作指南，三分钟轻松上手。',
          aos: 'flip-right'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.contains
  padding-bottom 151px
  .funccard
    margin-top 75px
    display flex
    .item
      section
        width 223px
        height 248px
        background rgba(255,255,255,1)
        box-shadow 0px 1px 10px 0px rgba(76,97,241,0.2)
        border-radius 10px
        padding 43px 30px
        transition all 0.1s ease-in-out
        -o-transition all 0.1s ease-in-out
        -moz-transition all 0.1s ease-in-out
        -webkit-transition all 0.1s ease-in-out
        img
          height 90px
        p
          font-size 16px
          color #333333ff
          line-height 16px
          margin-top 47px
          position relative
        p:after
          position absolute
          content ''
          width 20px
          height 2px
          background #586CF5FF
          bottom -10px
          left 0
          right 0
          margin 0 auto
        .cardmes
          font-size 14px
          color #7F8699FF
          line-height 20px
          margin-top 23px
      section:hover
        transform translateY(-10px)
        -moz-box-shadow 0px 2px 6px rgba(76,97,241,0.2)
        -webkit-box-shadow 0px 2px 6px rgba(76,97,241,0.2)
        box-shadow 0px 2px 6px rgba(76,97,241,0.2)
    .item + .item
      margin-left 23px
</style>
