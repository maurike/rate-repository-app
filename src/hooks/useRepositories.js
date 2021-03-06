import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  let repositories;

  if (loading) {
      console.log('Loading...');
  } else {
      repositories = data.repositories;
  }

  return { repositories, error, loading };
};

export default useRepositories;