import Vue from 'vue';

const state = {
  UserShopCart: {},
  TotalPrice: 0,
  IsExistShopCart: false
};


const getters = {
  GetUserShopCart(state) {
    return state.UserShopCart;
  },
  GetTotalPrice(state) {
    return state.TotalPrice;
  },
  IsExistShopCart(state) {
    return state.IsExistShopCart;
  }
};

const mutations = {
  SetUserShopCart(state, shopCart) {
    state.UserShopCart = shopCart;
    state.TotalPrice = 0;
    for (let i = 0; i < shopCart.orderDetails.length; i++) {
      state.TotalPrice += shopCart.orderDetails[i].price * shopCart.orderDetails[i].count;
    }
  },
  SetExistShopCart(state, isExist) {
    state.IsExistShopCart = isExist;
  }
};

const actions = {
  AddProductToOrder(context, orderDetail) {
    Vue.http.get('Order/AddProductToOrder', {
      params: {
        productId: orderDetail.productId,
        count: orderDetail.count
      }
    }).then(response => {
      console.log(response);
      if (response.body.status == "NotAuth") alert('لطفا ابتدا وارد سایت شوید');
      if (response.body.status == "NotFoundProduct") alert('محصولی با مشخصات وارد شده یافت نشد');
      if (response.body.status == "InvalidCount") alert('تعداد وارد شده صحیح نمیباشد');
      if (response.body.status == "Done") alert('محصول مورد نظر با موفقیت به سبد خرید اضافه شد');
    });
  },
  GetUserOpenOrder(context) {
    Vue.http.get('Order/GetShopCart').then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      if (data.status == "NotAuth") alert('لطفا ابتدا وارد سایت شوید');
      if (data.status == "NotExist") {
        context.commit("SetExistShopCart", false);
      }
      if (data.status == "success") {
        context.commit("SetUserShopCart", data.result);
        if (data.result.orderDetails.length != 0) {
          context.commit("SetExistShopCart", true);
        } else {
          context.commit("SetExistShopCart", false);
        }
      }
    });
  },
  DeleteOrderDetail(context, detailId) {
    Vue.http.get('Order/DeleteDetail', {
      params: {
        detailId: detailId
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      if (data.status == "NotAuth") alert('لطفا ابتدا وارد سایت شوید');
      if (data.status == "NotExist") alert('اطلاعات مورد نظر یافت نشد');
      if (data.status == "success") {
        context.commit("SetUserShopCart", data.result);
        if (data.result.orderDetails.length != 0) {
          context.commit("SetExistShopCart", true);
        } else {
          context.commit("SetExistShopCart", false);
        }
      }
    });
  },
  CompleteShopping(context) {
    Vue.http.get("Order/CompleteShop").then(response => {
      if (response.body.status == "NotAuth") alert('لطفا ابتدا وارد سایت شوید');
      if (response.body.status == "NotExist") alert('اطلاعات مورد نظر یافت نشد');
      if (response.body.status == "EmptyShopCart") alert('سبد خرید شما خالی می باشد');
      if (response.body.status == "success"){
        context.commit("SetExistShopCart", false);
        alert('خرید شما با موفقیت انجام شد');
      }
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
