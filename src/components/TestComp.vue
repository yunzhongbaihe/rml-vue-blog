<template>
  <KindeditorComp id="kindeditorComp_1" height="300px" width="500px" :content.sync="editorText"
                  :loadStyleMode="false"></KindeditorComp>
</template>

<script>
  import KindeditorComp from './KindeditorComp.vue';

  export default {
    name: 'TestComp',
    components: {KindeditorComp},
    data(){
      return {
        editorText: '',
      }
    },
    created(){
      setTimeout(params => {
        window.location.href = `http://localhost:3000/api/ssoCheck?toUrl=${encodeURIComponent('http://localhost:8888/#/login')}`;
      }, 1000);
      // this.$router.push('/login');
    },
  }
</script>

<style scoped>
</style>