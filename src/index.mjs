import express, { request, response } from "express";
import routes from "./routes/index.mjs";

const app = express();

//middleware usage
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});
