import Index from './Pages/Index/Index.vue';
import AboutUs from './Pages/AboutUs/About.vue';
import Products from './Pages/Products/Products.vue';
import SingleProduct from './Pages/SingleProducts/SingleProducts.vue';
import Login from './Pages/Account/Login.vue';
import Register from './Pages/Account/Register.vue';
import UserShopCart from './Pages/ShopCarts/UserShopCart.vue';

// var Index = resolve => {
//   require.ensure(['./Pages/Index/Index.vue'], () => {
//     resolve(require('./Pages/Index/Index.vue'));
//   });
// };

// var AboutUs = resolve => {
//   require.ensure(['./Pages/AboutUs/About.vue'], () => {
//     resolve(require('./Pages/AboutUs/About.vue'));
//   });
// };

// var Products = resolve => {
//   require.ensure(['./Pages/Products/Products.vue'], () => {
//     resolve(require('./Pages/Products/Products.vue'));
//   });
// };

// var SingleProduct = resolve => {
//   require.ensure(['./Pages/SingleProducts/SingleProducts.vue'], () => {
//     resolve(require('./Pages/SingleProducts/SingleProducts.vue'));
//   });
// };

// var Login = resolve => {
//   require.ensure(['./Pages/Account/Login.vue'], () => {
//     resolve(require('./Pages/Account/Login.vue'));
//   });
// };

// var Register = resolve => {
//   require.ensure(['./Pages/Account/Register.vue'], () => {
//     resolve(require('./Pages/Account/Register.vue'));
//   });
// };

// var UserShopCart = resolve => {
//   require.ensure(['./Pages/ShopCarts/UserShopCart.vue'], () => {
//     resolve(require('./Pages/ShopCarts/UserShopCart.vue'));
//   });
// };

export const Routes = [{
    path: '/',
    component: Index
  },
  {
    path: '/AboutUs',
    component: AboutUs
  },
  {
    path: '/Products',
    component: Products,
    name: 'GetProducts'
  },
  {
    path: '/Products/Single/:id',
    component: SingleProduct,
    name: 'SingleProduct'
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/ShopCart',
    component: UserShopCart
  }
];
