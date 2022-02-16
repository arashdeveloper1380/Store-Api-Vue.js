import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';
import App from './App.vue';
import Vuelidate from 'vuelidate';

import {
  Routes
} from './Routes';
import {
  store
} from './Store/Store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VueCookie);

Vue.http.options.root = "http://localhost:13172/api/";
Vue.http.interceptors.push((request, next) => {

  request.headers.set('Authorization', 'Bearer ' + Vue.cookie.get('Eshop_Auth_Token'));

  next();
});

export const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
