// 자바스크립트를 실행할 때 세미콜론이 없는 경우 자동으로 붙여서 해석하긴 한다.
// 그래도 항상 세미콜론을 붙여주는 습관을 들이자!
const boxEls = document.querySelectorAll('.box');

// boxEls의 요소들을 반복적으로 돌려가면서 사용
// 반복하는 요소의 이름을 우리가 원하는 이름으로 사용가능
boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
})

/*
boxEl.addEventListener('click', function () {
    console.log("Click!!!");

    boxEl.classList.add('active');
    console.log(boxEl.classList.contains('active'));

    boxEl.classList.remove('active');
    console.log(boxEl.classList.contains('active'));
});
*/