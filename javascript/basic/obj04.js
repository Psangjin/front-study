
// 내장객체

let str = "hellohi@gmail.com";

console.log(str.length);    //문자의 길이

console.log(str.includes("g"));     // 해당 문자를 가지고 있는가?

console.log(str.indexOf("@"));      // 해당 문자의 인덱스 위치 찾기         < 없으면 -1 출력return >

console.log(str.substring(0,4));     //문자 잘라내기
                //0 <=   < 4   4 포함x
// 처음 ~@ : 아이디
// @ 다음~ 끝 : 도메인
console.log(str.indexOf("@"));
let id = str.substring(0, str.indexOf("@"));
console.log(id);
let domain = str.substring(str.indexOf("@")+1, str.length);
console.log(domain);

let test = " abc " ;
console.log(test);
console.log(test.trim()); // 공백제거
test = test.trim();
console.log(test);

// 문자 분리 split
// study.java.practice.main
let number = "010-1234-5678";
let s = number.split("-");
console.log(s);
console.log(s[2]);
console.log(s[0]);

console.log('-------------------------------');
let today = new Date();

console.log(today);
console.log(today.getFullYear());   //년
console.log(today.getMonth());      //월 0~11   +1 (1월 ~12월)
console.log(today.getDate());       //일
console.log(today.getDay());        //요일 0 ~ 6    (일~토)
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

