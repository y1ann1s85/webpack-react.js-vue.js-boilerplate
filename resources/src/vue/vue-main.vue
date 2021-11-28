<template>
    <router-view
    ></router-view>
</template>

<script>

    export default {

        name: "vue-main",

        components: {
        },

        props: {
        },

        data: function () {
            return {
            };
        },

        mounted() {
            this.$router.push({ name: 'home' })        
        }

    };

</script>