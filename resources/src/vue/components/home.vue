<template>
    <div class="container">

        <button @click="backToSelection" id="back-to-selection" class="button-primary">
            <svg width="20" height="20">
                <use xlink:href="#back"/>
            </svg>           
            <span>
                Back
            </span> 
        </button>

        <div class="home__vue">

            <svg class="framework-logo" width="300">
                <use xlink:href="#vue-logo"/>
            </svg>

            <h1>Vue.js + Vue Router</h1>

            <div class="home__vue--router-links">
                <a @click.prevent="selectRoute('routeA')" class="router-link button-primary" to="/a.html">Route A</a>
                <a @click.prevent="selectRoute('routeB')" class="router-link button-primary" to="/b.html">Route B</a>
                <a @click.prevent="selectRoute('routeC')" class="router-link button-primary" to="/c.html">Route C</a>
            </div>

        </div>
    </div>
</template>

<script>

    export default {

        name: "home",

        components: {
        },

        props: {
        },

        data: function () {
            return {
            };
        },

        methods: {

            selectRoute(route) {
                this.$emit('setRoute', route);
            },

            backToSelection() {
                if (sessionStorage.getItem('sessionData')) {
                    sessionStorage.removeItem('sessionData');
                }
                window.location.reload();
            }

        }

    };

</script>