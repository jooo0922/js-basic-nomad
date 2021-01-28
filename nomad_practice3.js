'use strict';

//2.6 DOM - if else - Function practice2

/*
사실 practice2의 방법은 좋은 게 아니다.
왜냐면 js가 직접 웹사이트의 스타일을 처리하는 건 신경쓰이고 복잡한 일이기 때문에!
html은 html파일에서만, css는 css파일에서만 작업하고,
js는 로직만 처리하게 하고싶을때 어떻게 해야할까?
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"; 
// 여기서 당장 clicked는 그냥 스트링값임. 스타일시트에 저장한 클래스인 clicked와는 그 자체로는 아무 상관도 없고 연결된 것도 아니다.

function handleClick(){
    const currentClass = title.className; //지금 이 상태에서는 h1에는 클래스명이 없음!
    if (currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS; //title(h1태그)의 클래스명에 CLICKED_CLASS 안에 값(clicked)라는 스트링값을 넣어라!
    } else {
        title.className = ""; //원래 h1 태그에느 클래스명이 없었으니 empty 스트링을 넣어 클래스명을 없애려는 거지.
    }
}
// className은 해당 오브젝트(title)의 클래스명을 선택해주는 함수인 듯...
// '!==' 는 '같지 않다'는 뜻

function init(){
    title.addEventListener("click", handleClick);
}
init();

/*
js로 클래스명을 붙였다뗏다 할 수 있게 만들면
css만 수정하면 할 수 있는 것들이 아주 많아진다.
*/