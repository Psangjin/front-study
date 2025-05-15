



//Java 비교
// 
// new int[3];
// new int[5]; 
// 
// javascipt 배열 조작 함수
// 
/*
    맨앞
        -삭제 : shift
        -추가 : unshift
    맨뒤
        -삭제 : pop
        -추가 : push
*/ 
let arr = [1,2,3];

        //파괴적 함수 : 함수 실행 후 원본데이터에 영향 주는 것     O
        //비파괴적 함수 : 함수 실행 후 원본데이터에 영향 주지 않는 것    X

    arr.unshift(9);
    console.log(arr);
    arr.push(20);           //원본 데이터에 영향을 주기때문에 파괴적함수
    console.log(arr);

    arr.shift();
    console.log(arr);
    arr.pop();
    console.log(arr);

    let arr1 = [1,2,3];
    let arr2 = [4,5,6];

    //concat 배열 연결
    console.log(arr1.concat(arr2));     //원본 데이터 유지 파괴적함수 X

    console.log(arr2.concat(arr1));     //원본 데이터 유지 파괴적함수 X

        console.log(arr1);



// ...  전개연산자

let arr3 = [80, ... arr1 , 90];
//         [80,  [1,2,3],  90];          <<-- 기존 ... 붙이면 [대괄호] 벗기고 출력 
console.log(arr3);

//깊은복사 (deep dopy) vs 얕은복사(shallow copy)
//  값 자체를 복사      vs 주소 복사
let x = [1,2,3 ];
let y = x;              // 얕은 복사 
let z = [...x]          // 깊은 복사 ...     값 자체를 복사 ...
console.log(x);
console.log(y);
console.log(z);

x[1] = 20;
console.log(x);
console.log(y);
console.log(z);             // 값 그대로 유지


// splice 함수
// 특정위치에 추가.삭제

//      두 가지 방식
// splice (인덱스, 삭제할 갯수)                 
// splice (인덱스, 삭제할 갯수, 추가할 값)

let arr4 = [1,2,3,4,5];
console.log(arr4);
arr4.splice(1, 2) ;

console.log(arr4);  //[ 1, 4, 5 ] 

arr4.push(6);
console.log(arr4);  //[ 1, 4, 5, 6 ]

arr4.splice(2, 1, 50);
//arr[2] = 50;
console.log(arr4);

arr4.splice(2,0,30);
console.log(arr4);

console.log('-----------------------------------');
let obj = {
    name:"김밥천국",
    menu:"김밥"
};
console.log(obj);
obj.menu = "참치김밥";           //기존에 그냥 덮어쓰기해서 값을 바꿔줌      (값 저장)
console.log(obj);
obj.price = 5500;               // 그냥 추가 하면 추가됨        (새로운 키값으로 저장 [추가])
console.log(obj);
delete obj.price;               // 삭제하면 삭제됨          (특정 키값 삭제)
console.log(obj); 