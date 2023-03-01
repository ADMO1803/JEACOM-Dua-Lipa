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