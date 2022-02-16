<template>
  <section id="slider">
    <!--slider-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div id="slider-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#slider-carousel" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
              <div
                class="item"
                v-for="(slider,index) in Sliders"
                :key="slider.sliderId"
                :class="{active:index == 0}"
              >
                <div class="col-sm-6">
                  <h2>{{ slider.title }}</h2>
                  <p>{{ slider.description }}</p>
                </div>
                <div class="col-sm-6">
                  <img
                    :src="SliderImageAddress+slider.imageName"
                    width="484"
                    height="441"
                    class="girl img-responsive"
                    alt
                  >
                </div>
              </div>
            </div>

            <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
              <i class="fa fa-angle-left"></i>
            </a>
            <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    Sliders() {
      return this.$store.getters.GetSliders;
    },
    SliderImageAddress() {
      return this.$store.getters.GetSliderImageAddress;
    }
  },
  created() {
    if(this.Sliders.length == 0){
      this.$store.dispatch("GetSlidersFromServer");
    }
  }
};
</script>

