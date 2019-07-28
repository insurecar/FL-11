function getMin(){
    let minNumb = arguments[0];
    for(let i = 0; i < arguments.length; i++){
        if(minNumb > arguments[i]){
            minNumb = arguments[i];
        }
    }return minNumb;
}
getMin();