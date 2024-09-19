/*
Iterable Object (반복가능한 객체)
자바스크립트에서는 문자열로 반복가능한 객체 취급

for in 반복문을 사용하면 문자값도 반복 처리 가능
*/
// const text = "HELLO";

// for (let letter of text) {
// 	console.log(letter);
// }

//미션 함수 생성
//step1 - 인수로 전달된 특정 요소 안의 글자값을 반복돌며 span요소로 감싸서 다시 해당 요소안에 innerHTML로 삽입
function splitText(elem, tag) {
	const el = document.querySelector(elem);
	const el_text = el.innerText;

	//for of 반복문 안쪽에서 += 복합대입연산자로
	//tag문자열이 들어있는 문자값이 계속 쌓일 변수 초기값 설정
	let resultText = "";

	//for of로 문자값을 반복 돌면서 <tag>letter</tag> 형태의 문자값을 계속 resultText변수에 쌓아나감
	for (let letter of el_text) {
		console.log(letter);
		resultText += `<${tag}>${letter}</${tag}>`;
	}
	console.log(resultText);
	el.innerHTML = resultText;
}

splitText("h1", "span");

//step2 - span요소 자체를 우리가 원하는 요소명으로 인수 전달 처리
//step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
//step4 - 세번째 인수값이 전달되지 않으면 무조건 delay값을 디폴트로 0처리

//splitText('h1', 'span', 0.1)

// const mission_txt = document.querySelector("h1").innerText;
// // console.log(mission_txt);

// let new_letter = "";
// for (let letter of mission_txt) {
// 	console.log(letter);
// 	new_letter += `<span class='span-txt'>${letter}</span>`;
// }

// mission_txt.innerHTML = new_letter;
// console.log(new_letter);

// getEl;
