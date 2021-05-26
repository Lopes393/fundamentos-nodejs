const express = require("express");

const app = express();

/**
 * Tipos de parâmetros
 *
 * Route params => identificar recurso para deletar/editar/buscar
 * Query params => Paginação/Filtro
 * Body params => Objetos para inserção/alteração (JSON)
 */

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log(query);
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.json(["Curso 1", "Curso 5", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 7", "Curso 5", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso 5", "Curso 3", "Curso 4"]);
});

app.listen(3333);
