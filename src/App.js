import React from 'react';
import zone1 from './logos/sponsor-banners-deep-zone.png';
import zone2 from './logos/sponsor-banners-energetic-zone.png';
import zone3 from './logos/sponsor-banners-mellow-zone.png';
import zone4 from './logos/sponsor-banners-twilight-zone.png';
import './Zone.css';import Popup from "reactjs-popup";
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
import 'reactjs-popup/dist/index.css';
import Media from 'react-bootstrap/Media';
import Huston from './lemoni_producers/giorgosc.jpg';
import Diana from './lemoni_producers/diana.jpg';
import Constantinos from './lemoni_producers/constantinos.jpg';
import Andy from './lemoni_producers/andypervinca.jpg';
import Kenneth from './lemoni_producers/kenneth.jpg';
import Kyriakos from './lemoni_producers/kyriakos.jpg';
import Vangelis from './lemoni_producers/vaggelis.jpg'
import Yasprod from './lemoni_producers/yass_producers.gif';
import Konst from './lemoni_producers/konstantinos.jpg';
import Orestis from './lemoni_producers/orestes.jpg';
import talal from './lemoni_producers/talal.jpg';
import unkown from './lemoni_producers/unknown.jpg'
import Canna from './Sponsors/cannahealth.png';
import ola from './Sponsors/oladj.png';
import crative from './Sponsors/creativeuniverse.png';
import Ghofi from './Sponsors/Ghofi.png';
import Yank from './lemoni_producers/yiangos.jpg';
import hex from './lemoni_producers/hex.gif';
import Unnamed from './lemoni_producers/unnamed.jpg'
import magos from './Sponsors/elephant.png'


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
          showzone: false,
          zone: "",
    
      };
      
       //binding the functions to the class
  this.changetext = this.changetext.bind(this);
  this.changebackround = this.changebackround.bind(this);
  this.changegrid = this.changegrid.bind(this);
  this.scrollToTop = this.scrollToTop.bind(this);
  this.handleClick = this.handleClick.bind(this);
  
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
      this.timerID = setInterval(
        () => this.changezone(),
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
      this.changezone();
    }
  
  render(){
        return (
      <div className={this.state.changeback} >
        <div className = {this.state.checkgrid}>
          <div className = "placeall">
          <Container className = "cont1"expand = "lg">

            
              <Navbar bg="trasparent" expand="lg" className="px-0" >
                    <Navbar.Brand >
                    <div  style={{background:this.state.changeback}} className="Content">
                    <img className = "App-logo"style={{picturecolor:this.state.color2}} src={this.state.logo} alt="Logo" />
                  </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav" className=" ml-auto ">
                            <Nav className="ml-auto">
                            <Popup trigger={<button style={{color:this.state.color1}} className="menubutt"> ABOUT</button>}
                            position="center center" 
                            modal
                            closeOnDocumentClick >
                                 {close => (
                            <div className="schedule">
                                        <button className="close" onClick={close}>
                                          &times;
                                        </button>  

                                <Element  className="aboutlemon" >
                                  <h2 className = "shed">ABOUT LEMONI RADIO </h2> 
                                  <br/>         
                                  Lemoni Radio was born out of the need for a more romantic, nostalgic, musically substantial and expressive radio station. A radio station whose airtime is filled not with continuous advertising,
                                  but with voices and music which actually have something to say. A radio station which is not moulded out of existing and repetitively distributed playlists, 
                                  but from songs that we consider to be genuinely beautiful and worth listening to. Moreover, we believe that our radio station should help local radio producers grow and flourish. 
                                  <br/>
                                  <br/>
                                  A traditional Cypriot song refers to Cyprus as the Land of the Lemon Tree. And now, through the internet, a lemon seed has been planted to allow this to thrive further! 
                                  We want to play sounds from across the world and at the same time reach out to every corner of the earth that embraces melody, rhythm and harmony. Just as the world wide web is global, so is music. 
                                  At Lemoni Radio our vision is to create a radio station which furnishes listeners with music, knowledge,
                                  alternative perspectives and the art of expressiveness, while doing justice to the artists who composed the songs which have provided us with the aesthetic of music and an essence of life. 
                                   <br/>
                                   <br/>
                                   This is music which is uninterrupted by commercial breaks; this is music which lives within its listeners and develops along with them, comprising an eclectic range of multicultural,
                                    alluring and bold sounds from across the decades, 
                                   represented within four distinctive music zones throughout the day; essentially four different moods, which change on a daily basis, and adapt according to seasonal changes and ongoing events. 
                                  <br/>
                                  <br/>
                                  Through this, the zones still remain faithful to their identity and are clearly defined. Specifically,the four zones are Energetic, 
                                  Mellow, Twilight, Deep. Lemoni Radio is a musical platform upon which a variety of tastes are catered for through programmes which have something distinctive and 
                                  special to offer. This can range from thematic musical content, to philosophical and cultural contributions from invited guests. 
                                {/* */}

                              </Element>
                              </div>
                                 )}
                          </Popup>
                            <Popup trigger={<button className="menubutt" style={{color:this.state.color1}}> SCHEDULE</button>}
                            position="right center" 
                            modal
                            closeOnDocumentClick>
                                                                {close => (
                           
                                               <div className="schedule">
                                               <button className="close" onClick={close}>
                                          &times;
                                        </button>  
                                               <div className="aboutlemon">                                              <Row>
                                                                         <Col md = {12}>
                                                                       <h2  className="shed">SCHEDULE</h2>
                                                                       <br/>
                                                                       <br/>
                                                                       </Col>
                                                                       </Row>
                                                                   
                                                                   <Row md = {4}>
                                   
                                                                       <Col lg={3} className=" h-100 d-flex flex-column ">
                                   
                                                                           <h4 className="Scedutitle">MONDAYS</h4>
                                                                           <p style={{color:"#76cdd9"}}> 
                                   
                                                                           16:00 - 18:00 <br/> 
                                                                           YAS Show <br/> 
                                                                           </p>
                                                                           <p style={{color:"#ec7323"}}> 
                                                                           20:00 - 21:00 <br/>
                                                                           Manifesto<br/>
                                                                           </p>

                                                                           <h4 className="Scedutitle">TUESDAYS</h4>
                                                                           <p style={{color:"#76cdd9"}}> 
                                   
                                                                           16:00 - 18:00 <br/> 
                                                                           Όλα ΖΕΝ<br/> 
                                                                           </p>
                                                                           <p style={{color:"#ec7323"}}> 
                                   
                                                                           18:00 - 20:00 <br/>
                                                                           Κυτταρίνη και άλλες Ουσίες<br/>
                                                                           </p>
                                                                           <p style={{color:"#ec7323"}}> 
                                                                           20:00 - 22:00 <br/>
                                                                           Hexagon<br/>
                                                                           </p>
                                                                           <p style={{color:"#ec7323"}}> 
                                                                           22:00 - 00:00 <br/>
                                                                           Technical Midweek<br/> Issues<br/>
                                                                           </p>
                                                                       </Col>
                                                                       <Col lg={3} className=" h-100 d-flex flex-column ">
                                                                       <h4 className="Scedutitle">WEDNESDAYS</h4>
                                                                       <p style={{color:"#ec7323"}}> 
                                                                           18:00 - 20:00 <br/>
                                                                           Kenny Sounds<br/>
                                                                           </p>
                                                                           <p style={{color:"#ec7323"}}> 
                                                                           20:00 - 22:00 <br/>
                                                                           Ήχοι της Γειτονιάς<br/>
                                                                           </p>


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
                                                                           The One with the Metal<br/>
                                                                           </p>
                                                                       </Col> 
                                   
                                   
                                   
                                                                       <Col lg={3} className=" h-100 d-flex flex-column ">
                                                                       <h4 className="Scedutitle">FRIDAYS</h4>
                                                                       <p style={{color:"#76cdd9"}}> 
                                                                           16:20 - 19:20 <br/> 
                                                                           Λεμονόπιτα με Τσίλι <br/> 
                                                                           </p>
                                                                           <p style={{color:"#ec7323"}}> 
                                                                           20:00 - 22:00 <br/>
                                                                           Voyage<br/>
                                                                           </p>

                                                                           <h4 className="Scedutitle">SATURDAY</h4>
                                                                           <p style={{color:"#76cdd9"}}> 
                                                                           12:00 - 14:00 <br/>
                                                                           Ρεμπέτικη Γεύση<br/>
                                                                           </p>
                                                                           <p style={{color:"#ec7323"}}> 
                                                                           21:30 - 00:00 <br/>
                                                                           Misfits <br/>
                                                                           </p>
                                                                           
                                                                   </Col>
                                                                  </Row> 
                                                                  
                                                                  </div>
                                                                  </div>
                                 )}
                          </Popup>
                          { <Popup trigger={<button className="menubutt" style={{color:this.state.color1}}>SHOWS</button>}
                          position="right center" 
                          modal
                          closeOnDocumentClick>
                            
                            {close => (
                                        <div className="schedule">
                                          <button className="close" onClick={close}>
                                          &times;
                                        </button>  
                                        <div className="aboutlemon">                                   
                                        <Row>
                                                                    <Col md = {12}>
                                                                  <h2  className="shed">SHOWS</h2>
                                                                  <br/>
                                                                  <br/>
                                                                  </Col>
                                                                  </Row>
                                                              <Row  md={4}>
                              
                                                              <Col md={4} className="   h-100 d-flex flex-column ">
                                                                    <Media>
                                                                      <Media.Body>
                                                                      <img
                                                                        width={150}
                                                                        height={150}
                                                                        className="ml-3"
                                                                        src={Yasprod}
                                                                        alt="Generic placeholder"
                                                                      />
                                                                      <br/>
                                                                      <br/>
                                                                       <h5>YAS-show</h5>

                                                                        <h5 className="names">PHLIP-PETRA- JONATAS</h5>
                                                                        <p className="showname">
                                                                        Join us for talks on stories related to Sustainable Development Goals and amazing topical music on our YAS! Show while enjoying good music. The Youth for Action and Sustainability (YAS) team is made up of European Solidarity Corps volunteers from all around Europe and  is working under the YEU organization in Cyprus, Nicosia. 
                                                                        </p>
                                                                      </Media.Body>
                              
                                                                    </Media> 
                                                                  </Col>
                                                                  <Col md={4} className="  h-100 d-flex flex-column ">
                                                                    <Media>
                                                                      <Media.Body>
                                                                      <img
                                                                        width={150}
                                                                        height={150}
                                                                        className="ml-3"
                                                                        src={Vangelis}
                                                                        alt="Generic placeholder"
                                                                      />
                                                                      <br/>
                                                                      <br/>
                                                                        <h5>Manifesto</h5>

                                                                        <h5 className="names">VAGGELIS</h5>
                                                                        <p className="showname">
                                                                        A radiophonic taking of responsibility of musical and literature attacks, as a response to the violence of stupidity and correctness. My name is Vaggelis and I was clean of radio for 5 years and I was not well. In October 2020 i couldn't take it anymore. I had a relapse. As the volume fader goes up, radiaine is flowing through my brain again. I feel as if I'm flying over the city and I am left with a silly grin, until next time.
</p>
                                                                      </Media.Body>
                              
                                                                    </Media> 
                                                                  </Col>
                              
                                                                  <Col md={4} className=" h-100 d-flex flex-column ">
                                                                    <Media>
                                                                      <Media.Body>
                                                                      <img
                                                                        width={150}
                                                                        height={150}
                                                                        className="ml-3"
                                                                        src={Kyriakos}
                                                                        alt="Generic placeholder"
                                                                      />
                                                                                                                                            <br/>
                                                                      <br/>
                                                                        <h5>Ola zen</h5>
                                                                        <h5 className="names">KYRIACOS</h5>
                                                                        <p className="showname">
                                                                        "Ola zen" (EN. Everything Zen) refreshes your afternoons, with Kyriakos Platos, in zen mood, on the microphone. Every week he delves into a range of European music as well as into various topics on life, people and in general what revolves around us and within us. The one and only stimulus is the songs and their music, with their light and melodic rhythms. Just a few conversations and plenty of music! 
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
                                                                    width={150}
                                                                    height={150}
                                                                    className="ml-3"
                                                                    src={Konst}
                                                                    alt="Generic placeholder"
                                                                  />
                                                                                                                                        <br/>
                                                                      <br/>
                                                                    <h5>Κυτταρίνη κι άλλες Ουσίες</h5>
                                                                    <h5 className="names">CONSTANTINOS K.</h5>
                                                                    <p className="showname">
                                                                    A show which loves the Arts and culture. The programme tries to fill the world with cellulose - the most widespread organic union in the world, since it is the structure of the plant polysaccharide, comprising the main ingredient of the cellular wall of plant cells. The long chains of cellulose are connected by hydrogen bonds, shaping such bonds, which in turn are intertwined by very strong mesh. It is from this cellulose that books are made. 
                                                                    </p>
                                                                  </Media.Body>
                              
                                                                </Media> 
                                                              </Col>
                                                              <Col md={4} className=" h-100 d-flex flex-column ">
                                                                <Media>
                                                                  <Media.Body>
                                                                  <img
                                                                    width={150}
                                                                    height={150}
                                                                    className="ml-3"
                                                                    src={Andy}
                                                                    alt="Generic placeholder"
                                                                  />
                                                                                                                                        <br/>
                                                                      <br/>
                                                                    <h5>Technical Midweek Issues</h5>
                                                                    <h5 className="names">ULISSES</h5>

                                                                    <p className="showname">
                                                                    Technical Midweek Issues radio show, is a project there to present the electronic music underground scene with releases mostly coming out on vinyl and sounds that stay in time into electronic dance music from genres of deep house, techno, minimal, etc. 
                                                                    </p>
                                                                  </Media.Body>
                              
                                                                </Media> 
                                                              </Col>
                              
                                                              <Col md={4} className=" h-100 d-flex flex-column ">
                                                                <Media>
                                                                  <Media.Body>
                                                                  <img
                                                                    width={150}
                                                                    height={150}
                                                                    className="ml-3"
                                                                    src={Kenneth}
                                                                    alt="Generic placeholder"
                                                                  />
                                                                                                                                        <br/>
                                                                      <br/>
                                                                    <h5>Kenny sounds</h5>
                                                                    <h5 className="names">KENNY</h5>

                                                                    <p className="showname">
                                                                    “kenny sounds” bring you alternative sounds from over 40 years of post-punk and new wave music which changed the face of music back in the late 70's, through to the influences it had in the 80's and 90's, as well as how it served to shape alternative music in the new millennium. A four decade musical journey which alternates between, or combines the raw, the energetic, the melodic, the simple, the poetic.
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
                                                                    width={150}
                                                                    height={150}
                                                                    className="ml-3"
                                                                    src={Orestis}
                                                                    alt="Generic placeholder"
                                                                  />
                                                                                                                                        <br/>
                                                                      <br/>
                                                                    <h5>Sounds of the neighbourhood</h5>
                                                                    <h5 className="names">ORESTIS</h5>

                                                                    <p className="showname">
                                                                    Orestis lives in Nicosia with two cats. Every wednesday he prepares and hosts “Sounds of Neighbourhood” with music from all over the Meditteranean. From folk to electronic, metal and even children’s music, as well as crazy crossovers and mixes.
                                                                    </p>
                                                                  </Media.Body>
                              
                                                                </Media> 
                                                              </Col>
                                                              <Col md={4} className=" h-100 d-flex flex-column ">
                                                                <Media>
                                                                  <Media.Body>
                                                                  <img
                                                                    width={150}
                                                                    height={150}
                                                                    className="ml-3"
                                                                    src={talal}
                                                                    alt="Generic placeholder"
                                                                  />
                                                                                                                                        <br/>
                                                                      <br/>
                                                                    <h5>Music is memory</h5>
                                                                    <h5 className="names">TALAL</h5>

                                                                    <p className="showname">
                                                                    Memory registers and associates music with events and times of our lives.
Join Talal as he takes us down these memory isles every Thursday from 6p.m Cyprus time by playing and talking about music from the 80s, 90s, and 00s, the memories that music brings back for him and taking listeners’ memories in, through Lemoni’s Murmur Box. 
 </p>
                                                                  </Media.Body>
                              
                                                                </Media> 
                                                              </Col>                           
                                                              <Col md={4} className=" h-100 d-flex flex-column ">
                                                                <Media>
                                                                  <Media.Body>
                                                                  <img
                                                                    width={150}
                                                                    height={150}
                                                                    className="ml-3"
                                                                    src={unkown}
                                                                    alt="Generic placeholder"
                                                                  />
                                                                                                                                        <br/>
                                                                      <br/>
                                                                    <h5>The Blackout Show</h5>
                                                                    <h5 className="names">MIKE</h5>

                                                                    <p className="showname">
                                                                    Mike Pougounas is a singer/songwriter, published author and awarded film director that writes for music magazines and  since 2012 is hosting a The Blackout Radio Show for U.S. Radio KOWS 92,5FM which is rebroadcasted in internet stations in Canada , UK , Greece and Lemoni in Cyprus.
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
                                    width={150}
                                    height={150}
                                    className="ml-3"
                                    src={Constantinos}
                                    alt="Generic placeholder"
                                  />
                                                                                                        <br/>
                                                                      <br/>
                                    <h5>The One with the Metal </h5>
                                    <h5 className="names">CONSTANTINOS</h5>

                                    <p className="showname">
                                    'The One with the Metal' celebrates half a century of music in all its glory, peppered with fun facts, legends, true stories, and occasional guests from the Cypriot Metal scene.                                    </p>
                                  </Media.Body>

                                </Media> 
                              </Col>
                              <Col md={4} className=" h-100 d-flex flex-column ">
                                <Media>
                                  <Media.Body>
                                  <img
                                    width={150}
                                    height={150}
                                    className="ml-3"
                                    src={Huston}
                                    alt="Generic placeholder"
                                  />
                                                                                                        <br/>
                                                                      <br/>
                                    <h5>Chilli Lemon Pie</h5>
                                    <h5 className="names">GEORGE</h5>

                                    <p className="showname">
                                    Music Festivals and phenomena bring together a mix of people. These are events where new life memories  and often history are created. These are events where nationality, religious  and  political beliefs come second, while the love for music prevails and transforms most participants in universal citizens. 
                                      Chili Lemon Pie takes a look into these important  music events.
                                      </p>
                                  </Media.Body>

                                </Media> 
                              </Col>                           
                              <Col md={4} className=" h-100 d-flex flex-column ">
                                <Media>
                                  <Media.Body>
                                  <img
                                    width={150}
                                    height={150}
                                    className="ml-3"
                                    src={Diana}
                                    alt="Generic placeholder"
                                  />
                                                                                                        <br/>
                                                                      <br/>
                                    <h5>Voyage </h5>
                                    <h5 className="names">DIANA</h5>

                                    <p className="showname">
                                    The mission of the 'Voyage' show is to involve you in the rapidly expanding new world of Russian music, to talk about news from all over the world, including on our lovely island, and basically just to have a good time together!
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
                                    width={150}
                                    height={150}
                                    className="ml-3"
                                    src={hex}
                                    alt="Generic placeholder"
                                  />
                                                                                                        <br/>
                                                                      <br/>
                                    <h5>Hexagon </h5>
                                    <h5 className="names">JENNY & ALEX </h5>

                                    <p className="showname"> 
                                    Hexagon are a Collective group of DJs sharing the same vision of showcasing the many angles of Drum & Bass under 1 roof. In our weekly show we will be exploring the world of drum and bass, mixing tunes and taking you through the important record labels and artists that created the genre, bringing guest DJs and Presenting unsigned talent.
                                 </p>
                                  </Media.Body>

                                </Media> 
                              </Col>
                              <Col md={4} className=" h-100 d-flex flex-column ">
                                <Media>
                                  <Media.Body>
                                  <img
                                    width={150}
                                    height={150}
                                    className="ml-3"
                                    src={Yank}
                                    alt="Generic placeholder"
                                  />
                                                                                                        <br/>
                                                                      <br/>
                                    <h5>Taste of Rembetiko</h5>
                                    <h5 className="names">YIANGOS</h5>

                                    <p className="showname"> 
                                    For those who remember radio stations of the 80s in Cyprus, you might remember Radio Karavas, and its soul, Yiangos Yiangou, who will treat us to some Rembetiko goodies on Lemoni internet space. 
Taste Of Rembetiko; with passion , authenticity and love for music.

                                      </p>
                                  </Media.Body>

                                </Media> 
                              </Col>                           
                              <Col md={4} className=" h-100 d-flex flex-column ">
                                <Media>
                                  <Media.Body>
                                  <img
                                    width={150}
                                    height={150}
                                    className="ml-3"
                                    src={Unnamed}
                                    alt="Generic placeholder"
                                  />
                                                                                                        <br/>
                                                                      <br/>
                                    <h5>Misfits </h5>
                                    <h5 className="names">DJ Sets</h5>

                                    <p className="showname">
                                    Many DJs have been close to Lemoni since it started broadcasting in TEST MODE. All these friends show their love of DJing and musical expression through weekly sets under the Misfits show. Tune in for some amazing tunes and equally inspiring mixes.
                                     </p>
                                  </Media.Body>

                                </Media> 
                              </Col>
                              </Row> 
                              <br/>

                              <Row className="justify-content-md-center" md={4}>
                              

                              </Row> 
                                              </div>
                                              </div>)}
                        </Popup> }

                          {<Popup trigger={<button className="menubutt" style={{color:this.state.color1}}>SUPPORT</button>}
                            position="right center" 
                            modal
                            closeOnDocumentClick>
                            {close => (
                              <div className="schedule">
                                        <button className="close" onClick={close}>
                                          &times;
                                        </button>  
                                <div className="aboutlemon">
                                <h2  className = "shed" >SHOW LOVE AND DONATE NOW</h2>
                                <h4 className = "subshed">We rely on you to keep streaming </h4>
                                <br/>
                                <p>
                                Our whole effort and commitment is to create a radio that respects our audience, that audience which grew tired of common , neurotic radio stations with persistent ads , jingles , that  focuses on totally irrelevant issues and relentless promotion of products of every sort. If you belong in that audience who loves this kind of radio, that longs to listen to more of it , that appreciates something original , organic , free and you believe that Lemoni should exist , then our commitment is that all support will go towards improving our  radio.                          
                                </p>
                                <br/>
                                <Button className="suppbut" variant="light" href="https://www.paypal.com/donate/?hosted_button_id=G6WVFGXZUY8U4&fbclid=IwAR17Byj-ups5Wxz0R2qqBMesQF5UGhcMMUf-chfYM5yAOqqVQkcFfTmhc34" target="blank">KEEP STREAMING</Button>
                                <br/>
                                <br/>
                             

                                </div>
                                <Container>
                                  <Row>
                                    <Col md = {12} className ="px-5">
                                      <h2 className = "shed">THANK YOU</h2></Col>
                                  </Row>
                                <Row md={4}>
                                  <Col md={1} className = "px-5" target= "blank">
                                    <a href = "https://cannahealthamsterdam.com/">
                                  <img
                                                                        width={70}
                                                                        height={70}
                                                                        className="ml-3"
                                                                        src={Canna}
                                                                        alt="Generic placeholder"
                                                                      /></a>
                                  </Col>
                                <Col  md={{ span: 2, offset: 1 }}>
                                <a href = "https://oladj.com/"  target= "blank">
                                <img
                                                                        width={144}
                                                                        height={75.6}
                                                                        className="ml-3"
                                                                        src={ola}
                                                                        alt="Generic placeholder"
                                                                      /></a>
                                  </Col>
                                  <Col  md={{ span: 1, offset: 1 }}>
                                  <a href = "http://www.magoscarpets.com/" target= "blank">

                                  <img
                                                                        width={99}
                                                                        height={67.5}
                                                                        className="ml-3"
                                                                        src={magos}
                                                                        alt="Generic placeholder"
                                                                      /></a>
                                  </Col>
                                  
                                  <Col  md={{ span: 2, offset: 1 }}>
                                  <a href = "https://www.ghofi.com.cy/" target= "blank">

                                  <img
                                                                        width={132}
                                                                        height={69.3}
                                                                        className="ml-3"
                                                                        src={Ghofi}
                                                                        alt="Generic placeholder"
                                                                      /></a>
                                  </Col>
                                  <Col className = "px-5 my-3 " md={{ span: 4, }}>
                                  <a href = "http://sozmir.ru/"  target= "blank">

                                  <img
                                                                        width={236}
                                                                        height={40.12}
                                                                        className="ml-3"
                                                                        src={crative}
                                                                        alt="Generic placeholder"
                                                                      /></a>
                                  </Col>
                                  </Row>
                                  </Container>
                              </div>
                              )}
                          </Popup>}
                          
                       
                      </Nav>
                    </Navbar.Collapse>
            </Navbar>          
          </Container>


        <Container className = "cont1 adj">
        <Row>
          <Col md={5} className = "px-0">
          <Player >

          </Player>
          </Col>
        </Row>
        <Row className = "stayput">
          <Col  md={5} className = "px-0 my-5">              
              <div>
                <button className="txtandimg" onClick={() => this.setState({ showzone: !this.state.showzone })}>{this.state.showzone ?   <Zonetxt /> : <img className = "zone-logo" src={this.state.zone} alt="Logo" />
         }</button>
            </div>  
          </Col>

          <Col md={{ span: 5, offset: 1 }} className = "px-0 h-100 d-flex flex-column murmurcont ">
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


      
<Container className = "cont1">
          <Row>
            <Col  md={12} className = "px-0 ">
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
      </div>

    );
  }
}

export default App;
