import "reflect-metadata";
import * as Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import * as cors from "cors";

const PORT = process.env.PORT || 3000;

/**
 * Initialize Apollo server and apply express middleware.
 * Starts up graphql playground (development only).
 */
const main = async () => {
  /**
   * Builds schema from resolvers.
   */
  const schema = await buildSchema({
    resolvers: [CharacterResolver],
  });

  const apolloServer = new ApolloServer({ schema, playground: true });
  const app = Express();
  // Allows cross-origin resource sharing.
  app.use(cors());

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(
      `Server started on port ${PORT}, visit: http://localhost:${PORT}/graphql to test queries`
    );
  });
};

main();
