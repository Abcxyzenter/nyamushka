 
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
 

const store = () => new Vuex.Store({


    state: {


        messages: {

            'opinionAdvertising':'заказчик доволен',
            'bonusTitleWords'   :'в подарок',
            'title'             :'Ты сегодня покормил кота?',
            'wehavenotStart'    :'Печалька,',
            'wehavenotEnd'      :'закончился.'

        },
 
        wordsVariations: {

            mouse: {

                '1':'мышь',
                '2':'мыши',
                '5':'мышей'
            },

            parts: {

                '1':'порция',
                '2':'порции',
                '5':'порций'
            }

        },
     
          
        products:{

            1:{
     
                'brandName': 'Нямушка',
                'prodName' : 'с фуа-гра',
                'itemSize' : '10',
                'bonusSize': '1',
                'slogan'   : 'Сказочное заморское яство',
                'prodImg'  : 'kisa.png',
                'weight'   : '0,5',
                'weightMetrics': 'кг',
                'weHave'   : '1',
                'selectedItem' : '0',
                'colorTheme':'blue',
                'bottomText':'Чего сидишь? Порадуй котэ, ',
                'allowBottomBuy':'купи.'
     
            },

            2:{
     
                'brandName': 'Нямушка',
                'prodName' : 'с рыбой',
                'itemSize' : '40',
                'bonusSize': '2',
                'slogan'   : 'Сказочное заморское яство',
                'prodImg'  : 'kisa.png',
                'weight'   : '2',
                'weightMetrics': 'кг',
                'weHave'   : '1',
                'selectedItem' : '0',
                'colorTheme':'pink',
                'bottomText':'Головы щучьи с чесноком да свежайшая сёмгушка.',
                'allowBottomBuy':'0'
            },

            3:{
     
                'brandName': 'Нямушка',
                'prodName' : 'с курой',
                'itemSize' : '100',
                'bonusSize': '5',
                'slogan'   : 'Сказочное заморское яство',
                'prodImg'  : 'kisa.png',
                'weight'   : '5',
                'weightMetrics': 'кг',
                'weHave'   : '0',
                'selectedItem' : '0',
                'colorTheme':'grey',
                'bottomText':'Вкуснотища!',
                'allowBottomBuy':'0'
        
            }
             
        },
     
    },
        actions,
        mutations,
        getters
});

export default store



 
 
