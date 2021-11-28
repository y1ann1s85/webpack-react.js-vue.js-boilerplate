import Vue from 'vue';

/** Vue Router - https://github.com/vuejs/vue-router **/
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/vue",
        name: "home",
        component: () => import('./components/home.vue' /* webpackChunkName: "vue-home" */)
    },
];

const router = new VueRouter({
    routes,
    mode: "history"
});

new Vue({
    el: '#vue',
    components: {
        'vue-main': () => import('./vue-main.vue' /* webpackChunkName: "vue-main" */)
    },
    router
});
