# clone coding

✨ 주제 : 싸이월드
===========

내용
---

* 80-90년생의 추억의 사이트이자 SNS 라는 단어가 활용되기도 전 한국에서 가장 핫했던 커뮤니티 사이트를 클론코딩 하였습니다. 
* 추억의 사이트인 싸이월드를 클론코딩하면서 과거에 사용되었던 기능들과 새롭게 추가됬으면 좋았을 기능들을 추가해서 구현하는데 중점을 두었습니다.

---

😎 싸이월드를 제작한 자랑스러운 개발자들
---

👉 BE : 김성준, 김성현
<br>
👉 FE : 이윤, 구자덕

---
기능 구현
===

👉 이메일,패스워드,자신의 이름 혹은 닉네임을 작성해서 가입하고 활동을 시작합니다.

👉 비밀번호를 분실했을 시 가입했던 이메일로 인증번호를 전송해서 비밀번호를 초기화 하는 기능

👉 회원가입후 자신의 미니홈피를 만들수도있고, 다른이들의 미니홈피를 방문해서 볼 수 도 있습니다.

👉 자신의 미니홈피의 프로필사진, 소개글 등을 자유롭게 꾸밀 수 있습니다.

👉 자신의 미니홈피에 원하는 노래로 BGM 을 설정할 수 있습니다.

👉 와글와글 : 현재 싸이월드에 접속중인 유저들끼리 자유롭게 라이브 채팅을 할 수 있습니다.

---

🛠 tools
===
<!-- <img src="https://img.shields.io/badge/이름-색상코드?style=flat-square&logo=로고명&logoColor=로고색"/> -->


📌 BackEnd

<img src="https://img.shields.io/badge/javascript-333333?style=flat-square&logo=javascript&logoColor=yellow"/> <img src="https://img.shields.io/badge/mysql-3333ff?style=flat-square&logo=firebase&logoColor=white"/> 
<img src="https://img.shields.io/badge/express-666666?style=flat-square&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-33cc00?style=flat-square&logo=Node.js&logoColor=white"/>


<img src="https://img.shields.io/badge/NPM-33cc00?style=flat-square&logo=NPM.js&logoColor=red"/> <img src="https://img.shields.io/badge/JSON WEB TOKEN-333333?style=flat-square&logo=json web token&logoColor=white"/> <img src="https://img.shields.io/badge/AWS-ffcc33?style=flat-square&logo=AWS&logoColor=white"/> <img src="https://img.shields.io/badge/passport-00cc66?style=flat-square&logo=passport&logoColor=white"/>



📌 Front-end

<img src="https://img.shields.io/badge/javascript-333333?style=flat-square&logo=javascript&logoColor=yellow"/> <img src="https://img.shields.io/badge/HTML-ff3300?style=flat-square&logo=HTML&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-3366ff?style=flat-square&logo=CSS&logoColor=white"/>

<img src="https://img.shields.io/badge/react-33ffff?style=flat-square&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/REDUX-6600cc?style=flat-square&logo=REDUX&logoColor=white"/> <img src="https://img.shields.io/badge/REACT ROUTER-6600cc?style=flat-square&logo=REACT ROUTER&logoColor=white"/>



<br>

---


API 명세서
===

![uml 재료 1](https://user-images.githubusercontent.com/105336416/173999191-a791ed0b-65a4-4967-b91d-56c4af81c0a4.PNG)

![uml 재료 2](https://user-images.githubusercontent.com/105336416/173999295-489c46a7-1a57-4ab5-922a-a9c8af0dced0.PNG)


<!-- 
| 페이지 | 기능 | API URL | Method | request(가져갈 데이터)|response(서버로부터 받아올 데이터)|     
|:------:|:------:|:---:|:------:|:---:|:---:|
|홈|회원정보로 이동| x | x | x |x |
|회원정보|회원가입|/api/signup|/api/signup|email,password|token; result : [{""success"",nickname}] OR message: '이메일 또는 패스워드 확인해주세요'}"|
|회원정보|로그인|/api/login|POST|email,password|token; result : [{""success"",nickname}] OR message: '이메일 또는 패스워드 확인해주세요'|
|회원정보|중복검사 이메일|/api/duplicatesemail/:email|GET|email|Message: '사용 가능한 이메일 입니다' OR Message: '중복된 이메일 입니다' |
|회원정보|중복검사 닉네임|/api/duplicatesnick/:nickname|GET|nickname|Message: '사용 가능한 닉네임 입니다' OR Message: '중복된 닉네임 입니다' |
|메인|여행 게시물 조회|/api/travel|GET|x|boardId,title,image,nickname|
|메인|게시물 작성|/api/travels|x|title,image,content|boardId,title,image,content|
|메인|게시물 상세 조회|/api/travels/:boardId|GET|x|boardId,title,image,content,nickname|
|Detail|게시물 수정|/api/travels/:boardId|PATCH|"title,image,content|boardId,title,image,content|
|Detail|게시물 삭제|/api/travels/:boardId|DELETE|x|boardId| -->

---
---

💎BE 우리가 새롭게 도전한 기술들
===
1. router, Controller, Services 를 나눔으로써 의존성은 낮추고 응집도는 높게 구현

2. 해싱을 사용해서 사용자의 비밀번호가 DB에 암호화되서 저장되게끔 구현

3. .env로 환경변수 설정해서 중요한 키값을 환경변수로 처리하여 다른사람이 보지못하게 구현. 

4. swagger 를 사용하여 API 의 기능확인과 명세서 작성에서의 편의성 추가 

5. DB 를 기존에 사용하던 mongodb 가 아닌 MY SQL 을 사용 

6. MY SQL 을 사용할 때 다른 테이블의 키값을 가져오기 위해서 외래키를 사용

---

😥 BE: 개발하면서 어려웠던점
1. FE,BE통신 부분 에러

2. 기존 mongodb가아닌 mysql를 사용함으로써 새로운 databases를 사용한점

3. git pull,push를 하루단위가 아닌 며칠 단위로 합치니 합치는데 충돌 에러 발생 (너무많음;;)

4. API명세서를 확실하게 정하지 않으니 기능구현시 FE,BE 서로 계속 수정해야 하는 부분...

---


🤟 Trouble Shooting
(우리 팀이 해결한 문제 정리)


1. 이미지 파일을 multer를 사용해서 구현은 했으나 FE분들이랑 상의를 통해 multer를 사용하지 않고, 파이어베이스에 먼저 사진을 저장하고 URL을 데이터 베이스에 저장하게 했습니다.

2.  mysql을 auto increment를 사용하니 boardId 가 null값으로 나오는 부분에 대해 FE쪽에서 boardId를 필요로 해서 userCheck.boardId = userCheck['null']; userCheck에 대한 null 변수에 할당되어 있는 값을 boardId로 설정

3. 로그인


3-1. passport를 이용하여 SNS(카카오톡)로그인 기능 구현을 했으나 FE와 상의 후 사용하지 않음.

3-2 , FE 토큰 헤더가 Bearer로 서버로 전달하지 않음 => Bearer, token 을 split(''),으로 받지 않고 const { authorization } = req.headers; 받어서 FE로 response

3-3 . FE 요청으로 로그인시 닉네임 넘겨달라는 부분 =>
        user (email.passwoerd)확인 완료시 token만발행 => Board, User 외래키를 잡아(1:n), attributes: ['nickname', 'password', 'userId', 'email'], where: { email } =>
        사용하여 유저 정보 넘겨 받은뒤에 user.nickname을 token과 같이 response

3-4 . 암호화 : Bcrypt.hashSync(password, 10)                                             
복호화 : Bcrypt.compareSync(password, user.password) => 비밀번호 암호화한 값과 복호화한 값이 일치하지 않는 오류 발생


암호화 : const salt = await Bcrypt.genSalt();                                       
                      const pwhash = await Bcrypt.hash(password, salt);

복호화 : Bcrypt.compareSync(password, user.password) => 오류 해결       
 


