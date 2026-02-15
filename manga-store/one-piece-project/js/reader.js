const q = new URLSearchParams(location.search);
const ch = q.get("ch");
const start = parseInt(q.get("page") || 1);

title.innerText = "One Piece - Chapter " + ch;

for(let i=1;i<=20;i++){
  let img=document.createElement("img");
  img.src=`images/manga/onepiece/ch${ch}/${i}.jpg`;
  img.className="page";
  img.onload=()=>{
    localStorage.progress=JSON.stringify({ch,page:i});
  };
  pages.appendChild(img);

  if(i===start){
    setTimeout(()=>img.scrollIntoView(),300);
  }
}
