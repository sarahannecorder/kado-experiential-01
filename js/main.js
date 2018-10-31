$('document').ready(function(){




// Animation-in on florals 


$('document').ready(function(){
	var animationend = 'webkitAnimationEnd mozAnimationEnd oanimationEnd MSAnimationEnd animationend';
	
	
	setTimeout(function(){ 
		$('img.resized').removeClass("slideInRight");

 }, 1000);

		setTimeout(function(){ 
		$('img.resized').removeClass("slideInDown");

 }, 1000);

		setTimeout(function(){ 
		$('img.resized').removeClass("slideInLeft");

 }, 1000);


		setTimeout(function(){ 
		$('img.resized').removeClass("slideInUp");

 }, 1000);




// Turn off animation-in on florals

	$('resized').addClass('animated fadeIn delay-3s').one(
		'animationend',
		function(){
			$(this).removeClass('animated fadeIn delay-3s');
		});
});



// Scroll Magic Tutorial by www.ihatetomatoes.com - animation 1
var controller = new ScrollMagic.Controller();


// build a sceme 
var ourScene = new ScrollMagic.Scene({
triggerElement: '.view-point',
triggerHook: 0.9,
reverse: true



})
.setClassToggle('.view-point', 'opacity-in') // add class to project*/

.addTo(controller);



// Scroll Magic Tutorial by www.ihatetomatoes.com - animation 2
var controller = new ScrollMagic.Controller();

// build a sceme 
var ourScene2 = new ScrollMagic.Scene({
triggerElement: '.kado-info',
triggerHook: 0.9,
reverse: false

})
.setClassToggle('.kado-info', 'opacity-in') // add class to project*/

.addTo(controller);

// Scroll Magic Tutorial by www.ihatetomatoes.com - animation 3
var controller = new ScrollMagic.Controller();

var ourScene3 = new ScrollMagic.Scene({
triggerElement: '.animated-text',
triggerHook: 0.9,
reverse: false
})
.setClassToggle('.animated-text', 'opacity-in') // add class to project*/

.addTo(controller);


// Scroll Magic Tutorial by www.ihatetomatoes.com - animation 4
var controller = new ScrollMagic.Controller();

var ourScene4 = new ScrollMagic.Scene({
triggerElement: '.text-sign-up',
triggerHook: 0.9,
reverse: false

})
.setClassToggle('.text-sign-up', 'opacity-in') // add class to project*/

.addTo(controller);



// Customised Plugin Completed form submitted alert
		// code based on alertify.js example


		function reset () {
			$("#toggleCSS").attr("href", "../themes/alertify.default.css");
			alertify.set({
				labels : {
					ok     : "OK",
					cancel : "Cancel"
				},
				delay : 5000,
				buttonReverse : false,
				buttonFocus   : "ok"
			});
		}

		
// Standard Dialogs
		$("#enroll").on( 'click', function () {
			reset();
			alertify.alert("Arigatou!\nThank you for signing up. We'll be in touch shortly.");
			return false;
		});







// Mobile/Tablet Nav

$('#toggle').on('click', function(){
	$('.nav-menu').toggle();
	$('.nav-menu').toggleClass('mobile');
});


// Home page CTA scroll to form and back 

$('a[href^="#"]:not(.lesson-button)').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

// Home page scroll-to events 

    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});


// Lesson Page - new text animate on click 

var lesson = 1;
	
$(".next-fadeout").click(function () {

	$("#lesson-"+ lesson).fadeOut(500);


	setTimeout(
		function(){
			$("#lesson-"+ (lesson+1)).fadeIn(500);
			lesson ++;
		},
		500
	);

	

	

});




var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;


function intializePlayer(){

	// set object referneces
	vid = document.getElementById('my-video');
	playbtn = document.getElementById('playpausebtn');
	seekslider = document.getElementById('seekslider');
	curtimetext = document.getElementById('curtimetext');
	durtimetext = document.getElementById('durtimetext');
	mutebtn = document.getElementById('mutebtn');
	volumeslider = document.getElementById('volumeslider');
	fullscreenbtn = document.getElementById('fullscreenbtn');

	// add event listeners
	playbtn.addEventListener('click', playPause, false);
	seekslider.addEventListener('change', vidSeek, false);
	vid.addEventListener('timeupdate', seektimeupdate, false);
	mutebtn.addEventListener('click', vidmute, false);
	volumeslider.addEventListener('change', setvolume, false);
	fullscreenbtn.addEventListener('click', toggleFullScreen, false);

}

window.onload = intializePlayer;


function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.innerHTML = 'Pause';

	}else {
		vid.pause();
		playbtn.style = 'fas fa-play';

	}
	
}


function vidSeek() {
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;

}

function seektimeupdate(){
	var nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.round(vid.duration - durmins * 60);
	if(cursecs < 10) {
		cursecs = '0'+cursecs;
	}
	if(dursecs < 10){
		dursec = '0'+dursecs;
	}
	if(curmins < 10) {
		curmins = '0'+curmins;
	}
	if(durmins < 10){
		durmins = '0'+durmins;
	}

	curtimetext.innerHTML = curmins+':'+cursecs;
	durtimetext.innerHTML = durmins+':'+dursecs;



}

function vidmute(){

	if(vid.muted){
		vid.muted = false;
		mutebtn.innerHTML = 'Mute';

	}else {
		vid.muted = true;
	mutebtn.innerHTML = 'Unmuted';

	}
	
}


function setvolume() {
	vid.volume = volumeslider.value / 100;



}

function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	}else if (vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	}else if (vid.mozRequestFullScreen){
		vid.mozkitRequestFullScreen();
		

	}
	
}
















































/* // code based on example supplied by W3 Schools

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}*/




















		