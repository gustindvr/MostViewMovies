import { memo, useState } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';

const Search = ({ findMovie }) => {
  const [movieSearch, setMovieSearch] = useState('');

  const dataSearch = (e) => {
    e.preventDefault();

    const [movie] = e.target.elements;
    setMovieSearch(movie.value.trim());

    findMovie(movieSearch);
  };

  return (
    <Form onSubmit={dataSearch} className='search-movie__input'>
      <InputGroup>
        <FormControl placeholder='Movie...' name='movie' />
      </InputGroup>
    </Form>
  );
};

export default memo(Search);
