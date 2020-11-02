import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Schedule extends React.Component{
    constructor(props){
    super(props)

    }
    render(){
        return (
                    <div className="schedule" >
                        <div className="grid-container">              
                            <Container className = "cont1" >
                                    <div className="Sheduling"><h2 className = "shed">SCHEDULE</h2></div>
                            </Container>
                            <Container className = "cont1">
                                <Row>

                                    <Col md={4} className="Monday px-0 murmurcont h-100 d-flex flex-column ">

                                        <h4 className="Scedutitle">MONDAYS</h4>
                                        <p style={{color:"#76cdd9"}}> 

                                        16:00 - 18:00 <br/> 
                                        Yas Show <br/> 
                                        </p>
                                        <p style={{color:"#ec7323"}}> 

                                        18:00 - 20:00 <br/>
                                        Meeting Points<br/>
                                        </p>
                                        <br/>
                                        <br/>
                                        <h4 className="Scedutitle">TUESDAYS</h4>
                                        <p style={{color:"#76cdd9"}}> 

                                        16:00 - 18:00 <br/> 
                                        Όλα ΖΕΝ<br/> 
                                        </p>
                                        <p style={{color:"#ec7323"}}> 

                                        18:00 - 20:00 <br/>
                                        Κυτταρίνη και άλλες<br/> Ουσίες<br/>
                                        </p>
                                        <p style={{color:"#ec7323"}}> 
                                        22:00 - 00:00 <br/>
                                        Technical Midweek<br/> Issues<br/>
                                        </p>
                                    </Col>
                                    <Col md={4} className="Wednesday px-0 murmurcont h-100 d-flex flex-column ">
                                    <h4 className="Scedutitle">WEDNESDAYS</h4>
                                    <p style={{color:"#ec7323"}}> 
                                        18:00 - 20:00 <br/>
                                        Kenny Sounds<br/>
                                        </p>
                                        <p style={{color:"#ec7323"}}> 
                                        20:00 - 22:00 <br/>
                                        Ήχοι της Γειτονιας<br/>
                                        </p>
                                        <p style={{color:"#ec7323"}}> 
                                        22:00 - 00:00 <br/>
                                        Ρεμπετικη Γευση<br/>
                                        </p>
                                        <br/>
                                        <br/>
                                        <h4 className="Scedutitle">THURSDAYS</h4>
                                        <p style={{color:"#ec7323"}}> 
                                        18:00 - 20:00 <br/> 
                                        Music is Memory <br/> 
                                        </p>
                                        <p style={{color:"#ec7323"}}> 
                                        20:00 - 22:00 <br/>
                                        The Blackout Show<br/>
                                        </p>
                                        <p style={{color:"#ec7323"}}> 
                                        22:00 - 00:00 <br/>
                                        The One With The Metal<br/>
                                        </p>
                                    </Col> 



                                    <Col md={4} className="Friday px-0 murmurcont h-100 d-flex flex-column ">
                                    <h4 className="Scedutitle">FRIDAYS</h4>
                                    <p style={{color:"#76cdd9"}}> 
                                        16:20 - 19:20 <br/> 
                                        Λεμονοπιτα με Τσιλι <br/> 
                                        </p>
                                        <p style={{color:"#ec7323"}}> 
                                        20:00 - 22:00 <br/>
                                        Voyage<br/>
                                        </p>
                                        <p style={{color:"#ec7323"}}> 
                                        22:00 - 00:00 <br/>
                                        Misfits Sessions<br/>
                                        </p>
                                        <br/>
                                        <br/>
                                        <h4 className="Scedutitle">SUNDAYS</h4>
                                        <p style={{color:"#ec7323"}}> 
                                        20:00 - 22:00<br/>
                                        Fairy Tale<br/>
                                        </p>
                                        
                                </Col>
                               </Row> 

                               
                         </Container>                     
                    </div>
                </div>
        );
    }
}
export default Schedule;