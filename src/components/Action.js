import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import bullettrainImage from '../assets/img/action/bt1.jpg';
import johnwickImage from '../assets/img/action/jw1.jpg';
import johnwick2Image from '../assets/img/action/jw2.jpg';
import johnwick3Image from '../assets/img/action/jw3.jpg'
import johnwick4Image from '../assets/img/action/jw4.jpg';
import spidermanImage from '../assets/img/action/spd.jpg';

const action = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='text-white'>ACTION MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id='action' >
                        <Card className="bg-dark movieImages">
                            <Image src={bullettrainImage} alt="bullettrain Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>BULLET TRAIN</Card.Title>
                                    <Card.Text className='text-left'>
                                        Bullet Train adalah film aksi-komedi yang mengikuti seorang pembunuh bayaran bernama Ladybug, yang terjebak dalam misi kacau di kereta cepat Jepang.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Aksi, Komedi, Thriller.</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={johnwickImage} alt="john wick Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>JOHN WICK</Card.Title>
                                    <Card.Text className='text-left'>
                                        John Wick adalah film aksi penuh adrenalin yang mengisahkan seorang mantan pembunuh bayaran legendaris yang kembali ke dunia kriminal untuk membalas dendam.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Aksi, Thriller, Kriminal.</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={johnwick2Image} alt="johnwick2 Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>JOHN WICK 2</Card.Title>
                                    <Card.Text className='text-left'>
                                        John Wick: Chapter 2 (2017) adalah film aksi yang mengikuti John Wick yang terpaksa kembali ke dunia kejahatan internasional setelah dipaksa untuk membayar hutang darah.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Aksi, Thriller, Kriminal</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={johnwick3Image} alt="JOHN WICK3 Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>JOHN WICK 3</Card.Title>
                                    <Card.Text className='text-left'>
                                        John Wick: Chapter 3 – Parabellum (2019) adalah film aksi yang melanjutkan perjalanan John Wick setelah ia dibuang dari dunia kejahatan internasional.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Aksi, Thriller, Kriminal</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={johnwick4Image} alt="JOHN WICK4 Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>JOHN WICK 4</Card.Title>
                                    <Card.Text className='text-left'>

                                        John Wick: Chapter 4 (2023) adalah film aksi yang melanjutkan kisah John Wick, yang kini berusaha untuk menghancurkan organisasi kriminal High Table.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Aksi, Thriller, Kriminal</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={spidermanImage} alt="spiderman Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>SPIDERMAN</Card.Title>
                                    <Card.Text className='text-left'>

                                        Spider-Man: Far From Home (2019) adalah film superhero yang mengikuti Peter Parker (Spider-Man) yang berlibur ke Eropa setelah kejadian Avengers: Endgame.

                                    </Card.Text>
                                    <Card.Text className='text-left'> Genre: Aksi, Petualangan, Superhero</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <br />
                <br />
            </Container>

        </div>
    )
}

export default action