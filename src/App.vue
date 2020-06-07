<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        mounted(){
            // this.$getAxios('/api/bookInfo', {
            //     ISBN: '9787010009148',
            // }).then(data => {
            //     console.log(data);
            // });
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
</style>