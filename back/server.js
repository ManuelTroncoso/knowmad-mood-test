const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS heroes (id INTEGER PRIMARY KEY, name TEXT)"
  );
});

app.use(cors());
app.use(bodyParser.json());
app.get("/api/heroes", (req, res) => {
  const { name, pageIndex, pageSize } = req.query;

  let query = "SELECT * FROM heroes";
  let params = [];

  if (name) {
    query += " WHERE UPPER(name) LIKE ?";
    params.push(`%${name.toUpperCase()}%`);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const parsedPageIndex = parseInt(pageIndex, 10) || 0;
      const parsedPageSize = parseInt(pageSize, 10) || 10;

      const totalRows = rows.length;
      const totalPages = Math.ceil(totalRows / parsedPageSize);

      let finalPageIndex = parsedPageIndex;
      // Ajustar la página solicitada si es mayor que el número total de páginas
      if (totalPages - 1 >= 0) {
        finalPageIndex = Math.min(parsedPageIndex, totalPages - 1);
      }

      const startIndex = finalPageIndex * parsedPageSize;
      const endIndex = startIndex + parsedPageSize;

      const entities = rows.slice(startIndex, endIndex);

      const page = {
        entities: entities,
        pageIndex: finalPageIndex,
        pageSize: parsedPageSize,
        total: totalRows,
        totalPages: totalPages,
        searchValue: name || "",
        isLoading: false,
      };

      res.json(page);
    }
  });
});

// Endpoint para obtener un héroe por ID
app.get("/api/heroes/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM heroes WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (row) {
      const hero = {
        id: row.id,
        name: row.name,
      };
      res.json(hero);
    } else {
      res.status(404).send("Hero not found");
    }
  });
});

// Endpoint para crear un nuevo héroe
app.post("/api/heroes", (req, res) => {
  const { name } = req.body;
  db.run("INSERT INTO heroes (name) VALUES (?)", [name], (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const page = {
        entities: [],
        pageIndex: 0,
        pageSize: 0,
        total: 0,
        searchValue: "",
        isLoading: false,
      };
      res.status(201).json(page);
    }
  });
});

// Endpoint para actualizar un héroe por ID
app.put("/api/heroes/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.run("UPDATE heroes SET name = ? WHERE id = ?", [name, id], (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const page = {
        entities: [],
        pageIndex: 0,
        pageSize: 0,
        total: 0,
        searchValue: "",
        isLoading: false,
      };
      res.status(200).json(page);
    }
  });
});

// Endpoint para eliminar un héroe por ID
app.delete("/api/heroes/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM heroes WHERE id = ?", [id], (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const page = {
        entities: [],
        pageIndex: 0,
        pageSize: 0,
        total: 0,
        searchValue: "",
        isLoading: false,
      };
      res.status(200).json(page);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
