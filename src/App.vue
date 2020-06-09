<template>
    <div id="app">
        <HeaderNav></HeaderNav>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="w1200" style="padding-bottom:20px;"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" class="w1200" style="padding-bottom:20px;"></router-view>
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