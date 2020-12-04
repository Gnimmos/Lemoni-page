import React,   { Component } from 'react';
import zone1 from './logos/sponsor-banners-deep-zone.png';
import zone2 from './logos/sponsor-banners-energetic-zone.png';
import zone3 from './logos/sponsor-banners-mellow-zone.png';
import zone4 from './logos/sponsor-banners-twilight-zone.png';
import './Zone.css';

class Zones extends Component{
    constructor(){
        super();
        this.state = {
            zone: ""

        };
        this.changezone = this.changezone.bind(this);

    }
   
    changezone (){
        var hours = new Date().getHours(); //Current Hours
        var hour = hours.toString();
        //Setting colors dipenting on time
        if (0 <= hour && hour < 6)
        { 

          this.setState({
            zone : zone1
          });
        }
        else if (6 <= hour && hour < 12)
        {

          this.setState({
            zone : zone2

          });
        }
        else if (12 <= hour && hour < 18)
        {

          this.setState({
            zone : zone3
          });
        }
        else 
        {

          this.setState({
            zone : zone4
          });
        }
  
      }
      componentDidMount(){
        this.timerID = setInterval(
          () => this.changezone(),
          1000
        );
    }
    componentWillUnmount() {

      this.change2();
    }
      render() {
          return(
        
             <img className = "zone-logo" src={this.state.zone} alt="Logo" />
         
          );


    }
}
export default Zones;