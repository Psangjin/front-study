
//함수 리턴
function sum1() {
    return 100;
}

sum1();
console.log(sum1());
let n = 20 + sum1();
console.log(n);

const sum3 = function sum333(a,b){
    return a+b;
}
console.log(sum3(90,20));

const sum4 = (a, b) => {
    return a+b;
}
console.log(sum4(101,202));

const sum5 = (a,b)=> a+b; //화살표 뒤 코드를 바로 return 으로 인식
console.log(sum5(15,25));

const sum6 = ( )=> 1+2+3+4+5;
console.log(sum6());


function func() {
    let x = 10;
    console.log(x);
}
//console.log(x); 인식이 안된다 다 그 지역안에서 사용하는 변수다.

if(true) {
    let x = 20;
}

{
    let x = 30;
}
//console.log(x); 인식이 안된다 다 그 지역안에서 사용하는 변수다.

let q = 30; 
console.log(q);         // 코드 위에서 아래로       let const 진형

console.log(w);         //
var w =30;

r = 3000;
var r;
console.log(r);

function check() {
    console.log('check');
}
check();
