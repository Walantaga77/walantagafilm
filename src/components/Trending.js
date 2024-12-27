import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import arcaneImage from '../assets/img/trending/arcane1.jpg';
import longshotImage from '../assets/img/trending/ls1.jpg';
import mortalkombatImage from '../assets/img/trending/mk1.jpg';
import peakyblinderImage from '../assets/img/trending/pb1.jpg'
import rednoticeImage from '../assets/img/trending/rdn1.jpg';
import warriorImage from '../assets/img/trending/warrior1.jpg';

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='text-white'>TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id='trending' >
                        <Card className="bg-dark movieImages">
                            <Image src={arcaneImage} alt="Arcane Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>ARCANE</Card.Title>
                                    <Card.Text className='text-left'>
                                        Arcane adalah serial animasi berdasarkan dunia League of Legends yang mengisahkan konflik antara dua kota.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Aksi, Fantasi, Petualangan, Drama.</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={longshotImage} alt="Long Shot Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Long Shot</Card.Title>
                                    <Card.Text className='text-left'>
                                        Long Shot adalah film komedi romantis yang mengikuti hubungan tak terduga antara seorang jurnalis idealis dan mantan pengasuhnya.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Komedi, Romantis.</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={mortalkombatImage} alt="Mortak Kombat Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>MORTAL KOMBAT</Card.Title>
                                    <Card.Text className='text-left'>
                                        Mortal Kombat adalah film aksi-fantasi yang mengisahkan turnamen epik antar dunia, di mana para petarung terpilih harus menghadapi ancaman.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Aksi, Fantasi, Petualangan.</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={peakyblinderImage} alt="peaky blinder Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>PEAKY BLINDER</Card.Title>
                                    <Card.Text className='text-left'>
                                        Peaky Blinders adalah serial drama kriminal yang mengikuti keluarga Shelby, sebuah geng jalanan di Birmingham pasca-Perang Dunia I. Ini film series yang author paling suka hehe.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Drama, Kriminal, Sejarah.</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={rednoticeImage} alt="rednotice Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>RED NOTICE</Card.Title>
                                    <Card.Text className='text-left'>
                                        Red Notice adalah film aksi-komedi yang mengisahkan seorang agen Interpol, seorang pencuri, dan seorang penipu yang terpaksa bekerja sama.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Aksi, Komedi, Kejahatan.</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper' >
                        <Card className="bg-dark movieImages">
                            <Image src={warriorImage} alt="Warrior Movies" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>WARRIOR</Card.Title>
                                    <Card.Text className='text-left'>
                                        Warrior adalah film drama olahraga yang mengisahkan dua saudara yang terpisah, Tommy dan Brendan, yang berhadapan dalam turnamen seni bela diri campuran terbesar.


                                    </Card.Text>
                                    <Card.Text className='text-left'>Genre: Drama, Olahraga, Aksi.</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending