

let scores = [10, 30, 50, 70] ;

for(let i=0; i<scores.length; i++) {
    console.log(scores[i]);
}

//for .. in
for(let i in scores) {  // i : index
    console.log(i + ' '+ scores[i]);
}

//for .. of
for(let score of scores) {      //향상된 for 문
    console.log(score);
}

// index  0  1  2  3
//        10 30 50 70
scores.forEach( (item, index) => {
    console.log(item + " " + index);
} )