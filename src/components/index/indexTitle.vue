<template lang="pug">
  .titlebox
    h1(data-aos="zoom-out") {{data.title}}
    p
      span(v-for="(item, i) in data.pspan" data-aos="fade") {{item}}
    .mes(v-if="data.mes" data-aos="zoom-out") {{data.mes}}
</template>
<script>
export default {
  props: ['data']
}
</script>

<style lang="stylus" scoped>
.titlebox
  padding-top 87px
  h1
    font-size 36px
    color #333333ff
    line-height 36px
  p
    margin-top 13px
    span
      font-size 16px
      color #333333ff
      line-height 16px
    span + span
      margin-left 25px
  .mes
    color #7F8699FF
    font-size 16px
    line-height 30px
    margin-top 53px
    text-indent -0
</style>
