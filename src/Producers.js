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
         <div></div>

        );
    }
}
export default Schedule;