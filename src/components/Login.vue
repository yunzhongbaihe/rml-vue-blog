<template>
	<div class="login_container">
		<div class="login_box">
			<div class="login_title">账户登录</div>
			<el-form ref="loginFormRef" class="login_form" label-width="0px" :model="loginForm" :rules="loginFormRules">
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
				</el-form-item>
				<el-form-item class="btns">
					<a href="javascript:void(0);" class="login_btn" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</a>

					<!--<div style="margin-right:20px;">没有账号？
						<router-link to="/register">去注册</router-link>&nbsp;<router-link to="/index">返回首页</router-link>
					</div>-->
					<div>
						<!--<el-button type="info" size="small" @click="resetLoginForm">重置</el-button>-->
					</div>
				</el-form-item>
			</el-form>
			<div class="login_footer">
				<router-link  to="/findpwd" style="color:#666;">忘记密码</router-link>
				<router-link to="/register" style="color:#b61d1d;">立即注册</router-link>
			</div>
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
					const res = await this.$postAxios('/api/login', this.loginForm).catch(err => ({success: false, msg: '登录失败'}));
					if(!res.success) return this.$message.error(res.msg);
					this.$message.success('登录成功');
					window.sessionStorage.setItem('token', res.data.token);
					await this.$router.push({name: 'Index', params: {isGetSession: true}});
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
		width: 346px;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 3px;
	}

	.login_form {
		padding: 23px 20px 20px;
		width: 100%;
		box-sizing: border-box;
	}

	/deep/ .btns .el-form-item__content {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		line-height: normal;
	}

	.login_title {
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

	.login_btn {
		border: 1px solid #e85356;
		display: block;
		width: 100%;
		background: #e4393c;
		height: 30px;
		line-height: 28px;
		color: #fff;
		font-size: 16px;
		font-family: 'Microsoft YaHei';
		text-align: center;
		text-decoration: none;
	}

	.login_footer {
		display: flex;
		justify-content: space-between;
		padding-left: 20px;
		padding-right: 20px;
		line-height: 50px;
		border-top: 1px solid #f4f4f4;
		height: auto;
		background-color: #fcfcfc;
	}

	.login_footer a {
		text-decoration: none;
		font-size: 14px;
	}
</style>