import '../styles/sass/pages/landing.scss';

// Trigger Vue.js
document.querySelector('#go-vue').addEventListener('click', () => {
    document.querySelector('.welcome-screen').classList.add('hide');
    import(
        /* webpackChunkName: "vue-main" */
        "./vue/main.js"
    );
})

// Trigger React.js
document.querySelector('#go-react').addEventListener('click', () => {
    document.querySelector('.welcome-screen').classList.add('hide');
    import(
        /* webpackChunkName: "react-main" */
        "./react/main.js"
    );
})