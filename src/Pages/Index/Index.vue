<template>
  <div>
    <app-slider></app-slider>
    <section>
      <div class="container">
        <div class="row">
          <most-sell></most-sell>
          <latest-products></latest-products>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppSlider from "./Components/Slider";
import MostSellProducts from "./Components/MostSellProducts";
import LatestProducts from "./Components/LatestProducts";
export default {
  components: {
    appSlider: AppSlider,
    mostSell: MostSellProducts,
    latestProducts: LatestProducts
  }
};
</script>
