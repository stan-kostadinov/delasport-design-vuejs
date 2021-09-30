import { createStore } from 'vuex'

export default createStore({
  state: {
    mainCards: [
      {
        title: 'Sports',
        text: 'Price Boost every day on all sports',
        btnText: 'Go to Sports',
        btnType: 'card-button',
        imgLink: 'mc1'
    },
    {
        title: 'Casino',
        text: 'Offering the best slots and live dealer games',
        btnText: 'Go to Casino',
        btnType: 'card-button',
        imgLink: 'mc2'
    }
    ],

    sportsCats: ['Soccer','Basketball','Tennis','Ice Hockey','Baseball','Cricket','American Football','Australian Rules','Badmington','Bandy','Beach Volley',
    'Biathlon','Boxing','Call of Duty','CS:GO','Darts','Dota 2','Floorball'],
    
    providers: ['evo','asia','pragmatic','gameart','betsoft','booming']
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
