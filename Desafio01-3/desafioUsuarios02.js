const usuario = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
];

function checkCss(usuarios) {
    let check;
    for (let i = 0; i < usuarios.tecnologias.length; i++) {
        if (usuarios.tecnologias[i] == "CSS") {
            return true

        }
    }
}

for (let i = 0; i < usuario.length; i++) {
    if (checkCss(usuario[i]) == true) {
        console.log(`${usuario[i].nome} trabalha com CSS`);
    } else {
        console.log(`${usuario[i].nome} não trabalha com CSS`);
    }
}