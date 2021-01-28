'use strict';

/*
classList.toggle은 
classList.contain, add, remove로 했던 모든 걸 요약하는 함수!
훨씬 짧고 쉽고 간결하지!
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"; 

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
/*
classList.toggle은 클래스가 거기 있는지 체크해서 거기 있으면 add 아니면 remove 해주는 걸 말함
toggle() 함수 안에 있는 값(CLICKED_CLASS)을 체크하고, 있으면 add, 아니면 remove
결국 클래스명을 추가하거나 뺄 일이 있으면 classList.toggle을 사용하는게 가장 쉽지만!
어쨋든 어떤 원리로 그렇게 되는건 알아야하니까
다른 함수들을 끌고와서 설명했다고.. 한다 노마드가
*/

function init(){
    title.addEventListener("click", handleClick);
}
init();

/*
그니까 결론적으로 js로 클래스명을 붙였다뗏다 하면서 태그의 스타일을 수정하려면
그냥 무조건 classList.toggle() 쓰면 끝. 다른거 쓸 필요가 없음
*/