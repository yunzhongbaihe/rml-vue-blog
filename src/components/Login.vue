<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form ref="loginFormRef" class="login_form" label-width="0px" :model="loginForm" :rules="loginFormRules">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">确定</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
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
                    username: 'admin',
                    password: '123456',
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
                    await this.$router.push('/index');
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
        width: 450px;
        height: 300px;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 3px;
    }

    .avatar_box {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 5px;
        width: 100px;
        height: 100px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #eee;
        box-shadow: 0 0 10px #eee;
        box-sizing: border-box;
    }

    .avatar_box img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }

    .login_form {
        position: absolute;
        bottom: 20px;
        padding: 0 20px;
        width: 100%;
        box-sizing: border-box;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }
</style>