<template>
    <div class="g_mt_20">
        <div class="g_flex" style="justify-content:space-between;align-items:flex-start;">
            <!-- 左侧 -->
            <div class="w800">
                <el-carousel trigger="click" :autoplay="true" height="300px" style="background:#d3dce6;">
                    <el-carousel-item v-for="(item, index) in carouselList.default" :key="index">
                        <img :src="item" width="100%" alt="">
                    </el-carousel-item>
                </el-carousel>
                <ul class="g_mt_20 g_bg_fff article_list">
                    <li v-for="item in articleList.default" :key="item.id">
                        <h3><a href="javascript:void(0);">{{item.title}}</a></h3>
                        <div class="g_flex">
                            <a href="javascript:void(0);" class="article_img">
                                <el-image :src="item.image" :lazy="true"></el-image>
                            </a>
                            <div>
                                <p class="article_text">{{item.desc}}</p>
                                <el-button type="primary" size="mini">阅读更多</el-button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 右侧 -->
            <div class="w380">
                <!-- 家乡名片 -->
                <el-card class="g_bg_fff calling_card card_reset">
                    <div class="calling_card_bot">
                        <span>诗词赏析 雨落茶川</span>
                        <a :href="cardImage" target="_blank">
                            <img :src="cardImage" class="image">
                        </a>
                        <div class="bottom clearfix" style="display:flex;justify-content:center">
                            <div>
                                <p>说话的不太多，却又见雨落</p>
                                <p>一年一次的过，是光阴蹉跎</p>
                                <p>太完整的风铃，雨也太寂寞</p>
                                <p>走不出的路口，村庄的宽阔</p>
                                <p>我在这里等你，感受那雨落</p>
                                <p>看远处的浓雾，山头的错落</p>
                                <p>雨落茶川，你我同在</p>
                                <p>纷纷扰扰的艳丽在雨中存在</p>
                                <p>春暖花开，不再等待</p>
                                <p>桃花春兰的盛情在这里款待</p>
                                <p>你说茶川好风光</p>
                                <p>水的柔肠，养着淳朴的胸怀</p>
                                <p>装着一个可人儿</p>
                                <p>烟雨蒙蒙，杨柳依依</p>
                                <p>随风直到，你我的，伊甸园</p>
                            </div>
                        </div>
                    </div>
                </el-card>
                <!-- 我的名片 -->
                <el-card class="g_bg_fff g_mt_20 card_reset my_card">
                    <div class="contacts">
                        <router-link to="/index" class="contacts_c1" title="我的主页"></router-link>
                        <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=940374606@qq.com" class="contacts_c2" title="我的邮箱" target="_blank"></a>
                        <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=940374606&amp;site=qq&amp;menu=yes" class="contacts_c3" title="我的QQ" target="_blank"></a>
                        <div class="c4_wrap">
                            <Popover popover-class="my_card_c4_tip" arrow-style="left:auto;right:34px;" 
                                     :popover-visible="popoverVisible">
                                <img src="../../static/images/wx-qrcode.png" alt="" width="129" title="微信扫码加好友"/>
                            </Popover>
                            <a href="javascript:void(0);" class="contacts_c4" title="我的微信" 
                               @mouseenter.stop="popoverVisible=true" 
                               @mouseleave.stop="popoverVisible=false"></a>
                        </div>
                    </div>
                </el-card>
                <!-- 微信公众号 -->
                <el-card class="g_bg_fff g_mt_20 card_reset subscription_card">
                    <el-image src="../../static/images/gzh-qrcode.png" fit="cover" :lazy="true">
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                    <div>
                        <p>茶川</p>
                        <p>留住美好的瞬间</p>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import Popover from '@/components/Popover';
    
    export default {
        name: 'Index',
        data(){
            return {
                carouselList: require('../../static/data/carouselList'),
                cardImage: 'http://photonj.photo.store.qq.com/psc?/V13n4XZY2Y6KLq/BmgsQzVq*GNja8O.UNZvUYyDVclWzNVw67Twv86LlHwtYgW6pB8BGSbdjHOP1ODm3sOXddzQs74JvB72Ax**fVNAqC70j2wBw90sJRGW9FI!/b&bo=gAc4BAAAAAARJ6s!&rf=viewer_4',
                articleList: require('../../static/data/articleList'),
                popoverVisible: false,
            }
        },
        components: {
            Popover
        }
    }
</script>

<style scoped>
    .el-row {
        margin-top: 20px;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .grid-content {
        min-height: 36px;
    }

    .el-carousel__item {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .card_reset {
        box-shadow: none;
        border: 0;
    }

    .calling_card .image {
        display: block;
        margin: 15px auto;
        width: 100%;
        height: 150px;
    }

    .calling_card .calling_card_bot {
        line-height: 24px;
    }

    .calling_card span {
        font-size: 16px;
        font-weight: bold;
    }

    .calling_card .bottom {
        font-size: 14px;
        color: #555;
        line-height: 26px;
    }
    
    /*.calling_card .bottom p {*/
    /*    font-family: "STXinwei";*/
    /*}*/

    .article_list {
        padding: 20px;
    }

    .article_list li {
        overflow: hidden;
        margin-bottom: 20px;
        border-bottom: #eee 1px dashed;
        padding-bottom: 20px;
        position: relative;
        min-height: 120px;
    }

    .article_list h3 {
        margin: 0 0 10px 0;
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }

    .article_list h3 a {
        color: #333;
        text-decoration: none;
    }

    .article_list a:hover {
        color: #51AEF0;
    }

    .article_list .article_img {
        flex-shrink: 0;
        width: 180px;
        height: 105px;
        margin-right: 20px;
        display: block;
        overflow: hidden;
        border-radius: 3px;
        position: relative;
    }

    /deep/ .article_img img {
        width: 100%;
        height: 105px;
        transition: all 0.5s;
    }

    /deep/ .article_img:hover img {
        transform: scale(1.1);
    }

    .article_list .article_text {
        margin-top: 10px;
        font-size: 14px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-height: 20px;
    }

    .article_list button {
        margin-top: 7px;
        float: right;
    }

    .my_card {
        background-color: #2A2A2A;
        overflow: visible;
    }
    
    .my_card .contacts {
        display: flex;
        justify-content: space-between;
    }

    .my_card .contacts span {
        width: 53px;
        height: 53px;
    }

    .my_card .contacts a {
        display: block;
        flex-shrink: 0;
        width: 53px;
        height: 53px;
        overflow: hidden;
        box-shadow: 0 1px 0 rgba(255, 255, 255, .1), inset 0 1px 1px rgba(0, 0, 0, .7);
        border-radius: 50%;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .my_card .contacts a:hover {
        opacity: 0.7;
    }

    .my_card .contacts_c1 {
        background-image: url('../../static/images/c01.png');
    }

    .my_card .contacts_c2 {
        background-image: url('../../static/images/c02.png');
    }

    .my_card .contacts_c3 {
        background-image: url('../../static/images/c03.png');
    }

    .my_card .contacts_c4 {
        background-image: url('../../static/images/c04.png');
    }

    .my_card .my_card_c4_tip {
        top: -170px;
        right: -1px;
        min-width: auto;
    }
    
    .my_card .c4_wrap {
        position: relative;
    }
    
    /deep/ .subscription_card .el-card__body {
        display: flex;
    }
    
    .subscription_card p {
        padding-left: 10px;
        margin-top: 3px;
        font-size: 14px;
        color: #666;
        line-height: 24px;
    }
</style>