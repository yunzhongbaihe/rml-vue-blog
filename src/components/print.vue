<template>
  <div>
    <el-dialog title="测试打印" :visible.sync="dialogVisible" width="800px" top="2.5vh" :append-to-body="true">
      <div style="margin-top: -15px;">
        <table id="printMe" cellpadding="0" cellspacing="0" style="table-layout:fixed;height:100%;">
        <thead>
          <tr>
            <th>名称</th>
            <th>年龄</th>
            <th>籍贯</th>
            <th>职务</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in 10">
            <tr>
              <td>张三</td>
              <td>28</td>
              <td>北京</td>
              <td>精灵</td>
            </tr>
          </template>
        </tbody>
      </table>
      </div>
      <div class="noprint" style="margin-top:20px;text-align:right;">
        <el-button v-print="printObj">printObj</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        printObj: {
          id: "printMe",
          popTitle: '打印标题',
          // extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        },
        dialogVisible: true,
      }
    }
  }
</script>

<style media="print">
  @page {
    size: auto A4 landscape;
    margin: 5mm;
  }
  @media print {
    .noprint {
      display: none;
    }
  }
  html, body {
    height: inherit;
  }
</style>

<style>
  table {
    margin: 0 auto;
    width: 100%;
  }
  
  th,td {
    padding: 5px;
    text-align: center;
    border: 1px solid #e5e5e5;
    min-height: 30px;
  }
</style>