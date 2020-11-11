import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Media from 'react-bootstrap/Media';
import Huston from './lemoni_producers/giorgosc.jpg';
import Diana from './lemoni_producers/diana.jpg';
import Constantinos from './lemoni_producers/constantinos.jpg';
import Andy from './lemoni_producers/andypervinca.jpg';
import Kenneth from './lemoni_producers/kenneth.jpg';
import Kyriakos from './lemoni_producers/kyriakos.jpg';


class Schedule extends React.Component{
  constructor(props){
    super(props);
  
    this.state = {
        Pic1: Huston, 
        Pic2: Constantinos,
        Pic3: Diana,
        Pic4: Andy,
        Pic5: Kenneth,
        Pic6: Kyriakos,
    };

  }
    render(){
        return (
          <div className="donateto">
          <div className="aboutlemon">                                   
          <Row>
                                      <Col md = {12}>
                                    <h2 >SHOWS</h2>
                                    <br/>
                                    <br/>
                                    </Col>
                                    </Row>
                                <Row  md={4}>

                                <Col md={4} className="   h-100 d-flex flex-column ">
                                      <Media>
                                        <Media.Body>
                                        <img
                                          width={64}
                                          height={64}
                                          className="ml-3"
                                          src={this.state.Pic1}
                                          alt="Generic placeholder"
                                        />
                                          <h5>George</h5>
                                          <p>
                                          Music Festivals and phenomena bring together a mix of people. These are events where new life memories  and often history are created. These are events where nationality, religious  and  political beliefs come second, while the love for music prevails and transforms most participants in universal citizens. 
Chili Lemon Pie takes a look into these important  music events.

George studied Law but ended up realising that Pearl Jam were right about those "Legal Halls of Shame" and that many things he was taught in life were wrong, propaganda or relative. Stopped fishing octopuses because they are smarter than all of us and just realised that describing himself in the third person is an oxymoron, unless he is a schizophrenic.

                                          </p>
                                        </Media.Body>

                                      </Media> 
                                    </Col>
                                    <Col md={4} className="  h-100 d-flex flex-column ">
                                      <Media>
                                        <Media.Body>
                                        <img
                                          width={64}
                                          height={64}
                                          className="ml-3"
                                          src={this.state.Pic2}
                                          alt="Generic placeholder"
                                        />
                                          <h5>Constantinos</h5>
                                          <p>
                                          Constantinos has been an active member of the Cyprus metal scene for 25 years, and as a guitarist, has appeared in various festivals and has toured extensively, supporting bands such as Cradle of Filth, Sodom and Rotting Christ.

                                          The One with the Metal
                                          Ever since 1970 when Black Sabbath penned the very first notes that gave birth to heavy metal, this extreme genre of music has gone from obscurity and controversy, to unfathomable popularity and success. With its
                                          countless subgenres and offshoots, it has been played in a range of venues, from sweaty dives to arenas and major festivals, and everywhere in between.

                                          'The One with the Metal' celebrates half a century of music in all its glory, peppered with fun facts, legends, true stories, and occasional guests from the Cypriot Metal scene.

                                          </p>
                                        </Media.Body>

                                      </Media> 
                                    </Col>

                                    <Col md={4} className=" h-100 d-flex flex-column ">
                                      <Media>
                                        <Media.Body>
                                        <img
                                          width={64}
                                          height={64}
                                          className="ml-3"
                                          src={this.state.Pic3}
                                          alt="Generic placeholder"
                                        />
                                          <h5>Diana</h5>
                                          <p>
                                          Diana Borisova (Dj DiDi) is a graduate of MGIMO's faculty of international journalism. She speaks English, Greek, Russian and Spanish. She has experience in the field of gloss and analytical press (SNC magazine, Echo of Moscow radio, TVOne). Diana specializes in analyzing Greek and Cypriot media in the field of public and cultural diplomacy.

                                          Voyage
                                          Every Friday on Lemoni you will be able to travel all over the world with some Russian soul!

                                          The mission of the 'Voyage' show is to involve you in the rapidly expanding new world of Russian music, to talk about news from all over the world, including on our lovely island, and basically, just to have a good time together!

                                          </p>
                                        </Media.Body>

                                      </Media> 
                                    </Col>
                               </Row> 
                               <br/>

                               <Row className="justify-content-md-center" md={4}>

                                <Col md={4} className=" h-100 d-flex flex-column ">
                                  <Media>
                                    <Media.Body>
                                    <img
                                      width={64}
                                      height={64}
                                      className="ml-3"
                                      src={this.state.Pic4}
                                      alt="Generic placeholder"
                                    />
                                      <h5>Media Heading</h5>
                                      <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                      </p>
                                    </Media.Body>

                                  </Media> 
                                </Col>
                                <Col md={4} className=" h-100 d-flex flex-column ">
                                  <Media>
                                    <Media.Body>
                                    <img
                                      width={64}
                                      height={64}
                                      className="ml-3"
                                      src={this.state.Pic5}
                                      alt="Generic placeholder"
                                    />
                                      <h5>Media Heading</h5>
                                      <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                      </p>
                                    </Media.Body>

                                  </Media> 
                                </Col>

                                <Col md={4} className=" h-100 d-flex flex-column ">
                                  <Media>
                                    <Media.Body>
                                    <img
                                      width={64}
                                      height={64}
                                      className="ml-3"
                                      src={this.state.Pic6}
                                      alt="Generic placeholder"
                                    />
                                      <h5>Media Heading</h5>
                                      <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                      </p>
                                    </Media.Body>

                                  </Media> 
                                </Col>
                                </Row>
                               <br/>

                                <Row className="justify-content-md-center" md={4}>

                                <Col md={4} className=" h-100 d-flex flex-column ">
                                  <Media>
                                    <Media.Body>
                                    <img
                                      width={64}
                                      height={64}
                                      className="ml-3"
                                      src={this.state.Pic1}
                                      alt="Generic placeholder"
                                    />
                                      <h5>Media Heading</h5>
                                      <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                      </p>
                                    </Media.Body>

                                  </Media> 
                                </Col>
                                <Col md={4} className=" h-100 d-flex flex-column ">
                                  <Media>
                                    <Media.Body>
                                    <img
                                      width={64}
                                      height={64}
                                      className="ml-3"
                                      src={this.state.Pic2}
                                      alt="Generic placeholder"
                                    />
                                      <h5>Media Heading</h5>
                                      <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                      </p>
                                    </Media.Body>

                                  </Media> 
                                </Col>

                                <Col md={4} className=" h-100 d-flex flex-column ">
                                  <Media>
                                    <Media.Body>
                                    <img
                                      width={64}
                                      height={64}
                                      className="ml-3"
                                      src={this.state.Pic3}
                                      alt="Generic placeholder"
                                    />
                                      <h5>Media Heading</h5>
                                      <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                      </p>
                                    </Media.Body>

                                  </Media> 
                                </Col>
                                </Row> 
                </div>
                </div>

        );
    }
}
export default Schedule;