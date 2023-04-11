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
    dirección: "Carre 45 #9a-87"
    },
    {
        id: 3,
        nombres: "Salome",
        apellidos: "Castañeda",
        teléfono: "235187",
        ubicaciones: "Colombia",
        ciudad: "Palmira",
        dirección: "Ccalle 44 #b4-45"
    }
];

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

 
















