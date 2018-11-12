import { Table } from 'element-ui'
import { getTextRect, flattenData } from './utils'

const fnGetTextRect = getTextRect()

export default {
  name: 'ElTable',
  extends: Table,
  props: {
    autoFitColumn: {
      type: Boolean,
      default: false
    },
    fitStyles: {
      header: {
        type: String
      },
      body: {
        type: String
      }
    }
  },
  watch: {
    data: {
      handler (data) {
        if (!this.autoFitColumn) return
        const objData = flattenData(data)
        this.$nextTick(() => this.handlerAutoFitColumn(objData))
      }
    },
    columns: {
      handler () {
        const objData = flattenData(this.data)
        this.$nextTick(() => this.handlerAutoFitColumn(objData))
      }
    }
  },
  methods: {
    handlerAutoFitColumn (data) {
      const columns = this.layout.getFlattenColumns()
      const thisColumns = this.columns

      thisColumns.forEach(col => {
        const curColumn = columns.find(item => item.id === col.id)
        if (!curColumn) return
        const headerColRect = fnGetTextRect(col.label, this.fitStyles.header)
        // 1px 边框
        const headerColWidth = headerColRect.width + 1 || curColumn.minWidth
        const maxLen = data[curColumn.property] ? Math.max.apply(null, data[curColumn.property].map(n => n.length)) : 0
        const strMaxLenItem = data[curColumn.property] ? data[curColumn.property].find(prop => prop.length === maxLen) : ''
        const bodyColRect = fnGetTextRect(strMaxLenItem, this.fitStyles.body)
        const bodyColWidth = bodyColRect.width + 1 || curColumn.minWidth

        // 调整各列宽最小宽度
        curColumn.minWidth = Math.ceil(Math.max(
                                  col.sortable ? headerColWidth + 24 : headerColWidth,
                                  col.sortable ? bodyColWidth + 24: bodyColWidth
        ))
      })

      // 调用表格组件布局函数
      this.doLayout()
      this.$emit('doLayout')
    }
  }
}
