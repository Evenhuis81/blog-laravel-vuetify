// require lodash, axios and csrf-token
// r: extensions with require/import
require('./plugins/bootstrap.js');

// q: 266kb , bit much ?
// import '@mdi/font/css/materialdesignicons.css'

// q: need to register Vue globally (window.)?
// import Vue from 'vue'
window.Vue = require('vue');
import vuetify from "./plugins/vuetify.js"
import router from './plugins/router.js'
import store from './plugins/store.js'
import Vuex from "vuex";

Vue.use(Vuex);

Vue.config.productionTip = false

// q: difference from importing @ app.js? 
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import App from "./App.vue"

// fresh Vue instance injected into index laravel view #root element 
// r/q: link to constant variable?
const app = new Vue({
    store: new Vuex.Store(store),
    router,
    vuetify,
    // r/q: this or render difference?
    el: "#root",
    components: { App }
    //   render: h => h(App)
});
// }).$mount('#root');
