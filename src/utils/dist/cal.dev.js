"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 测绘计算类
 */
var Calculate =
/*#__PURE__*/
function () {
  function Calculate() {
    _classCallCheck(this, Calculate);
  }
  /**
   * 前方交会计算，
   * A B点坐标，A B角度 {Xa, Ya, Xb, Yb, A, B}
   * 角度单位为度
   * @returns {object} { x, y }
   */


  _createClass(Calculate, null, [{
    key: "forwardInter",
    value: function forwardInter() {
      var Xa = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var Ya = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var Xb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var Yb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var A = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var B = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var t = Number(Xa);
      Yb = Number(Yb);
      A = A / 180 * Math.PI;
      B = B / 180 * Math.PI;
      var cotA = 1 / Math.tan(A);
      var cotB = 1 / Math.tan(B);
      var x = (t * cotB + Xb * cotA - Ya + Yb) / (cotA + cotB);
      var y = (Ya * cotB + Yb * cotA + t - Xb) / (cotA + cotB);
      return {
        x: x.toFixed(3),
        y: y.toFixed(3)
      };
    }
    /**
     * 距离交会
     * @param {number} Xa 
     * @param {number} Ya 
     * @param {number} Xb 
     * @param {number} Yb 
     * @param {number} Dap 
     * @param {number} Dbp 
     */

  }, {
    key: "distanceInter",
    value: function distanceInter() {
      var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var Dap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var Dbp = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var Dab = Calculate.distance(x1, y1, x2, y2);
      var aAB = Calculate.cor2ang(x1, y1, x2, y2);
      aAB = aAB / 180 * Math.PI;
      var JBAP = Math.acos((Dab * Dab + Dap * Dap - Dbp * Dbp) / (2 * Dab * Dap));
      var JABP = Math.acos((Dab * Dab + Dbp * Dbp - Dap * Dap) / (2 * Dab * Dbp));
      var aAP = aAB - JBAP;
      var aBP = aAP + JABP;
      var x = x1 + Dap * Math.cos(aAP);
      var y = y1 + Dap * Math.sin(aAP);
      return {
        x: x.toFixed(3),
        y: y.toFixed(3)
      };
    }
    /**
     * 求两点距离
     */

  }, {
    key: "distance",
    value: function distance(Xa, Ya, Xb, Yb) {
      return Math.sqrt((Xa - Xb) * (Xa - Xb) + (Ya - Yb) * (Ya - Yb));
    }
    /**
     * 坐标反算角度
     */

  }, {
    key: "cor2ang",
    value: function cor2ang(x1, y1, x2, y2) {
      var dx = x2 - x1;
      var dy = y2 - y1;
      var a;
      var f = Math.atan((y2 - y1) / (x2 - x1));
      f = f * 180 / Math.PI;
      if (dx === 0 && dy === 0) a = 0;else if (dx === 0) {
        if (dy > 0) a = 0;else a = 180;
      } else if (dx <= 0) a = f + 180;else if (dy <= 0) a = f + 360;else a = f;
      return a;
    }
  }]);

  return Calculate;
}(); // console.log(Calculate.forwardInter('10', '5', '15', '20', '35', '60'));
// console.log(Calculate.distanceInter(12.3, 6.5, 4.6, 5, 10, 12.8));


exports["default"] = Calculate;