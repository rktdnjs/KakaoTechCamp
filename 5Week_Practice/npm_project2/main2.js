// 산술(Arithmetic)
/*
console.log(1 + 2)  // 3
console.log(5 - 7)  // -2
console.log(3 * 4)  // 12
console.log(10 / 2) // 5
console.log(7 % 5)  // 2

// 짝수 판별기 함수 예시
function isEven(num) {
    return num % 2 === 0
}
*/

/* ------------------ */

// 할당(Assignment)
// const a = 3
// a = a + 2 const의 경우 값의 재할당이 불가능

/*
let a = 3
a %= 2 // 2로 나눈 나머지 저장

let b = 3
// b = b + 2 아래 식과 동일한 효과
b += 2

console.log(a) // 1
console.log(b) // 5
*/

/* ------------------ */

// 증감(Increment & Decrement)
// 전위 및 후위 연산자 ++ --

/*
let a = 3

console.log(a++) // 3 (출력 후 증가)
console.log(a)   // 4
console.log(++a) // 5 (출력하기 전 증가)
console.log(a--) // 5 (출력 후 감소)
console.log(a)   // 4
console.log(--a) // 3 (출력하기 전 감소)
*/

/* ------------------ */

// 부정(Negation) -> !
// 부정 연산자는 항상 boolean 데이터로 출력된다.
// truthy & falsy에 해당하는 모든 데이터에 사용할 수 있으며, 출력은 boolean으로 나온다.
/*
console.log(true)   // true
console.log(!true)  // false
console.log(!false) // true

console.log(!0)     // falsy -> true 출력
console.log(!!0)    // falsy -> true -> false 출력
console.log(!undefined)  // falsy -> true 출력
console.log(!NaN)   // falsy -> true 출력
console.log(!null)  // falsy -> true 출력
console.log(!'')    // falsy -> true 출력

console.log(!{})    // truthy -> false 출력
console.log(![])    // truthy -> false 출력
*/

/* ------------------ */

// 비교(Comparison)
/*
const a = 1
const b = 3

// 동등연산자(형 변환이 발생함)
console.log(a == b) // false

// 부등연산자(형 변환이 발생함), 동등하지 않을 경우 true 출력
console.log(a != b) // true

// 일치연산자(형 변환 발생 x!)
console.log(a === b) // false

// 불일치연산자
console.log(a !== b) // true

// 대소 비교
console.log(a > b) // false

// 대소 비교 - 크거나 같음
console.log(a >= b) // false
*/

/* ------------------ */

// 논리(Logical)

/*
const a = true
const b = false

// AND 연산자
if (a && b) {
    console.log('모두가 참이어야 출력!') // 츨력 x
}

// OR 연산자
if (a || b) {
    console.log('하나 이상이 참!') // 출력됨
}
*/

/*
// AND 연산자
// && 연산자의 경우, 왼쪽에서부터 가장 처음 만나는 거짓 데이터를 반환한다는 특징이 존재한다.
// && 연산자는 왼쪽에서 오른쪽으로 읽어나가는데 거짓 데이터를 만날경우 해당 데이터를 바로 반환한다.
// 만약 모두다 참일 경우 제일 마지막에 위치한 데이터가 반환된다는 특징이 있다.
console.log(true && false) // false
console.log(1 && 0)        // 0 출력, 좌우에 있는 피연산자가 반환될 수 있다는 점 유의!
console.log(1 && 2 && 0)   // 0 출력, 1과 2는 참이고 제일 먼저 만나는 거짓 데이터가 0이므로 0이 출력된다.
console.log(1 && 0 && 2)   // 0 출력, 1이후 만나는 0이 제일 먼저 만나는 거짓 데이터이므로 0이 출력된다.
console.log('A' && 'B' && '')  // 마지막에 만나는 빈 문자열이 거짓 데이터 이므로 빈 문자열이 출력된다.
console.log('A' && 'B' && 'C') // 모두 참이어서 지나가다가 마지막 데이터를 만나면 그 데이터를 반환한다. C 출력
*/

// OR 연산자
// || 연산자의 경우, 왼쪽에서부터 가장 처음 만나는 참 데이터를 반환한다는 특징이 존재한다.
// || 연산자는 왼쪽에서 오른쪽으로 읽어나가는데 참 데이터를 만날경우 해당 데이터를 바로 반환한다.
/*
console.log(true || false) // true
console.log(0 || 1)        // 1
console.log(false || 0 || 1)   // 1
console.log(false || 0 || {})  // {} 
console.log(false || [] || null)  // [] 
console.log(function () {} || undefined || '') // f () {}
console.log(false || 0 || NaN) // NaN 반환, 모두 거짓일 경우 마지막 데이터 반환
*/

/* ------------------ */

// Nullish 병합(Nullish Coalescing)

/*
const n = 0

// OR 연산자를 사용한 경우
// 거짓 데이터 기준
const num1 = n || 7
console.log(num1) // 7

// Nullish 병합 연산자를 사용한 경우
// null, undefined 데이터를 제외하고(건너뛰고) 만나는 모든 거짓 데이터를 반환한다.
// null, undefined를 제외한 거짓 데이터 기준
const num2 = n ?? 7
console.log(num2) // 0

console.log(null ?? 1)         // 1
console.log(undefined ?? 2)    // 2
console.log(null ?? undefined) // undefined(마지막 반환)
console.log(null ?? 1 ?? 2)    // 1
console.log(false ?? 1 ?? 2)   // false
console.log(0 ?? 1 ?? 2)       // 0
*/

// 삼항(Ternary)

/*
const a = 1

if (a < 2) {
    console.log('참!')
} else {
    console.log('거짓!')
}

// 위 코드를 간결하게 삼항연산자를 이용하여 한 줄로 작성해보자!
// (조건 ? 참일 경우 실행 : 거짓일 경우 실행) 의 구조를 지니고 있다.
console.log(a < 2 ? '참!!' : '거짓!!')

function getAlert(message) {
    return message ? message : '메시지가 존재하지 않습니다!'
}

console.log(getAlert('안녕하세용~~!')) // 참이기 때문에 message가 반환된다.
console.log(getAlert('')) // 메시지가 존재하지 않습니다 출력! ''는 거짓 데이터이기 때문
*/

/* ------------------ */

// 전개 연산자(Spread Operator)
// 배열 데이터의 대괄호를 날려주는 역할을 수행한다.
/*
const a = [1, 2, 3]
const b = [4, 5, 6]

console.log(...a)    // 데이터를 쭉 펼쳐서 전개함!
console.log(1, 2, 3) // 1 2 3 출력, 위와 동일함

// 병합 연산자
const c = a.concat(b) // a와 b를 하나로 합침
console.log(c)        // [1, 2, 3, 4, 5, 6]

const d = [...a, ...b]
console.log(d) // [1, 2, 3, 4, 5, 6] 각 배열의 대괄호를 날려버림!
*/

// 전개 연산자를 이용하여 객체 데이터에서도 중괄호를 날려줄 수 있다!
/*
const a = {x:1, y:2}
const b = {y:3, z:4}

const c = Object.assign({}, a, b) // a, b를 병합한 새로운 객체 데이터를 생성!
console.log(c) // {x: 1, y: 3, z: 4} 객체의 속성들은 고유해야 하기 때문에 하나가 사라짐.

const d = {a, b}
console.log(d) // {a: {…}, b: {…}}
console.log({...a, ...b}) // {x: 1, y: 3, z: 4} 객체의 속성들은 고유해야 하기 때문에 하나가 사라짐.
*/

/*
function fn(x, y, z) {
    console.log(x, y, z)
}

fn(1, 2, 3) // 1 2 3

const a = [1, 2, 3]
fn(a[0], a[1], a[2]) // 1 2 3
fn(...a) // 1 2 3 배열의 요소가 대괄호가 날라가며 하나씩 들어간다!
*/

/* ------------------ */

// 구조 분해 할당(Destructuring Assignment)
// 여러가지 요소를 각자 개별 변수로 손쉽게 할당하는 방법
// 배열 혹은 객체 데이터의 구조를 분해해서 구조에 맞게 각각의 변수에 데이터를 할당하는 방식!

/*
let d = 0
let e = 0
let f = 0
const arr = [1, 2, 3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
const [a, b, c] = arr; // 위와 동일한 기능 수행
[d, e, f] = arr; // 기존에 이미 변수가 선언되어 있을 경우 이렇게만 써줘도 데이터 할당 가능!

console.log(a, b, c) // 1 2 3
console.log(d, e, f) // 1 2 3
*/

// 배열의 요소 중 나머지를 하나의 변수에 할당하고 싶을 때
/*
const arr = [1, 2, 3]

// const [a, rest] = arr
// console.log(a, rest) // 1 2 

const [a, ...rest] = arr
console.log(a, rest) // 1 [2, 3]
*/

// 원하는 obj의 속성을 따로 꺼내서 사용하고 싶음
// 배열 구조 분해 할당은 나열되어 있는 데이터의 수만큼 순서에 맞추어 구조 분해 할당을 해주어야 했음
// 객체 구조 분해 할당은 속성명이 정해져있기 때문에, 원하는 속성만 골라서 쏙 빼서 쓸 수 있다! 
/*
const obj = {
    a: 1,
    b: 2,
    c: 3
}
*/

// const a = obj.a
// const b = obj.b
// const c = obj.c

/*
const {a, b} = obj // 객체 데이터의 구조 분해 할당
const { x } = obj  // obj안에 x라는 속성은 존재하지 않기 때문에 undefined 출력!
const { z = 10 } = obj // 객체 구조 분해 할당 시 해당 값에 기본 값을 할당해줄 수 있다!
const { c = 100 } = obj

console.log(a, b)  // 1 2 만 골라내서 출력함!
console.log(x)     // undefined
console.log(z)     // 값이 지정되어 있지 않아서 undefined -> 기본값으로 10이 있으므로 10 출력
console.log(c)     // 3 출력, 기본값이 있으나 객체 구조 분해 할당 처리시 값이 존재하므로 객체의 값 할당
*/

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// a의 값을 a라는 변수명이 아닌 Hello라는 변수명으로 할당!
// 기본값 부여 + 새로운 변수명 할당을 동시에 사용할 수도 있다!
// const { x = 4, a : Hello, y : ten = 10 } = obj
// console.log(x, Hello, ten) // 4 1 출력

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    x: 100
}

const {c, ...rest } = obj

console.log(c, rest) // 3 {a: 1, b: 2, d: 4, x: 100}

/* ------------------ */