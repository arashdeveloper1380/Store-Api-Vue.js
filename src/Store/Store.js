import Vue from 'vue';
import Vuex from 'vuex';

import slider from './Modules/Slider';
import product from './Modules/Product';
import user from './Modules/User';
import order from './Modules/Order';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    slider,
    product,
    user,
    order
  }
});
