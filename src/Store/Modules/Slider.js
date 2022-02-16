import Vue from 'vue';

const state = {
  sliders: [],
  SliderImageAddress: "http://localhost:13172/api/slider/image/"
};


const getters = {
  GetSliders(state) {
    return state.sliders;
  },
  GetSliderImageAddress(state){
    return state.SliderImageAddress;
  }
};

const mutations = {
  SetSliders(state, sliders) {
    state.sliders = sliders;
  }
};

const actions = {
  GetSlidersFromServer(context) {
    Vue.http.get("slider/GetSliders")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetSliders", data);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
