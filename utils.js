/**
 * 获取字符串在页面的宽度
 * @{String} 目标源
 * @returns fn
 */
export const getTextRect = () => {
  const elId = '__get-text-rect'
  let elNode = document.getElementById(elId)
  if (!elNode) {
    elNode = document.createElement('div')
    elNode.id = elId
    elNode.style.cssText = 'visiblity:hidden; opacity: 0; position: fixed; top: -9999px; left: -9999px'
    document.body.appendChild(elNode)
  }

  return (text, cssText = 'font-size: 14px; padding: 0 10px;') => {
    if (typeof text !== 'string') return {}
    let textElement = '<span style="box-sizing: border-box;'+ cssText +'">'+ text +'</span>'
    elNode.innerHTML = textElement
    const elRect = elNode.getBoundingClientRect()
    return elRect
  }
}

export const flattenData = function (data) {
  if (!Array.isArray(data)) return {}
  return data.reduce((acc, cur) => {
    for (let item in cur) {
      if (!acc[item]) acc[item] = []
      acc[item].push(cur[item])
    }
    return acc
  }, {})
}

// Get  string length of each item in array
export const maxNumberInArray = function (data, formatter, row = [], col) {
  let result = {
    value: '',
    length: 0,
    index: -1
  }

  Array.isArray(data) && data.forEach((value, index) => {
    let strVal = String(formatter ? formatter(row, col, value || '') : value || '')
    if (strVal.length > result.length) {
      result = { value: strVal, length: strVal.length, index }
    }
  })

  return result
}

export default {
  getTextRect,
  flattenData,
  maxNumberInArray
}
