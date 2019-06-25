import { graphql } from 'graphql';
import { schema } from './schema';
import { IPersistence } from '@portable-profiles/persistence';

// This will be replaced by a database connection in the future
export const hardcodedServers = [
  {
    name: 'paladin.social',
    description: 'Official social server from the Paladin Project',
    domain: 'paladin.social',
  },
  {
    name: 'meta.paladin.social',
    description: 'Official meta server for project development and feedback',
    domain: 'meta.paladin.social',
  },
];

export function createGraphQL(persistence: IPersistence) {
  const rootValue = {
    recommend: () => hardcodedServers,
  };
  const query = (q: any, context: any, variables: any) =>
    graphql(schema, q, rootValue, context, variables);
  return { rootValue, schema, query };
}
