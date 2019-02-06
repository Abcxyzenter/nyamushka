<template lang="pug">


  #app(class="app")

    .app__product-wrapper 

      .app__product-wrapper__title
        
        h1 {{messages['title']}}
        
      .app__product-wrapper__product-list
         
        .app__product-wrapper__product-list__item(v-for="(p, n, i) in products" :key="i")

          product(
              :brandName="p['brandName']"
              :prodName="p['prodName']" 
              :itemSize="p['itemSize']" 
              :itemName="p['itemName']" 
              :bonusSize="p['bonusSize']" 
              :slogan="p['slogan']" 
              :prodImg="p['prodImg']"  
              :weight="p['weight']" 
              :weightMetrics="p['weightMetrics']" 
              :weHave="p['weHave']"
              :selectedItem="p['selectedItem']"
              :colorTheme="p['colorTheme']"
              :messages="messages"
              :productId="n"
              :allowBottomBuy="p['allowBottomBuy']"
              :bottomText="p['bottomText']"
              )



   

</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
 
import { mapState } from 'vuex'

import store from './store/index.js'
import product from './product/product.vue'


export default {
  name: 'app',
 

  computed: { 

    ...mapState ({

    products: state => state.products,
    wordsVariations: state => state.wordsVariations,
    messages: state => state.messages
    
    })

  },

  created(){

   //console.log(this.products)

 },

  components: {
    
    'product':product
 
  },

 


  store
}
</script>


 

<style  lang="stylus" >

defaultFontFamily = Helvetica, Arial, sans-serif;

blockbackgrnd = #50b4e5

whitecolor = #fff
yellowcolor = #ffff66
bluecolor = #1698d9

itemsVerticalAlignCenter()
  display -webkit-flex
  display -ms-flex
  display flex
  -webkit-align-items center
  -webkit-box-align center
  -ms-flex-align center
  flex-direction column

 


body
  margin 0
  padding 0
  box-sizing border-box



.app
  background blockbackgrnd
  font-family defaultFontFamily 
  margin 0px
  width 100vw
  min-height 100vh
  itemsVerticalAlignCenter()
    
  &__product-wrapper
    
    text-align center
    position relative
    width 100%
    margin auto

    &__title
      width 100%
      position relative
      margin auto

      h1
        font-weight 100
        font-family 'Exo 2', sans-serif
        color whitecolor
        font-size 38px
        margin-bottom 25px

    &__product-list
      width 93.75%
      padding 0px 3.125%

       
      &__item
        width 320px 
        padding 0px 
        display inline-block
        vertical-align top 
        margin auto 3.125%


 


</style>
