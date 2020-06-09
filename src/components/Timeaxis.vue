<template>
    <div class="w1200">
        <!--<el-timeline style="margin-top:20px;">
            <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>-->
        <Nodatadisplay msg="敬请期待"/>
    </div>
</template>

<script>
    import Nodatadisplay from "@/components/Nodatadisplay";
    
    export default {
        name: 'Timeaxis',
        components: {
            Nodatadisplay
        }
    }
</script>

<style scoped>

</style>