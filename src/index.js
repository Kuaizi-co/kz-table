import kzTable from './table'
import kzTableColumn from './table-column'

kzTable.install = (Vue, {
  table = 'ElTable',
  column = 'ElTableColumn'
} = {}) => {
  Vue.component(table || kzTable.name, kzTable)
  Vue.component(column || kzTableColumn.name, kzTableColumn)
}

export {
  kzTable,
  kzTableColumn
}

export default kzTable