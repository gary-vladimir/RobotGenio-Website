function myFunction(x) {
    let contacto = document.getElementById('contacto');
    let cursos = document.getElementById('cursos');
    let nosotros = document.getElementById('nosotors');
    let inicio = document.getElementById('inicio');

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
    } else {
        contacto.style.display = '';
        cursos.style.display = '';
        nosotros.style.display = '';
        inicio.style.display = '';
    }
}

var x = window.matchMedia('(max-width: 700px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes}
