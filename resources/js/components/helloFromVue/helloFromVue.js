import Vue from 'vue';

new Vue({
    el: '#helloFromVue',
    components: {
        'helloFromVue': () => import('./helloFromVue.vue' /* webpackChunkName: "hellowFromVue" */)
    },
    render: h => h('helloFromVue')
});
