import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Server {
    name: String
    description: String
    domain: String
  }

  type Query {
    recommend: [Server]
  }
`);
