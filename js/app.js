const votacion= new encuesta();
const divResultados= document.getElementById('resultados');


function EventListener(){
    document.getElementById('inicio').addEventListener('click',obtenerpreg)
    document.getElementById('btnAF').addEventListener('click',sumaAF)
    document.getElementById('btnEC').addEventListener('click',sumaEC)
    document.getElementById('btnAB').addEventListener('click',sumaAB)
    
    document.getElementById('Terminar').addEventListener('click', verresultados);
}

EventListener();

function sumaAF(){
    votacion.votoAF++;
}

function sumaEC(){
    votacion.votoEC++;
}

function sumaAB(){
    votacion.votoAB++;
}

function obtenerpreg(){
    var titulovot= document.getElementById('Preg').value;
    votacion.pregunta=titulovot;
    document.getElementById('preguntaUS').innerHTML=titulovot;
}

function verresultados() {
    let respuestas= votacion.Verrespuesta(votacion.votoAF,votacion.votoEC,votacion.votoAB,votacion.pregunta);
    divResultados.appendChild(respuestas);
}