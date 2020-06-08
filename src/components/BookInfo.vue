<template>
    <div>
        <div v-if="bookInfo.id" class="d_flex">
            <div class="img_wrap">
                <img :src="bookInfo.cover_url" alt="">
            </div>
            <div class="info_wrap">
                <p>标题：{{bookInfo.title}}</p>
                <p v-if="bookInfo.info && bookInfo.info.length">作者：{{bookInfo.info[1]}}</p>
                <p>评分：{{bookInfo.rating.value}}</p>
                <p>ISBN：{{bookInfo.ISBN}}</p>
                <p>标签：
                    <el-tag v-for="(item, index) in bookInfo.tags" :key="index" type="info" style="margin-right:10px;">
                        {{item}}
                    </el-tag>
                </p>
                <p>简介：{{bookInfo.desc}}</p>
            </div>
        </div>
        <div v-else class="none_book_info">暂无图书信息</div>
    </div>
</template>

<script>
    export default {
        name: 'BookInfo',
        data(){
            return {
                bookInfo: {},
            }
        },
        mounted(){
            this.getDoubanBookInfo(this.$route.params.id);
        },
        methods: {
            getDoubanBookInfo(bookId){
                this.$getAxios('/api/bookInfo', {bookId}).then(data => {
                    this.bookInfo = data.data;
                });
            }
        }
    }
</script>

<style scoped>
    .d_flex {
        display: flex;
        justify-content: center;
    }

    .d_flex .img_wrap {
        margin-top: 14px;
        margin-right: 20px;
        text-align: center;
    }

    .d_flex img {
        width: 100%;
        height: 240px;
    }

    .info_wrap p {
        margin-top: 10px;
        font-size: 13px;
        line-height: 24px;
    }

    .none_book_info {
        margin-top: 20px;
        padding-top: 165px;
        background: url("../../static/images/none.png") no-repeat center 0;
        -webkit-background-size: 200px;
        background-size: 200px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        color: #ccc;
        text-indent: 1em;
    }
</style>