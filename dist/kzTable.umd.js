(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("element-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["element-ui"], factory);
	else if(typeof exports === 'object')
		exports["kzTable"] = factory(require("element-ui"));
	else
		root["kzTable"] = factory(root["element-ui"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__5f72__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "3cb2");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0073":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("7325");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "023c":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4c8f");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "05d4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4c8f");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "06ca":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "0e24":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("a195");

$export($export.S, 'Array', { isArray: __webpack_require__("21c7") });


/***/ }),

/***/ "13ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("2603");
var step = __webpack_require__("1a10");
var Iterators = __webpack_require__("9340");
var toIObject = __webpack_require__("aed5");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("778b")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "13b0":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("d67a");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "1430":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("a195");
var $find = __webpack_require__("634c")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("2603")(KEY);


/***/ }),

/***/ "1a10":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "1ffd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("a195");
var $includes = __webpack_require__("6476")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("2603")('includes');


/***/ }),

/***/ "20a8":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("863c");
var global = __webpack_require__("7970");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("8f7d") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "21c7":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("902d");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "2373":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("902d");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "2603":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("c326")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("321f")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "2e1f":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("becd");
var toObject = __webpack_require__("f5b1");
var IE_PROTO = __webpack_require__("fc3a")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "321f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("8719");
var createDesc = __webpack_require__("60b8");
module.exports = __webpack_require__("7dc4") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3cb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("1ffd");

// EXTERNAL MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("4578");

// EXTERNAL MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("1430");

// EXTERNAL MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("9d35");

// EXTERNAL MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("a44e");

// CONCATENATED MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__("5f72");

// EXTERNAL MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__("b87b");

// EXTERNAL MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("0e24");

// CONCATENATED MODULE: ./utils.js





/**
 * 获取字符串在页面的宽度
 * @{String} 目标源
 * @returns fn
 */
var getTextRect = function getTextRect() {
  var elId = '__get-text-rect';
  var elNode = document.getElementById(elId);

  if (!elNode) {
    elNode = document.createElement('div');
    elNode.id = elId;
    elNode.style.cssText = 'visiblity:hidden; opacity: 0; position: fixed; top: -9999px; left: -9999px';
    document.body.appendChild(elNode);
  }

  return function (text) {
    var cssText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'font-size: 14px; padding: 0 10px;';
    if (typeof text !== 'string') return {};
    var textElement = '<span style="box-sizing: border-box;' + cssText + '">' + text + '</span>';
    elNode.innerHTML = textElement;
    var elRect = elNode.getBoundingClientRect();
    return elRect;
  };
};
var flattenData = function flattenData(data) {
  if (!Array.isArray(data)) return {};
  return data.reduce(function (acc, cur) {
    for (var item in cur) {
      if (!acc[item]) acc[item] = [];
      acc[item].push(cur[item]);
    }

    return acc;
  }, {});
}; // Get  string length of each item in array

var maxNumberInArray = function maxNumberInArray(data, formatter) {
  var row = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var col = arguments.length > 3 ? arguments[3] : undefined;
  var result = {
    value: '',
    length: 0,
    index: -1
  };
  Array.isArray(data) && data.forEach(function (value, index) {
    var strVal = String(formatter ? formatter(row, col, value || '') : value || '');

    if (strVal.length > result.length) {
      result = {
        value: strVal,
        length: strVal.length,
        index: index
      };
    }
  });
  return result;
};
/* harmony default export */ var utils = ({
  getTextRect: getTextRect,
  flattenData: flattenData,
  maxNumberInArray: maxNumberInArray
});
// CONCATENATED MODULE: ./kz-table.js








var fnGetTextRect = getTextRect();
/* harmony default export */ var kz_table = ({
  name: 'ElTable',
  extends: external_element_ui_["Table"],
  props: {
    // Set auto-fit column's width
    autoFitColumn: {
      type: Boolean,
      default: false
    },
    // the css style width thead th and tbody td
    fitStyles: {
      default: function _default() {
        return {
          header: 'font-size: 14px; font-weight: bold; padding: 0 10px;',
          body: 'font-size: 14px; padding: 0 10px;'
        };
      },
      validator: function validator(option) {
        if (_typeof(option) !== 'object' || !option) return false;
        if (!('header' in option) || !('body' in option)) return false;
        return true;
      }
    },
    // we can set some columns auto-fit
    fitColumns: {
      type: Array
    }
  },
  watch: {
    data: function data() {
      var _this = this;

      this.$nextTick(function () {
        return _this.setAutoFitColumn();
      });
    },
    columns: function columns() {
      var _this2 = this;

      this.$nextTick(function () {
        return _this2.setAutoFitColumn();
      });
    }
  },
  methods: {
    setAutoFitColumn: function setAutoFitColumn() {
      // It's false, Use original el-table
      if (!this.autoFitColumn) return;
      if (!this.data) return; // collection data by columns property(field name)

      var objData = flattenData(this.data);
      this.handlerAutoFitColumn(objData);
    },
    handlerAutoFitColumn: function handlerAutoFitColumn(data) {
      var _this3 = this;

      // adapt to 1px border
      var borderWidth = this.border ? 1 : 0; // the api is get data by columns property

      var columns = this.layout.getFlattenColumns(); // Each columns's settings

      this.columns.forEach(function (col) {
        var curColumn = columns.find(function (item) {
          return item.id === col.id;
        }); // exclude el-table gutter

        if (!curColumn || _this3.fitColumns && _this3.fitColumns.length === 0) return; // It's not exist in fit-columns array

        if (_this3.fitColumns && _this3.fitColumns.length && !_this3.fitColumns.includes(curColumn.property)) return; // thead th

        var headerColRect = fnGetTextRect(col.label, _this3.fitStyles.header);
        var headerColWidth = headerColRect.width + borderWidth || curColumn.minWidth; // tbody td

        var objMaxLenItem = maxNumberInArray(data[curColumn.property], col.formatter, [], col);
        var bodyColRect = fnGetTextRect(objMaxLenItem.value, _this3.fitStyles.body);
        var bodyColWidth = bodyColRect.width + borderWidth || curColumn.minWidth; // ajust minimum width of every columns

        curColumn.minWidth = Math.ceil(Math.max(col.sortable ? headerColWidth + 17 : headerColWidth, bodyColWidth));
      }); // run once layout api

      this.doLayout();
      this.$emit('doLayout');
    }
  }
});
// CONCATENATED MODULE: C:/Users/Administrator/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (kz_table);



/***/ }),

/***/ "4578":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("a195");
var context = __webpack_require__("d3c5");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("ed22")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "463a":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("06ca");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "4c8f":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "5aab":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "5f72":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5f72__;

/***/ }),

/***/ "60b8":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "634c":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("463a");
var IObject = __webpack_require__("2373");
var toObject = __webpack_require__("f5b1");
var toLength = __webpack_require__("023c");
var asc = __webpack_require__("13b0");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "6476":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aed5");
var toLength = __webpack_require__("023c");
var toAbsoluteIndex = __webpack_require__("05d4");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "64cb":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "652d":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("64cb");
var document = __webpack_require__("7970").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "673e":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("64cb");
var cof = __webpack_require__("902d");
var MATCH = __webpack_require__("c326")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "6f57":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("8719").f;
var has = __webpack_require__("becd");
var TAG = __webpack_require__("c326")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7325":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "74fe":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("b9fd");
var dPs = __webpack_require__("d079");
var enumBugKeys = __webpack_require__("f2b8");
var IE_PROTO = __webpack_require__("fc3a")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("652d")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("87f0").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "7534":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("74fe");
var descriptor = __webpack_require__("60b8");
var setToStringTag = __webpack_require__("6f57");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("321f")(IteratorPrototype, __webpack_require__("c326")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "778b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("8f7d");
var $export = __webpack_require__("a195");
var redefine = __webpack_require__("937e");
var hide = __webpack_require__("321f");
var Iterators = __webpack_require__("9340");
var $iterCreate = __webpack_require__("7534");
var setToStringTag = __webpack_require__("6f57");
var getPrototypeOf = __webpack_require__("2e1f");
var ITERATOR = __webpack_require__("c326")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "7970":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7dc4":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("7325")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "82f3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("b131");
var enumBugKeys = __webpack_require__("f2b8");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "863c":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8719":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("b9fd");
var IE8_DOM_DEFINE = __webpack_require__("f49e");
var toPrimitive = __webpack_require__("caac");
var dP = Object.defineProperty;

exports.f = __webpack_require__("7dc4") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "87f0":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7970").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "8f7d":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "902d":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "9340":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "937e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7970");
var hide = __webpack_require__("321f");
var has = __webpack_require__("becd");
var SRC = __webpack_require__("5aab")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("863c").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "9d35":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("13ad");
var getKeys = __webpack_require__("82f3");
var redefine = __webpack_require__("937e");
var global = __webpack_require__("7970");
var hide = __webpack_require__("321f");
var Iterators = __webpack_require__("9340");
var wks = __webpack_require__("c326");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "a195":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7970");
var core = __webpack_require__("863c");
var hide = __webpack_require__("321f");
var redefine = __webpack_require__("937e");
var ctx = __webpack_require__("463a");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "a44e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("a195");
var $forEach = __webpack_require__("634c")(0);
var STRICT = __webpack_require__("0073")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "aed5":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("2373");
var defined = __webpack_require__("d175");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "b131":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("becd");
var toIObject = __webpack_require__("aed5");
var arrayIndexOf = __webpack_require__("6476")(false);
var IE_PROTO = __webpack_require__("fc3a")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "b87b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("a195");
var $reduce = __webpack_require__("be98");

$export($export.P + $export.F * !__webpack_require__("0073")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "b9fd":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("64cb");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "be98":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("06ca");
var toObject = __webpack_require__("f5b1");
var IObject = __webpack_require__("2373");
var toLength = __webpack_require__("023c");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "becd":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "c326":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("20a8")('wks');
var uid = __webpack_require__("5aab");
var Symbol = __webpack_require__("7970").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "caac":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("64cb");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "d079":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("8719");
var anObject = __webpack_require__("b9fd");
var getKeys = __webpack_require__("82f3");

module.exports = __webpack_require__("7dc4") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "d175":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "d3c5":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("673e");
var defined = __webpack_require__("d175");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d67a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("64cb");
var isArray = __webpack_require__("21c7");
var SPECIES = __webpack_require__("c326")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ed22":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("c326")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "f2b8":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f49e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("7dc4") && !__webpack_require__("7325")(function () {
  return Object.defineProperty(__webpack_require__("652d")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "f5b1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("d175");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "fc3a":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("20a8")('keys');
var uid = __webpack_require__("5aab");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ })

/******/ });
});
//# sourceMappingURL=kzTable.umd.js.map