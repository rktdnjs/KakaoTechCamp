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

// 재귀(Recursive)
/*
let i = 0
const a = () => {
    console.log('A')
    i += 1
    if (i < 4) {
        a()
    }
}

a()
*/
/*
const userA = {name : 'A', parent : null}
const userB = {name : 'B', parent : userA}
const userC = {name : 'C', parent : userB}
const userD = {name : 'D', parent : userC}

// user 객체가 들어가서 parent에 대한 데이터가 존재한다면 재귀함수를 호출한다.
const getRootUser = user => {
    if (user.parent) {
        return getRootUser(user.parent)
    }
    return user
}

// 전부 동일한 결과, A객체에 대한 정보가 출력된다
console.log(getRootUser(userD))
console.log(getRootUser(userC))
console.log(getRootUser(userB))
console.log(getRootUser(userA))
*/

/* ----- 호출 스케줄링 ----- */

// 호출 스케줄링(Scheduling a function call) - setTimeout & setInterval
// 자바스크립트에서 함수의 호출을 지연하거나 반복적으로 호출할 수 있게 해준다.

/*
const hello = () => {
    console.log('Hello World!')
}
const hello2 = () => {
    console.log('Hello World!?')
}

const timeout = setTimeout(hello, 2000);
const timeout2 = setInterval(hello2, 2000);

const h1El = document.querySelector('h1')

h1El.addEventListener('click', () => {
    console.log('Timer Clear!')
    clearTimeout(timeout)  // 타임아웃 해제
    clearTimeout(timeout2) // 타임아웃 해제
})
*/

/* ----- this 키워드 ----- */

// this
// 일반 함수의 this는 호출 위치에서 정의
// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의

/*
function user() {
    this.firstName = 'Neo'
    this.lastName = 'Anderson'

    return {
        firstName: 'Hello',
        lastName: 'World',
        age: 85,
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}

const lewis = {
    firstName: 'Lewis',
    lastName: 'Yang'
}

const u = user()
console.log(u.getFullName())
console.log(u.getFullName.call(lewis)) // getFullName 메소드를 빌려서 사용할 객체를 넣어준다.
*/

/*
const timer = {
    title: 'TIMER!',
    timeout() {
        console.log(this.title)
        setTimeout(function () {
            console.log(this.title)
        }, 1000)
    }
}

timer.timeout()
*/

/* ---------------------------------------------- Prototype ---------------------------------------------- */

/*
const fruits2 = ['Apple', 'Banana', 'Cherry'] // 리터럴 방식 - [] 대괄호를 이용하여 생성
const fruits = new Array('Apple', 'Banana', 'Cherry') // 생성자 함수를 통해서도 배열을 만들 수 있다.

console.log(fruits)
console.log(fruits.length)
console.log(fruits.includes('Banana'))

// Array객체에서 프로토타입으로 heropy라는 메소드를 추가한 것
Array.prototype.heropy = function () {
    console.log(this)
}

fruits.heropy()

const arr = []
arr.heropy()
*/

/*
const heropy = {
    firstName: 'Heropy',
    lastName: 'Park',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const neo = {
    firstName: 'Neo',
    lastName: 'Anderson',
}

// 일반함수에서의 this는 함수가 호출되는 곳에서 정의된다.
// 따라서 getFullName()이 호출되는 heropy 객체 데이터가 this가 된다.
console.log(heropy.getFullName())
console.log(heropy.getFullName.call(neo)) // 호출하는 대상 객체가 neo 객체가 된다(메소드만 빌림).
*/

/*
function User(first, last) {
    this.firstName = first
    this.lastName = last
}

// 여기서 화살표함수를 쓸경우 this의 정의가 바뀌기 때문에 절대 사용 x!!
// getFullName 함수가 User 함수의 프로토타입으로 등록이 되어서 활용가능해진것!
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')

console.log(heropy) // User 생성자 함수를 통해 객체를 생성함
console.log(neo)
console.log(heropy.getFullName())
console.log(neo.getFullName())
*/

/* ---------------------------------------------- ES6 Classes ---------------------------------------------- */

// 프로토타입과 클래스가 어떻게 다른가?

// 프로토타입 문법(Prototype)
// User 생성자 함수를 만들어서 User 객체 만들기
/*
function User(first, last) {
    this.firstName = first
    this.lastName = last
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')

console.log(heropy.getFullName())
console.log(neo.getFullName())
*/

// 클래스 문법
/*
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }

    // 객체의 메소드를 prototype을 쓰지않고 바로만들수 있음
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')

console.log(heropy.getFullName())
console.log(neo.getFullName())
*/

/* ---------------------------------------------- Getter, Setter ---------------------------------------------- */

// Getter, Setter
// Getter : 값을 얻어내는 용도의 메소드
// Setter : 값을 지정하는 용도의 메소드

/*
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ')
    }
}

const heropy = new User('Heropy', 'Park')

// console.log(heropy.fullName)

// heropy.firstName = 'Neo'

// console.log(heropy.fullName)

heropy.fullName = 'Neo Anderson' // fullName에 어떤 값을 지정하는 setter가 사용된다.

console.log(heropy.fullName)
*/

/* ---------------------------------------------- 정적 메소드 ---------------------------------------------- */
/*
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }

    // 이렇게 만드는 일반 메소드는 프로토타입 메소드라고 부를 수 있다.
    // 프로토타입 메소드는 인스턴스 부분에서 사용하는 것이며, 클래스 자체에서 호출은 불가능
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // 클래스에서 직접적으로 사용하는 메소드를 만드려면 static 키워드 추가
    // 이렇게 표시한 메소드는 이제 정적 메소드, 클래스 자체에서 호출 가능
    // 객체로 만든 인스턴스에서는 사용 불가능
    static isUser(user) {
        if (user.firstName && user.lastName) {
            return true
        }
        return false
    }
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')
const lewis = {
    name: "Lewis Yang",
    age : 85
}

console.log(heropy)
console.log(neo)

// console.log(User.getFullName()) // 오류, 클래스에서 일반 메소드의 즉시 호출은 불가능
// console.log(heropy.isUser()) // 객체(인스턴스)에서 정적 메소드는 사용 불가능

console.log(User.isUser(heropy)) // true
console.log(User.isUser(lewis))  // false, 객체 구조가 다름!
*/

/* ---------------------------------------------- 상속(Inheritance) ---------------------------------------------- */

/*
class Vehicle {
    // 생성자에서 매개변수를 받아 내부에서 사용하고 있다.
    // 매개변수가 없을 경우 그 기본값으로 1을 사용함을 코드로 작성함
    constructor(acceleration = 1) {
        this.speed = 0
        this.acceleration = acceleration // 외부 값으로 할당, 없으면 기본값 1로 할당
    }
    accelerate() {
        this.speed += this.acceleration
    }
    decelerate() {
        if(this.speed <= 0) {
            console.log('정지!')
            return
        }
        this.speed -= this.acceleration
    }
}

// 자전거
// extends 키워드를 통해 Vehicle의 내용물을 상속받아 사용한다.
// super를 통해 Vehicle(부모)이 가진 생성자를 사용할 수 있다.
class Bicycle extends Vehicle {
    constructor(price = 100, acceleration) {
        super(acceleration)
        this.price = price
        this.wheel = 2
    }
}

const bicycle = new Bicycle(300, 2)
bicycle.accelerate()
bicycle.accelerate()
console.log(bicycle)
console.log(bicycle instanceof Bicycle) // instanceof 앞쪽의 변수가 뒤쪽의 클래스로부터 생성되었는지 확인
console.log(bicycle instanceof Vehicle) 

// 자동차
class Car extends Bicycle {
    constructor(license, price, acceleration) {
        super(price, acceleration)
        this.license = license
        this.wheel = 4
    }

    // 메소드 재정의(오버라이딩)
    accelerate() {
        if(!this.license) {
            console.error('무면허입니다!')
            return
        }
        this.speed += this.acceleration
        console.log('가속!', this.speed)
    }
}

const carA = new Car(true, 7000, 10)
const carB = new Car(false, 4000, 6)
carA.accelerate()
carA.accelerate()
carB.accelerate()
console.log(carA instanceof Car) 
console.log(carB instanceof Car) 
console.log(carA)
console.log(carB)

// 보트
class Boats extends Vehicle {
    constructor(price, acceleration) {
        super(acceleration)
        this.price = price
        this.motor = 1
    }
}

const boat = new Boats(10000, 5)
console.log(boat)
*/

/* ---------------------------------------------- instanceof 그리고 constructor ---------------------------------------------- */

/*
class A {
    constructor() {

    }
}

class B extends A {
    constructor() {
        super() // 상속받고 있으므로 super()를 통해 부모의 생성자를 빌려와서 사용
    }
}

class C extends B {
    constructor() {
        super() // 상속받고 있으므로 super()를 통해 부모의 생성자를 빌려와서 사용
    }
}

const a = new A() // 인스턴스(생성자 함수로부터 생성한 객체)
const b = new B()
const c = new C()

console.log(a instanceof A) // true
console.log(a instanceof B) // false, a는 B클래스와는 관계x
console.log(a instanceof C) // false, 위와 동일

console.log(b instanceof A) // true, b는 A를 상속받아 만든 B클래스에서 만든것이므로 O
console.log(b instanceof B) // true
console.log(b instanceof C) // false, b는 C클래스와는 관계x

// 생성한 객체가 어떤 클래스로부터 만들어졌는지 확인할 때는 constructor를 쓰는 것을 추천!!
console.log(c.constructor === A) // 사실상 c의 생성자는 조상인 A와는 다른 구조를 지닌다. 따라서 false
console.log(b.constructor === A)
console.log(a.constructor === A)
*/


/* ---------------------------------------------- 표준 내장 객체 - 문자1 ---------------------------------------------- */

// .length
// 문자의 길이(숫자)를 반환한다.


// const str = "Hello world!"

/*
console.log(str.length) // 12
*/

// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지 확인한다.

/*
console.log(str.includes('Hello'))    //true
console.log(str.includes('Hello', 1)) // false
*/

// .indexOf()
// 대상 문자에 주어진 문자와 일치하는 1번째 인덱스(숫자)를 반환한다.
// 일치하는 문자가 없으면 '-1'을 반환합니다.

// console.log(str.indexOf('world'))  // 6
// console.log(str.indexOf('HEROPY')) // -1

// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.
// const str = '1234567'

// console.log(str.padEnd(10, '0')) // 1234567000(원본 변화 x)
// console.log(str)                 // 1234567
// console.log(str.padEnd(5, '0'))  // 1234567

// console.log(str.padStart(10, '0')) // 0001234567(원본 변화 x)
// console.log(str)                   // 1234567
// console.log(str.padStart(5, '0'))  // 1234567

// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환한다.
// 대상 문자를 여러개 바꾸고 싶을경우 '정규표현식(슬래시2개 사용)'을 사용해준다.

// const str = "Hello, Hello?!"

// console.log(str.replace('Hello', 'Hi'))
// console.log(str.replace(/Hello/g, 'Hi')) // g : 모든 요소 찾기
// console.log(str)

// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환한다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출한다.

// const str = "Hello world!"

// console.log(str.slice(0, 5))
// console.log(str.slice(6, -1))
// console.log(str.slice(6))
// console.log(str)

// .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환한다.
// 인수로 빈 문자 제공 시 모든 문자를 하나하나로 분리함.
// 구분자를 정확히 주는 것이 매우 중요!

// const str = 'Apple, Banana, Cherry'

// console.log(str.split(', ')) // ['Apple', 'Banana', 'Cherry'] : 배열 반환
// console.log(str.split('').reverse().join('')) // 문자 하나하나쪼개서 거꾸로 한다음에 다시 합침

// .toLowerCase()
// 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환함

// const str = 'Apple, Banana, Cherry'

// console.log(str.toLowerCase())
// console.log(str) // 원본에 영향 x

// .toUpperCase()
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환함

// const str = 'Apple, Banana, Cherry'

// console.log(str.toUpperCase())
// console.log(str) // 원본에 영향 x

// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환함
// 중간에 있는 공백은 제거하지 못한다

// const str = '  HEROPY!  '

// console.log(str.trim()) // 'HEROPY!
// console.log(str)        // '  HEROPY!  '

// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환함

// const num = 3.1415926535

// console.log(num.toFixed(2)) // 3.14(문자데이터로 반환)
// console.log(parseFloat(num.toFixed(2))) // 3.14(문자 반환 -> 숫자로 변환)

// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환함

// const num = 1000000

// console.log(num.toLocaleString()) // 1,000,000(문자 데이터로 반환)
// console.log(`${num.toLocaleString()}원`) // 1,000,000원

// Number.isInteger()
// 숫자가 정수(integer)인지 확인함
// 위처럼 메소드사용시 prototype 키워드가 없으면 클래스에서 바로 호출해서 쓰는 메소드
// 일명 정적 메소드라고 불리는 것들.

// const num = 123
// const pi = 3.14

// console.log(Number.isInteger(num)) // true
// console.log(Number.isInteger(pi))  // false

// Number.isNaN()
// 주어진 값이 NaN 인지 확인함
// 숫자 데이터를 NaN인지 아닌지 확인하여 예외처리 하는 작업 등에 씀

// const num1 = NaN
// const num2 = 123
// const str = 'Hello World'
// const nul = null

// console.log(Number.isNaN(num1)) // true
// console.log(Number.isNaN(num2)) // false
// console.log(Number.isNaN(str))  // false
// console.log(Number.isNaN(nul))  // false

// Number.parseInt() 혹은 parseInt()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환함

// const str = '3.1415926535'
// const num = 3.1415926535

// console.log(Number.parseInt(str, 10)) // 3(10진수)
// console.log(Number.parseInt(num, 10)) // 3(10진수)

// Number.parseFloat() 또는 parseInt()
// 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환(숫자)함

// const str = '3.1415926535'
// const num = 3.1415926535

// console.log(Number.parseFloat(str)) // 3.1415926535
// console.log(Number.parseFloat(num)) // 3.1415926535

// Math.abs()
// 주어진 숫자의 절댓값을 반환함

// console.log(Math.abs(2))  // 2
// console.log(Math.abs(-2)) // 2

// Math.ceil()
// 주어진 숫자를 올림해 정수를 반환함

// console.log(Math.ceil(3.1415926535)) // 4

// Math.floor()
// 주어진 숫자를 내림해 정수를 반환함

// console.log(Math.ceil(3.1415926535)) // 3

// Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환함

// console.log(Math.max(1, 22, 39, 192)) // 192

// // Math.min()
// // 주어진 숫자 중 가장 작은 숫자를 반환함

// console.log(Math.min(1, 22, 39, 192)) // 1

// // Math.pow()
// // 주어진 숫자의 거듭제곱한 값을 반환함

// console.log(Math.pow(4, 2))  // 16
// console.log(Math.pow(7, 2))  // 49
// console.log(Math.pow(10, 3)) // 1000

// // Math.random()
// // 숫자 0 이상, 1 미만의 난수를 반환함

// console.log(Math.random)

// // 특정 범위의 랜덤 정수를 얻는 함수
// function random(min = 0, max = 10) {
//     return Math.floor(Math.random() * (max - min)) + min
// }

// console.log(random())
// console.log(random(11, 20))
// console.log(random(101, 999))

// // Math.round()
// // 주어진 숫자를 반올림해 정수를 반환함

// const num1 = 3.141
// const num2 = 3.768

// console.log(Math.round(num1)) // 3
// console.log(Math.round(num2)) // 4

// const date = new Date()
// console.log(date) // Wed Jun 07 2023 01:46:29 GMT+0900 (한국 표준시)

// // Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)
// // 월 표기는 zero-based numbering이어서 0부터 1월이라고 생각!
// const dl = new Date(2022, 11, 16, 12, 57, 30) 
// console.log(dl)

// // 이렇게 써도 Date 객체로 인식함
// const d2 = new Date('Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)')

// // 객체(인스턴스)에 붙여서 쓰는 메소드 : 프로토타입 메소드
// console.log(d2.getFullYear()) // 2022

// // .getFullYear() & .setFullYear()
// // 날짜 인스턴스의 '연도'를 반환하거나 지정함

// const date = new Date() 

// console.log(date.getFullYear()) // 2023

// date.setFullYear(2000) // 년도 변경
// console.log(date.getFullYear()) // 2000
// console.log(date) // Wed Jun 07 2000 01:53:26 GMT+0900 (한국 표준시)

// // .getMonth() & .setMonth()
// // 날짜 인스턴스의 '월'을 반환하거나 지정함
// // 0부터 시작(Zero-based numbering)임!

// const date = new Date()

// console.log(date.getMonth()) // 5(Zero-based numbering)
// console.log(date) // Wed Jun 07 2023 01:56:13 GMT+0900 (한국 표준시)

// date.setMonth(0) // '월'변경
// console.log(date.getMonth()) // 0
// console.log(date) // Sat Jan 07 2023 01:56:34 GMT+0900 (한국 표준시)

// // .getDate() & .setDate()
// // 날짜 인스턴스의 '일'을 반환하거나 지정함

// const date = new Date()

// console.log(date.getDate()) // 7
// console.log(date) // Wed Jun 07 2023 01:58:03 GMT+0900 (한국 표준시)

// date.setDate(11) // '일'변경
// console.log(date.getDate()) // 11
// console.log(date) // Sun Jun 11 2023 01:58:08 GMT+0900 (한국 표준시)

// // .getHours() & .setHours()
// // 날짜 인스턴스의 '시간'을 반환하거나 지정함

// const date = new Date()

// console.log(date.getHours()) // 1
// console.log(date) // Wed Jun 07 2023 01:59:35 GMT+0900 (한국 표준시)

// date.setHours(7) // '시간'변경
// console.log(date.getHours()) // 7
// console.log(date) // Wed Jun 07 2023 07:59:41 GMT+0900 (한국 표준시)

// // .getMinutes() & .setMinutes()
// // 날짜 인스턴스의 '분'을 반환하거나 지정함

// const date = new Date()

// console.log(date.getMinutes()) // 0
// console.log(date) // Wed Jun 07 2023 02:00:52 GMT+0900 (한국 표준시)

// date.setMinutes(2) // '분'변경
// console.log(date.getMinutes()) // 2
// console.log(date) // Wed Jun 07 2023 02:02:08 GMT+0900 (한국 표준시)

// // .getSeconds() & .setSeconds()
// // 날짜 인스턴스의 '초'를 반환하거나 지정함

// const date = new Date()

// console.log(date.getSeconds()) // 21
// console.log(date) // Wed Jun 07 2023 02:02:08 GMT+0900 (한국 표준시)

// date.setSeconds(33) // '분'변경
// console.log(date.getSeconds()) // 33
// console.log(date) // Wed Jun 07 2023 02:02:33 GMT+0900 (한국 표준시)

// // .getDay()
// // 날짜 인스턴스의 '요일'을 반환함

// const date = new Date()
// const day = date.getDay() // 요일에 해당하는 0 ~ 6 반환 

// console.log(day) // 3
// console.log(getDayKo(day)) // 수요일

// function getDayKo(day) {
//     switch(day) {
//         case 0: return '일요일'
//         case 1: return '월요일'
//         case 2: return '화요일'
//         case 3: return '수요일'
//         case 4: return '목요일'
//         case 5: return '금요일'
//         case 6: return '토요일'
//     }
// }

// // .getTime() & .setTime()
// // `1970-01-01 00:00:0`(유닉스타임)부터 경과한
// // 날짜 인스턴스의 '밀리초(ms)'로 변환하거나 지정함
// // 특정한 날짜를 숫자로만 활용할때 매우 유용함

// const date = new Date()

// console.log(date.getTime()) 
// console.log(date) // 1686071326000

// date.setTime(1700000000000) 
// console.log(date.getTime()) 
// console.log(date) // 1700000000000

// // prototype을 이용해 isAfter 메소드 별도 추가
// Date.prototype.isAfter = function (date) {
//     const a = this.getTime()
//     const b = date.getTime()
//     return a > b
// }

// const d1 = new Date('Wed Jun 07 2023 02:02:08 GMT+0900 (한국 표준시)')
// const d2 = new Date('Wed Jun 07 2023 02:02:33 GMT+0900 (한국 표준시)')

// console.log(d1.isAfter(d2)) // false -> d1 > d2 결과
// console.log(d2.isAfter(d1)) // true  -> d2 > d1 결과

// // Date.now()
// // `1970-01-01 00:00:0`(유닉스타임)부터 경과한
// // 메소드가 호출될 때의 '밀리초(ms)'로 반환함

// const time = new Date().getTime()
// console.log(Date.now()) // Date.now() : 메소드 호출시의 총 밀리초 반환
// console.log(time) 

// setTimeout(() => {
//     console.log(Date.now())
//     console.log(time)
// }, 1000);

// .length
// 배열의 길이(숫자)를 반환함

// const arr = ['A', 'B', 'C']

// console.log(arr.length) // 3

// .at()
// 대상 배열을 인덱싱합니다.
// 음수 값을 사용하면 뒤에서부터 인덱싱합니다.

// const arr = ['A', 'B', 'C']

// console.log(arr[0])    // A
// console.log(arr.at(0)) // A
// console.log(arr[-1])   // undefined

// console.log(arr[arr.length - 1]) // C
// console.log(arr.at(-1)) // C

// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환함

// const arr1 = ['A', 'B', 'C']
// const arr2 = ['D', 'E', 'F']
// const arr3 = arr1.concat(arr2)
// const arr4 = [...arr1, ...arr2]

// console.log(arr1) // ['A', 'B', 'C']
// console.log(arr2) // ['D', 'E', 'F']
// console.log(arr3) // ['A', 'B', 'C', 'D', 'E', 'F']
// console.log(arr4) // ['A', 'B', 'C', 'D', 'E', 'F']

// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(Truthy)을 반환하는지 확인함

// const arr = [1, 2, 3, 4]
// const isValid = arr.every(item => item < 4) // 괄호 안의 콜백에 배열의 모든 요소 투입

// console.log(isValid) // every에서 하나라도 거짓이면 false 출력

// .filter()
// 주어진 콜백 테스트를 통과(참(Truthy)을 반환)하는 모든 요소를 새로운 배열로 반환함
// 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환함

// const nubmers = [1, 20, 7, 9, 194, 0, 58]
// const filteredNumbers = nubmers.filter(number => number < 30) // 콜백을 통과하는 숫자들을 저장

// console.log(filteredNumbers) // [1, 20, 7, 9, 0]

// const users = [
//     { name : 'Neo', age : 85 },
//     { name : 'Amy', age : 22 },
//     { name : 'Lewis', age : 11 },
// ]

// const adults = users.filter(user => user.age >= 19)
// console.log(adults) // Neo, Amy 객체를 담은 배열 출력

// .find()
// 대상 배열에서 콜백 테스트를 통과하는 1번째 요소를 반환함

// const arr = [5, 8, 130, 12, 44]
// const foundItem = arr.find(item => item > 10)

// console.log(foundItem) // 130(find는 만족하는 1번째 요소만 반환함)

// const users = [
//     { name : 'Neo', age : 85 },
//     { name : 'Amy', age : 22 },
//     { name : 'Lewis', age : 11 },
// ]

// const foundUser = users.find(user => user.name === 'Amy')
// console.log(foundUser) // {name: 'Amy', age: 22}

// .findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 1번째 요소의 인덱스를 반환함

// const arr = [5, 8, 130, 12, 44]

// const index = arr.findIndex(item => item > 10)
// console.log(index) // 2

// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성함
// 깊이의 기본값은 `1`입니다.

// const arr = [1, 2, [3, 4]]
// const arr2 = [1, 2, [3, 4, [5, 6]]]

// console.log(arr.flat())   // [1, 2, 3, 4]
// console.log(arr2.flat(2)) // [1, 2, 3, 4, 5, 6] 안쪽의 안쪽까지 이어붙임
// console.log(arr2.flat(Infinity)) // 얼마나 깊은지 상관없이 싹 풀어 헤침

// .forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행함

// const arr = ['A', 'B', 'C']

// arr.forEach(item => console.log(item)) // A B C(줄바꿈 O)

// for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]) // A B C(줄바꿈 O)
// }

// .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인함

// const arr = [1, 2, 3]
// console.log(arr.includes(2)) // true
// console.log(arr.includes(7)) // false

// const users = [
//     { name : 'Neo', age : 85 },
//     { name : 'Amy', age : 22 },
//     { name : 'Lewis', age : 11 },
// ]

// // 자바스크립트는 데이터를 원시형과 참조형으로 구분함
// // 참조형의 경우에는 객체, 배열, 함수 데이터 등이 존재함
// // 참조형 데이터는 생긴것이 같더라도 다른 데이터일 수 있다.
// // 이에 대한 내용은 추후 데이터의 불변성 & 가변성에서 살펴볼 예정
// console.log(users.includes({name: 'Lewis', age: 11})) // false?!

// const lewis = users[2] // lewis 유저가
// console.log(users.includes(lewis)) // users에 존재하는가? | true

// .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환함

// const arr = ['Apple', 'Banana', 'Cherry']

// console.log(arr.join())     // Apple,Banana,Cherry
// console.log(arr.join(', ')) // Apple, Banana, Cherry
// console.log(arr.join('/'))  // Apple/Banana/Cherry

// .map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환함

// const numbers = [1, 2, 3, 4]
// const newNumbers = numbers.map(item => item * 2)
// console.log(newNumbers) // [2, 4, 6, 8]

// const users = [
//     { name : 'Neo', age : 85 },
//     { name : 'Amy', age : 22 },
//     { name : 'Lewis', age : 11 },
// ]

// const newUsers = users.map(user => ({
//         ...user, // user에 해당하는 리터럴 기호를 날려버림!(여기서는 중괄호)
//         isValid : true,
//         email : null
// }))

// console.log(newUsers) // [{…}, {…}, {…}]

// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환함
// 대상 배열 원본이 변경됨

// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(fruits.pop()) // Cherry
// console.log(fruits) // ['Apple', 'Banana']

// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환함
// 대상 배열 원본이 변경됨

// const fruits = ['Apple', 'Banana', 'Cherry']

// const newLength = fruits.push('Orange')
// console.log(newLength) // 4
// console.log(fruits)    // ['Apple', 'Banana', 'Cherry', 'Orange']

// fruits.push('Mango', 'Strawberry')
// console.log(fruits) // ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango', 'Strawberry']

// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환함
// 각 콜백의 반환 값은 다음 콜백으로 전달됨

// const numbers = [1, 2, 3]

// // reduce의 2번째 인자가 1번째 매개변수(여기서는 accumulator)로 들어감
// // 배열의 각 아이템은 2번째 매개변수로 들어감
// // 실행되고 난 결과는 다음 콜백으로 전달됨
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)

// console.log(sum) // 6

// const users = [
//     { name : 'Neo', age : 85 },
//     { name : 'Amy', age : 22 },
//     { name : 'Lewis', age : 11 },
// ]

// // 총 나이 계산
// const totalAge = users.reduce((acc, cur) => {
//     return acc + cur.age
// }, 0)
// console.log(totalAge) // 118

// const namesArray = users.reduce((acc, cur) => {
//     acc.push(cur.name)
//     return acc
// }, [])

// const names = namesArray.join(', ')
// console.log(names) // Neo, Amy, Lewis

// .reverse()
// 대상 배열의 순서를 반전함
// 대상 배열 원본이 변경됨

// const arr = ['A', 'B', 'C']
// const reversed = arr.reverse()

// console.log(reversed) // ['C', 'B', 'A']
// console.log(arr) // ['C', 'B', 'A']

// .shift()
// 대상 배열에서 1번째 요소를 제거하고, 제거된 요소를 반환함
// 대상 배열 원본이 변경됨

// const arr = ['A', 'B', 'C']

// console.log(arr.shift()) // A
// console.log(arr) // ['B', 'C']

// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환함
// 2번째 인수 직전까지 추출하고, 2번째 인수를 생략하면 대상 배열의 끝까지 추출함

// const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// console.log(arr.slice(0, 3))  // ['A', 'B', 'C']
// console.log(arr.slice(4, -1)) // ['E', 'F']
// console.log(arr.slice(4))     // ['E', 'F', 'G']
// console.log(arr) // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// .some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인함

// const arr = [1, 2, 3, 4]
// const isValid = arr.some(item => item > 4)

// console.log(isValid) // true

// .sort()
// 대상 배열의 콜백의 반환 값(음수, 양수, 0)에 따라 정렬함
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬함
// 대상 배열 원본이 변경됨!

// const numbers = [4, 17, 2, 103, 3, 1, 0]

// numbers.sort() // 콜백이 없어서 요소를 문자열로 변환해서 유니코드 코드 포인트 순서로 정렬함
// console.log(numbers) // [0, 1, 103, 17, 2, 3, 4]

// numbers.sort((a, b) => a - b) // 오름차순
// console.log(numbers) // [0, 1, 2, 3, 4, 17, 103]

// numbers.sort((a, b) => b - a) // 내림차순
// console.log(numbers) // [103, 17, 4, 3, 2, 1, 0]

// const users = [
//     { name : 'Neo', age : 85 },
//     { name : 'Amy', age : 22 },
//     { name : 'Lewis', age : 11 },
// ]

// users.sort((a, b) => a.age - b.age) // 나이 오름차순
// console.log(users) // [{…}, {…}, {…}]

// users.sort((a, b) => b.age - a.age) // 나이 내림차순
// console.log(users) // [{…}, {…}, {…}]

// .splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체함
// 대상 배열 원본이 변경됨

// const arr = ['A', 'B', 'C']
// const arr2 = ['A', 'B', 'C']
// const arr3 = ['A', 'B', 'C']
// const arr4 = ['A', 'B', 'C']

// arr.splice(2, 0, 'X') 
// // 요소를 추가 삭제 교체하려는 기준 인덱스 번호, 삭제하려는 개수, 추가하려는 요소
// console.log(arr) // ['A', 'B', 'X', 'C']

// arr2.splice(1, 1)
// console.log(arr2) // ['A', 'C']

// arr3.splice(1, 2, 'X', 'Y')
// console.log(arr3) // ['A', 'X', 'Y']

// arr4.splice(1, 1, 'X')
// console.log(arr4) // ['A', 'X', 'C']

// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환함
// 대상 배열 원본이 변경됨

// const arr = ['A', 'B', 'C']

// console.log(arr.unshift('X')) // 4
// console.log(arr) // ['X', 'A', 'B', 'C']

// Array.from()
// 유사 배열(Array-like)을 실제 배열로 반환함

// 유사 배열의 조건 : 각각의 속성이 숫자 0부터 하나씩 증가할 수 있는 구조여야 함
// length를 통해 아이템의 개수에 해당하는 숫자가 있어야 함
// const arraylike = {
//     0: 'A',
//     1: 'B',
//     2: 'C',
//     length: 3
// }

// console.log(arraylike.constructor == Array)  // false
// console.log(arraylike.constructor == Object) // true

// // arraylike.forEach(item => console.log(item)) 유사 배열이므로 타입 에러 발생
// Array.from(arraylike).forEach(item => console.log(item))

// Array.isArray
// 배열 데이터인지 확인함

// const array = ['A', 'B', 'C']
// const arraylike = {
//     0: 'A',
//     1: 'B',
//     2: 'C',
//     length: 3
// }

// console.log(Array.isArray(array)) // true
// console.log(Array.isArray(arraylike)) // false

// Object.assign()
// 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사 및 대상 객체 반환

// const target = {a : 1, b : 2}
// const target2 = {a : 1, b : 2}
// const source1 = {b : 3, c : 4}
// const source2 = {c : 5, d : 6}
// const result = Object.assign(target, source1, source2)
// const result2 = Object.assign({}, target2, source1, source2)

// // 전개 연산자를 통해 
// const result3 = {
//     ...target,
//     ...source1, // 같은 이름의 속성이 있을 경우 나중에 오는걸로 덮어씀
//     ...source2
// }

// console.log(target)  // {a: 1, b: 3, c: 5, d: 6} (덮어씌워짐!)
// console.log(result)  // {a: 1, b: 3, c: 5, d: 6}
// console.log(target2) // {a: 1, b: 2} (이 경우 빈 객체를 이용해서 덮어씌워서 원본 변화 x)
// console.log(result2) // {a: 1, b: 3, c: 5, d: 6}
// console.log(result3) // {a: 1, b: 3, c: 5, d: 6}

// Object.entries()
// 주어진 객체의 각 속성과 값으로 하나의 배열을 만들어 요소로 추가한 2차원 배열을 반환함

// const user = {
//     name : 'HEROPY',
//     age : 85,
//     isValid : true,
//     email : 'thesecon@gmail.com'
// }

// console.log(Object.entries(user)) // [Array(2), Array(2), Array(2), Array(2)]
// // 배열 데이터 내부에 객체의 내용물이 배열 형태로 들어가 있게 된다.

// // 하나의 객체 데이터를 2차원 배열로 만들어 for문을 사용하기 편해진다!
// // for of : 배열 데이터를 반복할 때 사용하기 좋다.
// for (const [key, vaule] of Object.entries(user)) {
//     console.log(key, vaule)
// }

// Object.keys()
// 주어진 객체의 속성 이름을 나열한 배열을 반환함

// const user = {
//     name : 'HEROPY',
//     age : 85,
//     isValid : true,
//     email : 'thesecon@gmail.com'
// }

// console.log(Object.values(user))
// ['name', 'age', 'isValid', 'email']

// JSON(JavaScript Object Notation)

// 데이터 전달을 위한 표준 포맷!
// 문자, 숫자, 불린, Null, 객체, 배열만 사용함
// 문자는 큰 따옴표만 사용
// 후행 쉼표 사용 불가
// .json 확장자 사용

// JSON.stringfy() - 데이터를 JSON 문자로 변환함
// JSON.parse() - JSON 문자를 분석해 데이터로 변환함

console.log(JSON.stringify('Hello World!'))
console.log(JSON.stringify(123))
console.log(JSON.stringify(false))
console.log(JSON.stringify(null))
console.log(JSON.stringify({name : 'Heropy', age : 85}))
console.log(JSON.stringify([1, 2, 3]))

console.log('// ---------------------- // ')

// parse 시 문자열은 큰 따옴표로 한번 묶어주어야 한다.
// 또한 객체 속성명도 큰 따옴표로 한번 묶어주어야 한다.
console.log(JSON.parse('"Hello world!"'))
console.log(JSON.parse('123'))
console.log(JSON.parse('false'))
console.log(JSON.parse('true'))
console.log(JSON.parse('{"name" : "Heropy", "age" : 85}'))
console.log(JSON.parse('[1,2,3]'))
