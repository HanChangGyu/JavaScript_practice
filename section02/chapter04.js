// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩쁘려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ... obj1,
    c: 3,
    d: 4,
};

// console.log(obj2);

function funcA(p1, p2, p3 ) {
    //console.log(p1, P2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest) { // rest 뒤에는 추가적인 매개변수가 올 수 없음
    console.log(rest);
}

funcB(...arr1);

// 첫 번째 친구는 leader, 나머지는 전부 members로 묶기
function party(leader, ...members) {
    console.log("반장: " + leader);
    console.log("나머지 친구들: " + members);
}

party("신", "철수", "영희", "맹구", "훈이");