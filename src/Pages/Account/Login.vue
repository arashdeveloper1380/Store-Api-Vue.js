<template>
  <div class="container">
    <section id="form">
      <!--form-->
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="login-form">
            <!--login form-->
            <h2>ورود به حساب کاربـری :</h2>
            <form>
              <input type="email" placeholder="آدرس ایمیـل" v-model="email" />
              <input type="password" placeholder="کلمه عبور" v-model="password" />
              <button class="btn btn-default" @click.prevent="LoginUser()">ورود</button>
            </form>
          </div>
          <!--/login form-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    LoginUser() {
      const login = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("LoginUser",login);
    }
  }
};
</script>
