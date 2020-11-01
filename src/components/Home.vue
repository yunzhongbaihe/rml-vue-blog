<template>
  <div>
    <el-button v-if="isNotLogined" type="primary" size="mini">
      <a :href="`${ssoCheck}${commonLoginUrl}`" style="color:#fff;text-decoration:none;">统一平台登录</a>
    </el-button>
    <el-button v-if="!isNotLogined" type="primary" size="mini" @click="logout">退出</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Home.vue',
    data() {
      return {
        isNotLogined: true,
        commonLoginUrl: encodeURIComponent('http://localhost:8888/#/login'),
        ssoCheck: `http://localhost:3000/api/ssoCheck?toUrl=`,
      }
    },
    methods: {
      logout(){
        sessionStorage.clear();
        localStorage.clear();
        this.$router.push('/login');
      },
    },
    created() {
      if(sessionStorage.getItem('token')) {
        this.isNotLogined = false;
      } else {
        this.isNotLogined = true;
      }
    },
  }
</script>