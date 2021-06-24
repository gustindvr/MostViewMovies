import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Movies from './components/Movies/Movies';
import Loading from './components/common/Loading';

import { Container } from 'react-bootstrap';
import './App.scss';
import Search from './components/Search/Search';

function App() {
  const [endpoint, setEndpoint] = useState('MostPopularMovies/k_5fcrhu0p');
  const { data, loading, error } = useFetch(endpoint);

  console.log(data);

  const findMovie = (movie) => {
    setEndpoint(`SearchMovie/k_5fcrhu0p/${movie}`);
  };

  if (loading) return <Loading />;
  if (error) return <h3>Error</h3>;

  return (
    <Container>
      <Search findMovie={findMovie} />
      <Movies data={data} />
    </Container>
  );
}

export default App;
