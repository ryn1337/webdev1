"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = require("./resolvers");
const app = (0, express_1.default)();
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    rootValue: resolvers_1.resolvers,
    graphiql: true,
}));
app.listen(4000, () => {
    console.log('Server läuft auf http://localhost:4000/graphql');
});
