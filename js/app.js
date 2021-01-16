function myFunction(x) {
    let contacto = document.getElementById('contacto');
    let cursos = document.getElementById('cursos');
    let nosotros = document.getElementById('nosotors');
    let inicio = document.getElementById('inicio');
    let menu = document.getElementById('menu');

    if (x.matches) {
        // If media query matches

        if (contacto.classList.contains('notActive')) {
            contacto.style.display = 'none';
        }
        if (cursos.classList.contains('notActive')) {
            cursos.style.display = 'none';
        }
        if (nosotros.classList.contains('notActive')) {
            nosotros.style.display = 'none';
        }
        if (inicio.classList.contains('notActive')) {
            inicio.style.display = 'none';
        }
        menu.style.display = '';
    } else {
        contacto.style.display = '';
        cursos.style.display = '';
        nosotros.style.display = '';
        inicio.style.display = '';
        menu.style.display = 'none';
    }
}

var x = window.matchMedia('(max-width: 700px)');
myFunction(x);
x.addListener(myFunction);

let show = true;
document.getElementById('menu').addEventListener('click', display);

function display() {
    let contacto = document.getElementById('contacto');
    let cursos = document.getElementById('cursos');
    let nosotros = document.getElementById('nosotors');
    let inicio = document.getElementById('inicio');

    if (show) {
        contacto.style.display = '';
        cursos.style.display = '';
        nosotros.style.display = '';
        inicio.style.display = '';
        show = false;
    } else {
        if (contacto.classList.contains('notActive')) {
            contacto.style.display = 'none';
        }
        if (cursos.classList.contains('notActive')) {
            cursos.style.display = 'none';
        }
        if (nosotros.classList.contains('notActive')) {
            nosotros.style.display = 'none';
        }
        if (inicio.classList.contains('notActive')) {
            inicio.style.display = 'none';
        }
        show = true;
    }
}
