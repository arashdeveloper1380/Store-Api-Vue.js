import Vue from 'vue';

const state = {
  MostSellProducts: [],
  LatestProducts: [],
  ProductImageAddress: "http://localhost:13172/api/product/image/",
  Products: {},
  SingleProduct: {},
  SuggestedProducts: []
};


const getters = {
  GetMostSellProducts(state) {
    return state.MostSellProducts;
  },
  GetLatestProducts(state) {
    return state.LatestProducts;
  },
  GetProductImageAddress(state) {
    return state.ProductImageAddress;
  },
  GetProducts(state) {
    return state.Products;
  },
  GetSingleProduct(state) {
    return state.SingleProduct;
  },
  GetSuggestedProducts(state) {
    return state.SuggestedProducts;
  }
};

const mutations = {
  SetMostSellProducts(state, MostSellProducts) {
    state.MostSellProducts = MostSellProducts;
  },
  SetLatestProducts(state, LatestProducts) {
    state.LatestProducts = LatestProducts;
  },
  SetProducts(state, products) {
    state.Products = products;
  },
  SetSingleProduct(state, singleProduct) {
    state.SingleProduct = singleProduct;
  },
  SetSuggestedProducts(state, suggestedProducts) {
    state.SuggestedProducts = suggestedProducts;
  }
};

const actions = {
  GetMostSellProductsFromServer(context) {
    Vue.http.get("product/MostSellProducts")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetMostSellProducts", data);
      });
  },
  GetLatestProductsFromServer(context) {
    Vue.http.get("product/LatestProducts")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetLatestProducts", data);
      });
  },
  GetProductsFromServer(context, Filter) {
    Vue.http.get("product/GetProducts", {
        params: {
          pageId: Filter.pageId
        }
      })
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetProducts", data);
      });
  },
  GetSingleProductFromServer(context, Filter) {
    Vue.http.get("product/ShowProduct/" + Filter.productId)
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetSingleProduct", data);
      });
  },
  GetSuggestedProductsFromServer(context) {
    Vue.http.get("product/SuggestedProducts")
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        context.commit("SetSuggestedProducts", data);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
