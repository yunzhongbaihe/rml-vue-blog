<template>
  <div class="login_container">
    <div class="login_box">
      <el-form ref="loginFormRef" class="login_form" label-width="0px" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <div style="margin-right:20px;">没有账号？
            <router-link to="/register">去注册</router-link>&nbsp;<router-link to="/index">返回首页</router-link>
          </div>
          <div>
            <el-button type="primary" size="small" @click="login">确定</el-button>
            <el-button type="info" size="small" @click="resetLoginForm">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return {
        // 数据绑定对象
        loginForm: {
          username: 'zhaofeng',
          password: '123456789',
        },
        // 验证规则对象
        loginFormRules: {
          username: [
            {required: true, message: '请输入登录名称', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符之间', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入登录密码', trigger: 'blur'},
            {min: 6, max: 15, message: '长度在 6 到 15 个字符之间', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      // 重置表单
      resetLoginForm(){
        this.$refs.loginFormRef.resetFields();
      },
      login(){
        this.$refs.loginFormRef.validate(async valid => {
          if(!valid) return;
          const res = await this.$postAxios('/api/login', this.loginForm);
          if(!res.success) return this.$message.error(res.msg);
          this.$message.success('登录成功');
          window.sessionStorage.setItem('token', res.data.token);
          window.sessionStorage.setItem('loginInfo', JSON.stringify(res.data));
          window.location.href = `http://localhost:3000/api/ssoCheck?toUrl=${encodeURIComponent('http://localhost:8888/#/home')}`
          // this.$router.push('/home');
          // await this.$router.push({name: 'Index', params: {isGetSession: true}});
        });
      }
    }
  }
</script>

<style scoped>
  .login_container {
    height: 100%;
    background-color: #2b4b6b;
  }

  .login_box {
    position: absolute;
    left: 50%;
    top: 50%;
    min-width: 450px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 3px;
  }

  .login_form {
    padding: 22px 22px 0;
    width: 100%;
    box-sizing: border-box;
  }

  .btns a, .btns a:visited {
    color: #51AEF0;
  }

  /deep/ .btns .el-form-item__content {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    line-height: normal;
  }
</style>