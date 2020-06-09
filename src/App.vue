<template>
    <div id="app">
        <HeaderNav v-if="$route.meta.showHeaderbar"></HeaderNav>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
    // import {mapGetters, mapMutations, mapActions} from "vuex";
    import HeaderNav from "@/components/HeaderNav";

    export default {
        name: 'App',
        mounted(){
            // this.$store.dispatch('editBookId', 123456789);
            // this.$store.commit('editBookId', 987654321);

            // this.editBookId(123456789);

        },
        computed: {
            // ...mapGetters(['bookId']),
        },
        methods: {
            // ...mapMutations(['editBookId']),
            // ...mapActions(['editBookId']),
        },
        components: {
            HeaderNav
        }
    }
</script>