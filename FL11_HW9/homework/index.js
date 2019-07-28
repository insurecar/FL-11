let two = 2;
let three = 3;
let five = 5;
let eight = 8;
function getNumbers(str){
    let arr = str.split('');
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
       if(parseInt(arr[i]) ^ 0 === parseInt(arr[i])){
            arr[i] = parseInt(arr[i]);
            newArr.push(arr[i]);
       }
    }
    return newArr;
}
getNumbers('');
function findTypes(){
    let result = new Object();
    for(let i = 0; i < arguments.length; i++){
        let types = typeof arguments[i];
        if(result.hasOwnProperty(types[i])){
            result[types] += 1;
        }else{
            result[types] = 1;
        }
    }return result;
}
findTypes('');
function executeforEach(arr, someFunction) {
    for (let i = 0; i < arr.length; i++) {
        someFunction(arr[i]);
    }
}
executeforEach([1,two,three],function(el){
    console.log(el);
});
function mapArray(arr, someFunction) {
    let result = [];
    executeforEach(arr, function (el) {
        result.push(someFunction(el))
    });
    return result;
}
console.log(mapArray([1, two, three], function (el) {
    return el + three;
}));
function filterArray(arr, someFunction){
    let newArr = [];
    executeforEach(arr, (element) => {
        if(someFunction(element)){
            newArr.push(element);
        }
    });
    return newArr;
    }
    
console.log(filterArray([two,five,eight], (element) => {
   return element > three;
}));
function showFormattedDate(date){
    let month = ['Jan', 'Feb', 'Mar',
                         'Apr', 'May', 'Jun', 
                         'Jul', 'Aug', 'Sep', 
                         'Oct', 'Nov', 'Dec' ];
    return `Date: ${date.getDate()} ${month[date.getMonth()]}  ${date.getFullYear()};`
}
showFormattedDate(new Date('2019-01-27T01:10:00'));
function canConvertToDate(date){
    date = new Date(date);
    date = '' + date;
    return date !== 'Invalid Date';
}
canConvertToDate('2016-02-26T00:00:00'); 
function daysBetween(first, second){
    let seconds = 1000;
    let minutes = 60;
    let hours = 1440;
    let differenceDay = Math.abs(first - second);
    let result = Math.round(differenceDay/(seconds*minutes*hours));
    return result;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

let data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ];
  function getAmountOfAdultPeople(data){
    let oldPeople = 18;
    let year = 365;
    let newArr = [];
    newArr = filterArray(data, function(element){
        if(daysBetween(Date.now(), new Date(element[' birthday '])) > oldPeople * year){
           return true; 
        }
    });
    return newArr.length;
  }
  console.log(getAmountOfAdultPeople(data));

  function keys(obj){
    let newKeyArr = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newKeyArr.push(key)
            
        }
    }
    return newKeyArr;
  }
  console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
  
  
  function values(obj){
    let newKeyArr = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newKeyArr.push(obj[key]);
            
        }
    }
    return newKeyArr;
  }
  console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
