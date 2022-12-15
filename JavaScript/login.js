
function moveToGit(){ //git 이동하는 함수 
    location.href="https://github.com/Jin-bright";
 }
 
 function moveToInsta(){ //insta로 이동하는 함수 
    location.href="https://www.instagram.com/glowxx_x/";
 }




document.join.onsubmit = function() {

   
   const guestbooks = JSON.parse ( localStorage.getItem('guestbooks')) ;
   const idVal = document.querySelector("#id");
   
   //console.log( "왜안나와" + guestbooks[0].id == idVal.value )

   if( idVal.value == 'gkgk' && pw.value=='123q!'){
      alert('환영합니다 회원님 :) ')
      location.href = "introduce.html"   

   }
   else{
      alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
      idVal.value = "";
      pw.value="";
      return;
   }
}


/*
function idTest() {
   const guestbooks = JSON.parse ( localStorage.getItem('guestbooks'));
   const idVal = document.querySelector("#id");

 
   for(let i=0; i<guestbooks.length; i++){
      if( (guestbooks[i].id != idVal.value)){
         console.log( guestbooks[i].id  )
      }
   }
   alert("일치하는 아이디가 없습니다.");
   return;
}

function pwTest(){  
   const pwVal = document.querySelector("#pw");
   const guestbooks = JSON.parse ( localStorage.getItem('guestbooks'));

   for(let i=0; i<guestbooks.length; i++){
      if( (guestbooks[i].pw != pwVal.value)){
         console.log(document.querySelector("#id").value );
      } 
      alert("비밀번호가 일치하지 않습니다.");
      return;
   }
}

// document.join.onsubmit = renderGuestbook(guestbooks); 
*/
