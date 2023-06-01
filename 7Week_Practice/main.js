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
