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
                    <div className="schedule" >
                        <div className="grid-container">              
                            <Container className = "cont1" >
                                    <div className="Sheduling"><h2 className = "shed">Producers</h2></div>
                            </Container>
                            <Container className = "cont1">
                                <Row className="justify-content-md-center" md={4}>

                                <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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
                                    <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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

                                    <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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
                               <br/>

                               <Row className="justify-content-md-center" md={4}>

                                <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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
                                <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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

                                <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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

                                <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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
                                <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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

                                <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">
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

                               
                         </Container>                     
                    </div>
                </div>
        );
    }
}
export default Schedule;