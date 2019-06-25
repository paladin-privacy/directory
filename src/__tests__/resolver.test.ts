import { createGraphQL, hardcodedServers } from '../resolver';
import { MemoryPersistence } from '@portable-profiles/persistence';

const GetRecommendations = `
  {
    recommend {
      name
      description
      domain
    }
  }
`;

test('test recommendations', async () => {
  const memory = new MemoryPersistence();
  const { query } = createGraphQL(memory);

  const recommendationResults = await query(GetRecommendations, {}, {});
  const recommend = recommendationResults.data.recommend;
  expect(recommend[0].domain).toEqual('paladin.social');
  expect(recommend).toEqual(hardcodedServers);
});
