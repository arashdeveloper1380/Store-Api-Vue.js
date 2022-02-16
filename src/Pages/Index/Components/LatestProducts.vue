<template>
  <div class="col-sm-12 padding-right">
    <div class="features_items">
      <!--RetailSale_items-->
      <a>
        <h2 class="title text-center">جدیدترین محصولات</h2>
      </a>

      <div class="col-sm-3" v-for="product in LatestProducts" :key="product.productId">
        <div class="product-image-wrapper">
          <div class="single-products">
            <div class="productinfo text-center">
              <router-link :to="{ name: 'SingleProduct', params: { id: product.productId } }">
                <img :src="ProductImageAddress + product.productImageName" width="253" height="202" />
              </router-link>
              <h2>{{ product.price }}</h2>
              <p>{{ product.productName.substring(0, 30) }}</p>
            </div>
          </div>
          <div class="choose">
            <ul class="nav nav-pills nav-justified">
              <li>
                <router-link :to="{ name: 'SingleProduct', params: { id: product.productId } }">
                  <i class="fa fa-eye"></i>مشاهده
                </router-link>
              </li>
              <li>
                <a class="cursor-pointer" @click="AddProductToOrder(product.productId)"> <i class="fa fa-shopping-cart"></i>افزودن به سبد </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    LatestProducts() {
      return this.$store.getters.GetLatestProducts;
    },
    ProductImageAddress() {
      return this.$store.getters.GetProductImageAddress;
    }
  },
  created() {
    if (this.LatestProducts.length == 0) {
      this.$store.dispatch("GetLatestProductsFromServer");
    }
  },
  methods: {
    AddProductToOrder(productId) {
      const orderDetail = {
        productId: productId,
        count: 1
      };

      this.$store.dispatch("AddProductToOrder", orderDetail);
    }
  }
};
</script>
