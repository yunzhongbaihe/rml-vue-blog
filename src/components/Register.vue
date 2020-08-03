<template>
	<div class="register_container">
		<div class="register_box">
			<div class="register_title">账户登录</div>
			<el-form ref="registerFormRef" class="register_form" :model="registerForm" :rules="registerFormRules">
				<el-form-item prop="username">
					<el-input v-model="registerForm.username" placeholder="请输入名称">
						<template slot="prepend">名&nbsp;&nbsp;&nbsp;称</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="registerForm.password" type="password" placeholder="请输入密码">
						<template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="checkPassword">
					<el-input v-model="registerForm.checkPassword" type="password" placeholder="请再次输入密码">
						<template slot="prepend">确认密码</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="email">
					<el-input v-model="registerForm.email" placeholder="请输入邮箱">
						<template slot="prepend">邮&nbsp;&nbsp;&nbsp;箱</template>
					</el-input>
				</el-form-item>
				<el-form-item class="btns" style="margin-top: 26px;margin-bottom: 6px;">
					<a href="javascript:void(0);" class="register_btn" @click="register">注&nbsp;&nbsp;&nbsp;&nbsp;册</a>
				</el-form-item>
			</el-form>
			<div class="register_footer">
				<router-link  to="/findpwd" style="color:#666;">忘记密码</router-link>
				<router-link  to="/index" style="color:#666;">回到首页</router-link>
				<router-link to="/login" style="color:#b61d1d;">立即登录</router-link>
			</div>
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
						{required: true, message: '请输入名称', trigger: 'blur'},
						{pattern: /^[a-zA-Z0-9_]+$/, message: '名称格式不正确'},
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
					await this.$router.push({name: 'Index', params: {isGetSession: true}});
				});
			}
		}
	}
</script>

<style scoped>
	.register_container {
		height: 100%;
		background-color: #E5E5E5;
	}

	.register_box {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 450px;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 3px;
	}

	.register_form {
		padding: 23px 20px 20px;
		width: 100%;
		box-sizing: border-box;
	}

	/deep/ .btns .el-form-item__content {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		margin-bottom: 0;
		line-height: normal;
	}

	.register_title {
		height: 54px;
		font-size: 18px;
		font-family: "microsoft yahei";
		text-align: center;
		border-bottom: 1px solid #f4f4f4;
		background: #fff;
		line-height: 54px;
		font-weight: 700;
		color: #e4393c;
	}

	.register_btn {
		border: 1px solid #e85356;
		display: block;
		width: 100%;
		background: #e4393c;
		line-height: 38px;
		color: #fff;
		font-size: 16px;
		font-family: 'Microsoft YaHei';
		text-align: center;
		text-decoration: none;
    border-radius: 2px;
	}

	.register_footer {
		display: flex;
		justify-content: space-between;
		padding-left: 20px;
		padding-right: 20px;
		line-height: 50px;
		border-top: 1px solid #f4f4f4;
		height: auto;
		background-color: #fcfcfc;
	}

	.register_footer a {
		text-decoration: none;
		font-size: 14px;
	}

	>>> .el-form-item__error {
		left: 96px;
	}
</style>