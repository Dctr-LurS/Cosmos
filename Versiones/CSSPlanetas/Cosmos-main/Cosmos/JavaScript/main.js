const video = document.querySelector('.video-background');
let contenidoV = false;
let mContenido = document.getElementById("cu-oculto"); 
let carousel = document.querySelector('.conector-carrusel');
let carouselItems = document.querySelectorAll('.imagen-carrusel');
let currentIndex = 0;
let totalItems = carouselItems.length;

function showItem(index) {
  if (index >= 0 && index < totalItems) {
    carousel.style.transform = 'translateX(-' + (index * 100) + '%)';
    currentIndex = index;
  }
}

setInterval(function() {
  var nextIndex = (currentIndex + 1) % totalItems;
  showItem(nextIndex);
}, 3000);

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