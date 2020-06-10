<template>
    <div id="app">
        <HeaderNav v-if="$route.meta.showHeaderbar"></HeaderNav>
        <router-view v-if="routerView"></router-view>
    </div>
</template>

<script>
    // import {mapGetters, mapMutations, mapActions} from "vuex";
    import HeaderNav from "@/components/HeaderNav";

    export default {
        name: 'App',
        data(){
            return {
                routerView: true
            }
        },
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
            reload(){
                this.getSession();
                this.routerView = false;
                this.$nextTick(() => {
                    this.routerView = true;
                });
            }
        },
        components: {
            HeaderNav
        },
        watch:{
            $route(to, from){
                if(to.params.isGetSession){
                    this.getSession();
                }
            }
        },
        provide(){
            return {
                reload: this.reload
            }
        },
    }
</script>