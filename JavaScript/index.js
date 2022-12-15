function moveToGit(){ //git 이동하는 함수 
    location.href="https://github.com/Jin-bright";
}

function moveToInsta(){ //insta로 이동하는 함수 
    location.href="https://www.instagram.com/glowxx_x/";
}

const content = "MAKE \n YOUR LIFE  "; // MAKE YOUR LIFE 나타나는 효과 
// const text = document.querySelector("#maintitle");
let i = 0;

function typing(){ // 글자 반복 
    let txt = content[i++]; //글자수 
    maintitle.innerHTML += txt=== "\n" ? "<br/>": txt;  // 삼항연산자 
    if (i > content.length) {
        maintitle.textContent = "";  // 초기화 
        i = 0; 
    }
}
setInterval(typing, 260)