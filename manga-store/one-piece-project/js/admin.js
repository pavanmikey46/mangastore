let shop = JSON.parse(localStorage.getItem("adminShop")) || [];
let manga = JSON.parse(localStorage.getItem("adminManga")) || [];

/* SHOP CRUD */
function addShop(){
  shop.push({
    name: sname.value,
    price: sprice.value,
    img: simg.value
  });
  localStorage.setItem("adminShop", JSON.stringify(shop));
  loadShop();
}

function delShop(i){
  shop.splice(i,1);
  localStorage.setItem("adminShop", JSON.stringify(shop));
  loadShop();
}

function loadShop(){
  shopList.innerHTML = "";
  shop.forEach((s,i)=>{
    shopList.innerHTML += `
      <div class="item">
        <span>${s.name}</span>
        <button onclick="delShop(${i})">X</button>
      </div>`;
  });
}

/* MANGA CRUD */
function addManga(){
  manga.push({
    name: mname.value,
    img: mimg.value
  });
  localStorage.setItem("adminManga", JSON.stringify(manga));
  loadManga();
}

function delManga(i){
  manga.splice(i,1);
  localStorage.setItem("adminManga", JSON.stringify(manga));
  loadManga();
}

function loadManga(){
  mangaList.innerHTML = "";
  manga.forEach((m,i)=>{
    mangaList.innerHTML += `
      <div class="item">
        <span>${m.name}</span>
        <button onclick="delManga(${i})">X</button>
      </div>`;
  });
}

loadShop();
loadManga();
