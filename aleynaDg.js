const BOX = document.getElementById('toChanged');
const BUTTON = document.getElementById('buttonSec');

BUTTON.addEventListener('click', function(){window.open('https://jovial-jones-8f81c8.netlify.app');},false);
BOX.addEventListener('click', changeImage, false);
 function changeImage(e){
   e.preventDefault();
  if(BOX.src = 'happy.png'){
    BOX.src='imgAleyna.png';
    BOX.style.transform= 'rotate(90deg)';
    BOX.style.width= '500px';
    BOX.style.height= '700px';
    BOX.style.left= '600px';
    BOX.style.top= '50px';

  }
 }
