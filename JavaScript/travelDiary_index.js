
function moveToGit(){ //git 이동하는 함수 
   location.href="https://github.com/Jin-bright";
}

function moveToInsta(){ //insta로 이동하는 함수 
   location.href="https://www.instagram.com/glowxx_x/";
}

window.addEventListener('DOMContentLoaded', function(){
   showImage();
});



function showImage(){
   const imgNum=Math.floor(Math.random()*20);
   const introImgs=document.getElementById("introimg");
   introImgs.src=imgArray[imgNum]; // src=""
   setTimeout(showImage,4000);
}

   let imgArray=new Array();
   imgArray[0]="./imagehome/meme/meme0.jpg";
   imgArray[1]="./imagehome/meme/meme1.jpg";
   imgArray[2]="./imagehome/meme/meme2.jpg";
   imgArray[3]="./imagehome/meme/meme3.jpg";
   imgArray[4]="./imagehome/meme/meme4.jpg";
   imgArray[5]="./imagehome/meme/meme5.jpg";
   imgArray[6]="./imagehome/meme/meme6.jpg";
   imgArray[7]="./imagehome/meme/meme7.jpg";
   imgArray[8]="./imagehome/meme/meme8.jpg";
   imgArray[9]="./imagehome/meme/meme9.jpg";
   imgArray[10]="./imagehome/meme/meme10.jpg";
   imgArray[11]="./imagehome/meme/meme11.jpg";
   imgArray[12]="./imagehome/meme/meme12.jpg";
   imgArray[13]="./imagehome/meme/meme13.jpg";
   imgArray[14]="./imagehome/meme/meme14.jpg";
   imgArray[15]="./imagehome/meme/meme15.jpg";
   imgArray[16]="./imagehome/meme/meme16.jpg";
   imgArray[17]="./imagehome/meme/meme17.jpg";
   imgArray[18]="./imagehome/meme/meme18.jpg";
   imgArray[19]="./imagehome/meme/meme19.jpg";
   imgArray[20]="./imagehome/meme/meme20.jpg";



   // 페이지 이동 

   function turkey(){ // 터키 
      location.href="0_turkey.html";
   }

   function china(){ // 중국
      location.href="5_china.html";
   }


   
   function thailand3(){ // 태국2022 
      location.href="08_thailand.html";
   }


   function leftmark(){ // 뒤로가기 
      location.href="travelDiary_index.html";
   }

   /* 08_bkk 변경되는 이미지 * */
   function showTkImage(){
      let imgNum=Math.floor(Math.random()*5);
      let objImg=document.getElementById("tkpics");
      objImg.src=tkimgArray[imgNum];
      setTimeout(showTkImage,3000);
   }


   window.addEventListener('DOMContentLoaded', function(){
      showTkImage();
   });

   
   let tkimgArray=new Array();
   tkimgArray[0]="./imagehome//카파도키아2.jpg";
   tkimgArray[1]="./imagehome/사프란볼루.jpg";
   tkimgArray[2]="./imagehome/탁심.jpg";
   tkimgArray[3]="./imagehome/이스탄불.jpg";
   tkimgArray[4]="./imagehome/보스포러스.jpeg";
