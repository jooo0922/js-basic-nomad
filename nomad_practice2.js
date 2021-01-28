'use strict';

//2.6 DOM - if else - Function practice

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
// init()은 일단 컬러체크(rgb값 확인용)를 하기위해 만든 함수... 
//끝에 호출해서 일단 어플리케이션을 초기화함
// 'function 함수명' 는 함수정의, 함수실행x
// '함수명()' 또는 'object.함수명()' 는 함수 호출, 함수를 실행함! 
// 'const(let) 이름' 는 const(let)을 정의하겠다. 그안에 값을 넣어놓겠다는 뜻!

/*
이게 로직을 추가하고, 이벤트에 반응하고, 컨텐츠를 수정하는 방법이다!
이게 자바스크립트가 만들어진 이유!
click 외에 여러 이벤트를 찾아보고 싶으면
항상 MDN을 찾아볼 것.
'ALWAYS USE MDN'
'ALWAYS USE MDN'
'ALWAYS USE MDN'
*/

function handleOffline(){
    console.log('Bye bye');
}

function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
//윈도우창에 offline(와이파이, 네트워크 연결끊기) 하는 이벤트를 줄 때 함수처리!