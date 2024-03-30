export default analyzeArray = (arr) => {
  if (!Array.isArray(arr) || arr.some((n) => typeof n !== "number"))
    throw new Error();
  const obj = {};
  obj.average = arr.reduce((p, c) => p + c, 0) / arr.length;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;
  return obj;
};
