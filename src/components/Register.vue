<template>
    <div class="register_container">
        <div class="register_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form ref="registerFormRef" class="register_form" label-width="82px" :model="registerForm" :rules="registerFormRules">
                <el-form-item prop="username" label="用户名">
                    <el-input v-model="registerForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input v-model="registerForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item prop="checkPassword" label="确认密码">
                    <el-input v-model="registerForm.checkPassword" type="password"></el-input>
                </el-form-item>
                <el-form-item prop="email" label="邮箱">
                    <el-input v-model="registerForm.email"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="register">确定</el-button>
                    <el-button type="info" @click="resetregisterForm">重置</el-button>
                </el-form-item>
                <el-form-item class="btns">
                    <div>已有账号？<router-link to="/login">去登录</router-link></div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data(){
            return {
                // 数据绑定对象
                registerForm: {
                    username: '',
                    password: '',
                    checkPassword: '',
                    email: '',
                },
                // 验证规则对象
                registerFormRules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符之间', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在 6 到 15 个字符之间', trigger: 'blur'}
                    ],
                    checkPassword: [
                        {required: true, message: '请再次输入密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在 6 到 15 个字符之间', trigger: 'blur'},
                        {
                            validator: (rule, value, callback) => {
                                if(value !== this.registerForm.password){
                                    callback(new Error('两次输入密码不一致'));
                                }else{
                                    callback();
                                }
                            },
                            trigger: 'blur'
                        }
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {
                            validator: (rule, value, callback) => {
                                let emailReg = /^([a-zA-Z0-9]+[-|\-|_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]/gi;
                                if(!(emailReg.test(value))){
                                    callback(new Error('邮箱格式不正确'));
                                }else{
                                    callback();
                                }
                            },
                            trigger: 'blur'
                        }
                    ],
                }
            }
        },
        methods: {
            // 重置表单
            resetregisterForm(){
                this.$refs.registerFormRef.resetFields();
            },
            register(){
                this.$refs.registerFormRef.validate(async valid => {
                    if(!valid) return;
                    const res = await this.$postAxios('/api/register', this.registerForm);
                    if(!res.success) return this.$message.error(res.msg);
                    this.$message.success(res.msg);
                    window.sessionStorage.setItem('token', res.data.token);
                    window.sessionStorage.setItem('loginInfo', JSON.stringify(res.data));
                    await this.$router.push('/index');
                });
            }
        }
    }
</script>

<style scoped>
    .register_container {
        height: 100%;
        background-color: #2b4b6b;
    }

    .register_box {
        position: absolute;
        left: 50%;
        top: 50%;
        min-width: 600px;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 3px;
    }

    .avatar_box {
        position: relative;
        left: 50%;
        transform: translate(-50%, -35%);
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

    .register_form {
        padding: 0 20px 10px;
        width: 100%;
        box-sizing: border-box;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0;
    }

    .btns a, .btns a:visited {
        color: #51AEF0;
    }
</style>