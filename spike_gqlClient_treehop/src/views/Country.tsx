import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import {
  GetSingleCountryQuery,
  useGetSingleCountryQuery,
} from "../graphql/__generated__/countries";

type CountryProps = {
  code: string;
};

const GET_COUNTRY_BY_CODE = gql`
  query GetSingleCountry($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      currency
    }
  }
`;

function Country({ code }: CountryProps) {
  console.log("code :>> ", code);
  //   const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
  //     variables: {
  //       code,
  //     },
  //   });

  //! Using The type generated from the query
  //   const { loading, error, data } = useQuery<GetSingleCountryQuery>(
  //     GET_COUNTRY_BY_CODE,
  //     {
  //       variables: {
  //         code,
  //       },
  //     }
  //   );

  //   console.log("data :>> ", data);
  //! Using the generated custom hook. In this case we don't need to declare the query here.
  const { loading, error, data } = useGetSingleCountryQuery({
    variables: { code },
  });

  return (
    <>
      <h1>country</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <p style={{ width: "50%" }}>{data?.country?.name}</p>
        <p style={{ width: "50%" }}>{data?.country?.capital}</p>
        <p style={{ width: "50%" }}>{data?.country.emoji}</p>
        <p style={{ width: "50%" }}>{data?.country?.currency}</p>
      </div>
    </>
  );
}

export default Country;
