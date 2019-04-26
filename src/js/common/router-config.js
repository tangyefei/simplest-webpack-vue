import Home from "cp/Home.vue";
import Products from "cp/Products.vue";

export default {
  routes: [{
    name: 'home', path: '/', component: Home
  },{
    name: 'products', path: '/products', component: Products
  }]
}