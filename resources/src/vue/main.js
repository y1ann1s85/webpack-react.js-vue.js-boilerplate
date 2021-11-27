import Vue from 'vue';

new Vue({
    el: '#vue',
    components: {
        'main': () => import('./components/main.vue' /* webpackChunkName: "main-vue" */)
    }
});
