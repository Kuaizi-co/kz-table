import { TableColumn } from 'element-ui'

export default {
  name: 'ElTableColumn',

  extends: TableColumn,

  props: {
    maxWidth: {
      type: Number
    }
  }
}