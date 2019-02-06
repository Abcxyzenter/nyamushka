import Vue from 'vue'
 
 export default{

    buyItem(state, itemId){

        let actualState = 1;
        let item = itemId['itemId'];

        if (this.state.products[item].weHave == 1){

            this.state.products[item].selectedItem == 1 ? actualState = 0 : actualState = 1;

            Vue.set(this.state.products[item], 'selectedItem', actualState );
     
        }

    },
    
 }
 