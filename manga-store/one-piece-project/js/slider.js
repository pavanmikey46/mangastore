let slides=[
 "images/slider/1.jpg",
 "images/slider/2.jpg",
 "images/slider/3.jpg"
];

let i=0;
const img=document.getElementById("slide");

function next(){
 i=(i+1)%slides.length;
 img.src=slides[i];
}

function prev(){
 i=(i-1+slides.length)%slides.length;
 img.src=slides[i];
}

setInterval(next,4000);
