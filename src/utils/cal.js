/**
 * 测绘计算类
 */
export default class Calculate {
  constructor() {

  }

  /**
   * 前方交会计算，
   * A B点坐标，A B角度 {Xa, Ya, Xb, Yb, A, B}
   * 角度单位为度
   * @returns {object} { x, y }
   */
  static forwardInter(Xa = 0, Ya = 0, Xb = 0, Yb = 0, A = 0, B = 0) {
    const t = Number(Xa);
    Yb = Number(Yb);
    A = A / 180 * Math.PI;
    B = B / 180 * Math.PI;
    const cotA = 1 / Math.tan(A);
    const cotB = 1 / Math.tan(B);
    const x = (t * cotB + Xb * cotA - Ya + Yb) / (cotA + cotB);
    const y = (Ya * cotB + Yb * cotA + t - Xb) / (cotA + cotB);
    return { x: x.toFixed(3), y: y.toFixed(3) };
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
  static distanceInter(x1 = 0, y1 = 0, x2 = 0, y2 = 0, Dap = 0, Dbp = 0) {
    x1 = parseFloat(x1);
    y1 = parseFloat(y1);
    x2 = parseFloat(x2);
    y2 = parseFloat(y2);
    Dap = parseFloat(Dap);
    Dbp = parseFloat(Dbp);
    let Dab = Calculate.distance(x1, y1, x2, y2);
    let aAB = Calculate.cor2ang(x1, y1, x2, y2);
    aAB = aAB / 180 * Math.PI;
    let JBAP = Math.acos((Dab * Dab + Dap * Dap - Dbp * Dbp) / (2 * Dab * Dap));
    let JABP = Math.acos((Dab * Dab + Dbp * Dbp - Dap * Dap) / (2 * Dab * Dbp));
    let aAP = aAB - JBAP;
    let aBP = aAP + JABP;
    const x = x1 + Dap * Math.cos(aAP);
    const y = y1 + Dap * Math.sin(aAP);

    return { x: x.toFixed(3), y: y.toFixed(3) };
  }

  /**
   * 求两点距离
   */
  static distance(Xa, Ya, Xb, Yb) {
    return Math.sqrt((Xa - Xb) * (Xa - Xb) + (Ya - Yb) * (Ya - Yb)).toFixed(3);
  }

  /**
   * 坐标反算方位角
   */
  static cor2ang(x1, y1, x2, y2) {
    x1 = parseFloat(x1);
    y1 = parseFloat(y1);
    x2 = parseFloat(x2);
    y2 = parseFloat(y2);
    const dx = x2 - x1;
    const dy = y2 - y1;
    let a;
    let f = Math.atan((y2 - y1) / (x2 - x1));
    f = f * 180 / Math.PI;
    if (dx === 0 && dy === 0) a = 0;
    else if (dx === 0) {
      if (dy > 0) a = 0;
      else a = 180;
    }
    else if (dx <= 0)
      a = f + 180;
    else if (dy <= 0)
      a = f + 360;
    else a = f;
    return a.toFixed(6);
  }
}


// console.log(Calculate.forwardInter('10', '5', '15', '20', '35', '60'));
// console.log(Calculate.distanceInter(12.3, 6.5, 4.6, 5, 10, 12.8));