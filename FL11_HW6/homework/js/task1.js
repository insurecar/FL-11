let a1 = prompt('Enter a1');
a1 = parseFloat(a1);
let a2 = prompt('Enter a2');
a2 = parseFloat(a2);
let b1 = prompt('Enter b1');
b1 = parseFloat(b1);
let b2 = prompt('Enter b2');
a1 = parseFloat(a1);
let c1 = prompt('Enter c1');
c1 = parseFloat(c1);
let c2 = prompt('Enter c2');
c2 = parseFloat(c2);
let div = 2;

if(isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)){
    console('NO');
}else{
    if((a1+a2)/div === c1 && (b1+b2)/div === c2){
        console.log(true);
    }else{
        console.log(false);
    }
}