<template>
<div class="container">
  <h1>el-table</h1>
  
  <div class="feature">
    <a href="https://github.com/Kuaizi-co/kz-table/blob/master/App.vue" class="el-button el-button--primary is-plain"><i class="el-icon-view"></i>View Resource</a>
    <a href="https://github.com/Kuaizi-co/kz-table" class="el-button el-button--primary is-plain"><i class="el-icon-star-on"></i>star</a>
  </div>
  <br />
   <br />

   <h2>All Columns auto-fit</h2>
   <el-button @click="handleAddColumn" type="primary">Add Column</el-button>
  <el-button @click="handleAddRows" type="success">Add Row</el-button>
  <el-table 
    :data="data"
    border
    auto-fit-column
  >
    <el-table-column
      label="姓名2222"
      prop="name"
      fixed
    ></el-table-column>
    <el-table-column
      label="年龄3333"
      prop="age"
    ></el-table-column>
    <el-table-column
      v-for="(option, index) in options"
      :label="option.label"
      :prop="option.prop"
      :key="index"
      sortable
      auto-fit
    ></el-table-column>
    <el-table-column
      label="年龄"
      width="100"
    >
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
    </el-table-column>
  </el-table>

  <h2>Max-width</h2>
  <el-table 
    :data="data"
    border
    auto-fit-column
  >
    <el-table-column
      label="姓名2222"
      prop="name"
      fixed
    ></el-table-column>
    <el-table-column
      label="年龄3333"
      prop="age"
      :max-width="130"
    ></el-table-column>
    <el-table-column
      v-for="(option, index) in options"
      :label="option.label"
      :prop="option.prop"
      :key="index"
      :max-width="100"
      sortable
      auto-fit
    ></el-table-column>
    <el-table-column
      label="年龄"
      width="100"
    >
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
    </el-table-column>
  </el-table>

  <h2>Some Columns auto-fit (name & age)</h2>

  <el-button @click="handleAddColumn" type="primary">Add Column</el-button>
  <el-button @click="handleAddRows" type="success">Add Row</el-button>
  <el-table 
    :data="data"
    border
    auto-fit-column
    :fit-styles="styles"
    :fit-columns="['name', 'age', 'salary']"
  >
    <el-table-column
      label="Name"
      prop="name"
      fixed
    ></el-table-column>
    <el-table-column
      label="Age"
      prop="age"
    ></el-table-column>
    <el-table-column
      label="Salary"
      prop="salary"
      :formatter="formatter"
    ></el-table-column>
    <el-table-column
      v-for="(option, index) in options"
      :label="option.label"
      :prop="option.prop"
      :key="index"
      sortable
      auto-fit
    ></el-table-column>
    <el-table-column
      label="年龄"
      width="100"
    >
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
    </el-table-column>
  </el-table>

   <h2>Show Summary</h2>

  <el-button @click="handleAddColumn" type="primary">Add Column</el-button>
  <el-button @click="handleAddRows" type="success">Add Row</el-button>
  <el-button @click="handleReverseColumn" type="success">Reverse Column</el-button>
  <el-button @click="handleDynamicAutoColumn" type="success">Dynamic auth-width Column</el-button>
  <el-table 
    :data="data"
    border
    auto-fit-column
    show-summary
    :summary-method="summaryMethod"
    :fit-styles="styles"
    :fit-columns="fitColumns"
  >
    <el-table-column
      v-for="(column, cIndex) in autoWidthColumns"
      :label="column.label"
      :prop="column.name"
      :key="cIndex"
      :formatter="formatter"
      fixed
    ></el-table-column>
    <!-- <el-table-column
      label="Age"
      prop="age"
    ></el-table-column>
    <el-table-column
      label="Salary"
      prop="salary"
      align="right"
      :formatter="formatter"
    ></el-table-column> -->
    <el-table-column
      v-for="(option, index) in options"
      :label="option.label"
      :prop="option.prop"
      :key="10 + index"
      sortable
      auto-fit
    ></el-table-column>
    <el-table-column
      label="年龄"
      width="100"
    >
      <template slot="header">
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
const currency = (num, decimal = 2) => {
  let n = Number(num)
  let parts
  let hasDecimal = false
  if (num !== null && !isNaN(n)) {
    // 检测是否有小数点
    hasDecimal = /\.\d{1,}/g.test(num)
    // 精度
    n = hasDecimal ? n.toFixed(decimal) : String(n)
    parts = n.split('.')
    return `${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (hasDecimal ? '.' : '') + (parts[1] || '')}`.replace(/\.$/, '')
  }
  return '-'
}
export default {
  data () {
    return {
      search: '',
      data: [
        {
          name: '张三',
          age: 30,
          salary: 320000,
          remark: 'sdfsdfsdfsdfsdfsdff'
        },
        {
          name: '李四',
          age: 24,
          salary: 525000,
          remark: 'sdfsdfsdfsdfsdfsdff'
        }
      ],
      options: [],
      autoWidthColumns: [
        {
          name: 'name',
          label: 'Name'
        },
        {
          name: 'age',
          label: 'Age'
        },
        {
          name: 'salary',
          label: 'Salary'
        },
        {
          name: 'remark',
          label: 'Remark'
        }
      ],
      styles: {
        header: 'font-size: 14px; font-weight: bold; padding: 0 10px;',
        body: 'font-size: 14px; padding: 0 10px;'
      }
    }
  },
  computed: {
    fitColumns () {
      return this.autoWidthColumns.map(a => a.name)
    }
  },
  methods: {
    // formatter (row, column, cellValue, index) {
    formatter (row, column, cellValue) {
      if (column.property !== 'salary') return cellValue
      // 获取字段名
      // console.log(column.property)
      return currency(cellValue)
    },
    handleAddColumn () {
      this.options.push({ prop: 'remark', label: '备注', maxWidth: 130 })
    },
    handleAddRows () {
      this.data.push({
        name: 'tommyshao',
        age: 30,
        salary: 15000,
        remark: 'sdfsdfsdf什么备注，不准换行啊啊啊啊啊啊啊啊啊啊啊'
      })
    },
    summaryMethod ({ columns, data }) {
      const showSummaryCol = ['salary']
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value)) && showSummaryCol.includes(column.property)) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] = currency(sums[index])
        } else {
          sums[index] = ''
        }
      })
      return sums
    },
    handleReverseColumn () {
      // this.autoWidthColumns = 
      this.autoWidthColumns.reverse()
    },
    handleDynamicAutoColumn () {
      this.autoWidthColumns = [
        {
          name: 'remark',
          label: 'Remark'
        },
        ...this.autoWidthColumns.slice(0, 2)
      ]
    }
  }
}
</script>

<style>
.container {
  overflow-x: auto;
}
.feature {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
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
