<template>

    <div>

        <button @click="backToSelection" id="back-to-selection" class="button-primary">
            <svg width="10" height="10">
                <use xlink:href="#back"/>
            </svg>           
            <span>
                Back
            </span> 
        </button>
        
        <router-view
        @setRoute="setRoute"
        @setSessionData="setSessionData"
        ></router-view>
        
    </div>

</template>

<script>

    import "../../styles/sass/rest.scss"

    export default {

        name: "vue-main",

        components: {
        },

        props: {
        },

        data: function () {
            return {
                firstLoad: true
            };
        },

        methods: {

            // Set routes programmatically
            setRoute(route) {
                this.$router.push({ name: route });
            },

            // Store navigation data on sessionStorage
            setSessionData(route, href) {
                let sessionData = JSON.stringify({
                    used: 'vue',
                    history: route,
                    href: href
                })
                sessionStorage.setItem('sessionData', sessionData);
            },

            // Back button functionality
            backToSelection() {
                if (this.$router.history.current.path !== '/') {
                    this.$router.go(-1);
                    return;
                }
                if (sessionStorage.getItem('sessionData')) {
                    sessionStorage.removeItem('sessionData');
                }
                window.location.reload();
            }

        },

        created() {
        },

        mounted() {
            // If the component mounted for the first time check the sessionData 
            // and the user comes from a refresh redirect using the history value on sessionData
            if (this.firstLoad) {
                if (sessionStorage.getItem('sessionData')) {
                    try {
                        let data = JSON.parse(sessionStorage.getItem('sessionData'));
                        if (data.href === window.location.href) {
                            this.setRoute(data.history);
                        };
                    } catch(e) {
                        sessionStorage.removeItem('sessionData');
                    };
                    return;
                };
                this.setRoute('home');
                this.setSessionData('home', window.location.href)
            }
            this.firstLoad = false;
        },

    };

</script>