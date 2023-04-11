// Crea una lista de contactos con datos predefinidos
let contactList = [
  {
    id: 1,
    nombres: "Mariana",
    apellidos: "Lopez",
    teléfono: "1234",
    ubicaciones: "Colombia",
    ciudad: "Palmira",
    dirección: "carrera 40# 70-89"
  },
  {
    id: 2,
    nombres: "Fernando",
    apellidos: "Diaz",
    teléfono: "897655",
    ubicaciones: "Colombia",
    ciudad: "Palmira",
    dirección: "Carrera 45 #9a-87"
    },
    {
        id: 3,
        nombres: "Salome",
        apellidos: "Castañeda",
        teléfono: "235187",
        ubicaciones: "Colombia",
        ciudad: "Palmira",
        dirección: "Calle 44 #b4-45"
    }
];

function printContacts() {
    console.log("Lista de contactos:");
    contactList.forEach(function (contact, index) {
        console.log((index + 1) + ". " + contact.nombres + " " + contact.apellidos);
        console.log("  Teléfono: " + contact.teléfono);
        console.log("  Ubicación: " + contact.ubicaciones);
        console.log("  Ciudad: " + contact.ciudad);
        console.log("  Dirección: " + contact.dirección);
        console.log("------------------------");
    });
}
// Función para añadir un nuevo contacto a la lista
function addContact(newContact) {
  contactList.push(newContact);
}

// Función para borrar un contacto existente de la lista
function deleteContact(id) {
  contactList = contactList.filter(function(contact) {
    return contact.id !== id;
  });
}

console.log(printContacts())

 
















