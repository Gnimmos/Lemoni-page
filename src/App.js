import React from 'react';
import Popup from "reactjs-popup";
import Player from './Player';
import './App.css';
import logo1 from './logos/LOGO-deep-zone.png'
import logo2 from './logos/LOGO-energetic-zone.png'
import logo3 from './logos/LOGO-Mellow-zone.png'
import logo4 from './logos/LOGO-Twilight-zone.png'
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import SocialFollow from "./social";
import Zonetxt from './Zonetxt';
import Schedule from './Schedule';
import Producers from './Producers';

class App extends React.Component {
    constructor(props){
      super(props);
    
    

      this.state = {
          color1: '#ffffff', 
          color2: '#ffffff',
          changeback :"",
          checkgrid:"",
          logo : "",
          zonetxt : "",
          isToggleOn: true,
    
      };
      
       //binding the functions to the class
  this.changetext = this.changetext.bind(this);
  this.changebackround = this.changebackround.bind(this);
  this.changegrid = this.changegrid.bind(this);
  this.scrollToTop = this.scrollToTop.bind(this);
  this.handleClick = this.handleClick.bind(this);
  
}

  handleClick() {  
    this.setState( state => ({
      isToggleOn: !state.isToggleOn    }));
      }
    changetext (){
      var hours = new Date().getHours(); //Current Hours
      var hour = hours.toString();
      //Setting colors dipenting on time and changing logo
      if (0 <= hour && hour < 6)
      { 
        this.setState({ 
          logo: logo1
      });
      this.setState({ 
        color1: '#7f4098'
      });
      this.setState({ 
        color2: '#0e2539'
      });
      }
      else if (6 <= hour && hour < 12)
      {
        this.setState({ 
          logo: logo2
  
        });
        this.setState({ 
          
          color1: '#fde146'
        });
        this.setState({ 
          color2: '#5eb546'
  
        });
         
      }
      else if (12 <= hour && hour < 18)
      {
        this.setState({ 
          logo: logo3
        });
        this.setState({ 
          color1: '#76cdd9'
        });
        this.setState({ 
          color2: '#d47097'
        });
      }
      else 
      {
        this.setState({ 
          logo: logo4      

        });
        this.setState({ 
          color1: '#be1e2d'
        });
        this.setState({ 
          color2: '#ec7323'
        });
      }
    }

    changebackround(){

      var hours = new Date().getHours(); //Current Hours
      var hour = hours.toString();
      //Setting css backround colors dipenting on time
      if (0 <= hour && hour < 6)
      { 
        this.setState({ 
          changeback:"App-1"
        
      });
      }
      else if (6 <= hour && hour < 12)
      {
        this.setState({ 
          changeback:"App-2"
        });
         
      }
      else if (12 <= hour && hour < 18)
      {
        this.setState({ 
          changeback:"App-3"
        });
      }
      else 
      {
        this.setState({ 
          changeback:"App-4"
        });
      }
    }
    changegrid(){

      var hours = new Date().getHours(); //Current Hours
      var hour = hours.toString();
      //Setting css grid colors dipenting on time
      if (0 <= hour && hour < 6)
      { 
        this.setState({ 
          checkgrid:"grid-1"
        
      });
      }
      else if (6 <= hour && hour < 12)
      {
        this.setState({ 
          checkgrid:"grid-2"
        });
         
      }
      else if (12 <= hour && hour < 18)
      {
        this.setState({ 
          checkgrid:"grid-3"
        });
      }
      else 
      {
        this.setState({ 
          checkgrid:"grid-4"
        });
      }
    }

    scrollToTop() {
      scroll.scrollToTop();
    }
    scrollTo() {
      scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    }
    scrollToWithContainer() {

      let goToContainer = new Promise((resolve, reject) => {
  
        Events.scrollEvent.register('end', () => {
          resolve();
          Events.scrollEvent.remove('end');
        });
  
        scroller.scrollTo('scroll-container', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
  
      });
  
      goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        }));
    }
    //refresing the clock
    componentDidMount() {
      this.timerID = setInterval(
        () => this.changetext(),
        1000
      );

      this.timerID = setInterval(
        () => this.changebackround(),
        1000
      );
      this.timerID = setInterval(
        () => this.changegrid(),
        1000
      );
      Events.scrollEvent.register('begin', function () {
        console.log("begin", arguments);
      });
  
      Events.scrollEvent.register('end', function () {
        console.log("end", arguments);
      });
    }
    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      this.changetext();

    }
  
  render(){
        return (
      <div className={this.state.changeback} >
        <div className = {this.state.checkgrid}>
          <Container className = "cont1"expand = "lg">

            
              <Navbar bg="trasparent" expand="lg" className="px-0" >
                    <Navbar.Brand >
                    <div  style={{background:this.state.changeback}} className="Content">
                    <img className = "App-logo"style={{picturecolor:this.state.color2}} src={this.state.logo} alt="Logo" />
                  </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav" className="mr-sm-2">
                            <Nav className="ml-auto">
                            <Popup trigger={<button style={{color:this.state.color1}} className="menubutt"> ABOUT</button>}
                            position="center center" 
                            modal
                            closeOnDocumentClick >
                              <div className="schedule">
 

                                <Element  className="aboutlemon" >
                                  <h2 className = "shed">ABOUT LEMONI RADIO </h2> 
                                  <br/>         


                                  Lemoni Radio was born out of the need for a more romantic, nostalgic, musically substantial and expressive radio station. 
                                  A radio station whose airtime is filled not with continuous advertising, but with voices and music which actually have something to say. 
                                  A radio station which is not moulded out of existing and repetitively distributed playlists, but from songs that we consider to be genuinely beautiful and worth listening to. 
                                  Moreover, we believe that our radio station should help local radio producers grow and flourish. 
                                  <br/>
                                  <br/>
                                  A traditional Cypriot song refers to Cyprus as the Land of the Lemon Tree. 
                                  And now, through the internet, a lemon seed has been planted to allow this to thrive further! We want to play sounds from across the world and at the same time reach out to every corner of the 
                                  earth that embraces melody, rhythm and harmony. Just as the world wide web is global, so is music. At Lemoni Radio our vision is to create a radio station which furnishes listeners with music, 
                                  knowledge, alternative perspectives and the art of expressiveness, while doing justice to the artists who composed the songs which have provided us with the aesthetic of music and an essence of 
                                  life.
                                   <br/>
                                   <br/>
                                   This is music which is uninterrupted by commercial breaks; this is music which lives within its listeners and develops along with them, comprising an eclectic range of multicultural, 
                                  alluring and bold sounds from across the decades, represented within four distinctive music zones throughout the day; essentially four different moods, which change on a daily basis, 
                                  and adapt according to seasonal changes and ongoing events. 
                                  <br/>
                                  <br/>
                                  Through this, the zones still remain faithful to their identity and are clearly defined. Specifically,the four zones are Energetic, 
                                  Mellow, Twilight, Deep. Lemoni Radio is a musical platform upon which a variety of tastes are catered for through programmes which have something distinctive and special to offer.
                                   This can range from thematic musical content, to philosophical and cultural contributions from invited guests. 
                                {/* */}

                              </Element>
                              </div>
                          </Popup>
                            <Popup trigger={<button className="menubutt" style={{color:this.state.color1}}> SCHEDULE</button>}
                            position="right center" 
                            modal
                            closeOnDocumentClick>
                             <Schedule/>
                              
                          </Popup>
                          { <Popup trigger={<button className="menubutt" style={{color:this.state.color1}}>SHOWS</button>}
                          position="right center" 
                          modal
                          closeOnDocumentClick>
                            <Producers/>
                        </Popup> }

                          {<Popup trigger={<button className="menubutt" style={{color:this.state.color1}}>SUPPORT</button>}
                            position="right center" 
                            modal
                            closeOnDocumentClick>
                              <div className="donateto">
                                <div className="aboutlemon">
                                <h2  className = "shed" >SHOW LOVE AND DONATE NOW</h2>
                                <h4 className = "subshed">We rely on you to keep streaming </h4>
                                <br/>
                                <p>
                                Our whole effort and commitment is to create a radio that respects our audience, that audience which grew tired of common , neurotic radio stations with persistent ads , jingles , that  focuses on totally irrelevant issues and relentless promotion of products of every sort. If you belong in that audience who loves this kind of radio, that longs to listen to more of it , that appreciates something original , organic , free and you believe that Lemoni should exist , then our commitment is that all support will go towards improving our  radio.                          
                                </p>
                                <br/>
                                <Button className="suppbut" variant="light" href="https://www.paypal.com/donate/?hosted_button_id=G6WVFGXZUY8U4&fbclid=IwAR17Byj-ups5Wxz0R2qqBMesQF5UGhcMMUf-chfYM5yAOqqVQkcFfTmhc34" target="blank">KEEP STREAMING</Button>
                                </div>
                              </div>
                          </Popup>}
                          
                       
                      </Nav>
                    </Navbar.Collapse>
            </Navbar>          
          </Container>


        <Container className = "cont1">
        <Row>
          <Col md={5} className = "px-0">
          <Player >

          </Player>
          </Col>
        </Row>
        <Row className = "stayput">
          <Col  md={5} className = "px-0 my-5">              
                <Zonetxt/>
          </Col>

          <Col md={{ span: 5, offset: 1 }} className = "px-0 h-100 d-flex flex-column ">
                <div className="murmurcont"  style = {{color:this.state.color2}} >
            
                  <p style = {{color:this.state.color2}}className="murmur">MURMUR BOX</p>
                    
                  <iframe  className="mur" src="https://www5.cbox.ws/box/?boxid=918315&boxtag=bfr6Pj" width="100%" height="400px"  
                   allowtransparency="yes" allow="autoplay" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="yes" title="myFrame" > </iframe>	

                </div>
               
          </Col>
          <Col md={1}>
          <SocialFollow />

          </Col>
        </Row>
      </Container>


      
<Container>
          <Row>
            <Col  md={12} className = "px-0">
                <footer className="App-footer">
                  <div className="footerText">
                    <p style={{color:this.state.color2 }}>© 2020, Lemoni Radio </p>
                  </div>        
                </footer>
            </Col>
          </Row>
      </Container>
      </div>
      </div>

    );
  }
}

export default App;
