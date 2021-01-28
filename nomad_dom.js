'use strict';

// 2.2 JS DOM Function

console.log(document);
// document도 하나의 Object라고 할 수 있음.
// HTML document의 수많은 요소들로 구성된 object!
// 이같은 방식으로 JS도 CSS Selector처럼 HTML문서에 접근할 수 있음

const title = document.getElementById("title");
console.log(title);
// html document도 하나의 자바스크립트가 되는 것
// console.log 처럼 document.~ 도 수많은 .~(함수)를 가지고 있음.
// 이것이 DOM (Document Object Module)
// 자바스크립트는 HTML에 있는 모든 태그를 가지고 와서 그걸 Object로 만든다.

title.innerHTML = "Hi! From JS";
// 이렇게 하면 자바스크립트로 실제 바뀌어있는 HTML을 갖게 됨
// HTML 페이지에서 자바스크립트로 선택한 거는 객체가 된다!


// 2.3 Modifying the DOM with JS

// title 이라는 Object안에 innerHTML 말고도 우리가 할 수 있는 것들이 얼마나 많은지 살펴보자
console.dir(title);

// title 안에 있는 함수들이 이렇게 많다는 것은, 이 많은 것들을 JS에서 다 수정할 수 있다는 뜻
// 이렇게 우린 자바스크립트로 HTML을 조종할 수 있지
title.style.color = 'red';

// title로 했더 것처럼 document로도 같은 걸 할 수 있음
// html문서의 title 수정하기
document.title = 'I own you now';

// 이게 이 코스에 온 이유.
// 어떻게 HTML을 수정할 수 있는지 이해하기 위해!!
// 아마도 class를 추가하고, 애니메이션을 변경하고, 
// 어떻게 숨기고 보여줄 수 있는지, click을 감지할 수 있는지 등등...

// querySelector는 노드의 첫번째 자식을 반환함
// 그 의미는, html document로 가서 모든 자식들 중에서, 찾으려고 할거라는 뜻
// 이제 querySelector를 엄청 많이 쓸거야
// 이게 CSS Selector(선택자)하고 비슷한거임. .(class) 또는 #(id)로 태그를 선택함.
const sub = document.querySelector("#sub");
sub.innerHTML = 'From JS again!';
sub.style.color = '#fff344';
document.title = 'change title';

// const는 값을 바꿀 수 없다. 즉, 코드를 복붙해서 값만 바꿔서 재사용하는 게 안된다는 거!
