//INICIAR ANIMATE BOOTSTRAP
  AOS.init();
//HEADER SCROLL
window.addEventListener("scroll", function() {
	// body...
	var header = document.querySelector("header");
	header.classList.toggle("abajo", window.scrollY>0);
})

/*MODO DARK*/
const body = document.querySelector('body')
  toggle = document.querySelector('.toggle')

  let getMode = localStorage.getItem("mode");
     if (getMode && getMode === "dark") {
     	body.classList.add("dark");
     	toggle.classList.add("active");
     }

  toggle.addEventListener("click", () =>{
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
       return localStorage.setItem("mode", "light");
  }
       localStorage.setItem("mode", "dark");

  })

toggle.addEventListener("click", () => toggle.classList.toggle('active'))
/*MODO DARK*/

/*GALERIA*/

const imgcaja = document.getElementById("imgcaja"),
todoimg = document.getElementById("todoimg");

function openTodoImg(referenc) {
	// body...
	imgcaja.style.display = "flex";
	todoimg.src = referenc;
}

function closeImg() {
	// body...
	imgcaja.style.display = "none";
}

/*GALERIA*/

/*MENU*/

const menu = document.querySelector("#menu-icon");
const menunav = document.querySelector(".menu-nav");

menu.addEventListener("click", ()=>{
	menunav.classList.toggle("active")
})

menunav.addEventListener("click", ()=>{
	menunav.classList.remove("active")
})

/*MENU*/

























