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

