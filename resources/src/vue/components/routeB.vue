<template>
    <div class="container">
        <div class="home__vue">
            <h1>Route B</h1>
        </div>
    </div>
</template>

<script>

    export default {

        name: "routeB",

        components: {
        },

        props: {
        },

        data: function () {
            return {
            };
        },

        mounted() {
            this.$emit('setSessionData', this.$route.name, window.location.href)
        }

    };

</script>