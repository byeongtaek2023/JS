변수 선언과 데이터 할당 (기본형데이터)
선언과 할당을 풀어 쓴 방식
var str;
str = 'test!';

선언과 할당을 붙여 쓴 방식
var str = 'test!';

주소    변수     1002   1003   1004  ...
데이터 메모리    5002   5003   5004  ...

갈아끼우고 쓸모 없어진 부분 js가비지 컬렉터가 수거하고 댕김 


값을 바로 변수에 대입하지 않는 이유 (= 무조건 새로 만드는 이유)
a. 자유로운 데이터 변환
숫자는 8byte로 고정 문자는 고정 아님 영문 1byte, 한글 2byte

b. 메모리의 효율적 관리 
- 똑같은 데이터를 1만번 저장해야 한다면?
바로 대입하면 8만 
분할 하면 2만 

기본형 데이터와 참조형 데이터
1. 메모리를 기준으로 다시한번 생각해보는 두 가지 주요 개념
a 변수 vs 상수
변수 : 변수 영역 메모리를 변경할 수 있음
상수 : 변수 영역 메모리를 변경할 수 없음

b 불변하다  vs 불변하지 않다
불변하다 : 데이터 영역 메모리를 변경할 수 없음
가변하다  : 데이터 영역 메모리를 변경 할 수 있음  


