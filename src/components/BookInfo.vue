<template>
    <div class="w1200">
        <div v-if="bookInfo.id" class="d_flex">
            <div class="img_wrap">
                <img :src="bookInfo.cover_url" alt="">
            </div>
            <div class="info_wrap">
                <p>标题：{{bookInfo.title}}</p>
                <p v-if="bookInfo.info && bookInfo.info.length">作者：{{bookInfo.info[1]}}</p>
                <p>评分：{{bookInfo.rating.value || '暂无'}}</p>
                <p>ISBN：{{bookInfo.ISBN}}</p>
                <p>标签：<el-tag v-for="(item, index) in bookInfo.tags" :key="index" type="info" style="margin-right:10px;">{{item}}</el-tag></p>
                <p>简介：{{bookInfo.desc.replace(/\(展开全部\)/g,'')}}</p>
            </div>
        </div>
        <Nodatadisplay v-else msg="暂无图书详细信息"/>
    </div>
</template>

<script>
    import Nodatadisplay from "@/components/Nodatadisplay";
    
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
        },
        components: {
            Nodatadisplay
        }
    }
</script>

<style scoped>
    .d_flex {
        display: flex;
        justify-content: center;
        margin-top: 6px;
    }

    .d_flex .img_wrap {
        margin-top: 14px;
        margin-right: 20px;
        text-align: center;
    }

    .d_flex img {
        max-width: 200px;
        height: 240px;
    }

    .info_wrap p {
        margin-top: 10px;
        font-size: 13px;
        line-height: 24px;
    }
</style>