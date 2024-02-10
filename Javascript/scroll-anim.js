
// Adds an event to listen to scroll, executes reveal function when scroll.
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;

    // Reveal offset, when scroll reaches certain point
    var revealpoint = 180;

    if(revealtop < windowheight - revealpoint){

      // adds active class to play anim.
      reveals[i].classList.add('active');
    }
    else{
      // removes active class to stop anim.
      reveals[i].classList.remove('active');
    }
  }

  
}