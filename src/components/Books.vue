<template>
    <div class="w1200">
        <div v-if="!$route.params.id">
            <ul>
                <li v-for="item in books" :key="item.title">
                    <img :src="item.cover_url" alt=""/>
                    <router-link class="a_title" :to="`/books/info/${item.id}`">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <router-view v-else/>
    </div>
</template>

<script>
    export default {
        name: "Books",
        data(){
            return {
                books: []
            }
        },
        mounted(){
            this.$getAxios('/api/bookNew').then(data => {
                data.data.map(item => {
                    if(/https:\/\/book.douban.com\/subject\/(\d+)\/\?icn=index-latestbook-subject/g.test(item.url)){
                        this.$set(item, 'id', RegExp.$1);
                    }
                });
                this.books = data.data;
            });
        }
    }
</script>

<style scoped>
    .w1200 {
        width: 1200px;
        margin: 0 auto;
    }

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
        padding: 20px 10px;
        width: 150px;
        box-sizing: border-box;
        border: 1px solid #e6e6e6;
    }

    ul img {
        display: block;
        width: 100%;
    }

    ul .a_title {
        padding: 5px;
        font-size: 14px;
    }

    .a_title:visited {
        color: rgb(0, 0, 238);
    }
</style>