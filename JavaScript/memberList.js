function moveToGit(){ //git 이동하는 함수 
   location.href="https://github.com/Jin-bright";
}

function moveToInsta(){ //insta로 이동하는 함수 
   location.href="https://www.instagram.com/glowxx_x/";
}



// 비밀번호/비밀번호 체크 일치여부 검사


const guestbooks = JSON.parse ( localStorage.getItem('guestbooks')) || []; 

const renderGuestbook = (guestbooks = JSON.parse(localStorage.getItem('guestbooks'))) => { 
   const tbody = document.querySelector("#tbl-guestbook tbody");
   tbody.innerHTML = ""; // 기존 코드 초기화

   //optional chaining ?. 앞의 변수가 unde~/null일때도 오류가 나지 않는다 
   //   guestbooks?.reverse(); //만약 역순으로 보이고싶다면? 

   if(guestbooks){
       guestbooks.forEach( ({id, realname, pw, datetime}, index) => {
           const newdate =  newdatefmt(datetime);
           tbody.innerHTML +=
           `<tr> 
               <td>${index+1}</td>    
               <td>${id} </td>
               <td>${realname}</td>
               <td>${newdate}</td>
           </tr>`;
       });
   }
   else{
       tbody.innerHTML=`
       <tr> 
           <td colspan=4>가입된 회원이 없습니다.</td>
       </tr>` 
   }
}

const newdatefmt = (datetime) => { 
   const f = (n) => n>=10 ?  n : "0"+n;
   
   let date = new Date(datetime);
   let y = f(date.getFullYear());
   let m = f(date.getMonth()+1);
   let d = f(date.getDate());
   let h = f(date.getHours());
   let mm = f(date.getMinutes());
   let s = f(date.getSeconds());
   return `${y}년 ${m}월 ${d}일 ${h}시 ${mm}분 ${s}초`;
}

renderGuestbook(guestbooks); 

