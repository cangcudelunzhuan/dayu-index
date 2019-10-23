<template lang="pug">
  .contains
    index-title(:data="postdata")
    img(src="./image/wealth.png" class="wealthimg" data-aos="fade-up")
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
        title: '了解大鱼财富',
        pspan: [
          '专注成就未来',
          '安全打造信赖'
        ],
        mes: '大鱼财富平台成立于 2018 年 10 月，是一家基于区块链的互联网金融登记服务平台。运营主体隶属于无锡惠山金融服务有限公司，由无锡市惠山经济发 展总公司全资成立。 大鱼财富聚焦地方政府债转股业务，目前已与多个地方政府债转股基金达成独家合作。平台始终致力于探索和优化资产管理模式，利用金融科技为用户 搭建安全、高效的互联网投资登记平台。'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.contains
  padding 0
  .wealthimg
    width 1196px
    height 473px
    margin 58px auto
</style>
