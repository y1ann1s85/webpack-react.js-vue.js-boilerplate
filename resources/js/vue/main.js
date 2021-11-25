import Vue from 'vue';

new Vue({
    el: '#home__vue',
    components: {
        'home': () => import('../vue/components/home/home.vue' /* webpackChunkName: "home" */)
    },
    render: h => h('home')
});
