import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const GET_SERIES = gql`
    query RestaurantsList {
        restaurantsList {
          id
          name
          description
        }
    }
`;

export default function Restaurants() {
  const { data, error } = useQuery(GET_SERIES);
  if (error) return <p>ERROR</p>;

  console.log(data.restaurantsList)

  return (
    <Fragment>
      <div>
      {data.restaurantsList &&
        data.restaurantsList.map(item => (
          <div id="restaurants-list" key={item.id}>
            <div>{item.name}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
