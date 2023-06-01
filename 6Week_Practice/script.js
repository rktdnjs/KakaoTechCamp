/* ----- 선언과 표현 그리고 호이스팅 ----- */
// 호이스팅(Hoisting)
// 코드는 위에서부터 아래로 해석한다.
// 정의되기도 전에 hello 라는 함수를 사용하고 있다.
// 자바스크립트가 함수의 선언부를 최상단으로 끌어올리는 현상!

/*
hello()
// 함수의 선언 - 호이스팅 o, 작동 o
function hello() {
    console.log("hello!")
}

// 함수의 표현 - 호이스팅 x, 작동 x
const hello = function () {
    console.log("hello!")
}

const world = function hello() {
    console.log('Hello~')
}

world()
*/

/* ----- 반환 및 종료 ----- */
/*
function hello() {
    return 'Hello~'
	// return 키워드 다음에 오는 코드는 실행되지 않는다. return 선에서 끝!
    // return 뒤에 아무것도 입력하지 않으면 undefined가 반환된다.
}

// 함수를 호출하면 return의 결과값이 호출한 자리에 남는다.
console.log(hello()) // 함수의 반환값이 출력된다.
console.log(hello)   // 이 경우 함수 자체가 데이터로써 출력된다.

function plus(num) {
    return num + 1
}

console.log(plus(2)) // 3
console.log(plus())  // 매개변수를 전달하지 않을 경우 undefined 전달, undefined + 1 = NaN
*/

/* ----- 매개변수 패턴 ----- */
// 매개변수(Parameter) - 데이터를 들어오는 순서대로 받아 함수내부에서 사용하는 변수
/*
function sum(a, b = 1) { // 기본값(Default Value)
    return a + b
}

console.log(sum(1, 2)) // 인자(Argument) - 함수로 들어가는 변수
console.log(sum(1))    // 1 + 1(기본값) = 2
*/

// 구조 분해 할당(Destructuring Assignment)
// const user = {
//   name: "Hello",
//   age: 85,
// };

// function getName(user) {
//     return user.name
// }

// 위 함수와 아래 함수는 동일한 결과를 출력한다.

// function getName(user) {
//     // 객체 구조 분해 할당
//     // user라는 객체 데이터를 구조 분해 할당함! 그중 name이라는 속성만 가져옴
//     const { name } = user
//     return name
// }

// function getName({name}) {
//     // 매개변수로 전달받음과 동시에 객체를 구조분해할당함!
//     // 매개변수로 전달된 객체의 name 속성만 빼와서 return을 통해 반환
//     return name
// }

// console.log(getName(user))

// function getEmail({ email = "이메일이 없습니다." }) {
//   // 매개변수단에서 구조분해 할당을 진행할 때도 기본값을 설정해줄 수 있다!
//   return email; // 이메일이 없기 때문에 undefined 반환
// }

// console.log(getEmail(user));


// 배열 구조 분해 할당
/*
const fruits = ['Apple', 'Banana', 'Cherry']
const numbers = [1, 2, 3, 4, 5, 6, 7]

function getSecondItem(array) {
    return array[1] // Banana
}

function getSecondItem_([, b]) {
    return b // Banana
}

console.log(getSecondItem_(fruits))
console.log(getSecondItem(numbers))
*/

// 나머지 매개변수(Rest Parameter)
/*
function sum(...rest) {
    // ...(전개 연산자)를 통해서 전달받은 매개변수를 배열의 형태로 저장한다.
    console.log(rest)
    console.log(arguments) // 나머지 매개변수 처럼 배열과 유사한 형태를 띄지만, 유사 배열이기 때문에 활용도는 Low

    // 표준 내장 객체의 배열 데이터를 다루는 파트에서 reduce를 다시 다룰것!
    // reduce는 앞의 배열 데이터의 아이템 개수 만큼 callback 함수를 실행한다.
    // 여기서는 뒤의 function의 경우 rest 배열 데이터의 아이템 개수만큼 반복!
    // acc의 초기값은 return 뒤에 설정해준 값인 0으로 세팅된다.
    rest.reduce(function (acc, cur) {
        return acc + cur
    , 0}) 
}

// 얘는 a, b에 해당하는 매개변수는 a, b로 할당되고 나머지만 rest로 할당된다!
function sum2(a, b, ...rest) {
    // ...(전개 연산자)를 통해서 전달받은 매개변수를 배열의 형태로 저장한다.
    console.log(rest)
}

console.log(sum(1, 2))
console.log(sum(1, 2, 3, 4))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

console.log(sum2(1, 2)) // []
console.log(sum2(1, 2, 3, 4)) // [3, 4]
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // [3, 4, 5, 6, 7, 8, 9, 10]
*/

/* ----- 화살표 함수 ----- */
/*
function sum() {}
const sum = function () {}
const sum = () => {
    // ES6에서 새로 등장한 함수 작성 문법!
		// 이 친구가 바로 화살표 함수
}
*/

/*
function sum(a, b) {
    return a + b
}

const sum2 = (a, b) => {
    return a + b
}

// 화살표 함수가 return 키워드로 로직이 시작하는 경우, return과 중괄호 생략가능!!
const sum3 = (a, b) => a + b

console.log(sum(1, 2))  // 3
console.log(sum2(1, 2)) // 3
console.log(sum3(1, 2)) // 3
*/

/*
const a = () => {} // 화살표 함수는 어떤 변수에다가 할당하여 사용해야하는 형태이다(함수의 표현!!)
const b = x => {}  // 매개변수가 1개일 경우 중간의 중괄호를 생략가능하다
const c = (x, y) => {}
const d = x => { return x * x }
const e = x => x * x // 화살표 함수가 return 키워드로 로직이 시작하는 경우, return과 중괄호 생략가능!!

// 로직이 return으로 시작하니까 객체도 return과 중괄호 생략할 수 있겠지? No!
// 화살표 함수에서 코드 범위를 나타내는 중괄호와 객체 데이터에서 사용하는 리터럴 방식의 중괄호가 기호가 같음
// 따라서 g 화살표 함수의 경우 코드 범위내에 a : 1만 달랑 들어있는 것으로 인식한다.
const f = () => { return { a : 1 }}
const g = () => {a : 1}   // 잘못된 문법
const h = () => ({a : 1}) // 중괄호로 감싸진 부분(객체)이 데이터임을 알리기 위해 소괄호로 감싸준다.

const i = () => { return [1, 2, 3] }
const j = () => [1, 2, 3] // 배열 데이터의 경우에는 중괄호로 인해 헷갈리는 문제가 없기 때문에 return 중괄호 생략가능
*/

/* ----- 즉시실행함수(IIFE) ----- */
/*
const a = 7

const double = () => {
    console.log(a * 2)
}

double(); // 14

// 즉시 실행 함수, 함수의 내용을 따로 호출하지 않고 바로 실행함
(() => {
    console.log(a * 2) // 14
})()

;(() => {console.log(a * 2)})()       // (F)()
;(function () {console.log(a * 2)})() // (F)()
;(function () {console.log(a * 2)}()) // (F())
;!function () {console.log(a * 2)}()  // !F()
;+function () {console.log(a * 2)}()  // +F()

// 2번째 소괄호에 들어가는 데이터들을 해당 즉시실행함수의 매개변수로 바로 사용한다!
;((a, b) => {
    console.log(a)
    console.log(b)
})(1, 2)

// 이것을 응용하면 코드를 난독화할 수 있다.
;((a, b) => {
    console.log(a.innerWidth)
    console.log(b.body)
})(window, document)
*/

/* ----- 콜백 ----- */

// 콜백(Callback)
// 함수가 실행될 때 인수로 들어가는 또 하나의 함수를 의미함
/*
const a = (callback) => {
    console.log('A')
    callback() 
    // b라는 함수데이터 자체가 a라는 함수에 전달된다!
    // 이는 매개변수로 받아와서 사용할 수 있다.
}

const b = () => {
    console.log('B')
}

a(b)
*/

/*
const sum  = (a, b) => {
    // setTimeout안에 함수가 또 들어가 있다. 즉 setTimeout는 콜백 함수를 사용하고 있다
    setTimeout(() => {
       return a + b // 이렇게 적으면 sum 함수가 아닌 setTimeout의 콜백함수의 리턴이 된다.
    }, 1000) // 우리가 실행하고자 하는 코드를 의도적으로 지연할 수 있다.
}

console.log(sum(1, 2)) // undefined
console.log(sum(3, 7)) // undefined
*/

/* ---- 코드 수정 ---- */

/*
const sum = (a, b, c) => {
    setTimeout(() => {
        c(a + b)
    })
}

sum(1, 2, (value) => {
    console.log(value)
}) // 함수 sum의 3번째 매개변수인 c에 화살표 함수가 들어간다.
*/

/*
const loadImage = (url, cb) => {
    const imgEl = document.createElement('img')
    imgEl.src = url
    imgEl.addEventListener('load', () => {
        setTimeout(() => {
            cb(imgEl)
        }, 1000)
    })
}

const containerEl = document.querySelector('.container')
loadImage("https://www.gstatic.com/webp/gallery/4.jpg", (imgEl) => {
    containerEl.innerHTML = ''
    containerEl.append(imgEl)
})
*/