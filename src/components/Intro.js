import { Col, Container, Row, Button } from 'react-bootstrap';
const Intro = () => {
  return (
    <div className='intro'>
      <Container className='text-white text-center d-flex justify-content-center align-item-center'>
        <Row>
          <Col>
            <div className='title'>REVIEW FILM ASIK</div>
            <div className='title'>HANYA DISINI CUY</div>
            <div className='introButton mt-4 text-center'>
              <Button variant='dark' href='#trending'>Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Intro