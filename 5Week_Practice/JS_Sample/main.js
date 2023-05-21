// 자바스크립트를 실행할 때 세미콜론이 없는 경우 자동으로 붙여서 해석하긴 한다.
// 그래도 항상 세미콜론을 붙여주는 습관을 들이자!
const boxEls = document.querySelectorAll(".box");

// boxEls의 요소들을 반복적으로 돌려가면서 사용
// 반복하는 요소의 이름을 우리가 원하는 이름으로 사용가능
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

/*
boxEl.addEventListener('click', function () {
    console.log("Click!!!");

    boxEl.classList.add('active');
    console.log(boxEl.classList.contains('active'));

    boxEl.classList.remove('active');
    console.log(boxEl.classList.contains('active'));
});
*/

// const userA = {
// 	name : 'Hello',
// 	age : 100,
// 	address :{
// 		country : 'Korea',
// 		city : 'Seoul'
// 	}
// }

// const userB = {
// 	name : 'Neo',
// 	age : 22
// }

// function getCity(user) {
//     return user.address?.city
// }

// console.log(getCity(userA))
// console.log(getCity(userB))

/* -------------------- */

// If 조건문
/*
function isPositive(number) {
  if (number > 0) {
    return "양수";
  } else if (number < 0) {
    return "음수";
  } else {
    return "0"
  }
}

console.log(isPositive(1));  // 양수
console.log(isPositive(-2)); // 음수
console.log(isPositive(0))   // 0
*/

/* -------------------- */

// Switch 조건문
/*
function price(fruit) {
    switch(fruit) {
        case 'Apple':
            // 조건에 따라 실행할 코드 작성
            return 1000
        case 'Banana':
            return 1500
        case 'Cherry':
            return 2000
        default:
            return 0
    }
}

console.log(price('Apple'))  // 1000
console.log(price('Banana')) // 1500
console.log(price('Hello'))  // 0
*/

/* -------------------- */

// For 반복문
// for (let i = 9; i > -1; i -= 1) 
// {
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log(i) // 9 7 5 3 1
// }

/* -------------------- */

// For of 반복문
/*
const fruits = ['Apple', 'Banana', 'Cherry']

for (let i = 0; i < fruits.length; i += 1)
{
    console.log(fruits[i])
}

// 배열 데이터를 반복하기 위해서 사용할 수 있는 키워드 - of
for (const a of fruits) // fruits 안의 아이템이 a라는 이름으로 그때 그때 할당
{
    console.log(a)
}
*/

// 배열 안에 객체 데이터가 있는 형태에서의 For of 반복문
/*
const users = [
    {
        name : 'Hello',
        age : 85
    },
    {
        name : 'Neo',
        age : 20
    },
    {
        name : 'Lord',
        age : 85
    },
]

for (let i = 0; i < users.length; i += 1)
{
    console.log(users[i]) // 배열안의 객체를 하나하나씩 가지고 옴
}

for (const user of users)
{
    console.log(user) // users안의 아이템들을 user라는 변수명으로 가지고와서 사용함
}
*/

// For in 반복문
// 객체 데이터를 조회할 때 사용해보자.
/*
const user = {
    name : 'Hello',
    age : 85,
    isValid : true,
    email : 'ghghgh@naver.com'
}

// 객체 데이터의 속성값을 하나하나 가지고 와서 key라는 이름으로 사용함!
for (const key in user) {
    console.log(key) // name, age, isValid, email이라는 속성명이 출력됨
    console.log(user[key]) // 위의 속성명에 해당하는 값이 출력됨!!
}

// 대괄호 표기법의 장점 : 대괄호 사이에 문자열 데이터가 들어갈 수 있다!
console.log(user['age']) // 85
*/


// Do While 반복문
let n = 0

// 조건이 거짓이라도 최초 1번은 실행된다는 것이 Do While 반복문의 특징!
do {
    console.log(n)
} while (n)