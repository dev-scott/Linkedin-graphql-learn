import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";
import resolver from "./data/resolver";
const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql is amazing ");
});

const root =resolver

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`Running sever on localhost:${PORT}/graphql`)
);
