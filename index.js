//jshint esversion:6
const menuToggle= document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

showcase.addEventListener('click', ()=>{
  showcase.classList.toggle("active");
});

menuToggle.addEventListener('click', ()=>{
  if(menuToggle.innerText === 'MENU'){
    menuToggle.innerText = "MENU>";
  }else {
    menuToggle.innerText = "MENU";
  }

});
