import Vue from 'vue';

/** Vue Router - https://github.com/vuejs/vue-router **/
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('./components/home.vue' /* webpackChunkName: "vue-home" */)
    },
];

const router = new VueRouter({
    routes,
    mode: "history"
});

/** Ignore VueRouter redirect error **/
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((error) => {});
};

new Vue({
    el: '#vue',
    components: {
        'vue-main': () => import('./vue-main.vue' /* webpackChunkName: "vue-main" */)
    },
    router
});
