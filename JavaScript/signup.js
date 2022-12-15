function moveToGit(){ //git 이동하는 함수 
   location.href="https://github.com/Jin-bright";
}

function moveToInsta(){ //insta로 이동하는 함수 
   location.href="https://www.instagram.com/glowxx_x/";
}

// 비밀번호/비밀번호 체크 일치여부 검사


document.join.onsubmit = function () {
   document.querySelector("#pwcheck").onblur = isEqualPwd; 

   console.log( '유효성 검사 시작 ')
const userId = document.getElementById("id"); 
const pw = document.getElementById("pw");
const pwcheck_pw = document.getElementById("pwcheck");
const userName = document.getElementById("realname");

// const tel1 = document.getElementById("tel1");
const tel2 = document.getElementById("mobile2");
const tel3 = document.getElementById("mobile3");

//1.아이디검사 - 아이디의 길이는 4~12글자사이의 영어소문자+숫자만 가능 
const regExp1 = /^[a-z\d]{4,12}$/;
if(!regExpTest(regExp1
               ,userId
               ,"아이디는 영소문자와 숫자로 구성된 4~12글자여야 합니다."))
      return false; // submit핸들러 기본 작동(submit)을 방지


//2.비밀번호 - 숫자/문자/특수문자 포함 형태의 4~15자리 이내
//전체길이검사 /^.{8,15}$/
//숫자하나 반드시 포함 /\d/
//영문자 반드시 포함 /[a-zA-Z]/
//특수문자 반드시 포함  /[\\*!&]/

const regExpArr = [/^.{4,15}$/, /\d/, /[a-zA-Z]/, /[\\*!&]/];

for (let i = 0; i < regExpArr.length; i++) {
   if (
      !regExpTest(
      regExpArr[i],
      pw,
      "비밀번호는 총 4~15자리로, 숫자/문자/특수문자를 1자 이상씩 포함해야합니다."
      )
   ) {
      return false;
   }
}

//비밀번호일치여부
if (!isEqualPwd()) {
   return false;
}

//3.이름 - 한글2글자 이상만 허용.
const regExp3 = /^[가-힣]{2,}$/;
if (!regExpTest(regExp3, userName, "한글2글자이상 입력하세요."))
   return false;



//4. 전화번호 검사
//  두번째 자리는 3~4자리 숫자, 세번째 자리는 4자리 숫자
// if (!regExpTest(/^0\d{1,2}$/, tel1, "번호 2자리 이상 입력")) 
//   return false;
if (!regExpTest(/^[0-9]{3,4}$/, tel2, "번호 3자리 이상 입력 필수"))
   return false;
if (!regExpTest(/^[0-9]{4}$/, tel3, "4자리 번호 입력 필수"))
   return false;

alert('회원가입 성공');
return true;
};

function isEqualPwd() {
if (pw.value === pwcheck.value) {
   return true;
} else {
   alert("비밀번호가 일치하지 않습니다.");
   pw.select();
   return false;
}
}

function regExpTest(regExp, el, msg) { // 중복제거 목적 함수 
if (regExp.test(el.value)) return true;
//적합한 문자열이 아닌 경우
alert(msg);
el.value = "";
el.focus();
return false;
}




class Guestbook{
   constructor(id, realname, pw, datetime=Date.now() ){
       this.id = id;
       this.realname = realname;
       this.pw = pw;
       this.datetime = datetime;
       
   }
       
}



const saveGuestbook = () => {
console.log("saveGuestbook 시작 !");
//1. guestbook 객체 만들기 
const guestbook = new Guestbook(id.value, realname.value, pw.value);
console.log(guestbook);
//2. 배열에추가 
const guestbooks = JSON.parse ( localStorage.getItem('guestbooks')) || []; 
//or연산자의 특징 좌항이 false면 우항 검사 ! 앞에꺼가 null 또는 undefined면 오른쪽꺼 대입 하게 됨 

guestbooks.push(guestbook);
console.log( guestbooks )

//3.localStorage에 저장
localStorage.setItem('guestbooks',JSON.stringify(guestbooks));

//4. 초기화 
document.join.reset();

// 5. 렌더링 
// renderGuestbook(guestbooks); 

};

