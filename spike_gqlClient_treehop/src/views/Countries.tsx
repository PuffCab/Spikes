import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import {
  GetCountriesQuery,
  useGetCountriesQuery,
} from "../graphql/__generated__/countries";

// const GET_COUNTRIES = gql`
//   query GetCountries {
//     countries {
//       name
//       capital
//     }
//   }
// `;

function Countries() {
  // const { loading, error, data } = useQuery<GetCountriesQuery>(GET_COUNTRIES);
  const { loading, error, data } = useGetCountriesQuery();
  if (loading) return <h1>....LOADING....</h1>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      <h1>GQL Query Countries</h1>
      {data?.countries.map((country) => {
        return (
          <div style={{ border: "1px solid white" }}>
            <p>{country.name}</p>
            <p>{country.capital}</p>
          </div>
        );
      })}
    </>
  );
}

export default Countries;
