
    function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  
    const text = document.querySelector(`.text[data-key="${e.keyCode}"`);
    
    if (!audio) return;
    audio.currenTime = 0;
    
    audio.play();
    text.classList.add('playing');                         
    }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const text = document.querySelectorAll('.text');
  text.forEach (text => text.addEventListener ('transitionend', removeTransition));
  
  var clap = document.getElementById("clap");
  clap.onmousedown = function (){
  clapaudio.play();

  clap.classList.add('playing');
   };
  
clap.onmouseup = function () {
  clap.classList.remove('playing'); 
};
  


var hithat = document.getElementById("hithat");
hithat.onmousedown = function (){
  hithataudio.play();
hithat.classList.add('playing');
   };
  
hithat.onmouseup = function () {
  hithat.classList.remove('playing'); 
};

var kick = document.getElementById("kick");
kick.onmousedown = function (){
  kickaudio.play();
kick.classList.add('playing');
   };
  
kick.onmouseup = function () {
  kick.classList.remove('playing'); 
};

var openhat = document.getElementById("openhat");
openhat.onmousedown = function (){
  openhataudio.play();
openhat.classList.add('playing');
   };
  
openhat.onmouseup = function () {
  openhat.classList.remove('playing'); 
};

var boom = document.getElementById("boom");
boom.onmousedown = function (){
 boomaudio.play();
boom.classList.add('playing');
   };
  
boom.onmouseup = function () {
  boom.classList.remove('playing'); 
};

var ride = document.getElementById("ride");
ride.onmousedown = function (){
  rideaudio.play();
ride.classList.add('playing');
   };
  
ride.onmouseup = function () {
  ride.classList.remove('playing'); 
};

var snare = document.getElementById("snare");
snare.onmousedown = function (){
  snareaudio.play();
snare.classList.add('playing');
   };
  
snare.onmouseup = function () {
  snare.classList.remove('playing'); 
};

var tom = document.getElementById("tom");
tom.onmousedown = function (){
  tomaudio.play();
tom.classList.add('playing');
   };
  
tom.onmouseup = function () {
  tom.classList.remove('playing'); 
};

var tink = document.getElementById("tink");
tink.onmousedown = function (){
  tinkaudio.play();
tink.classList.add('playing');
   };
  
tink.onmouseup = function () {
  tink.classList.remove('playing'); 
};

window.addEventListener ('keydown', playSound);