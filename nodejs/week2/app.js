const express = require("express");
const app = express();
const documents = require('./documents');
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
    const { q } = req.query;
  
    if (!q) {
      // If no search query is provided, return all documents
      res.json(documents);
    } else {
      // If a search query is provided, filter and return matching documents
      const results = documents.filter((document) => {
        const documentValues = Object.values(document);
        return documentValues.some((value) => {
          if (typeof value === "string" && value.includes(q)) {
            return true;
          }
          return false;
        });
      });
  
      if (results.length > 0) {
        res.json(results);
      } else {
        res.status(400).json({ msg: `No documents found for the query: ${q}` });
      }
    }
  });
  
  app.get("/documents/:id", (req, res) => {
    const { id } = req.params;
  
    // Check if id is a number
    if (isNaN(id)) {
      res.status(400).json({ msg: "Id is not a number" });
      return;
    }
  
    // Find the document with the specified ID
    const document = documents.find((doc) => doc.id === parseInt(id));
    if (document) {
      res.status(200).json(document);
    } else {
      res.status(404).json({ msg: "Document does not exist" });
    }
  });
  


  app.post("/search", (req, res) => {
    const { q } = req.query;
    const { fields } = req.body;
  
    if (q && fields) {
      res.status(400).json({ msg: "Both 'q' and 'fields' cannot be provided" });
      return;
    }
  
    let results = documents;
  
    if (q) {
      // Filtering based on search query
      results = results.filter((document) => {
        const documentValues = Object.values(document);
        return documentValues.some((value) => {
          if (typeof value === "string" && value.includes(q)) {
            return true;
          }
          return false;
        });
      });
    } else if (fields) {
      // Filtering based on specified fields
      for (const field in fields) {
        results = results.filter((document) => {
          return document[field] === fields[field];
        });
      }
    }
  
    res.status(200).json(results);
  });
  




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});