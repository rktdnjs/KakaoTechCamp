// 모듈 : 특정 데이터들의 집합(파일)
// 모듈 가져오기(Import) & 모듈 내보내기(Export)

// import { hello } from './module.js' // module이라는 JS파일의 hello 모듈을 가지고 온다.

// console.log(hello)

/* <-------------------------------> */

// 기본 내보내기를 받을 경우 받는 데이터의 이름을 임의로 지정할 수 있다.
// 이름 내보내기를 받을 경우 받는 데이터의 이름을 명시해서 사용하면 된다.
// 와일드카드(*) : 여러개의 개념을 한꺼번에 지정하여 사용
// import * as abc from './module.js'

// console.log(abc)

/* <-------------------------------> */

// 자바스크립트 실행 도중 모듈을 갖고오는 방법
// import 함수를 사용하여 원하는 모듈을 갖고와서
// 전체 내용을 abc라는 변수명으로 가지고 와서 사용한다
/*
setTimeout(() => {
    import('./module.js').then((abc => {
        console.log(abc)
    }))
}, 1000)

// async & await를 통한 비동기 방식 코드
setTimeout(async () => {
    const abc = await import('./module.js')
    console.log(abc)
}, 1000)
*/

/*
import { a } from './a.js'
import { b } from './b.js'

import { a, b } from './util.js'

console.log(a())
console.log(b())
*/

/* <-------------------------------> */

// 동기(Synchronous) & 비동기(Asynchronous)
// 동기 : 순차적으로 코드 실행 o
// 비동기 : 순차적으로 코드 실행 x

// console.log(1)
// setTimeout(() => {console.log(2)}, 1000) // 비동기
// console.log(3)

// const btnEl = document.querySelector('h1')
// btnEl.addEventListener('click', () => {
//     console.log('Clicked?') // btnEl이 클릭되었을 때만 작동함!!
// })
// console.log('Hello World!') // 얘가 제일 먼저 실행

/* <-------------------------------> */
// 콜백(Callback) 패턴

/*
const a = (callback) => setTimeout(() => {
    console.log(1)
    callback() // 콜백을 활용하여 다음 실행의 순서를 보장해줄 수 있다 - 콜백 패턴
}, 1000);

const b = (callback) => setTimeout(() => {
    console.log(2)
    callback()
}, 1000);

const c = (callback) => {
    setTimeout(() => {
        console.log(3)
        callback()
    }, 1000);
}

const d = () => {
    setTimeout(() => {
        console.log(4)
    }, 1000);
}

// 콜백 패턴에서 발생하는 문제 - 콜백 지옥(내부로 콜백이 계속해서 중첩됨)
a(() => {
    b(() => {
        c(() => {
            d() // 1 2 3 4 차례대로 출력
        })
    })
})
*/

/* <-------------------------------> */
// Promise

// 기존 콜백 패턴 코드 -> Promise 패턴 코드
/*
const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve(); // 기존에 콜백을 실행하던 부분에 resolve라고 칭한 프로미스의 인자를 넣어준다.
    }, 1000);
  }); // Promise 클래스 호출
};

const b = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve(); // 기존에 콜백을 실행하던 부분에 resolve라고 칭한 프로미스의 인자를 넣어준다.
    }, 1000);
  }); // Promise 클래스 호출
};

const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve(); // 기존에 콜백을 실행하던 부분에 resolve라고 칭한 프로미스의 인자를 넣어준다.
    }, 1000);
  }); // Promise 클래스 호출
};

const d = () => console.log(4)
*/

// 기존의 콜백 패턴과 형태가 다를바 없다...?
// then이라는 메소드에 제공되는 콜백에서 Promise 인스턴스를 반환받을 경우
// 해당 then 메소드에 이어서 체이닝 하여 then 메소드를 사용할 수 있다!
/*
a().then(() => {
    return b() // Promise 인스턴스를 반환, a의 then 메소드에 이어서 then 체이닝!
}).then(() => {
    return c()
}).then(() => {
    d()
})
*/

// 화살표 함수에서 return 키워드가 바로 나올경우 return과 중괄호를 생략할 수 있다.
/*
a()
.then(() => b())
.then(() => c())
.then(() => {
    d()
})
*/

// 콜백 부분이 Promise의 resolve부분으로 전달되어 함수가 호출되는 형식이다.
// 그렇기 때문에, 화살표 함수를 보내는게 아닌 그냥 함수 데이터 자체를 보내도 OK!
/*
a()
.then(b)
.then(c)
.then(d)
.then(() => console.log('done'))
*/

/* <-------------------------------> */
//  Async - Await
/*
const a = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1)
            resolve()
        }, 1000);
    })
}

const b = () => console.log(2)

// a().then(() => b()) // Promise의 resolve로 함수에 대한 정보를 넘겨줌

// a함수의 호출을 기다렸다가
// 다음으로 넘어가게 되면 b 함수를 호출한다
// await 키워드를 사용하는 코드는 async 키워드를 사용하는 함수 내부에 있어야함!
// async 함수를 통해 비동기 코드를 관리할 수 있다는 장점!
const wrap = async () => {
    await a()
    b()
}
wrap()
*/

/* <-------------------------------> */
// Resolve, Reject 그리고 에러 핸들링
/*
const delayAdd = index => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없습니다.`);
        return;
      }
      console.log(index);
      resolve(index + 1);
    }, 1000);
  });
};

// Promise 에러 핸들링
delayAdd(13)
.then(res => console.log(res))    // delayAdd의 Promise - resolve에 해당
.catch(err => console.error(err)) // delayAdd의 Promise - reject에 해당
.finally(() => console.log("Done!")) // 얘는 항상 실행

// Async - Await 에러 핸들링
const wrap = async () => {
    try {
        const res = await delayAdd(2) // 기존에 Promise에서 then으로 받던 내용을 변수에 할당 가능
        console.log(res)   // resolve의 인자가 여기서 사용된다.
    } catch (err) {        // 기존에 Promise에서 catch에서 처리하던 내용
        console.error(err) // reject의 인자가 여기서 사용된다.
    } finally {            // 얘는 항상 실행
        console.log("Done!")
    }
}

wrap()
*/

/* <-------------------------------> */
// 반복문에서 비동기 처리

/*
const wrap = async () => {
    for (const title of titles) {
        const movies = await getMovies(title)
        console.log(title, movies)
    }
}
*/

/* <-------------------------------> */
// fetch(주소, 옵션)
// 네트워크를 통해 리소스의 요청(Request) 및 응답(Response)을 처리할 수 있다.
// Promise 인스턴스를 반환한다. 따라서 then 메소드를 사용할 수 있다.

/*
fetch("주소", {
    method: 'GET', // 서버에서 요구하는 method를 적을 수 있도록 하자.
    headers: {     // 서버로 전송하는 요청에 대한 정보를 담고있다.  
        'Content-Type' : 'application/json' // 서버로 전송되는 내용의 타입
    },
    body: JSON.stringify({ 
        // 요청에 대한 데이터를 담아서 전송할 수 있다.
        // body라는 옵션에 명시하는 데이터는 반드시 '문자화' 해주어야 한다.
        name: "Hello",
        age : 100,
        email : "머시기"
    })
})
  // Response라는 이름으로 응답 객체가 출력된다!
  // 응답 객체에서 데이터를 빼내오기 위해 res.json에 접근한다
  // 중괄호과 return이 붙어있기 때문에 생략 가능하다.
  .then((res) => res.json())

  // 근데 res.json 또한 Promise 객체기 때문에 then을 이어서 사용할 수 있다.
  .then((json) => console.log(json));

// Async - Await 패턴으로 fetch 작성
const wrap = async () => {
  const res = await fetch("주소");
  const json = await res.json();
  console.log(json);
};
*/

/* <-------------------------------> */

// DOM(Document Object Model)
// DOM API(DOM에서 사용할 수 있는 다양한 명령어들)

// DOM이란 HTML문서를 객체로 표현한 것
// JS에서 HTML을 제어할 수 있게 해줌!

// const element = document.querySelector('h1')
// console.log(element.textContent) // HTML을 제어할 수 있음!

// Node vs Element

// 노드(Node) : HTML요소, 텍스트, 주석 등 모든 것을 의미함
// 요소(Element) : HTML 요소를 의미함

// const parent = document.querySelector('.parent')

// // 부모 요소의 모든 자식 '노드' 확인
// console.log(parent.childNodes)

// // 부모 요소의 모든 자식 '요소' 확인
// console.log(parent.children)

// // dir - 객체 데이터처럼 출력할 수 있다.
// console.dir(parent)

// class N {}
// class E extends N {} // N을 상속받은 E클래스

// console.dir(E)
// console.dir(N)
// console.dir(E.__proto__)

// console.dir(Element)
// console.dir(Node)
// console.dir(Element.__proto__)

/* <----------------- 구분선 -----------------> */

// document.getElementById()

// HTML `id` 속성(Attributes) 값으로 검색한 요소를 반환함
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환함
// 검색 결과가 없으면, `null`을 반환함

// const el = document.getElementById('child123')
// console.log(el)

// document.querySelector()

// 'CSS 선택자'로 검색한 요소를 하나 반환함
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환함
// 검색 결과가 없으면, `null`을 반환함

// const el = document.querySelector('.child:first-child')
// console.log(el) // <div class="child">1</div> 출력

// document.querySelectorAll()

// 'CSS 선택자'로 검색한 모든 요소를 `NodeList`로 반환함
// `NodeList` 객체는 `.forEach()`를 사용할 수 있음

// const nodeList = document.querySelectorAll('.child')
// console.log(nodeList)
// nodeList.forEach(el => console.log(el.textContent))

// console.log(Array.from(nodeList).reverse()) // 유사 배열을 객체 데이터로 변환

// N.parentElement(노드에 사용가능)

// 노드의 부모 요소를 반환함

// const el = document.querySelector('.child')
// console.log(el.parentElement)

// E.closest()

// 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는
// 가장 가까운 요소를 반환함
// 요소를 찾지 못하면, `null`을 반환함

// const el = document.querySelector('.child')

// console.log(el.closest('div'))
// console.log(el.closest('body'))
// console.log(el.closest('.hello'))

// N.previousSibling / N.nextSibling

// 노드의 이전 형제 혹은 다음 형제 노드를 반환함

// const el = document.querySelector('.child')
// console.log(el.previousSibling) // 이전 형제
// console.log(el.nextSibling) // 다음 형제

// E.previousElementSibling / E.nextElementSibling
// 요소의 이전 형제 혹은 다음 형제 요소를 반환함

// const el = document.querySelector('.child')
// console.log(el.previousElementSibling) // 이전 형제
// console.log(el.nextElementSibling) // 다음 형제

// E.children

// 요소의 모든 자식 요소를 반환함

// const el = document.querySelector('.parent')
// console.log(el.children)

// console.log(Array.from(el.children))

// E.firstElementChild / E.lastElementChild

// 요소의 1번째 자식 혹은 마지막 자식 요소를 반환함

// const el = document.querySelector('.parent')
// console.log(el.firstElementChild)
// console.log(el.lastElementChild)

// document.createElement()
// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환함

// const divEl = document.createElement('div')
// console.log(divEl)

// const inputEl = document.createElement('input')
// console.log(inputEl)

// E.prepend() / E.append()
// 노드를 요소의 1번째 혹은 마지막 자식으로 삽입함

// const parentEl = document.querySelector('.parent')

// const el = document.createElement('div')
// el.textContent = 'Hello~'

// parentEl.prepend(new Comment(' 주석 '))
// parentEl.append(el)
// parentEl.append('Text!')

// E.remove()
// 요소를 제거함

// const el = document.querySelector('.child')
// el.remove() // <div class="child">1</div> 제거됨!

// E.insertAdjacentElement()

// '대상 요소'의 지정한 위치에 '새로운 요소'를 삽입함
// 대상_요소.insertAdjacentElement(위치, 새로운_요소)

// 위치값
// beforebegin
// afterbegin
// beforeend
// afterend

// const childEl = document.querySelector('.child')
// const newEl = document.createElement('span')
// newEl.textContent = 'Hello~'

// childEl.insertAdjacentElement('afterend', newEl)

// N.insertBefore()
// '부모 노드'의 자식인 '참조 노드'의 이전 형제로 '노드'를 삽입함
// 부모_노드.insertBefore(노드, 참조_노드)

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
// const newEl = document.createElement('span')
// newEl.textContent = 'Hello~'

// parentEl.insertBefore(newEl, childEl)