<template>
    <div id="app">
        <div class="nav_wrap">
            <router-link to="/index">首页</router-link>
            <router-link to="/books">新书速递</router-link>
            <router-link to="/timeaxis">时间轴</router-link>
        </div>
        <router-view class="w1200" style="padding-bottom:20px;"/>
    </div>
</template>

<script>
    // import {mapGetters, mapMutations, mapActions} from "vuex";

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
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: "JetBrains Mono", "Fira Code";
        font-size: 12px;
    }

    .w1200 {
        width: 1200px;
        margin: 0 auto;
    }
    
    .nav_wrap {
        display: flex;
    }
    
    .nav_active {
        color: red;
    }
</style>