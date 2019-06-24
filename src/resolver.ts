import { graphql } from 'graphql';
import { schema } from './schema';
import { IPersistence } from '@portable-profiles/persistence';

// This will be replaced by a database connection in the future
const hardcodedServers = [
  {
    name: 'paladin.social',
    description: 'Official social server from the Paladin Project',
    domain: 'paladin.social'
  },
  {
    name: 'meta.paladin.social',
    description: 'Official meta server for project development and feedback',
    domain: 'meta.paladin.social'
  },
];

export function createGraphQL(persistence: IPersistence) {
  const resolvers = {
    recommend: () => hardcodedServers
  };
  return (query: any, context: any, variables: any) =>
    graphql(schema, query, resolvers, context, variables);
}
