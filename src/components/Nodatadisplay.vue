<template>
    <div class="none_info">
        <div>{{msg}}</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                default: ''
            }
        },
        name: 'Nodatadisplay'
    }
</script>

<style scoped>
    .none_info {
        margin-top: 200px;
        padding-top: 165px;
        min-width: 200px;
        min-height: 215px;
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