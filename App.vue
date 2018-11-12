<template>
<div class="container">
  <h1>el-table</h1>
  <el-button @click="handleAddColumn" type="primary">Add Column</el-button>
  <el-button @click="handleAddRows" type="success">Add Row</el-button>
  <br />
   <br />
  <el-table 
    :data="data"
    border
    auto-fit-column
    :fit-styles="styles"
  >
    <el-table-column
      label="姓名"
      prop="name"
      fixed
    ></el-table-column>
    <el-table-column
      label="年龄"
      prop="age"
    ></el-table-column>
    <el-table-column
      v-for="(option, index) in options"
      :label="option.label"
      :prop="option.prop"
      :key="index"
      sortable
    ></el-table-column>
    <el-table-column
      label="年龄"
      width="100"
    >
      <template slot="header" slot-scope="slot">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
    </el-table-column>
  </el-table>

  <div class="copyright">&copy; www.kuaizi.ai</div>
</div>
</template>

<script>

export default {
  data () {
    return {
      search: '',
      data: [
        {
          name: '张三',
          age: 30,
          remark: 'sdfsdfsdfsdfsdfsdff'
        },
        {
          name: '李四',
          age: 24,
           remark: 'sdfsdfsdfsdfsdfsdff'
        }
      ],
      options: [],
      styles: {
        header: 'font-size: 14px; font-weight: bold; padding: 0 10px;',
        body: 'font-size: 14px; padding: 0 10px;'
      }
    }
  },
  methods: {
    handleAddColumn () {
      this.options.push({ prop: 'remark', label: '备注' })
    },
    handleAddRows () {
      this.data.push({
        name: 'tommyshao',
        age: 30,
        remark: 'sdfsdfsdf什么备注，不准换行啊啊啊啊啊啊啊啊啊啊啊'
      })
    }
  }
}
</script>

<style>
.container {
  overflow-x: auto;
}
.el-table .cell {
  white-space: nowrap;
}
.copyright {
  text-align: center;
  margin: 100px 20px 20px;
  padding: 20px 0 0;
  border-top: 1px solid #e7e7e7;
}
</style>
