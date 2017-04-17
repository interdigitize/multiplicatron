const product = function(arr){
  if(arr.length <= 1 ){//|| isNaN(arr[0]) || isNaN(arr[1])
    return NaN;
  }
  return arr.reduce(function(pre, cur){
    if(cur.length < 1){
      return NaN;
    }
    return pre * cur;
  });
}


module.exports = product;
