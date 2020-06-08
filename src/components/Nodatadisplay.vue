<template>
    <div class="none_book_info">{{msg}}</div>
</template>

<script>
    export default {
        props: {
            msg: {
                default: '暂无数据'
            }
        },
        name: 'Nodatadisplay'
    }
</script>

<style scoped>
    .none_book_info {
        margin-top: 200px;
        padding-top: 165px;
        height: 215px;
        background: url("../../static/images/none.png") no-repeat center 0;
        -webkit-background-size: 200px;
        background-size: 200px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        color: #ccc;
        text-indent: 1em;
        box-sizing: border-box;
    }
</style>