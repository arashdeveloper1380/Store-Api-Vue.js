<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 padding-right">
          <div class="product-details">
            <!--product-details-->
            <div class="col-sm-5">
              <div class="view-product">
                <img :src="ProductImageAddress + SingleProduct.productImageName" />
              </div>
            </div>
            <div class="col-sm-7">
              <div class="product-information">
                <div>
                  <h2>کـالای شمـاره {{ SingleProduct.productId }}</h2>
                  <p>نام محصول : {{ SingleProduct.productName }}</p>
                </div>
                <div>
                  <span>
                    <span>قیمت : {{ SingleProduct.price }} تومان</span>
                  </span>
                  <br /><br />
                  <span>
                    <label>تعداد :</label>
                    <input type="text" class="search_box" v-model="count" />
                    <button type="button" class="btn btn-fefault cart" @click="AddProductToOrder(SingleProduct.productId)">
                      <i class="fa fa-shopping-cart"></i>
                      افـزودن به سبـد خریـد
                    </button>
                  </span>
                </div>
                <div>
                  <p>{{ SingleProduct.description }}</p>
                </div>
              </div>
              <!--/product-information-->
            </div>
          </div>
          <suggested-products></suggested-products>
          <!--/recommended_items-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SuggestedProducts from "./Components/SuggestedProducts";
export default {
  data() {
    return {
      count: 1
    };
  },
  computed: {
    SingleProduct() {
      return this.$store.getters.GetSingleProduct;
    },
    ProductImageAddress() {
      return this.$store.getters.GetProductImageAddress;
    }
  },
  watch: {
    $route() {
      this.$store.dispatch("GetSingleProductFromServer", {
        productId: this.$route.params.id
      });
    }
  },
  components: {
    suggestedProducts: SuggestedProducts
  },
  created() {
    this.$store.dispatch("GetSingleProductFromServer", {
      productId: this.$route.params.id
    });
  },
  methods: {
    AddProductToOrder(productId) {
      this.$emit("testEvent", 2);
      const orderDetail = {
        productId: productId,
        count: this.count
      };
      this.$store.dispatch("AddProductToOrder", orderDetail);
    }
  }
};
</script>
