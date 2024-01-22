import express, { request, response } from "express";
import {
  query,
  validationResult,
  body,
  matchedData,
  checkSchema,
} from "express-validator";
import { createUserValidationSchema } from "./utils/validationSchemas.mjs";
import usersRouter from "./routes/users.mjs";
import { mockUsers } from "./utils/constants.mjs";
import { resolveIndexByUserId } from "./utils/middleware.mjs";

const app = express();

//middleware usage
app.use(express.json());
app.use(usersRouter);

//middleware
const loggingMiddleware = (request, response, next) => {
  console.log(`${request.method} - ${request.url}`);
  next();
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});

//localhost:3000/users
// app.get(
//   "/api/users",
//   query("filter")
//     .isString()
//     .notEmpty()
//     .withMessage("Must not be empty")
//     .isLength({ min: 3, max: 10 })
//     .withMessage("Must be at least3-10 chars"),
//   (request, response) => {
//     const result = validationResult(request);
//     console.log(result);
//     const {
//       query: { filter, value },
//     } = request;
//     //when filter and value are undefiend
//     if (!filter || !value) return response.send(mockUsers);
//     if (filter && value)
//       return response.send(
//         //localhost/products?key=value&key2=value2
//         mockUsers.filter((user) => user[filter].includes(value))
//       );

//     response.send(mockUsers);
//   }
// );

app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "XYZ", price: 12.99 }]);
});

//PUT request
