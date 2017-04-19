const product = function(arr){
  if(!Array.isArray(arr)|| arr.length <= 1 || arr.length === 2 && arr[0] === "" || arr.length === 2 && arr[1] === ""){
    return NaN;
  }
  return arr.reduce(function(pre, cur){
    if(cur.length < 1){
      cur = 1;
    }
    return pre * cur;
  });
}
module.exports = product;
