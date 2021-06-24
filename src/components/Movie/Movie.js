import { Col, Card, Button } from 'react-bootstrap';

const Movie = ({ id, title, image, rank, crew }) => {
  return (
    <Col
      sm={12}
      md={3}
      className='gap-col d-flex justify-content-center'
      key={id}
    >
      <Card style={{ width: '13rem' }}>
        <Card.Img variant='top' src={image} className='image-size' />
        <Card.Body>
          <Card.Title className='text-truncate'>{title}</Card.Title>
          <Card.Text>
            <>
              Rank: {rank}
              <p className='text-truncate'>Crew: {crew} </p>
            </>
          </Card.Text>
          <Button variant='primary'>Ver más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Movie;
