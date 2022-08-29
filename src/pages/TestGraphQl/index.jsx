import { useQuery } from '@apollo/client';
import { useGraphQlErrorHandler } from 'hooks';
import { Spinner } from 'components';
import { GET_LOCATIONS } from 'api';

export const TestGraphQl = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  useGraphQlErrorHandler({ loading, error, data });

  return loading ? <Spinner /> : (
    <>
      <div>Here is example of use GraphQL</div>
      <div>
        {data.locations.map(({ id, name, description, photo }) => (
          <div key={id}>
            <h3>{name}</h3>
            <img
              width="400"
              height="250"
              alt="location-reference"
              src={`${photo}`}
            />
            <br />
            <b>About this location:</b>
            <p>{description}</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};
