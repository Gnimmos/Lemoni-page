import React from 'react';
import Popup from "reactjs-popup";
import Player from './Player'
import Zones from './Zone'
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
                    <Navbar.Brand href="#home ">
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
                            closeOnDocumentClick>
                              <div className="schedule">
 

                                <Element  className="aboutlemon" >
                                  <h2 className = "shed">ABOUT LEMONI RADIO </h2> 
                                  <br/>         



                                  Το Λεμονι βγήκε απο την ανάγκη για ένα ραδιόφωνο πιο ρομαντικό, πιο παλιό, πιο ουσιαστικά μουσικό και εκφραστικό. 
                                  Ελέυθερο. Χωρίς συνεχόμενες διαφημίσεις. Χωρις φωνές που δεν έχουν κάτι να προσθέσουν στον ήχο. 
                                  Με τραγούδια και μουσικές που δεν βγήκαν από καλούπια ή δοσμένα playlist αλλά με τραγούδια που θεωρούμε όμορφα και οτι αξίζουν να ακουστούν. 
                                  Θεωρούμε ότι το ραδιόφωνο μας πρέπει να προωθεί την ντόπια παραγωγή μουσικής. Από τη “Γη της Λεμονιάς”, μέσω του διαδικτύου να της δίνει βήμα. Θέλουμε, ταυτόχρονα,
                                  να δίνει ακούσματα από όλο τον κόσμο , από κάθε γωνιά της γης η οποία παράγει μελωδία , ρυθμό και αρμονία. Το διαδίκτυο είναι παγκόσμιο και το ίδιο και η μουσική. 
                                  Στο Λεμονι όραμα μας είναι αν δημιουργήσουμε ενα ραδιόφωνο το οποίο να εχει να δώσει μουσική, γνώση, εναλλακτικούς τρόπους σκέψης και έκφρασης και άλλα στον ακροατη 
                                  αλλά και στους καλλιτέχνες που δημιουργούνε τους ήχους που δίνουν γευση στην ζωή μας. Μουσική που δεν διακόπτεται από διαφημιστικά διαλείμματα. 
                                  Μουσική που ζεί και εξελίσσεται μαζί με τους ακροατές της. Τέσσερις μουσικές ζώνες όπου η μουσική είναι πολυφασματική, πολυπολιτισμική, ελκυστική και περιπετειώδης στο άκουσμα, 
                                  από όλες τις εποχές και όλες τις χρονολογίες. 4 διαφορετικές διαθέσεις οι οποίες αλλάζουν και προσαρμόζονται αναλόγως μέρας, εποχής και γεγονότων. Παραμένουν όμως πιστές στον 
                                  ορισμούς τους. Energetic, Mellow Twilight και Deep.  Το Λεμόνι είναι μια μουσική πλατφόρμα πάνω στην οποία έρχονται και αποκτούν γεύση διάφορα ακούσματα απο τις εκπομπές οι οποίες 
                                  έχουν κάτι το πολύ ιδιαίτερο να προσφέρουν με περιεχόμενο μουσικό, θεματολογικό ή φιλοσοφικό μέχρι ένθετα και ατάκες απο την καθημερινότητα μας. 

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
                                Όλη η προσπάθεια και η δέσμευσή μας, είναι να κάνουμε ένα ραδιόφωνο που να σέβεται το κοινό μας, αυτό το κοινό που κουράστηκε με τους συνήθεις, 
                                νευρωτικούς ραδιοφωνικούς ρυθμούς, τα επίμονα σήματα, τις κακές μουσικές, τις πολλές και ενοχλητικές διαφημίσεις, την επικέντρωση σε τελείως ανούσια θέματα 
                                και το ασταμάτητο κράξιμο πώλησης πάσης φύσεως προϊόντων. Αν είσαι σε αυτό το κοινό, που αγαπάει το ραδιόφωνο, που λαχταρά να ακούσει καλό ραδιόφωνο, 
                                που εκτιμάει το αυθεντικό, το οργανικό, το ελεύθερο… και πιστεύεις ότι πρέπει να υπάρχουμε και να ακουγόμαστε τότε η κάθε στήριξή σου, ο κάθε οβολός σου, είναι 
                                σημαντικά για μας! Το σίγουρο είναι ότι τα χρήματά σας, θα μας δίνουν τη δυνατότητα να κάνουμε όλο και καλύτερο ραδιόφωνο!                             
                                </p>
                                <br/>
                                <Button className="suppbut" variant="light" href="https://www.paypal.com/donate/?hosted_button_id=G6WVFGXZUY8U4&fbclid=IwAR17Byj-ups5Wxz0R2qqBMesQF5UGhcMMUf-chfYM5yAOqqVQkcFfTmhc34">KEEP STREAMING</Button>
                                </div>
                              </div>
                          </Popup>}
                          
                         { <Popup trigger={<button className="menubutt" style={{color:this.state.color1}}>PRODUCERS</button>}
                          position="right center" 
                          modal
                          closeOnDocumentClick>
                            <Producers/>
                        </Popup> }
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
        <Row>
          <Col  md={5} className = "px-0 my-5">              
                <Zonetxt/>
          </Col>

          <Col md={{ span: 5, offset: 1 }} className = "px-0 murmurcont h-100 d-flex flex-column ">
                <div className="murmurcont"  style = {{color:this.state.color2}} >
            
                  <p style = {{color:this.state.color2}}className="murmur">MURMUR BOX</p>
                    
                  <iframe  className="mur" src="https://www5.cbox.ws/box/?boxid=918315&boxtag=bfr6Pj" width="100%" height="220%"   allowtransparency="yes" allow="autoplay" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="auto" title="myFrame" > </iframe>	

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
