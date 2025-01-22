// Imports
import express from "express";

// App
const app = express();

// Server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// Export
export default app;
