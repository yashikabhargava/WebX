const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');

})




function delayer() {
  setTimeout(downLoad, 3000)
}
function downLoad() {
  if (document.all) {
      document.all["preloader"].style.display = "none";
      document.all["layer2"].style.display = "block";
  } else if (document.getElementById) {
      node = document.getElementById("preloader").style.display = 'none';

      node = document.getElementById("layer2").style.visibility = 'visible';

  }
}
