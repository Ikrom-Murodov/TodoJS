import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
