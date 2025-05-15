
function getMealByTime(Time) {
    if(Time<=6 && Time>=10){
        console.log("아침")
    }else if(Time<=11 && Time>=14){
        console.log("점심")
    }
}



console.log(getMealByTime(5)); //출력값 : 금식
console.log(getMealByTime(8)); //출력값 : 아침
console.log(getMealByTime(13)); //출력값 : 점심
console.log(getMealByTime(16)); //출력값 : 금식
console.log(getMealByTime(19)); //출력값 : 저녁
console.log(getMealByTime(22)); //출력값 : 야식
console.log(getMealByTime(2)); //출력값 : 금식