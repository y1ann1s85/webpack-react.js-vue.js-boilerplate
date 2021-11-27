import Vue from 'vue';

new Vue({
    el: '#vue',
    components: {
        'vue-main': () => import('./components/vue-main.vue' /* webpackChunkName: "vue-main" */)
    }
});
