<template>
  <div class="container">
    <a-tabs>
      <a-tab-pane key="1" title="Excel读取">
        <a-card title="通过读取本地文件展示Excel" :bordered="false">
          <div class="top-wrapper">
            <input class="file-input" type="file" @change="handleChange" />
          </div>
          <div class="content-wrapper">
            <div class="table" v-html="excelHtml"></div>
          </div>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="2" title="Excel下载">
        <a-card title="通过获取接口数据下载Excel" :bordered="false">
          <div class="top-wrapper">
            <a-button type="primary" @click="handleGetData">
              获取接口数据并下载
            </a-button>
          </div>
        </a-card>
        <a-card title="通过页面上的Table下载Excel" :bordered="false">
          <div class="top-wrapper">
            <a-button type="primary" @click="handleExportTable">导出</a-button>
          </div>
          <div class="content-wrapper">
            <table ref="userTableRef" border="1" width="300" height="100">
              <caption>考试成绩表</caption>
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>语文</th>
                  <th>数学</th>
                  <th>英语</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>小明</td>
                  <td>90</td>
                  <td>89</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>小红</td>
                  <td>90</td>
                  <td>89</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>小花</td>
                  <td>90</td>
                  <td>89</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="3" title="Excel预览">
        <div class="top-wrapper">
          <a-space>
            <a-button type="primary" @click="handleLocalhostExcel">
              加载人员信息表
            </a-button>
            <input
              class="file-input"
              type="file"
              @change="handleOriginChange"
            />
          </a-space>
        </div>
        <div class="content-wrapper">
          <VueOfficeExcel
            :src="originExcelSrc"
            style="height: 500px"
          ></VueOfficeExcel>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
export default { name: 'Excel' }
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { read, writeFile, utils } from 'xlsx'
import VueOfficeExcel from '@vue-office/excel'
import '@vue-office/excel/lib/index.css'
import { reqExcelList } from '@/api/test'

const excelHtml = ref('')
const userTableRef = ref()
const originExcelSrc = ref('')

// 选择文件
const handleChange = (e: any) => {
  let _file = e.target.files[0]
  // 将Excel文件转换为arrayBuffer对象
  _file.arrayBuffer().then((res: any) => {
    // 读取转为book对象
    const workBook = read(res)
    const sheet1 = workBook.Sheets[workBook.SheetNames[0]]
    const _data = utils.sheet_to_json(sheet1)
    const _html = utils.sheet_to_html(sheet1)
    console.log(_data)
    excelHtml.value = _html
  })
}

// 获取接口数据
const handleGetData = async () => {
  const { data } = await reqExcelList()
  const worksheet = utils.json_to_sheet(data.list)
  const workBook = utils.book_new()
  utils.book_append_sheet(workBook, worksheet, 'sheet1')
  writeFile(workBook, 'user.xlsx')
}

// 导出表格
const handleExportTable = () => {
  const tableDom = userTableRef.value
  const tableSheet = utils.table_to_sheet(tableDom)
  const workBook = utils.book_new()
  utils.book_append_sheet(workBook, tableSheet, 'sheet1')
  writeFile(workBook, 'grade.xlsx')
}

// 加载本地文件
const handleLocalhostExcel = () => {
  originExcelSrc.value = '/public/人员信息表.xlsx'
}

// 模拟获取远程文件
const handleOriginChange = (e: any) => {
  const _file = e.target.files[0]
  const fr = new FileReader()
  fr.readAsDataURL(_file)
  fr.onload = (event: any) => {
    originExcelSrc.value = event.target.result as string
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
  .arco-tabs {
    background: var(--color-bg-2);
    .top-wrapper {
      padding: 10px;
    }
    .content-wrapper {
      padding: 10px;
    }
  }
}

table,
tr,
th,
td {
  border: 1px solid #ccc;
}
th,
td {
  padding: 4px;
}
</style>
