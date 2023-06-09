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

// N.contains()

// '주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인함
// 노드.contains(주어진_노드)

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// console.log(parentEl.contains(childEl))       // true
// console.log(document.body.contains(parentEl)) // true
// console.log(document.body.contains(childEl))  // true
// console.log(document.body.contains(document.body)) // true
// console.log(parentEl.contains(parentEl)) // true
// console.log(parentEl.contains(document.body)) // false
// console.log(childEl.contains(document.body))  // false

// N.textContent
// 노드의 모든 텍스트를 얻거나 변경함

// const el = document.querySelector('.child')
// console.log(el.textContent)

// el.textContent = '7'
// console.log(el.textContent)

// E.innerHTML
// '요소'의 모든 HTML 내용을 하나의 문자로 얻거나,
// 새로운 HTML을 지정함

// const el = document.querySelector('.parent')
// console.log(el.innerHTML)

// el.innerHTML = /* html */ `
// <div style="border: 4px solid;">
//   <span style="color: red;">Hello~</span>
//   <span style="color: red;">Hello~</span>
// </div>`

// E.dataset
// 요소의 각 `data-` 속성 값을 얻거나 지정함

// const el = document.querySelector('.child')
// const str = 'Hello World!'
// const obj = { a : 1, b : 2 }

// el.dataset.helloWorld = str
// // obj를 문자화시켰기에 dataset의 object에 할당이 가능한 것!
// el.dataset.object = JSON.stringify(obj)


// console.log(el.dataset.helloWorld)
// console.log(el.dataset.object)
// // 실제 객체 데이터로 사용하기 위해 JSON.parse 사용
// console.log(JSON.parse(el.dataset.object)) 

// E.tagName
// 요소의 태그 이름을 반환함

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
// const el = document.createElement('span')

// console.log(parentEl.tagName)
// console.log(childEl.tagName)
// console.log(el.tagName)
// console.log(document.body.tagName)

// E.id
// 요소의 `id` 속성 값을 얻거나 지정함

// const el = document.querySelector('.child')
// console.log(el.id) // 아직은 id가 없어서 아무것도 출력 x(빈 문자)

// el.id = 'child1'   // el의 id를 지정해줌!
// console.log(el.id) // child1 출력
// console.log(el)    // <div class="child" id="child1">1</div> 출력

// E.className
// 요소의 `class` 속성 값을 얻거나 지정함

// const el = document.querySelector('.child')
// console.log(el.className)

// el.className += ' child1 active' 
// console.log(el.className) 
// console.log(el)    

// E.classList
// 요소의 `class` 속성 값을 제어함

// `.add()` : 새로운 값을 추가
// `.remove()` : 기존 값을 제거
// `.toggle()` : 값을 토글
// `.contains()` : 값을 확인

// const el = document.querySelector('.child')

// el.classList.add('active')
// console.log(el.classList.contains('active')) // true

// el.classList.remove('active')
// console.log(el.classList.contains('active')) // false

// el.addEventListener('click', () => {
//   el.classList.toggle('active') // add <-> remove 반복
//   console.log(el.classList.contains('active'))
// })

// E.style
// 요소의 `style` 속성(인라인 스타일)의 CSS 속성값을 얻거나 지정함
// CSSStyleDeclaration 객체에서는 요소에 적용된 실제 CSS 속성값들의 객체를 얻을 수 있다.

// const el = document.querySelector('.child')


// // 개별 지정!
// el.style.width = '100px'
// el.style.fontSize = '20px'
// el.style.backgroundColor = 'green'
// el.style.position = 'absolute'



// // 한 번에 지정!
// // Object.assign(el.style, {
// //   width = '100px'
// //   fontSize = '20px'
// //   backgroundColor = 'green'
// //   position = 'absolute'
// // })


// console.log(el.style)
// console.log(el.style.width)
// console.log(el.style.fontSize)
// console.log(el.style.backgroundColor)
// console.log(el.style.position)

// window.getComputedStyle()
// 요소에 적용된 스타일 객체를 반환함

// const el = document.querySelector('.child')
// const styles = window.getComputedStyle(el)

// console.log(styles)
// console.log(styles.width)
// console.log(styles.fontSize)
// console.log(styles.backgroundColor)
// console.log(styles.position)

// E.getAttribute() / E.setAttribute()
// 요소에서 특정 속성 값을 얻거나 지정함

// const el = document.querySelector('.child')

// el.setAttribute('title', 'Hello World!')
// console.log(el.getAttribute('title'))

// E.hasAttribute() / E.removeAttribute()
// 요소에서 특정 속성 값을 확인하거나 제거함

// const el = document.querySelector('.child')

// console.log(el.hasAttribute('class')) // true

// el.removeAttribute('class')
// console.log(el.hasAttribute('class')) // false

// console.log(el)

// window.innerWidth / window.innerHeight
// 현재 화면(Viewport)의 크기를 얻음

// console.log(window.innerWidth)
// console.log(window.innerHeight)

// window.scrollX / window.scrollY 
// 페이지의 좌상단 기준, 현재 화면(Viewport)의 
// 수평 or 수직 스크롤 위치를 얻음

// console.log(window.scrollX, window.scrollY)

// window.scrollTo() / E.scrollTo()
// 지정된 좌표로 대상(화면, 스크롤 요소)을 스크롤함
// 대상.scrollTo(X좌표, Y좌표)
// 대상.scrollTo({ top: Y, left: X, behavior: 'smooth' }) 화면이 부드럽게 움직임!

// const parentEl = document.querySelector('.parent')

// setTimeout(() => {
//   parentEl.scrollTo({
//     left:0,
//     top:500,
//     behavior:'smooth'
//   }) // parentEl요소에 1초후 자동 스크롤(스무스하게 이동)
// }, 1000)

// E.clientWidth / E.clientHeight
// 테두리 선(border)을 제외한 요소의 크기를 얻음
// 스크롤바가 있을경우 해당하는 부분의 크기를 뺀 크기를 얻음(주의)
// 해당 속성은 잘 사용하지 않음..!

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// console.log(parentEl.clientWidth, parentEl.clientHeight) // 325(300 + 20 + 20 - 스크롤바) 240(200 + 20 + 20)
// console.log(childEl.clientWidth, childEl.clientHeight)   // 265(325 - 20 - 20 - 10 - 10) 100

// E.offsetWidth / E.offsetHeight
// 테두리 선(border)을 포함한 요소의 크기를 얻음

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// console.log(parentEl.offsetWidth, parentEl.offsetHeight) // 360(300 + 20*2 + 10*2) 260(200 + 20*2 + 10*2)
// console.log(childEl.offsetWidth, childEl.offsetHeight)   // 285(360- 20*2 - 10*2 - 스크롤바) 120(100 + 10*2)

// E.scrollLeft / E.scrollTop
// 스크롤 요소의 좌상단 기준
// 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻음

// window.parentEl = document.querySelector('.parent') // window의 객체에 parentEl 속성을 따로 만들어 할당

// console.log(parentEl.scrollLeft, parentEl.scrollTop)

// E.offsetLeft / E.offsetTop
// 페이지의 좌상단 기준, 요소의 위치를 얻음

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// console.log(parentEl.offsetLeft, parentEl.offsetTop) // 8 1058
// console.log(childEl.offsetLeft, childEl.offsetTop)   // 38 1638

// E.getBoundingClientRect()

// 테두리 선(border)을 포함한 요소의 크기 &
// 화면에서의 상대 위치 정보를 얻음
// 상대 위치이기 때문에 스크롤의 위치가 바뀌면 값이 변함!

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// console.log(parentEl.getBoundingClientRect())
// console.log(childEl.getBoundingClientRect())

// .addEventListener()
// 대상에 이벤트 청취(Listen)을 등록함
// 대상에 지정한 이벤트가 발생했을때 지정한 함수(Handler)가 호출됨

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// parentEl.addEventListener('click', () => {
//   console.log('Parent!')
// })

// // child요소의 영역이기도 하지만 parent요소의 영역이기도 함
// // 따라서 Parent! Child! 둘다 출력됨
// childEl.addEventListener('click', () => {
//   console.log('Child!')
// })

// .removeEventListener()
// 대상에 이벤트 청취(Listen)을 제거함
// 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있음

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// // remove를 이용해서 특정 핸들러를 삭제할거라면 따로 만들어두는것이 좋다.
// const handler = () => {
//   console.log('Parent!')
// }

// parentEl.addEventListener('click', handler)
// childEl.addEventListener('click', () => {
//   // 제거하고자 하는 이벤트의 이름, 연결된 handler를 2번째 인자로 넣어줌
//   parentEl.removeEventListener('click', handler)
// })

// 이벤트 객체
// 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있음

// const parentEl = document.querySelector('.parent')

// parentEl.addEventListener('click', (event) => {
//   console.log(event.target, event.currentTarget)
//   console.log(event) // PointerEvent 내용 출력
// })
// parentEl.addEventListener('wheel', (event) => {
//   console.log(event)
// })

// const inputEl = document.querySelector('input')

// inputEl.addEventListener('keydown', event => {
//   console.log(event.key)
// })

// 기본 동작 방지
// 우리가 사용하는 브라우저의 기본 동작을 막을 수 있음!

// 마우스 휠의 스크롤 동작 방지!
// const parentEl = document.querySelector('.parent')
// parentEl.addEventListener('wheel', (event) => {
//   event.preventDefault()
//   console.log('Wheel!')
// })

// // <a> 태그에서 페이지 이동 방지!
// const anchorEl = document.querySelector('a')
// anchorEl.addEventListener('click', event => {
//   event.preventDefault()
//   console.log('Click!')
// })

// 이벤트 전파(버블) 정지

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
// const anchorEl = document.querySelector('a')

// window.addEventListener('click', event => {
//   console.log('Window!')
// }, { capture : true })
// document.addEventListener('click', event => {
//   console.log('Body!')
//   event.stopPropagation()
// }, { capture : true })
// parentEl.addEventListener('click', event => {
//   console.log('Parent!')
// }, { capture : true })
// childEl.addEventListener('click', event => {
//   console.log('Child!')
// })
// anchorEl.addEventListener('click', event => {
//   console.log('Anchor!')
// })

// const parentEl = document.querySelector('.parent')

// const handler = () => {
//   console.log('Parent!')
// }

// parentEl.addEventListener('click', handler, {
//   capture : true 
// })
// parentEl.removeEventListener('click', handler, {
//   capture : true
// }) 

// 기본 동작과 핸들러 실행 분리

// const parentEl = document.querySelector('.parent')

// parentEl.addEventListener('wheel', event => {
//   for (let i = 0; i < 10000; i += 1) {
//     console.log(i)
//   }
// }, {
//   passive : true
// })

// 이벤트 위임(Delegation)

// 비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우,
// 단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있다.

// const parentEl = document.querySelector('.parent')
// const childEls = document.querySelectorAll('.child') // NodeList 반환, forEach 사용 가능!

// 모든 대상 요소에 이벤트 등록!
// childEls.forEach(el => {
//   el.addEventListener('click', event => {
//     console.log(event.target.textContent)
//     // 4개의 요소에 로직이 겹치기 때문에 이벤트 위임을 통해 1번만 등록해서 써보자!
//   })
// })

// 조상 요소에 이벤트 위임!
// parentEl.addEventListener('click', event => {
//   const childEl = event.target.closest('.child')
//   // 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는 가장 가까운 요소를 반환함
//   // 이벤트 발생 위치로부터 가장 가까운 .child를 찾아냄

//   // 찾은 요소가 없을경우(null) 아래 구문이 실행되지 않는다.
//   if (childEl) {
//     console.log(childEl.textContent)
//   }
// })

// Mouse & Pointer Events

// click        | 클릭 시
// dblclick     | 더블 클릭 시
// mousedown    | 버튼을 누를 때
// mouseup      | 버튼을 뗄 때
// mouseenter   | 포인터가 요소 위로 들어갈 때
// mouseleave   | 마우스가 요소 밖으로 나올 때
// mousemove    | 포인터가 요소 내에서 움직일 때
// contextmenu  | 우클릭 했을 때
// wheel        | 휠 버튼이 회전할 때

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// childEl.addEventListener('mousemove', (event) => {
//   console.log(event.offsetX, event.offsetY)
// })

// Keyboard Event

// keydown | 키를 누를 때 
// keyup   | 키를 뗄 때

// const inputEl = document.querySelector('input')

// inputEl.addEventListener('keydown', event => {
//   if (event.key === 'Enter') {
//     console.log(event.isComposing)  // 처리 중이라면 true, 아니라면 false
//     console.log(event.target.value) // input 요소에 입력된 값
//   }
// })

// Focus & Form Events

// focus  | 요소가 포커스를 얻었을 때
// blur   | 요소가 포커스를 잃었을 때
// input  | 값이 변경되었을 때
// change | 상태가 변경되었을 때(tab, enter 키 등으로 인한 상태 변화)
// submit | 제출 버튼을 선택했을 때
// reset  | 리셋 버튼을 선택했을 때

// const formEl = document.querySelector('form')
// const inputEls = document.querySelectorAll('input')

// inputEls.forEach(el => {
//   el.addEventListener('focus', () => {
//     formEl.classList.add('active')    // active 클래스 활성화
//   })
//   el.addEventListener('blur', () => {
//     formEl.classList.remove('active') // active 클래스 비활성화
//   })
//   el.addEventListener('change', event => {
//     console.log(event.target.value)
//   })
// })

// formEl.addEventListener('submit', event => {
//   event.preventDefault() // form에서 submit 작동 시 페이지 새로고침이 기본 동작 <- 얘를 막음
//   const data = {
//     // 이벤트가 발생한 대상 요소의 0, 1번째 값
//     id : event.target[0].value,
//     pw : event.target[1].value
//   }
//   console.log('제출!', data)
// })

// formEl.addEventListener('reset', event => {
//   console.log('리셋!')
// })

// 커스텀 이벤트와 디스패치

const child1 = document.querySelector('.child:nth-child(1)')
const child2 = document.querySelector('.child:nth-child(2)')

child1.addEventListener('hello-world', event => {
  console.log('커스텀 이벤트 발생!')
  console.log(event.detail)
})

child2.addEventListener('click', () => {
  child1.dispatchEvent(new CustomEvent('hello-world', {
    detail : 123
  }))
})

// child1.addEventListener('click', event => {
//   // 강제로 이벤트 발생!
//   // child1을 통해 child2의 이벤트를 강제로 발생시킴
//   child2.dispatchEvent(new Event('click'))
//   child2.dispatchEvent(new Event('wheel'))
//   child2.dispatchEvent(new Event('keydown'))
// })

// child2.addEventListener('click', event => {
//   console.log('Child2 Click!')
// })

// child2.addEventListener('wheel', event => {
//   console.log('Child2 wheel!')
// })

// child2.addEventListener('keydown', event => {
//   console.log('Child2 keydown!')
// })