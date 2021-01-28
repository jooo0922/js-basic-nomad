'use strict';
//2.4 Events and event handlers

// js는 단지 html, css를 바꾸기 위해 만든게 아님.
//event에 반응하기 위해 만들어졌다.
//event: 웹사이트에서 발생하는 것들을 말함. click, submit, resize, input change, load 등...
//js는 중간에 이벤트를 가로챌 수 있게 해준다.
const title = document.querySelector("#title");

function handleResize(){
    console.log('I hane been resized');
}

window.addEventListener("resize", handleResize); 
//우리는, 즉 JS는 윈도우에 대해 어떤 이벤트를 받기를 기다리고 있다(listen to event)는 뜻!
//그러나 어떤 이벤트를 받을것인지 분명히 말해줘야 함(여기서는 resize). 모든 이벤트를 다 기다릴 순 없으니까
//그렇게 하면 웹사이트가 매우 느려질 것...
//resize(받기로 한, 기다리기로 한 이벤트) 뒤에는 우리가 그 이벤트를 다룰 함수를 적는 거지
//그러니 앞서 우리가 만들어낸 handleResize라는 함수를 넣어보자

//handResize 와 handleResize() 의 차이점
//전자는 해당 함수를 우리가 필요한 시점에 호출하는 거
//후자는 지금 바로 즉시, 자동적으로, 호출하라는 거!

/*
function handleResize(event){
    console.log(event);
}

window.addEventListener("resize", handleResize); 

이럴 경우는, resize를 하면 handleResize 함수가 호출되고, 
호출될때마다 event(즉, 여기서는 resize)를 또 해당 함수에 인자로 넣으니
event(resize) 오브젝트를 콘솔창에 찍는 행위를 메아리처럼 계속 자동반복하지!
그래서 이거를 노마드코더가 트릭이라고 설명한 듯..
이런 게 폼을 만들 때, 링크를 클릭할 때 유용하다고 하는데 일단 나중에 자세히 얘기해보자고
하네...
*/

/*
function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);

여기서는 title(즉 id = title인 <h2>)에 대해 어떤 이벤트를 줄 때 그걸 받아서 
어떤 함수로 처리할 것이냐~ 라는 뜻임.
*/


//2.5 if, else, and, or
/*
if-else란? 조건! 많은 것들이 대부분 조건이다
ex) 유저가 로그인 했으면~ 이걸 보여주고
안했으면~ 다른걸 보여주고,
유저가 클릭했으면~ 이걸 하고
아니면 다른 걸 하게 하고.. 등

if-else는 거의 모든 프로그래밍 언어에 있다. 같은 구조. 같은 컨셉인 것!
*/
/*
if-else 기본구조

if(condition){
    block
} else {
    block
}

-여기서 block은 자바스크립트 표현볍
console.log, alert, 등 아무거나 와도 될거고
*/
if (10 === 5) {
    console.log("hi");
} else {
    console.log("ho");
}
/*
-condition은 위에 처럼 수식이 맞다/틀리다, 참/거짓 등으로 구분될 수 있는 명제들을 씀
그래서 여기에 들어가는 조건은 항상 참값(true)이다. 
만약 이 조건이 참이 아니면, 해당 블록을 건너뛰고
else블록을 실행시킬 것임.
-참고로 '='은 값을 넣는다는 의미이고, '==='는 두 값이 똑같은지 체크한다는 의미
*/
if (true) {
    console.log("hi");
} else {
    console.log("ho");
}

if ("nicolas" === "necolas") {
    console.log("hi");
} else {
    console.log("ho");
}
//두 string(문자열)은 서로 같지 않으니 거짓.

if ("10" === 10) {
    console.log("hi");
} else {
    console.log("ho");
}
//"10"은 string이고 10은 number니까 다르다. 따라서 거짓.
//if 블록을 실행하게 하려면 조건문은 항상 참이어야 한다!

if ("10" === 10) {
    console.log("hi");
} else if ("10" === "10") {
    console.log("lalala");
} else {
    console.log("ho");
}
//이처럼 여러개의 조건문을 가질 수도 있다!

if ("10" === 10) {
    console.log("hi");
} else if ("10" === "11") {
    console.log("lalala");
} else {
    console.log("ho");
}
//위에 열거한 여러개의 조건문이 모두 참이 아니면 마지막 else 블록을 실행시킴

if (20 > 5 && "nicolas" === "nicolas") {
    console.log("yes");
} else {
    console.log("no");
}
// &&(and)로 조건문을 합칠수도 있다.

if (20 > 5 && "nicolas" === "necolas") {
    console.log("yes");
} else {
    console.log("no");
}
/*
&&(and)는 &&로 합쳐진 조건문들이 '모두' 참이어야 if 블록을 실행.
둘중 하나라도 거짓이면 else 블록을 실행시킨다.
*/

if (20 > 5 || "nicolas" === "necolas") {
    console.log("yes");
} else {
    console.log("no");
}
/* 
||(or)는 ||로 합쳐진 조건문들중 '하나 이상만' 참이면 if블록 실행
모든 조건문이 거짓이면 else 블록 실행
*/

/**
true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;
*/

/*
prompt는 유저에게 뭘 물어볼 수 있는 함수
엄청 오래된 자바스크립트라 지금은 쓰지 않는다고 함. alert랑 비슷.
이것보다 html로 좋은 폼으로 나오게 커스터마이징할 수 있음.
*/
const age = prompt("How old are you?");

if (age >= 18 && age <= 21){
    console.log('You can drink but you should not');
} else if (age > 21) {
    console.log('Go ahed');
} else {
    console.log('too young');
}