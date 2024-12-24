"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`
  type Query {
    hello: String
  }
`);
exports.default = schema;
