/**
 * 将对象参数的字符串类型统统转换为数字类型
 * @param {object} obj 
 */
export default function str2num(obj) {
  if (typeof obj !== 'object')
    throw new TypeError('str2num()的参数必须为对象');

  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'string') {
      obj[key] = parseFloat(obj[key]);
    }
  });
  return obj;
}