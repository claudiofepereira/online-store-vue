import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import jQuery from "jquery";
import "popper.js";
import "./assets/app.scss";
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";

require("firebase/firestore");

Vue.use(VueFirestore, {
    key: "id",
    enumerable: true
});

Vue.use(VueFirestore);

import Vue2Filters from "vue2-filters";
Vue.use(Vue2Filters);

import Vuex from "vuex";
Vue.use(Vuex);

import store from "./store.js";

window.$ = window.jQuery = jQuery;

import Swal from "sweetalert2";
window.Swal = Swal;

import vueScrollto from "vue-scrollto";
Vue.use(vueScrollto);

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;

Vue.component("NavBar", require("./components/NavBar.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);
Vue.component("mini-cart", require("./components/MiniCart.vue").default);
Vue.component("products-list", require("./sections/ProductList.vue").default);

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function(user) {
    if (!app) {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");
    }
});
