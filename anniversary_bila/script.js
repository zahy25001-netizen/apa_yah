const loader = document.getElementById("loader");
const giftBtn = document.getElementById("giftBtn");
const bouquetStage = document.getElementById("bouquetStage");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
const toast = document.getElementById("toast");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 800);
  }, 900);
  makeSparkles();
});

giftBtn.addEventListener("click", () => {
  bouquetStage.classList.add("show");
  bouquetStage.setAttribute("aria-hidden", "false");
  giftBtn.innerHTML = '<span class="btn-flower">✿</span> hadiah terbuka ♡';
  giftBtn.disabled = true;
  giftBtn.style.opacity = ".65";
  burstPetals(45);
  setTimeout(() => bouquetStage.scrollIntoView({behavior:"smooth", block:"center"}), 250);
});

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicBtn.innerHTML = "❚❚ <span>pause</span>";
    } else {
      music.pause();
      musicBtn.innerHTML = "♪ <span>music</span>";
    }
  } catch {
    showToast();
  }
});

function showToast(){
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function burstPetals(amount){
  const box = document.querySelector(".petals");
  for(let i=0;i<amount;i++){
    const el = document.createElement("span");
    el.className = "petal";
    el.textContent = Math.random() > .35 ? "✿" : "♡";
    el.style.left = Math.random()*100 + "vw";
    el.style.fontSize = (10 + Math.random()*18) + "px";
    el.style.animationDuration = (3 + Math.random()*5) + "s";
    el.style.animationDelay = (Math.random()*1.2) + "s";
    box.appendChild(el);
    setTimeout(()=>el.remove(),9000);
  }
}
function makeSparkles(){
  const box = document.querySelector(".sparkles");
  for(let i=0;i<28;i++){
    const s=document.createElement("i");
    s.className="sparkle";
    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*100+"%";
    s.style.animationDelay=Math.random()*2+"s";
    box.appendChild(s);
  }
}
setInterval(()=> {
  if (Math.random() > .45) burstPetals(1);
}, 1800);
