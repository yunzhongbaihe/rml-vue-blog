<template>
    <div class="nav_wrap">
        <div class="w1200">
            <router-link to="/index">首页</router-link>
            <router-link to="/books">新书速递</router-link>
            <router-link to="/timeaxis">时间轴</router-link>
            <router-link v-if="tokenStr" to="/workbench">工作台</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderNav',
        data(){
            return {
                tokenStr: ''
            }
        },
        mounted(){
            this.tokenStr = window.sessionStorage.getItem('token');
        }
    }
</script>

<style scoped>
    .nav_wrap {
        background-color: #51aef0;
    }
    
    .nav_wrap > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 40px;
    }
    
    .nav_wrap a {
        padding: 0 20px;
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        letter-spacing: 2px;
        line-height: 40px;
    }

    .nav_wrap .nav_active,
    .nav_wrap a:hover {
        color: #51aef0;
        background-color: #fff;
    }
</style>