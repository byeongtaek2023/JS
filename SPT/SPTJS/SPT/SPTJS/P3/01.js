데이터 타입 
1 . 기본형 
Number,String,Boolean,null,undefined,Symbol

2. 참조형
Object - > Array, Function, Date, RegExp, Map, WeakMap, self, WeakSet

기본형 vs 참조형 나누는 방법
값의 저장 방식과 불변성 여부

1. 복제의 방식 
a 기본형 값이 담긴 주소값을 바로 복제
b 참조형 갑시 담긴 주소값들로 이루어진 묶음을
가리키는 주소값을 복제

불변성의 여부 
a 기본형 불변성을 띔
b 참조형 불변성을 띄지 않음  

메모리와 데이터에 관한 배경지식
1. 메모리, 데이트
a 비트
- 컴퓨터가 이해할 수 있는 가장 작은 단위 
- 0과 1을 가지고 있는 메모리를 구성하기 위한 작은 조각

b 바이트 
- 0과 1만 표현하는 비트를 모두 찾기는 부담 
- 1개 -> 2개 ... 8개 (새로운 단위 : byte)

c. 메모리 : byte 단위로 구성 
- 모든 데이터는 byte 단위의 식별자인 메모리 주소값을 통해서 서로 구분이 됩니다.
 
d. java, c와 / 다른 javascript의 메모리 관리 방식 ( feat. 정수형)
- 8을 저장하는 방법
1. js : let a = 8 (8byte)
2.java
a. byte a = 8 (1byte)
b. short a = 8(2byte)
c. int a = 8 (4byte)
d. long a = 8 (16byte)

2. 식별자, 변수 
a var testValue(식별자) = 3(변수)
b 변수 = 데이터
c 식별자 = 변수명 