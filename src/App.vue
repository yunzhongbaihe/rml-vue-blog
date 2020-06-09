<template>
    <div id="app">
        <HeaderNav></HeaderNav>
        <router-view class="w1200" style="padding-bottom:20px;"/>
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

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: "JetBrains Mono", "Fira Code";
        list-style: none;
    }

    body {
        background-color: #f6f6f6;
    }

    .w1200 {
        width: 1200px;
        margin: 0 auto;
    }

    .w800 {
        width: 800px;
    }

    .w380 {
        width: 380px;
    }

    .g_flex {
        display: flex;
    }

    .g_bg_fff {
        background-color: #fff;
    }

    .g_mt_20 {
        margin-top: 20px;
    }

    .article_text_tip {
        width: 540px;
        color: #666;
    }
    
    .clearfix:after {
        content: '';
        display: block;
        clear: both;
    }
</style>