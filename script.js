let text = document.getElementById('text');
function change(){
   if(window.pageYOffset > 500) {
     document.body.style.backgroundImage = "url('./image/img.png')";
     document.body.style.color = 'white';
   }else{
    document.body.style.background = 'white';
    document.body.style.color = 'black';
   };
}
window.addEventListener('scroll' , change);