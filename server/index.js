import "dotenv/config";
import express from "express";

import { graphqlHTTP } from "graphql";
import { schema } from "./models/schema";
const port = process.env.PORT || 5006;

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "development" })
);

app.listen(port, console.log(`Server started on port ${port}`));
