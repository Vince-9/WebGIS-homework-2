"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = str2num;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 将对象参数的字符串类型统统转换为数字类型
 * @param {object} obj 
 */
function str2num(obj) {
  if (_typeof(obj) !== 'object') throw new TypeError('str2num()的参数必须为对象');
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'string') {
      obj[key] = parseFloat(obj[key]);
    }
  });
  return obj;
}