//oper01.js

//operator

console.log( 2 ** 4 ); 


let x = 10;
let y = 10;
let z = '10';

console.log(x >5 );
// ==               !=

// == 값이 같다      === 값과 타입이 같다
// !=               !==

console.log(x==y);  //true
console.log(x==z);  //true

console.log(x===y);  //true
console.log(x===z);  //false      === 값+ 자료항 까지 일치 하는가?

console.log(x > 5 && y > 0);            //and
console.log(x == 1 || y >= 50);         //or 연산자

// 형변환 
// 숫자 -> 문자 
// 문자 -> 숫자

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w);

// String( )
// Number( )

console.log( q + String(e));
console.log( q + Number(w));

console.log(Number("123.123"));

if (q == 10 ) {
    console.log ( "출력~~~");
}

    q == 10 && console.log("출력~~~&&");        //and 연산 앞,뒤 (참) 
//만약 앞 거짓.     연산의 결과는 거짓.     뒤의 코드 실행X
//    앞 참.        뒤의 코드 실행O
