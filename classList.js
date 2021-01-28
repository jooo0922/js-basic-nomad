'use strict';

/*
그런데, className이라는 함수는 h1태그에
원래부터 어떤 클래스명(.btn)이 있었다면,
className을 실행하면 원래의 클래스명이 아예 지워져버림.
원래의 클래스명이 존중받지 못하는 함수인거지.

그래서 대안으로 사용할 수 있는 함수가 classList
classList는 메소드를 가진다.
클래스명에 대해 add, remove, contains 등의 함수들을 쓸 수 있다는 거!
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"; 

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS); 
    //contains는 ()안에 있는 클래스명 값이 해당 오브젝트 태그(즉, h1)에 존재하는지 체크하는 함수!
    //따라서 classList.contains 함수를 실행하면 결과값으로 true/false를 줄거임. 
    if (hasClass){ // 참고로 '!hasClass' 하면 '!' 는 '반대'의 의미. 즉, hasClass가 true면 !true 즉, false일 때 if 구문 실행!
        title.classList.remove(CLICKED_CLASS); 
    } else {
        title.classList.add(CLICKED_CLASS); 
        //이런식으로 classList를 쓰면 'clicked' 함수명만 붙였다 뗏다 하면서 btn클래스명은 보존이 가능한거지!
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
