
exports.min = function min (array) {

  array = (typeof array !== 'undefined') ? array : 0;

  if(array == 0){
      return 0;
  }
  
  return Math.min.apply(null, array);

}

exports.max = function max (array) {
  array = (typeof array !== 'undefined') ? array : 0;

  if(array == 0){
      return 0;
  }

  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  array = (typeof array !== 'undefined') ? array : 0;

  var tempt = 0;
  for(var i = 0; i < array.length; i++){
      tempt += array[i];
  }

  if(array == 0){
      return 0;
  }
  
  return (tempt/array.length);
}
