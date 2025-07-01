/*
// POST, GET, PUT, DELETE
//CRUD - CREATE, READ, UPDATE, DELETE
import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;
// Middleware para permitir requisições de outros domínios
// Isso é necessário para que o front-end possa acessar o back-end
app.use(cors());

//nao temos api na raiz do servidor
// Apenas um endpoint para verificar se o servidor está rodando
app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints Artists e Songs!");
});

//  Endpoint para inserir artistas
app.get("/artists", async (request, response) => {
  const artistCollection = await db.collection("artists").find({}).toArray();
  response.send(artistCollection);
});

// Endpoint para inserir músicas
app.get("/songs", async (request, response) => {
  const songCollection = await db.collection("songs").find({}).toArray();
  response.send(songCollection);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();

// Middleware
app.use(cors());

// Endpoints
app.get("/", (req, res) => {
  res.send("Só vamos trabalhar com os endpoints Artists e Songs!");
});

app.get("/artists", async (req, res) => {
  const artistCollection = await db.collection("artists").find({}).toArray();
  res.json(artistCollection);
});

app.get("/songs", async (req, res) => {
  const songCollection = await db.collection("songs").find({}).toArray();
  res.json(songCollection);
});

// Remova o app.listen()! O Vercel vai gerenciar a "escuta" automaticamente.
export default app; // Para ES Modules (usando "type": "module" no package.json)
// OU, se estiver usando CommonJS:
// module.exports = app;
