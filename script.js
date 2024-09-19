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

// //step1 - 인수로 전달된 특정 요소 안의 글자값을 반복돌며 span요소로 감싸서 다시 해당 요소안에 innerHTML로 삽입
// function splitText(elem, tag) {
// 	const el = document.querySelector(elem);
// 	const el_text = el.innerText;

// 	//for of 반복문 안쪽에서 += 복합대입연산자로
// 	//tag문자열이 들어있는 문자값이 계속 쌓일 변수 초기값 설정
// 	let resultText = "";

// 	//for of로 문자값을 반복 돌면서 <tag>letter</tag> 형태의 문자값을 계속 resultText변수에 쌓아나감
// 	for (let letter of el_text) {
// 		console.log(letter);
// 		resultText += `<${tag}>${letter}</${tag}>`;
// 	}
// 	console.log(resultText);

//     //반복문이 끝나고 최종 완성된 문자열을 el요소의 innetHTML 프로퍼티에 대입해서
//     //기존 el요소 안쪽의 HTML 구조를 변경
// 	el.innerHTML = resultText;
// }

// splitText("h1", "span");

//step2 - span요소 자체를 우리가 원하는 요소명으로 인수 전달 처리
//반복적인 스타일 정보를 css가 아닌 js에서 동적 적용
function splitText(elem, tag) {
	const el = document.querySelector(elem);
	const el_text = el.innerText;
	//아래와 같이 DOM.style.fontsize='문자값속성'은
	//실제 html태그상에 <h1 style='font-size:0px'></h1>
	//와 같이 인라인 스타일 형태로 적용
	el.style.fontsize = "0px";

	let resultText = "";

	for (let letter of el_text) {
		//동적으로 생성되는 문자열 자체적으로 style=''형식으로 스타일 값 연결가눙
		resultText += `<${tag} style = 'display:inline-block'>${letter}</${tag}>`;
	}
	console.log(resultText);

	el.innerHTML = resultText;
}

splitText("h1", "span");

//step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
//세번째 인수로 인터벌값이 있으면 각 반복요소에 누적해서 delay값 적용
//만약 세번째 인수 없으면 그냥 0으로 초기화

//// 1번째 방법
// function splitText(elem, tag, interval) {
// 	const el = document.querySelector(elem);
// 	const el_text = el.innerText;
// 	el.style.fontsize = "0px";

// 	let resultText = "";
// 	let counter = 0;

// 	for (let letter of el_text) {
// 		resultText += `<${tag} style = 'display:inline-block transition-delay:${
// 			interval || 0 * counter++
// 		}s'>${letter}</${tag}>`;
// 	}
// 	console.log(resultText);

// 	el.innerHTML = resultText;
// }

// splitText("h1", "span", 0.05);

// // 2번째 방법
// function splitText(elem, tag = "span", interval) {
// 	const el = document.querySelector(elem);
// 	const el_text = el.innerText;
// 	el.style.fontsize = "0px";

// 	let resultText = "";
// 	let counter = 0;

// 	for (let letter of el_text) {
// 		resultText += `<${tag} style = 'display:inline-block transition-delay:${
// 			interval * counter++
// 		}s'>${letter}</${tag}>`;
// 	}
// 	console.log(resultText);

// 	el.innerHTML = resultText;
// }

// splitText("h1", "span", 0.05);

// 3번째 방법
function splitText(elem, tag = "span", interval = 0) {
	if (!elem) {
		console.error(
			"첫 번째 인수값은 텍스를 가져올 DOM선택자를 넣어야 됩니다."
		);
		//필수값인 elem요소가 전달되지 않으면 무조건 return으로 함수를 강제 중지해서
		//불필요한 연산 처리 방지
		return;
	}
	console.log("elem이 없을때 불필요한 연산 시작");
	const el = document.querySelector(elem);
	const el_text = el.innerText;
	el.style.fontSize = "0px";
	let resultText = "";
	let counter = 0;

	for (let letter of el_text) {
		resultText += `<${tag} style='display:inline-block; transition-delay:${
			interval * counter++
		}s'>${letter}</${tag}>`;
	}

	el.innerHTML = resultText;
}

splitText("h1");

//step4 - 세번째 인수값이 전달되지 않으면 무조건 delay값을 디폴트로 0처리

//splitText('h1', 'span', 0.1)

// 혜인코드
// const mission_txt = document.querySelector("h1").innerText;
// // console.log(mission_txt);

// let new_letter = "";
// for (let letter of mission_txt) {
// 	console.log(letter);
// 	new_letter += `<span class='span-txt'>${letter}</span>`;
// }

// mission_txt.innerHTML = new_letter;
// console.log(new_letter);
