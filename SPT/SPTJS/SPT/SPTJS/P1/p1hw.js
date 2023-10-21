//01 - 문자열 연습하기

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// ### 제한사항

// <aside>
// 📌 요구사항에 추가적으로 작용하는 제한사항입니다. 제한사항에 맞게 구현을 해야해서 꼭 읽어야 하지만, 문제를 풀어가는데 있어 힌트로 작용하는 내용도 많습니다.

// </aside>

// - 문자열 s의 길이 : 50 이하의 자연수
// - 문자열 s는 알파벳으로만 이루어져 있습니다.

// ---

// ### 입출력 예

// <aside>
// 📌 우리가 작성할 solution 함수의 실제 input과 올바른 output의 명세 입니다.

// </aside>

function solution(s){
    var result = true;
    s = s.toUpperCase();
    var num = 0;
    for(var i = 0; i < s.length; i++){
      if(s[i] === 'P') num++; // p이면 갯수 더하기 s[i]는 s라는 문자열 안에 있는 i번째의 요소가 
      if(s[i] === 'Y') num--; // y이면 갯수 빼기
    } 
    result = (num === 0); // p, y 갯수가 같으면 0 (p가 많으면 양수, 반대 음수)
  
    return result;
  }




//02 - 반복문, 조건문 연습하기

// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// ### 제한사항

// <aside>
// 📌 요구사항에 추가적으로 작용하는 제한사항입니다. 제한사항에 맞게 구현을 해야해서 꼭 읽어야 하지만, 문제를 풀어가는데 있어 힌트로 작용하는 내용도 많습니다.

// </aside>

// - absolutes의 길이는 1 이상 1,000 이하입니다.
//     - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// - signs의 길이는 absolutes의 길이와 같습니다.
//     - `signs[i]` 가 참이면 `absolutes[i]` 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
    

// ### 입출력 예

// <aside>
// 📌 우리가 작성할 solution 함수의 실제 input과 올바른 output의 명세 입니다.

// </aside>


function solution(absolutes, signs) {
    let answer = 0;
		// 두 배열 길이 같음
    for (let i = 0; i < absolutes.length; i++) {
				// 부호에 따라 +-
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}
