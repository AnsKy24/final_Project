const checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
  var darkModenav= document.getElementById('nav');
  var darkModefoot= document.getElementById('foot');
  var darkModecard1= document.getElementById('card1');
  var darkModecard2= document.getElementById('card2');
  var darkModecard3= document.getElementById('card3');
  darkModefoot.classList.toggle('bg-dark')
  darkModenav.classList.toggle('bg-dark')
  darkModenav.classList.toggle('navbar-dark')
  darkModecard1.classList.toggle('dark-card')
  darkModecard2.classList.toggle('dark-card')
  darkModecard3.classList.toggle('dark-card')
})