function myFunction(x) {
    if (x.matches) {
        // If media query matches
        let contacto = document.getElementById('contacto');
        let cursos = document.getElementById('cursos');
        let nosotros = document.getElementById('nosotors');
        let inicio = document.getElementById('inicio');

        if (contacto.classList.contains('notActive')) {
            console.log('el icono contacto tendrá que desaparecer');
            contacto.remove();
        }
        if (cursos.classList.contains('notActive')) {
            console.log('el icono cursos tendrá que desaparecer');
            cursos.remove();
        }
        if (nosotros.classList.contains('notActive')) {
            console.log('el icono nosotros tendrá que desaparecer');
            nosotros.remove();
        }
        if (inicio.classList.contains('notActive')) {
            console.log('el icono inicio tendrá que desaparecer');
            inicio.remove();
        }
    } else {
        document.body.style.backgroundColor = 'gainsboro';
    }
}

var x = window.matchMedia('(max-width: 700px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
