<template>
    <el-container :class="[!loginInfoObj.username ? 'no_login' : '']">
        <div v-if="loginInfoObj.username" style="width:100%;">
            <!-- 头部区域 -->
            <el-header>
                <span v-if="loginInfoObj.username" style="margin-right:20px;">{{loginInfoObj.username}}</span>
                <el-button type="info" size="mini" @click="logout">退出</el-button>
            </el-header>
            <el-container>
                <!-- 左侧导航区域 -->
                <el-aside width="200px">
                    <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>-->
                    <el-menu default-active="1-4-1" class="el-menu-vertical"
                             @open="handleOpen" @close="handleClose" 
                             :default-openeds="['1']"
                             :unique-opened="true"
                             :collapse="isCollapse">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">导航一</span>
                            </template>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">导航二</span>
                            </template>
                            <el-menu-item index="2-1">选项3</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <!-- 右侧主体区域 -->
                <el-main>Main</el-main>
            </el-container>
        </div>
        <Nodatadisplay v-else style="margin-top:0;">
            <div>没有权限访问该页面，请 <router-link to="/login" style="color:#51AEF0;">登录</router-link> 后操作</div>
        </Nodatadisplay>
    </el-container>
</template>

<script>
    import Nodatadisplay from '@/components/Nodatadisplay';
    
    export default {
        name: 'Workbench',
        data(){
            return {
                loginInfoObj: {},
                isCollapse: false
            }
        },
        mounted(){
            this.loginInfoObj = JSON.parse(window.sessionStorage.getItem('loginInfo')) || {username: 'yunzhongbaihe'};
        },
        methods: {
            logout(){
                window.sessionStorage.clear();
                this.$router.push('/login');
            },
            handleOpen(key, keyPath){
                console.log(key, keyPath);
            },
            handleClose(key, keyPath){
                console.log(key, keyPath);
            }
        },
        components: {
            Nodatadisplay
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
        background-color: #D3DCE6;
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
</style>