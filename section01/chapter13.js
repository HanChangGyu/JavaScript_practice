// 1. 콜백함수
function main(value) {
    value();
}

main(() => {
//   console.log("i am sub");
});

// 2. 콜백함수 활용
function repeat (count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

function cook(menu, finishAction) {
    console.log(menu + " 요리를 시작합니다. (지글지글...)");
    
    // 아까 밑에서 넘겨준 화살표 함수가 여기서 실행
    finishAction(); 
}

// [2] 함수 사용
cook("파스타", () => {
    console.log("② 다 된 파스타를 예쁜 접시에 담습니다!");
});