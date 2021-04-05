"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Express = require("express");
const apollo_server_express_1 = require("apollo-server-express");
const cors = require("cors");
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
const path = require("path");
const PORT = process.env.PORT || 5000;
const main = async () => {
    const schema = await type_graphql_1.buildSchema({
        resolvers: [resolvers_1.CharacterResolver, resolvers_1.PlanetResolver],
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema, playground: true });
    const app = Express();
    app.use(cors());
    app.use(Express.static("public"));
    app.get("*", (_req, res) => {
        res.sendFile(path.resolve(__dirname, "public", "index.html"));
    });
    apolloServer.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}, visit: http://localhost:${PORT}/graphql to test queries`);
    });
};
main();
//# sourceMappingURL=server.js.map