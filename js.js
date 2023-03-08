/*=====Schimabre culoare Nav-Bar=====*/
window.addEventListener('scroll', function change(){
    let navbar = document.getElementById("nav-bar");
    if(window.scrollY >= 655){
      navbar.classList.remove("headerColorOut");
      navbar.classList.add("headerColorOn");
    }else if(window.scrollY < 655){
      navbar.classList.remove("headerColorOn");
      navbar.classList.add("headerColorOut");
    }
  });
/*=====Deschiderea NavBar Hamburger=====*/
let i=1;
function openHumburger(){
  let humburger = document.getElementById("humburger-nav");
  if(i==1){
    humburger.classList.add("activare");
    i=2;
  }else if(i==2){
    humburger.classList.remove("activare");
    i=1;
  }
}