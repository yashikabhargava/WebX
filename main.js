const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');

})

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  },2000);
})
