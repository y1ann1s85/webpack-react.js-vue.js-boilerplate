<template>
    <div class="container">
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
            }
        }

    };

</script>