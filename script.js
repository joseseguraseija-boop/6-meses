const canciones = [

"Labios de Cereza 2 T3R Elemento.mp3",
"Adoro Bronco.mp3",
"10 Razones Para Amarte Martin elias.mp3",
"Una vida para recordar.mp3"
];

const nombresCanciones = [

"Labios de Cereza 2",
"Adoro",
"10 Razones Para Amarte",
"Una vida para recordar"
];

const clave = "13/12/2025";

const audio =
document.getElementById("audio");

function verificarClave(){

const valor =
document.getElementById("password").value;

if(valor === clave){

document.getElementById("login").style.display="none";

document.getElementById("contenido").style.display="block";

audio.play();

}else{

document.getElementById("error").innerHTML =
"❌ Contraseña incorrecta";
}
}

/* CONTADOR */

const fechaInicio =
new Date("2025-12-13");

function actualizarContador(){

const hoy = new Date();

const diferencia =
hoy - fechaInicio;

const dias =
Math.floor(
diferencia / (1000*60*60*24)
);

document.getElementById("contador")
.innerHTML =
`${dias} días juntos ❤️`;

}

setInterval(
actualizarContador,
1000
);

actualizarContador();

/* FRASES */

const frases = [

"Desde Colombia te digo que el amor verdadero se construye cada día ❤️",

"Dicen en México que cuando el corazón elige, no existe distancia 🌹",

"Tu sonrisa es mi lugar favorito 💕",

"Si volviera a nacer volvería a elegirte ❤️",

"Contigo seis meses parecen una vida entera ✨"

];

let indice = 0;

function cambiarFrase(){

document.getElementById("frase")
.innerHTML =
frases[indice];

indice++;

if(indice >= frases.length){
indice = 0;
}

}

setInterval(
cambiarFrase,
5000
);

cambiarFrase();

/* CORAZONES */

function crearCorazon(){

const corazon =
document.createElement("div");

corazon.classList.add("corazon");

corazon.innerHTML = "💖";

corazon.style.left =
Math.random()*100+"vw";

corazon.style.fontSize =
(Math.random()*20+15)+"px";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},8000);

}

setInterval(
crearCorazon,
500
);

let indiceCancion = 0;

function playPause(){

if(audio.paused){

audio.play();

document.getElementById("playBtn").innerHTML="⏸";

}else{

audio.pause();

document.getElementById("playBtn").innerHTML="▶";

}

}

function siguienteCancion(){

indiceCancion++;

if(indiceCancion >= canciones.length){

indiceCancion = 0;

}

audio.src = canciones[indiceCancion];

document.getElementById("nombreCancion").textContent =
nombresCanciones[indiceCancion];

audio.play();

}


function anteriorCancion(){

indiceCancion--;

if(indiceCancion < 0){

indiceCancion = canciones.length - 1;

}

audio.src = canciones[indiceCancion];

document.getElementById("nombreCancion").textContent =
nombresCanciones[indiceCancion];

audio.play();

}


audio.addEventListener("timeupdate",()=>{

const barra =
document.getElementById("barra");

barra.value =
(audio.currentTime/audio.duration)*100;

});

document.getElementById("barra")
.addEventListener("input",(e)=>{

audio.currentTime =
(e.target.value/100)*audio.duration;

});

document.getElementById("nombreCancion").textContent =
nombresCanciones[0];


const paginas = [

{
titulo:"Capítulo 1",
texto:"Te conoci un dia de febrero, para ser exactos un 2 de febrero creo, si no estoy mal, estaba juegando free fire y te vi ahi en isla social, te hable y desde entoces nos empezamos hablar todos los dias hasta llegar al punto de enamorarnos y no poder vivir sin nosotros."
},

{
titulo:"Capítulo 2",
texto:"Nuestras primeras conversaciones, aun las recuerdo como si no hubiera pasado mucho, te enseñaba cosas de aca, te hablaba de cosas que aja, pero sobre todo se notaba la conexion que teniamos, desde ya se notaba la union, las cosas en comun, todo lo que amo de ti ahora mi amor."
},

{
titulo:"Capítulo 3",
texto:"Me empece a enomorar de ti para serte sincero al verte, al saber como eras en realiad, ya que no me habias dejado conocerte bien, luego me fui enamorando mas de ti al hacer todo contigo y hoy en dia eres la unica persona con la que quisiera hacer todo, pronto se que lo haremos mi amor, mientras soy paciente, se que cuando llegue ese dia sera especial y lo vamos a disfrutar mucho mi amor."
},

{
titulo:"Capítulo 4",
texto:"Y asi llegaron nuestros primeros 6 meses mi amor, desde aquel 13 de diciembre los dias son mas bonitos, que hemos tenido tropiezos si, pero los superamos juntos todos los obtaculos amor le agradezco a Dios por haberte puesto en mi camino, y todo lo que pasa es porque Dios lo quiere, y se que no te ha cruzado en mi camino porque si, no me canso de quererte y de quererte, y por eso siempre vas a estar conmigo, hasta el fin. Estoy enamorao tragao de ti mi amor TE AMO MUCHO CAMILA MENDOZA GARCIA MI AMOR, TI AMU MUTO ASHI COMO TE GUTA QUE TE LO DIGA😘🥰💞."
}

];

let paginaActual = 0;

function mostrarPagina(){

document.getElementById("paginaLibro")
.innerHTML =

`
<h3>${paginas[paginaActual].titulo}</h3>
<p>${paginas[paginaActual].texto}</p>
`;

}

function paginaSiguiente(){

paginaActual++;

if(paginaActual >= paginas.length){

paginaActual = 0;

}

mostrarPagina();

}

function paginaAnterior(){

paginaActual--;

if(paginaActual < 0){

paginaActual =
paginas.length - 1;

}

mostrarPagina();

}

mostrarPagina();

audio.addEventListener("ended", () => {

siguienteCancion();

});
