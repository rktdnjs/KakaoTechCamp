import _ from 'lodash' // node_modules에서 lodash 패키지를 가지고 와서 사용함!

console.log(_.upperCase('hello-world'));

// TypeScript 코드
interface User {
    name : String
    age : Number
}

const user : User = {
    name : 'Hello',
    age : 85
}

console.log(user);