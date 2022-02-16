<template>
  <header id="header">
    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4" style="text-align: left;">
            <div class="logo">
              <a href="index.html">
                <img src="/src/assets/images/home/logo.png" alt="Logo" style="text-align: center;" />
              </a>
            </div>
          </div>

          <div class="col-sm-8 header-middle-menu">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav" v-if="!IsUserAuthenticated">
                <li>
                  <router-link to="/Login" active-class="active"> <i class="fa fa-lock"></i> ورود</router-link>
                </li>
                <li>
                  <router-link to="/Register" active-class="active"> <i class="fa fa-user"></i> ثبت نام</router-link>
                </li>
              </ul>
              <ul class="nav navbar-nav" v-else>
                <li>
                  <a> <i class="fa fa-user"></i> {{ UserFullName }} عزیز ، خوش آمدید</a>
                </li>
                <li>
                  <a style="cursor:pointer" @click="SignOutUser()"> <i class="fa fa-lock"></i> خروج</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9 pull-right">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-right">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li>
                  <router-link to="/" active-class="active" exact>خانه</router-link>
                </li>
                <li class="dropdown">
                  <router-link to="/Products" active-class="active">محصولات</router-link>
                </li>
                <li>
                  <router-link to="/AboutUs" active-class="active">درباره مـا</router-link>
                </li>
                <li v-if="IsUserAuthenticated">
                  <router-link to="/ShopCart" active-class="active">سبد خرید</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
</template>

<script>
export default {
  computed: {
    IsUserAuthenticated() {
      return this.$store.getters.IsUserAuthenticated;
    },
    UserFullName() {
      return this.$store.getters.GetUserFullName;
    }
  },
  methods: {
    CheckForLogin() {
      this.$store.dispatch("CheckForLogin");
    },
    SignOutUser() {
      this.$store.dispatch("SignOutUser");
    }
  },
  created() {
    this.CheckForLogin();
  }
};
</script>
