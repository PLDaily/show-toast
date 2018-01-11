/**
 * Copyright (c) 2017 PLDaily
 * License: MIT
 * https://github.com/PLDaily/showToast
**/

/**
 * Checks the value is an object or not
 *
 * @param  {*} value value The value to check
 * @return {boolean}       Returns `true` if `value` is an object, else `false`
 */
const isObject = value => {
  return typeof value === 'object' && !!value
}

/**
 * Checks the value is a String or not
 *
 * @param  {*} value value The value to check
 * @return {boolean}       Returns `true` if `value` is a String, else `false`
 */
const isString = value => {
  return Object.prototype.toString.call(value) === '[object String]'
}

/**
 *  Merge the contents of two or more objects together into the first object. like jquery extend
 *
 * @param  {object}    target The object to extend. It will receive the new properties
 * @param  {...object} args   An object containing additional properties to merge in
 * @return {object}           Returns the merged object
 */
const extend = (target, ...args) => {
  for (let obj of args) {
    for (let name in obj) {
      target[name] = obj[name]
    }
  }
  return target
}

/**
 * Removes leading and trailing whitespace or specified characters from `string`
 *
 * @param  {String} str The string to trim
 * @return {String}     Returns the trimmed string
 */
const trim = str => {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

const showToastObj = {
  _is_load: false,
  showAlertMsgBox (params) {
    if (!this._is_load) {
      let styleArr = []
      styleArr.push('zIndex:9999999999')
      styleArr.push('padding:12px')
      styleArr.push('minWidth:200px')
      styleArr.push('borderRadius:5px')
      styleArr.push('lineHeight:1.2')
      styleArr.push('fontSize:12px')
      styleArr.push('color:#FFF')
      styleArr.push('boxSizing:border-box')
      styleArr.push('backgroundColor:rgba(39, 39, 39, 0.7)')
      styleArr.push('position:fixed')
      styleArr.push('left:50%')
      styleArr.push('transform:translateX(-50%)')
      styleArr.push('textAlign:center')

      let temp = document.createDocumentFragment()
      this.oDiv = document.createElement('div')
      this.oDiv.className = 'show-toast'
      for (let i = 0, l = styleArr.length; i < l; i++) {
        let key = trim(styleArr[i].split(':')[0])
        let value = trim(styleArr[i].split(':')[1])
        this.oDiv.style[key] = value
      }
      temp.appendChild(this.oDiv)
      document.body.appendChild(temp)

      this._is_load = true
      this.doEvent(params)
    } else {
      this.doEvent(params)
    }
  },
  doEvent (params) {
    if (this.timer) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(() => {
      this.oDiv.style.display = 'none'
      clearTimeout(this.timer)
      this.timer = null
    }, params.time)

    // setting show-toast content
    this.oDiv.style.display = 'block'
    this.oDiv.innerHTML = params.str

    // setting show-toast position
    if (params.position === 'top') {
      this.oDiv.style.top = '50px'
      this.oDiv.style.bottom = 'auto'
      this.oDiv.style.transform = 'translate(-50%, 0)'
    } else if (params.position === 'bottom') {
      this.oDiv.style.bottom = '50px'
      this.oDiv.style.top = 'auto'
      this.oDiv.style.transform = 'translate(-50%, 0)'
    } else {
      this.oDiv.style.top = '50%'
      this.oDiv.style.bottom = 'auto'
      this.oDiv.style.transform = 'translate(-50%, -50%)'
    }
  }
}

const showToast = value => {
  let obj = {}
  if (!isObject(value)) {
    if (isString(value)) {
      obj = {
        str: value
      }
    } else {
      throw new TypeError('Expected an object or a String')
    }
  } else {
    obj = value
  }
  const target = {
    str: 'success',
    time: 2000,
    position: 'middle'
  }

  obj = extend(target, obj)

  showToastObj.showAlertMsgBox(obj)
}

module.exports = showToast
