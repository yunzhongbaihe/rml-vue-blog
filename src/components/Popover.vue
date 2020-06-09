<template>
    <div class="popover" :class="[popoverClass, popoverVisible ? 'show' : 'hide']">
        <slot></slot>
        <div class="popper__arrow" :style="arrowStyle"></div>
    </div>
</template>

<script>
    export default {
        name: 'Popover',
        props: {
            popoverClass: {type: String, default: ''},
            arrowStyle: {type: String, default: ''},
            popoverVisible: {type:Boolean, default: false},
        }
    }
</script>

<style scoped>
    .show {
        display: block;
    }
    
    .hide {
        display: none;
    }
    
    .popover {
        position: absolute;
        background: #FFF;
        min-width: 150px;
        border: 1px solid #EBEEF5;
        padding: 12px;
        z-index: 2000;
        color: #606266;
        line-height: 1.4;
        text-align: justify;
        font-size: 14px;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        word-break: break-all;
    }
    
    .popper__arrow {
        position: absolute;
        bottom: -13px;
        left: 50%;
        border-top-color: #EBEEF5;
        border-width: 6px;
        -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
        filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
    }

    .popper__arrow:after {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        bottom: 1px;
        border-top-color: #FFF;
        content: " ";
        border-width: 6px;
    }
</style>