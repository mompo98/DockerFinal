// mongo-init.js

// Crear una nueva base de datos y cambiar a ella
db = db.getSiblingDB('mydatabase');

// Crear una nueva colección en la base de datos
db.createCollection('mycollection');

// Insertar algunos documentos en la colección
db.mycollection.insertMany([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
]);