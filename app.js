// window.onload = function() {
  // let alert=document.querySelector('alert');
  // alert.style.display='none';
// };

//declarando variables
let form = document.getElementById('form');
let inputs = document.querySelectorAll('#form input');


//envio de datos con boton send (tipo submit)
form.addEventListener('submit', (e)=>{
  e.preventDefault();
});
