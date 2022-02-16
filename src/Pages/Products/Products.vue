<template>
  <div class="container">
    <div class="bg">
      <div class="row">
        <div class="col-sm-12 padding-right">
          <div class="features_items">
            <div class="col-sm-3" v-for="product in FilterProducts.products" :key="product.productId">
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
                      <a class="cursor-pointer" @click="AddProductToOrder(product.productId)">
                        <i class="fa fa-shopping-cart"></i>افزودن به سبد
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="clearfix"></div>

            <ul class="pagination">
              <li v-for="n in FilterProducts.pageCount" :key="n" :class="{ active: n == FilterProducts.activePage }">
                <router-link :to="{ name: 'GetProducts', query: { pageId: n } }">{{ n }}</router-link>
              </li>
            </ul>
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    FilterProducts() {
      return this.$store.getters.GetProducts;
    },
    ProductImageAddress() {
      return this.$store.getters.GetProductImageAddress;
    }
  },
  watch: {
    $route() {
      this.$store.dispatch("GetProductsFromServer", {
        pageId: this.$route.query.pageId
      });
    }
  },
  created() {
    this.$store.dispatch("GetProductsFromServer", {
      pageId: 1
    });
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
