// project1
let contactos= ["mariana lopez", "fernando diaz","salome castañeda" ]

function añadir(contacto) {
  contactos.unshift(contacto);
}

function borrar(contacto) {
  contactos = contactos.filter(persona => persona !== contacto);
}



function imprimir() {
  console.log("contactos:");
  contactos.forEach(function (contacto) {
    console.log(contacto);
  });
}
imprimir();
borrar("fernando diaz")
imprimir();
 
















