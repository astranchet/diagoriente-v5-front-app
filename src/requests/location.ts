import gql from 'graphql-tag';

import { QueryHookOptions } from '@apollo/react-hooks';
import { useLocalLazyQuery } from 'hooks/apollo';

export const locationQuery = gql`
  query Location($search: String) {
    location(search: $search) {
      label
      coordinates
      postcode
    }
  }
`;
export interface LocationArguments {}
export interface LocationResponse {
  location: {
    label: string;
    coordinates: string[];
    postcode: number;
  }[];
}
export const useLocation = (options: QueryHookOptions<LocationResponse, LocationArguments> = {}) =>
  useLocalLazyQuery<LocationResponse, LocationArguments>(locationQuery, options);
