//함수도 매개변수, 리턴 가능

//function 함수
function func01() {
    console.log('func01호출');
}

func01();

const func02 = function() {
    console.log('func02 호출');
}

func02();

const func03 = function func03() {
    console.log('dunc03 호출');
}

func03 ();
// [ => ]     <---- 함수 선언
const func04 = () => {
    console.log( 'func04 호출')
}
func04();

function func05 (a, b ) {
     console.log(a + "  " + b);
}

func05(10, 20);
func05("A", "B");

const func06 = function( a,b) {
    console.log(a + " " +b);
}

func06(20,30);

const func07 = function func007( a,b) {
    console.log(a + " " +b);
}

func07( 50,60);

const func08 = (x, y ) => {
    console.log(x+ " "+ y);
}

func08 (90, 100);