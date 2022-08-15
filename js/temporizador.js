 let tiempoSegundos = prompt('Ingresar segundos a contar');
let mins= document.getElementById('minutos');
let secs= document.getElementById('segundos');
const tiempoH = document.querySelector("h1");
let btnempezar= document.getElementById('btnInicio')
let btnparar= document.getElementById('btnPausar')
let btnresetear= document.getElementById('btnReset')
let contador=0
evento();



function displayTime(segundos) {
  const min = Math.floor(segundos / 60);
  const sec = Math.floor(segundos % 60);
  tiempoH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function terminarContador() {
  tiempoH.innerHTML = "Tiempo terminado";
}

function evento(){
    btnempezar.addEventListener('click', empezar);
    btnparar.addEventListener('click', parar);
    btnresetear.addEventListener('click', resetear);
    }

    function empezar(){
        contador = setInterval(() => {
            tiempoSegundos--;
            displayTime(tiempoSegundos);
            if (tiempoSegundos == 0 || tiempoSegundos < 1) {
              terminarContador();
              clearInterval(contador);
            }
          }, 1000);
    }

    function parar(){
        clearInterval(contador);
    }

    function resetear(){
        clearInterval(contador);
        tiempoH.innerHTML='00:00';
    }
