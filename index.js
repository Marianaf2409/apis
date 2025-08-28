const express = require("express");
const app = express();
//puerto 
const port = 3000;

// Middleware para poder leer JSON en las peticiones
app.use(express.json());

// Datos simulados (como si fueran de una base de datos)
let equipos = [
  { id: 1, nombre: "Excavadora" },
  { id: 2, nombre: "Retroexcavadora" }
];

// Ruta GET -> mostrar todos los equipos
app.get("/equipos", (req, res) => {
  res.json(equipos);
});

// Ruta POST -> agregar un equipo nuevo
app.post("/equipos", (req, res) => {
  const nuevo = {
    id: equipos.length + 1,
    nombre: req.body.nombre
  };
  equipos.push(nuevo);
  res.json(nuevo);
});

// Levantar servidor
app.listen(port, () => {
  console.log(`API sencilla escuchando en http://localhost:${port}`);
});
