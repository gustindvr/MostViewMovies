import { Row } from 'react-bootstrap';

import Movie from '../Movie/Movie';

const Movies = ({ data }) => {
  const { items: movies } = data;
  console.log(data);
  return (
    <div className='text-center'>
      <h1 className='my-5'>Top Rank 100 Movies</h1>
      <Row className='justify-content-center'>
        {movies?.length > 0 && movies.map((movie) => <Movie {...movie} />)}
      </Row>
    </div>
  );
};

export default Movies;
