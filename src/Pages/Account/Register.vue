<template>
  <div class="container">
    <section id="form">
      <!--form-->
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="signup-form">
            <!--sign up form-->
            <h2>ثبت نام کاربـر جدیـد</h2>
            <form action="#">
              <input type="text" placeholder="نام کاربـر" v-model="name">
              <input type="text" placeholder="نام خانوادگی کاربـر" v-model="family">

              <input
                type="text"
                placeholder="آدرس ایمیـل"
                v-model="email"
                @input="$v.email.$touch()"
                :class="{invalid:$v.email.$error}"
              >
              <p class="text-danger" v-if="!$v.email.email">ایمیل وارد شده معتبر نمیباشد</p>
               <p class="text-danger" v-if="!$v.email.unique && $v.email.$dirty">ایمیل وارد شده تکراری میباشد</p>
              <p
                class="text-danger"
                v-if="!$v.email.required && $v.email.$dirty"
              >لطفا ایمیل را وارد کنید</p>
              <p
                class="text-danger"
                v-if="!$v.email.maxLength"
              >ایمیل کاربر نمیتواند بیشتر از {{$v.email.$params.maxLength.max}} کاراکتر داشته باشد</p>

              <input
                type="password"
                placeholder="رمـز عبـور"
                v-model="password"
                @blur="$v.password.$touch()"
                :class="{invalid:$v.password.$error}"
              >
              <p
                class="text-danger"
                v-if="!$v.password.required && $v.password.$dirty"
              >لطفا کلمه عبور را وارد کنید</p>

              <p
                class="text-danger"
                v-if="!$v.password.minLength"
              >کلمه عبور باید حداقل شمال {{$v.password.$params.minLength.min}} کاراکتر باشد</p>

              <input
                type="password"
                placeholder="تکرار رمز عبـور"
                v-model="rePassword"
                @input="$v.rePassword.$touch()"
                :class="{invalid:$v.rePassword.$error}"
              >

              <p
                class="text-danger"
                v-if="!$v.rePassword.sameAs && $v.rePassword.$dirty"
              >کلمه عبور مغایرت دارد</p>

              <textarea id="Address" rows="5" placeholder="آدرس کاربر" v-model="address"></textarea>
              <br>
              <br>
              <a
                @click.prevent="RegisterUser()"
                class="btn btn-success btn-block"
                :disabled="$v.$invalid"
              >ثبت نام</a>
            </form>
          </div>
          <!--/sign up form-->
        </div>
        <div style="direction:ltr">{{$v}}</div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  required,
  maxLength,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: "",
      family: "",
      email: "",
      password: "",
      rePassword: "",
      address: ""
    };
  },
  methods: {
    RegisterUser() {
      const register = {
        name: this.name,
        family: this.family,
        email: this.email,
        password: this.password,
        address: this.address
      };
      this.$store.dispatch("RegisterUser", register);
    }
  },
  validations: {
    email: {
      required,
      email,
      maxLength: maxLength(100),
      unique: function(val) {
        if (val === "") return true;

        return this.$http
          .get("Account/IsExistUserByEmail", {
            params: { email: val }
          })
          .then(
            response => {
              console.log(response);
              return !response.body.isExist;
            },
            error => {
              console.log(error);
            }
          );
      }
    },
    password: {
      minLength: minLength(6),
      required
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  }
};
</script>

<style>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}
</style>
