module.exports = function check(str, bracketsConfig) {
  let array = Array.from(str);

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++ ){
      if(array[i] == bracketsConfig[j][0] && array[i+1] == bracketsConfig[j][1]){
        array.splice(i ,2);
        i = -1;
      }
    }
    if(array.length == 0){
      return true;
    }
  
  }
  
    return false;

}
