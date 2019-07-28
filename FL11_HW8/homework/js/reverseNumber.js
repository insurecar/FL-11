function reverseNumber(a){
    let reversNumb = Math.abs(a).toString().split("").reverse().join("");
    if(a >0){
      return +reversNumb;
    }else if(a < 0){
      return -reversNumb;
    }
    
  }
  reverseNumber();