
<template lang="pug">

.item_wrapper
	.item(@click="buyItem(productId)" :class="this.select ? 'selected' : '' " @mouseover="checkSelectedMouseOver()" @mouseleave="checkSelectedMouseLeft()")
		
		.item__top-part   
			
			.item__top-part__angle__before
			.item__top-part__text__before
			.item__bottom-part__before
			
			.item__top-part__angle(:class=`'angle-border__'+this.colorTheme`)  
			.item__top-part__text(:class=`'top-right-border__'+this.colorTheme`)
				
				span(:class="this.weHave==0 ? 'all-sold' : ''") {{this.slogan}}
 
 
		.item__bottom-part
			

			.item__bottom-part__inner(:class=`'bottom-part-border__'+this.colorTheme`)
				.item__bottom-part__brand-name(:class="this.weHave==0 ? 'all-sold' : ''")  
					span {{this.brandName}}
				.item__bottom-part__product-name(:class="this.weHave==0 ? 'all-sold' : ''")  
					span {{this.prodName}}
				.item__bottom-part__item-size(:class="this.weHave==0 ? 'all-sold' : ''")  
					span.item__bottom-part__item-size__size {{this.itemSize}}
					span.item__bottom-part__item-size__variation  {{this.partsVariation}}
				
				
				.item__bottom-part__bonus-part(v-if="this.bonusSize>0" :class="this.weHave==0 ? 'all-sold' : ''")
					span.item__bottom-part__bonus-part__size(v-if="this.bonusSize>1") {{this.bonusSize}}
					span.item__bottom-part__bonus-part__metrics  {{this.bonusVariation}} {{this.messages['bonusTitleWords']}}
				

				.item__bottom-part__opinion(v-if="this.weHave==0" :class=" 'all-sold' ")
					span {{this.messages['opinionAdvertising']}}

				img.item__bottom-part__product-image(:src=`'../../src/assets/'+this.prodImg` :class="this.weHave==0 ? 'all-sold' : ''")
				
				div(:class=`'item__bottom-part__weight__'+this.colorTheme`)
					.item__bottom-part__weight__inner
						span.item__bottom-part__weight__size {{this.weight}}
						span.item__bottom-part__weight__metrics {{this.weightMetrics}}


	.item__bottomtext(v-if="this.weHave > 0")

		span {{this.bottomText}}

			span(v-if="parseInt(this.allowBottomBuy) !== 0" class="item__bottomtext__buyitem" @click="buyItem(productId)")  {{this.allowBottomBuy}}


	.item__bottomtext__wehavenot(v-if="this.weHave == 0")
		span {{ this.messages['wehavenotStart']+' '+this.prodName+' '+this.messages['wehavenotEnd'] }}


</template>

 
<script>
import Vuex from 'vuex'
import { mapState } from 'vuex'
import store from '.././store/index.js'


export default {


  name: 'product',

  props: [
		  'brandName', 
		  'prodName', 
		  'itemSize', 
		  'bonusSize', 
		  'slogan', 
		  'prodImg',  
		  'weight', 
		  'weightMetrics', 
		  'weHave',
		  'selectedItem',
		  'colorTheme',
		  'messages',
		  'productId',
		  'allowBottomBuy',
		  'bottomText'
		],


	data: function (){

		return {

			select : false,
		}
	},


	created: function(){
 
		this.selectedItem == 1 ? this.select = true : this.select = false;

	},

  
  computed:{
 
	  	partsVariation: function(){

			let num = 0;

	  		if (this.itemSize.toString().length > 1){

	  			num = parseInt(this.itemSize.substr(this.itemSize.length-1));

	  		}
	  		else {

	  			num = parseInt(this.itemSize);

	  		}
	  			 
	  		 
	   		if (num>=5){
	 
	  			return this.$store.state.wordsVariations.parts['5'];
	  		}

	  		if (num>=2 && num<5){
	 
	  			return this.$store.state.wordsVariations.parts['2'];
	  		}

	  		if (num==1){
	 
	  			return this.$store.state.wordsVariations.parts['1'];
	  		}
	  		
	  		if (num==0){

	  			return this.itemSize>0 ? this.$store.state.wordsVariations.parts['5'] : 0;
	  		}
	  	},



	  	bonusVariation: function(){

	  		let num = 0;

	  		if (this.bonusSize.toString().length > 1){

	  			num = parseInt(this.bonusSize.substr(this.bonusSize.length-1));

	  		}
	  		else {

	  			num = parseInt(this.bonusSize);

	  		}
	  			 
	  		 
	   		if (num>=5){
	 
	  			return this.$store.state.wordsVariations.mouse['5'];
	  		}

	  		if (num>=2 && num<5){
	 
	  			return this.$store.state.wordsVariations.mouse['2'];
	  		}

	  		if (num==1){
	 
	  			return this.$store.state.wordsVariations.mouse['1'];
	  		}
	  		
	  		if (num==0){

	  			return this.bonusSize>0 ? this.$store.state.wordsVariations.mouse['5'] : 0;
	  		}
	  
	  	} 
 
  	},


    methods:{

	    buyItem(itemId){
 
	      this.$store.dispatch('buyItem', {itemId});

	      this.$nextTick(function () {

        	this.selectedItem == 1 ? this.select = true : this.select = false;
     		 
     		})

	    },

	    checkSelectedMouseOver(){

	    	this.select = false;

	    },

	    checkSelectedMouseLeft(){

	    	this.selectedItem == 1 ? this.select = true : this.select = false;

	    }

  	},

 

}
</script>







<style  lang="stylus" >

bigfont = 46px
prebigfont = 42px
highfont = 24px
prehighfont = 22px
littlefont = 14px
verylittlefont = 13px


bluecolor = #1698d9
pinkcolor = #d91667
greycolor = #b3b3b3
greytextcolor = #555
whitecolor = #fff
yellowcolor = #ffff66


blueborder = 4px solid bluecolor
pinkborder = 4px solid pinkcolor
greyborder = 4px solid greycolor

 
transformAngle(n)
    -moz-transform rotate(n deg) 
    -ms-transform rotate(n deg)  
    -webkit-transform rotate(n deg)  
    -o-transform rotate(n deg)  
    transform rotate(n deg)

boxshadow(x, y, blurer, shadowcolor)
   -webkit-box-shadow x y blurer shadowcolor
   -moz-box-shadow x y blurer shadowcolor
   box-shadow x y blurer shadowcolor

.all-sold
  opacity 0.5

.item
  width 320px
  text-align left
  position relative
  cursor pointer

  &__top-part
    position relative
    z-index 5

    &__text
      background whitecolor
      border-radius 0px 12px 0px 0px
      width 268px
      margin-left 39px
      z-index 5
      font-size 14px
      padding 20px 0px 3px 9px
      letter-spacing 0.7px
      color greytextcolor

      &__before        
        position absolute
        top 0px
        width 268px
        height 102%
        left 53px
        z-index -1
        border-radius 0px 12px 0px 0px
    
    &__angle
      background whitecolor
      width 74px
      height 60px
      position absolute
      top 17px
      left 8.3px
      z-index -1
      transformAngle(42)
      border-radius 4px
 
      &__before
        width 74px
        height 60px
        position absolute
        top 17px
        left 8.3px
        z-index -1
        transformAngle(42)
        border-radius 4px
       

  &__bottom-part

    overflow visible
    position relative
    height 430px 
    z-index 5

    &__before
      width 320px
      height 430px
      position absolute
      top calc(100%+4px)
      left 0px
      border-radius 0px 0px 12px 12px
      z-index -1
     

    &__inner
      background whitecolor
      overflow hidden
      position relative
      padding 0px 42px
      height 100%
      border-radius 0px 0px 12px 12px
    
    &__brand-name
      padding 5px 0px 0px 0px
      font-size bigfont
      font-weight bold

    &__product-name
      font-size highfont
      font-weight bold
      padding-bottom 12px

    &__item-size
      padding 5px 0px 0px 0px
      color greytextcolor
      font-size littlefont
   
      &__size 
        font-weight bold
  
    &__bonus-part
      color greytextcolor
      font-size littlefont
   
      &__size 
        font-weight bold

    &__opinion
      color greytextcolor
      font-size littlefont
      
    &__product-image
      position absolute
      bottom -89px
      left -30px
      max-width 152%

    &__weight__inner
      position relative 
      width 100%
      height 100%
      text-align center
      margin 5px auto

    &__weight__size
      display block 
      color whitecolor
      font-size prebigfont

    &__weight__metrics
      color whitecolor
      font-size prehighfont
      line-height 0.5em

    &__weight__blue
    &__weight__pink
    &__weight__grey
        position absolute
        bottom 12px
        right 12px
        width 80px
        height 80px
        border-radius 50%

    &__weight__blue
      background bluecolor
    &__weight__pink
      background pinkcolor
    &__weight__grey
      background greycolor


  &__bottomtext
    padding 15px 0px
    color whitecolor
    font-size verylittlefont

    &__buyitem
      color bluecolor
      cursor pointer
      text-decoration underline
      text-decoration-style dashed
      font-size verylittlefont

    &__wehavenot
      color yellowcolor
      font-size verylittlefont
      padding 15px 0px
        
        

.selected .item__top-part__angle__before
.selected .item__top-part__text__before
.selected .item__bottom-part__before
  boxshadow(0, 0, 22px, yellowcolor)

    
.angle-border__blue
  border-left blueborder
.angle-border__pink
  border-left pinkborder
.angle-border__grey
  border-left greyborder


.top-right-border__blue
  border-top blueborder
  border-right blueborder
.top-right-border__pink
  border-top pinkborder
  border-right pinkborder
.top-right-border__grey
  border-top greyborder
  border-right greyborder


.bottom-part-border__blue
  border-right blueborder
  border-left blueborder
  border-bottom blueborder
.bottom-part-border__pink
  border-right pinkborder
  border-left pinkborder
  border-bottom pinkborder
.bottom-part-border__grey
  border-right greyborder
  border-left greyborder
  border-bottom greyborder
 

</style>
