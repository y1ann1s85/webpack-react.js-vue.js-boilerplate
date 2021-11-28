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

        created() {
        },

        mounted() {
            if (sessionStorage.getItem('sessionData')) {
                try {
                    let data = JSON.parse(sessionStorage.getItem('sessionData'));
                    if (data.history) {
                        this.$router.push({ name: data.history });
                    }
                } catch(e) {
                    sessionStorage.removeItem('sessionData');
                }
                return;
            }
            this.$router.push({ name: 'home' });
            let sessionData = JSON.stringify({
                used: 'vue',
                history: 'home'
            })
            sessionStorage.setItem('sessionData', sessionData);
        },

    };

</script>