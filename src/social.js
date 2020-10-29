import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faTwitch,fab,
    faMixcloud,
  } from "@fortawesome/free-brands-svg-icons";

 class SocialFollow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color1: '#0e2539', 
  };
   //binding the functions to the class
      this.changetext = this.changetext.bind(this);
   }
   changetext (){
    var hours = new Date().getHours(); //Current Hours
    var hour = hours.toString();
    //Setting colors dipenting on time and changing logo
    if (0 <= hour && hour < 6)
    { 

    this.setState({ 
      color1: '#7f4098'
    });

    }
    else if (6 <= hour && hour < 12)
    {

      this.setState({ 
        
        color1: '#fde146'
      });

       
    }
    else if (12 <= hour && hour < 18)
    {

      this.setState({ 
        color1: '#76cdd9'
      });

    }
    else 
    {

      this.setState({ 
        color1: '#be1e2d'
      });

    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.changetext(),
      1000
    );
  }
  componentWillUnmount() {

    this.changetext();

  }
  render(){
    return (
      <div class="social-container">
        <div className="row" >    
          <div className="col" >  
            <a href="https://www.youtube.com/channel/UCPARFXwIX7vNVZDmnJoMn6w" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="60px" color={this.state.color1}/>
            </a>
            <a href="https://www.mixcloud.com/LemoniRadio/?fbclid=IwAR3bxFbeTkI_b5mZ39qCBHexK9UChil1Ym_uRBXkVip1lxLNiLqlYEXgWUU" className="mixclud social" >
            <FontAwesomeIcon icon={faMixcloud} size="60px" color={this.state.color1}/>
            </a>
            <a href="https://www.twitch.tv/lemoniradio" className="twitter social">
            <FontAwesomeIcon icon={faTwitch} size="60px" color={this.state.color1}/>
            </a>
            <a href="https://www.facebook.com/lemoniradio" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="60px"  color={this.state.color1}/>
            </a>
            <a href="https://www.instagram.com/lemoniradio/"className="instagram social">
            <FontAwesomeIcon icon={fab,faInstagram} size="60px" color={this.state.color1}/>
            </a>
            </div>
          </div>
      </div>
    );
  }
}

export default SocialFollow;