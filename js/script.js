var records = ["سورة الكهف.mp3", "سورة مريم.mp3", "سورة البقرة.mp3"];
var poster = [ "img/elkahf.jpg", "img/quran.jpg", "img/qurr.jpg"];
var quranTitle = document.getElementById('quranTitle');
var fillBar = document.getElementById('fill');

var quran = new Audio();
var currentQuran = 0;
window.load = playSong();

function playSong() {
    quran.src = records[currentQuran];
    quranTitle.textContent = records[currentQuran];
    quran.play();
}

function playOrPauseSong() {
    if (quran.paused) {
        quran.play();
        $("#play img").attr("src", "Pause.png");
    } else {
        quran.pause();
        $("#play img").attr("src", "Play.png");
    }
}
quran.addEventListener('timeupdate', function () {

    var position = quran.currentTime / quran.duration;
    fillBar.style.width = position * 100 + "%";
});
function next(){
    currentQuran ++;
    if(currentQuran > 2){
        currentQuran = 0;
    }
    playSong();
    $('#play img').attr("src","Pause.png");
    $('#image img').attr("src",poster[currentQuran]);
    $('#bg img').attr("src",poster[currentQuran]);

}
function pre(){
    currentQuran --;
    if(currentQuran < 0 ){
        currentQuran = 2;
    }
    playSong();
    $('#play img').attr("src","Pause.png");
    $('#image img').attr("src",poster[currentQuran]);
    $('#bg img').attr("src",poster[currentQuran]);

}
var typed = new Typed('.text', {
	strings: [
	  "Quran Player",
	  "Listen To Quran OnLine"
	],
	stringsElement: null,
	// typing speed
	typeSpeed: 30,
	// time before typing starts
	startDelay: 1200,
	// backspacing speed
	backSpeed: 40,
	// time before backspacing
	backDelay: 500,
	loop: true
  });
  