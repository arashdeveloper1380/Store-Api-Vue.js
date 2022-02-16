<template>
  <div id="app">
    <app-header></app-header>
    <!--/header-->
    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>

    <app-footer></app-footer>
    <!--/Footer-->
  </div>
</template>

<script>
import AppHeader from "./Pages/Shared/Header";
import AppFooter from "./Pages/Shared/Footer";
export default {
  components: {
    appHeader: AppHeader,
    appFooter: AppFooter
  }
};
</script>

