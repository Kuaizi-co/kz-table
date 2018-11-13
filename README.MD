# kz-table

```
扩展element-ui 表格列宽自适应
```

## USAGE

```
import kzTable from '@kuaizi/kz-table'

// 默认标签名是el-table
// 重载el-table
Vue.component(kzTable.name, kzTable)
```


### All Columns auto-fit

add `auto-fit-column` and `fit-styles`

```
<el-table 
    :data="data"
    border
    auto-fit-column
    :fit-styles="styles"
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
      <template slot="header" slot-scope="slot">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
    </el-table-column>
  </el-table>
```

#### js

```
export default {
  data () {
    return {
      options: [],
      styles: {
        header: 'font-size: 14px; font-weight: bold; padding: 0 10px;',
        body: 'font-size: 14px; padding: 0 10px;'
      }
    }
  }
}
```

### Some Columns auto-fit

add `auto-fit-column` 、 `fit-styles` and `fit-columns`

```
<el-table 
    :data="data"
    border
    auto-fit-column
    :fit-styles="styles"
    :fit-columns="fitColumns"
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
      <template slot="header" slot-scope="slot">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
    </el-table-column>
  </el-table>
```

#### js

```
export default {
  data () {
    return {
      options: [],
      styles: {
        header: 'font-size: 14px; font-weight: bold; padding: 0 10px;',
        body: 'font-size: 14px; padding: 0 10px;'
      },
      fitColumns: ['name', 'age', 'salary']
    }
  }
}
```

## Devlopmement

```
vue serve
```

## Build

```
vue build
```


---
(c) www.kuaizi.ai