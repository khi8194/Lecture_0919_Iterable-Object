/*
Iterable Object (반복가능한 객체)
자바스크립트에서는 문자열로 반복가능한 객체 취급

for in 반복문을 사용하면 문자값도 반복 처리 가능
*/
const text = "HELLO";

for (let letter of text) {
	console.log(letter);
}

//미션 함수 생성
//step1 - 인수로 전달된 특정 요소 안의 글자값을 반복돌며 span요소로 감싸서 다시 해당 요소안에 innerHTML로 삽입
//step2 - span요소 자체를 우리가 원하는 요소명으로 인수 전달 처리
//step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
//step4 - 세번째 인수값이 전달되지 않으면 무조건 delay값을 디폴트로 0처리

//splitText('h1', 'span', 0.1)
