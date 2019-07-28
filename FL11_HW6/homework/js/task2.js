let a = prompt('Enter a');
a = parseFloat(a);
let b = prompt('Enter b');
b = parseFloat(b);
let c = prompt('Enter c');
c = parseFloat(c);
if(a === b && a === c && b === c){
    console.log('Eequivalent triangle');
}else if(a === b || a === c || b === c){
    console.log('Isosceles triangle');
}else if (a !== b && a!== c && b !==c){
    console.log('Normal triangle');
}else{
    console.log('Triangle doesn’t exist');
}
