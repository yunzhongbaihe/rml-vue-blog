<template>
	<el-container :class="[!tokenStr ? 'no_login' : '']">
		<div v-if="tokenStr" style="width:100%;">
			<!-- 头部区域 -->
			<el-header>
				<span v-if="tokenStr" style="margin-right:20px;">{{profileData.username}}</span>
				<el-button type="info" size="mini" @click="logout">退出</el-button>
				<el-button type="primary" size="mini" @click="$router.push('/index')">回到首页</el-button>
			</el-header>
			<el-container style="height:calc(100% - 60px);">
				<!-- 左侧导航区域 -->
				<el-aside :width="isCollapse ? '64px' : '200px'">
					<!--<div class="toggle_button" @click="toggleCollapse">|||</div>-->
					<el-menu
						:collapse="isCollapse"
						unique-opened
						:collapse-transition="false"
						router
						:default-active="defaultActive"
						background-color="#333744"
						text-color="#fff"
						active-text-color="#409EFF">
						<!--<el-submenu v-for="item in menuList" :key="item.id" :index="''+item.id">
							<template slot="title"><span>{{item.menuName}}</span></template>
							<el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
								<template slot="title">
									<span>{{subItem.menuName}}</span>
								</template>
							</el-menu-item>
						</el-submenu>-->
						<MenuRender :menu-data="menuList"></MenuRender>
					</el-menu>
				</el-aside>
				<!-- 右侧主体区域 -->
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</div>
		<div class="no_power" v-else>
			<img src="../../static/images/error_nopower.png" alt="">
			<div>请<router-link to="/login" style="color:#51AEF0;">登录</router-link>后操作</div>
		</div>
	</el-container>
</template>

<script>
	import MenuRender from '@/components/MenuRender';

	export default {
		name: 'Workbench',
		data(){
			return {
				isCollapse: false,
				menuList: require('../../static/data/menus.json'),
				defaultActive: '',
				beautydistribution: require('../../static/data/beautydistribution.json'),
				profileData: {},
			}
		},
		methods: {
			logout(){
				window.sessionStorage.clear();
				this.$router.push({name: 'Index', params: {isGetSession: true}});
			},
			toggleCollapse(){
				this.isCollapse = !this.isCollapse;
			},
		},
		created(){
			this.profileData = JSON.parse(sessionStorage.getItem('profileData') || '{}');
			this.defaultActive = this.$route.path;
		},
		components: {
			MenuRender
		}
	};
</script>

<style scoped>
	.no_login {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.el-container {
		height: 100%;
	}

	.el-header {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #333744;
		color: #333;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	.el-menu-vertical {
		height: 100%;
		background-color: #D3DCE6;
	}

	.el-menu {
		border-right: none;
	}

	.toggle_button {
		font-size: 12px;
		text-align: center;
		line-height: 24px;
		color: #fff;
		cursor: pointer;
		background-color: #ddd;
		letter-spacing: 0.2em;
	}

	.no_power div {
		margin-top: 20px;
		line-height: 24px;
		text-align: right;
	}
</style>