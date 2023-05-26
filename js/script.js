/*toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



/*Elementos marcados de la Navbar */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    /*Sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*Que se elimine el toggle icon y la navbar al clicar un link */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/**SCROLL REVEAL */
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form , .video', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*TEXTO MULTIPLE EN HOME */
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software Developer', 'UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*MUSICA */
function playSound() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

//2n sound
function playSound2(event) {
    event.preventDefault();
    var audio2 = document.getElementById("myAudio2");

    audio2.onended = function() {
        window.location.href = event.target.href;
    };

    audio2.play().catch(function(error) {
        console.log("Error al reproducir el sonido:", error);
        window.location.href = event.target.href;
    });
}


/*VIDEO INTERACTIVO */
var myvideo = document.getElementById('myvideo'),
    playbutton = document.getElementById('playme'),
    inicio = document.getElementById('inicio');
    opuno = document.getElementById('opUno'),
    opdos = document.getElementById('opDos');

// Inicio
inicio.addEventListener("click", function(event) {
    event.preventDefault();
    removeSelectedClass();
    inicio.classList.add("selected");
    myvideo.currentTime = 0;
    myvideo.play();
});

// Opción 1
opuno.addEventListener("click", function(event) {
    event.preventDefault();
    removeSelectedClass();
    opuno.classList.add("selected");
    myvideo.currentTime = 21.8;
    myvideo.play();
});

// Opción 2
opdos.addEventListener("click", function(event) {
    event.preventDefault();
    removeSelectedClass();
    opdos.classList.add("selected");
    myvideo.currentTime = 131;
    myvideo.play();
});

function removeSelectedClass() {
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }
}

// Play/pausa
playbutton.addEventListener("click", function() {
    if (myvideo.paused) {
        removeSelectedClass();
        myvideo.play();
        playbutton.classList.add("selected"); // Agrega la clase "selected" al botón de reproducción
    } else {
        removeSelectedClass();
        myvideo.pause();
        playbutton.classList.remove("selected"); // Quita la clase "selected" del botón de reproducción
    }
    });
