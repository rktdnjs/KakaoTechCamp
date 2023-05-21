// import를 통해서 설치한 패키지들을 가져와서 사용할 수 있다.
// 이 경우, 패키지를 가져와서 사용하는 이 JS 파일을 '모듈'이라는 개념이 된다.
// 모듈로 취급하게 될 경우 html파일에서 type = "module" 을 명시!

// String
// " ' 둘 중 무엇을 쓸 지는 취향 차이
/*
const string1 = "Hello"
const string2 = 'Hello'
const string3 = `Hello ${string1}?!` // 데이터 보관의 개념이 들어감 -> ${}
*/
// 백틱을 써서 문자열을 만드는 것을 템플릿 리터럴이라고 한다.

// console.log(string3)

/* ------------------ */

// Number
/*
const number = 123;
const pi = .14 // 맨 앞의 숫자가 0인 경우 생략 가능함
const a = 0.1
const b = 0.2

console.log(number + 1);         // 124
console.log(number + undefined); // NaN(Not a Number) 출력, 숫자가 아닌 숫자 데이터
console.log(pi);                 // 0.14

console.log(typeof(number + 1));         // number
console.log(typeof(number + undefined)); // number(number 타입의 NaN)
// NaN이 뜰 경우 숫자 계산 중에 엉뚱한 것이 들어가있음을 파악할 수 있다!

console.log(a + b); // 0.30000000000000004
// 부동 소수점 오류, 컴퓨터가 십진수를 이진수로 표현할 때 간혹 무한소수 개념이 발생한다.
// 이 때 무한소수를 유한한 수로 표기하기 위해 오차가 발생하는 것.

console.log((a + b).toFixed(1)) // 소수점 첫째자리 까지만 표기함
console.log(typeof(a + b).toFixed(1)); // string
console.log(Number((a + b).toFixed(1)));
*/
// 그런데 toFixed는 숫자 데이터를 문자 데이터로 바꾸는 특징이 있으므로, 주의해야함

/* ------------------ */

// Boolean(true & false)
/*
const a = true
const b = false

if (a) {
    console.log('This is true'); // 여기 출력
} else {
    console.log('This is false');
}

// Null
// 존재하지 않는다. 의도적으로 값이 비어있다. 혹은 알 수 없다(명시적으로 작성한 것)
let age = null

console.log(age); // null

// 웹 페이지 렌더링 종료 1초 후 해당 함수 실행
// age가 let으로 설정되어있었으므로 값의 재할당 가능
setTimeout(() => {
    age = 100
    console.log(age);
}, 1000);

// Undefined
// 변수에 아무런 값을 할당하지 않은 상태 -> JS가 undefined를 자동 할당함(암시적)
let age2;

console.log(age2); // undefined

// 웹 페이지 렌더링 종료 1초 후 해당 함수 실행
// age2가 let으로 설정되어있었으므로 값의 재할당 가능
setTimeout(() => {
    age2 = 100
    console.log(age);
}, 1000);
*/

/* ------------------ */

// Array(배열)
// const fruits = new Array('Apple', 'Banana', 'Cherry');

// 아래와 같은 방식으로 대괄호 기호를 이용해 배열을 생성하는 것을 배열 리터럴이라고 한다.
// 인덱스는 0부터 차례대로 부여된다.
/*
const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits);
console.log(fruits[1]); // 배열 데이터를 '인덱싱'한다 = 배열 데이터를 [n] 형태로 접근
console.log(fruits.length); // 3 출력
console.log(fruits[fruits.length - 1]); // 배열의 마지막 아이템 가져오기!
*/

/* ------------------ */

// Object(객체)
// 1. new Object()를 이용하여 객체를 생성하는 방식
/*
const user = new Object()
user.name = 'Halo';
user.age = 85;

console.log(user); // {name: 'Halo', age: 85} 좌측 = key(속성) / 우측 = value(값)

// 2. 함수를 이용하여 객체를 생성하는 방식
function User() {
    this.name = 'Hello';
    this.age = 100;
}

const user2 = new User(); // 함수를 호출하여 데이터에 저장하여 처리함
console.log(user2); // User {name: 'Hello', age: 100} / User라는 함수에서 만들어짐

// 3. {} 중괄호를 이용해 객체를 생성하는 것을 객체 리터럴이라고 한다.
const user3 = {
    name : 'World',
    age : 150
}

console.log(user3);         // {name: 'World', age: 150}
console.log(user3.name);    // World(점 표기법)
console.log(user3['name']); // World(대괄호 표기법)

// JS 데이터를 다룰 때는 객체 안에 객체가 들어있을 수도 있음!
const userA = {
    name : 'Hello',
    age : 10
}

const userB = {
    name : 'World',
    age : 20,
    parent : userA
}

console.log(userB) // userB 정보 + userA 객체가 들어있음
*/

/* ------------------ */

// function
/*
function hello() {
    console.log('Hello!');
}

hello    // 호출되지 않았기 때문에 하나의 데이터인 함수 데이터로 취급된다.
hello(); // 함수를 호출함!
console.log(hello); // hello 함수 그 자체가 출력된다.

function getNumber() {
    return 123
}
console.log(getNumber()); // 123 출력 / getNumber함수를 호출함
// 함수옆에 소괄호를 붙이냐 마냐에 따라서 큰 차이가 존재한다!

const getNumber2 = function () {
    return 123
}

console.log(typeof(getNumber2));   // function
console.log(typeof(getNumber2())); // number


const a = function () {
    console.log('A');
}

const b = function (c) {
    console.log(c);
    c();
}

b(a);
*/
//  console.log(a)
//  a(); 
//  위 2개가 실행된다.

/* ------------------ */

// 형 변환(Type Conversion)
// === : 일치 연산자(이것 사용 추천)
// ==  : 동등 연산자 : 형 변환하여 같은지 비교함!

/*
const a = 1
const b = '1'

console.log(a === b) // 같은가? -> false 출력
console.log(a == b)  // 형 변환 발생후 비교, true 출력

const c = 0
const d = false

console.log(c == d) // true 출력

const e = 1
const f = true

console.log(e == f) // true 출력
*/

/* ------------------ */

// 참과 거짓(Truthy & Falsy)
// Falsy에 해당하는 값을 외워두면 편하다!
// 1. false
// 2. 0
// 3. null
// 4. undefined
// 5. NaN
// 6. ''  (빈 문자열)
// 7. 0n (BigInt형 이라고 함)

/*
if (true) {
    console.log('True!');
}

if (123) {
    console.log('이것도 참?');
}

// 0은 거짓에 해당함
if (0) {
    console.log('이거는 참 아님!'); // 실행 안됨
}

// 문자는 참에 해당함!
if ('0') {
    console.log('문자는 출력 되네?');
}

const fruits = []

// 배열 데이터는 참에 해당함
// 배열 데이터가 아무것도 들어있지 않아도 참으로 간주함
// length를 통해 아무것도 없을 경우 0, 즉 false로 간주하게 한다!
if (fruits.length) {
    console.log('아이템이 들어있음!')
}
*/

/* ------------------ */

// 데이터 타입 확인

/*
console.log(typeof 'Hello' === 'string');           // true
console.log(typeof 123 === 'number');               // true
console.log(typeof false === 'boolean');            // true
console.log(typeof undefined === 'undefined');      // true
console.log(typeof null === 'object');              // true : null은 object 타입에 해당함!
console.log(typeof [] === 'object');                // true : 빈 배열은 object 타입에 해당함!
console.log(typeof {} === 'object');                // true : 객체 데이터는 object가 맞음
console.log(typeof function () {} === 'function');  // true : 함수라는 하나의 데이터로, function에 해당한다.

// null, 객체, 배열 데이터의 구분
console.log([].constructor) // ƒ Array() { [native code] } -> 배열은 자바스크립트에 들어있는 전역함수인 Array로부터 생성된다!
console.log([].constructor === Array)  // true
console.log({}.constructor === Object) // true, 위의 배열과 비슷한 맥락!

// console.log(null.constructor) 얘는 에러가 떠서 사용 불가능! 다른 방법이 필요하다
console.log(Object.prototype.toString.call(null))              // [object Null] 출력
console.log(Object.prototype.toString.call(null).slice(8, -1)) // Null 출력 -> 슬라이싱 한 것!
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null') // true!
*/

// 데이터 타입을 반환받을 수 있는 함수!
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType(null))    // Null
console.log(checkType([]))      // Array
console.log(checkType({}))      // Object
console.log(checkType('Hello')) // String
console.log(checkType(123))     // Number
console.log(checkType(false))   // Boolean
console.log(checkType(undefined)) // Undefined
console.log(checkType(function () {})) // Function
