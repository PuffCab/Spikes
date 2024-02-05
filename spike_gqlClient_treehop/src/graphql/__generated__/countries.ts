import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetCountriesDocument = gql`
    query GetCountries {
  countries {
    name
    capital
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export function useGetCountriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesSuspenseQueryHookResult = ReturnType<typeof useGetCountriesSuspenseQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetSingleCountryDocument = gql`
    query GetSingleCountry($code: ID!) {
  country(code: $code) {
    name
    capital
    emoji
    currency
  }
}
    `;

/**
 * __useGetSingleCountryQuery__
 *
 * To run a query within a React component, call `useGetSingleCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetSingleCountryQuery(baseOptions: Apollo.QueryHookOptions<GetSingleCountryQuery, GetSingleCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleCountryQuery, GetSingleCountryQueryVariables>(GetSingleCountryDocument, options);
      }
export function useGetSingleCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleCountryQuery, GetSingleCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleCountryQuery, GetSingleCountryQueryVariables>(GetSingleCountryDocument, options);
        }
export function useGetSingleCountrySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSingleCountryQuery, GetSingleCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSingleCountryQuery, GetSingleCountryQueryVariables>(GetSingleCountryDocument, options);
        }
export type GetSingleCountryQueryHookResult = ReturnType<typeof useGetSingleCountryQuery>;
export type GetSingleCountryLazyQueryHookResult = ReturnType<typeof useGetSingleCountryLazyQuery>;
export type GetSingleCountrySuspenseQueryHookResult = ReturnType<typeof useGetSingleCountrySuspenseQuery>;
export type GetSingleCountryQueryResult = Apollo.QueryResult<GetSingleCountryQuery, GetSingleCountryQueryVariables>;
export type GetCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, capital?: string | null }> };

export type GetSingleCountryQueryVariables = Types.Exact<{
  code: Types.Scalars['ID']['input'];
}>;


export type GetSingleCountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', name: string, capital?: string | null, emoji: string, currency?: string | null } | null };
