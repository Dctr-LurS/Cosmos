const video = document.querySelector('.video-background');
let contenidoV = false;
let mContenido = document.getElementById("cu-oculto"); 

function mostrarContenido(){
    if(contenidoV){
      mContenido.style.height="1vw";
      mContenido.classList.remove("mostrar");
      contenidoV = false;
    } else {
      mContenido.style.height="auto";
      mContenido.classList.add("mostrar");
      contenidoV = true;
    }
}

video.addEventListener('ended', function() {
  video.style.opacity = 0;
  setTimeout(function() {
    video.style.opacity = 1;
    video.play();
  }, 375);
});
