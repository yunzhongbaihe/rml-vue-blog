<template>
	<div class="register_container">
		<div class="register_box">
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
					<div style="margin-right:20px;">已有账号？
						<router-link to="/login">去登录</router-link>&nbsp;<router-link to="/index">返回首页</router-link>
					</div>
					<div>
						<el-button type="primary" size="small" @click="register">确定</el-button>
						<el-button type="info" size="small" @click="resetregisterForm">重置</el-button>
					</div>
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
					await this.$router.push({name: 'Index', params: {isGetSession: true}});
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

	.register_form {
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
		margin-bottom: 0;
		line-height: normal;
	}
</style>