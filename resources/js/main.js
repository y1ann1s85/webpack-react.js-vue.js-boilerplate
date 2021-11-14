window.addEventListener('mouseover', () => {
    import(
        /* webpackChunkName: "helloFromVue" */
        /* webpackPrefetch: true */
        '../js/components/helloFromVue/helloFromVue.js'
    );
});