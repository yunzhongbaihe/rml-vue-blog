<template>
    <div>
        <div v-if="!$route.params.id">
            <ul v-if="books && books.length">
                <li v-for="item in books" :key="item.title">
                    <router-link class="a_title" :to="`/books/info/${item.id}`">
                        <img :src="item.cover_url" alt=""/>
                        <span>{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
            <Nodatadisplay v-else msg="新书还未上架"/>
        </div>
        <router-view v-else/>
    </div>
</template>

<script>
    import {Loading} from 'element-ui';
    import Nodatadisplay from "@/components/Nodatadisplay";

    export default {
        name: "Books",
        data(){
            return {
                books: [],
                loadingInstance: null,
            }
        },
        mounted(){
            this.$getAxios('/api/bookNew').then(data => {
                this.loadingInstance = Loading.service({background: 'rgba(0,0,0,0.5)'});
                data.data.map(item => {
                    if(/https:\/\/book.douban.com\/subject\/(\d+)\/\?icn=index-latestbook-subject/g.test(item.url)){
                        this.$set(item, 'id', RegExp.$1);
                    }
                });
                this.books = data.data;
                setTimeout(() => this.loadingInstance.close(), 1000);
            });
        },
        components: {
            Nodatadisplay
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        list-style: none;
    }

    ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        margin-left: 20px;
        padding: 10px;
        width: 224px;
        box-sizing: border-box;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
    }

    ul li:nth-child(5n+1) {
        margin-left: 0;
    }

    ul img {
        display: block;
        width: 100%;
        height: 240px;
        transition: all 0.3s linear;
    }
    
    li:hover img {
        transform: scale(0.95);
    }

    ul .a_title span {
        display: block;
        margin-top: 10px;
        font-size: 14px;
        text-align: center;
    }

    .a_title:visited {
        color: rgb(0, 0, 238);
    }
</style>