import { Table } from 'element-ui'
import { getTextRect, flattenData } from './utils'

const fnGetTextRect = getTextRect()

export default {
  name: 'ElTable',
  extends: Table,
  props: {
    // Set auto-fit column's width
    autoFitColumn: {
      type: Boolean,
      default: false
    },
    // the css style width thead th and tbody td
    fitStyles: {
      default: () => ({
        header: 'font-size: 14px; font-weight: bold; padding: 0 10px;',
        body: 'font-size: 14px; padding: 0 10px;'
      }),
      validator (option) {
        if (typeof option !== 'object' || !option) return false
        if (!('header' in option) || !('body' in option)) return false
        return true
      }
    },
    // we can set some columns auto-fit
    fitColumns: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    data () {
      this.setAutoFitColumn()
    },
    columns () {
      this.setAutoFitColumn()
    }
  },
  methods: {
    setAutoFitColumn () {
      // It's false, Use original el-table
      if (!this.autoFitColumn) return
      // collection data by columns property(field name)
      const objData = flattenData(this.data)
      this.$nextTick(() => this.handlerAutoFitColumn(objData))
    },
    handlerAutoFitColumn (data) {
      // adapt to 1px border
      const borderWidth = this.border ? 1 : 0
      // the api is get data by columns property
      const columns = this.layout.getFlattenColumns()
      // Each columns's settings
      this.columns.forEach(col => {
        const curColumn = columns.find(item => item.id === col.id)
        // exclude el-table gutter
        if (!curColumn) return
        // It's not exist in fit-columns array
        if (this.fitColumns.length && !this.fitColumns.includes(curColumn.property)) return

        // thead th
        const headerColRect = fnGetTextRect(col.label, this.fitStyles.header)
        const headerColWidth = headerColRect.width + borderWidth || curColumn.minWidth
        const maxLen = data[curColumn.property] ? Math.max.apply(null, data[curColumn.property].map(n => col.formatter ? col.formatter([], col, n).length : n.length)) : 0

        // tbody td
        const strMaxLenItem = data[curColumn.property] ? data[curColumn.property].find(prop => prop.length === maxLen) : ''
        const bodyColRect = fnGetTextRect(strMaxLenItem, this.fitStyles.body)
        const bodyColWidth = bodyColRect.width + borderWidth || curColumn.minWidth

        // ajust minimum width of every columns
        curColumn.minWidth = Math.ceil(Math.max(
                                  col.sortable ? headerColWidth + 24 : headerColWidth,
                                  col.sortable ? bodyColWidth + 24: bodyColWidth
        ))
      })

      // run once layout api
      this.doLayout()
      this.$emit('doLayout')
    }
  }
}
