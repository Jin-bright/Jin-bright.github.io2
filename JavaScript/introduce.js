function moveToGit(){ //git 이동하는 함수 
    location.href="https://github.com/Jin-bright";
}

function moveToInsta(){ //insta로 이동하는 함수 
    location.href="https://www.instagram.com/glowxx_x/";
}

const content = " 안녕하세요! 홈페이지 제작자 김혜진입니다 "; // 인사말 나타나는 효과 
// const text = document.querySelector("#firstcom");

let i = 0;
function typing(){ // 글자 한자한자 써짐 
    let txt = content[i++];
    firstcom.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        firstcom.textContent = "";
        i = 0;
    }
}
setInterval(typing, 220);



 $(document).ready(function () { // 기본정보 토글효과 
     $(".basicInfoBox").click((e)=>{
        $(e.target).next()
                .slideToggle();
    })

});


function toDown(){ // 스크롤 효과 ( to down )
    const location = document.querySelector("#copyright").offsetTop;
   //console.log( "값" :"  + location )
    window.scrollTo({top:location, behavior:'smooth'});
}

