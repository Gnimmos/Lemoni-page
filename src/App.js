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
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 



class App extends React.Component {
    //changing backrounds
    constructor(props){
      super(props);
    
    
      this.state = {
          color1: '#0e2539',
          color2: '#7f4098',
          changeback :"App",
          checkgrid:"grid",
          logo : logo1,
    
      };
       //binding the functions to the class
  this.changetext = this.changetext.bind(this);
  this.changebackround = this.changebackround.bind(this);
  this.changegrid = this.changegrid.bind(this);
  this.scrollToTop = this.scrollToTop.bind(this);

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
        <header className="App-header" >
            <div  style={{background:this.state.changeback}} className="Content">
               <img className = "App-logo"style={{picturecolor:this.state.color2}} src={this.state.logo} alt="Logo" />
            </div>
            <div className="Menubar">
              <Popup trigger={<button style={{color:this.state.color1}} className="about"> ABOUT</button>}
                position="right center" 
                modal
                closeOnDocumentClick>
                  <div className="aboutlemoni">

                    <Element style={{color:this.state.color1}} className="aboutlemon" ><h7>ABOUT LEMONI RADIO </h7>  <br/>         



                    Το Λεμονι βγήκε απο την ανάγκη για ένα ραδιόφωνο πιο ρομαντικό, πιο παλιό, πιο ουσιαστικά μουσικό και εκφραστικό. Ελέυθερο. Χωρίς συνεχόμενες διαφημίσεις. Χωρις φωνές που δεν έχουν κάτι να προσθέσουν στον ήχο. Με τραγούδια και μουσικές που δεν βγήκαν από καλούπια ή δοσμένα playlist αλλά με τραγούδια που θεωρούμε όμορφα και οτι αξίζουν να ακουστούν. Θεωρούμε ότι το ραδιόφωνο μας πρέπει να προωθεί την ντόπια παραγωγή μουσικής. Από τη “Γη της Λεμονιάς” , μέσω του διαδικτύου να της δίνει βήμα. Θέλουμε, ταυτόχρονα, να δίνει ακούσματα από όλο τον κόσμο , από κάθε γωνιά της γης η οποία παράγει μελωδία , ρυθμό και αρμονία. Το διαδίκτυο είναι παγκόσμιο και το ίδιο και η μουσική.
                    <br/>
                    Στο Λεμονι όραμα μας είναι αν δημιουργήσουμε ενα ραδιόφωνο το οποίο να εχει να δώσει μουσική, γνώση, εναλλακτικούς τρόπους σκέψης και έκφρασης και άλλα στον ακροατη αλλά και στους καλλιτέχνες που δημιουργούνε τους ήχους που δίνουν γευση στην ζωή μας. Μουσική που δεν διακόπτεται από διαφημιστικά διαλείμματα. Μουσική που ζεί και εξελίσσεται μαζί με τους ακροατές της. Τέσσερις μουσικές ζώνες όπου η μουσική είναι πολυφασματική, πολυπολιτισμική, ελκυστική και περιπετειώδης στο άκουσμα, από όλες τις εποχές και όλες τις χρονολογίες. 4 διαφορετικές διαθέσεις οι οποίες αλλάζουν και προσαρμόζονται αναλόγως μέρας, εποχής και γεγονότων. Παραμένουν όμως πιστές στον ορισμούς τους. Energetic, Mellow Twilight και Deep.
                    <br/>
                    Το Λεμόνι είναι μια μουσική πλατφόρμα πάνω στην οποία έρχονται και αποκτούν γεύση διάφορα ακούσματα απο τις εκπομπές οι οποίες έχουν κάτι το πολύ ιδιαίτερο να προσφέρουν με περιεχόμενο μουσικό , θεματολογικό ή φιλοσοφικό μέχρι ένθετα και ατάκες απο την καθημερινότητα μας..
                    <br/>
                    <br/>
                    <br/>
                    Λεμόνι.<br/>
                    Γεύση στον ήχο.
                    <br/>
                    TEST MODE<br/>
                    Τι σημαίνει?<br/>
                    Σημαίνει οτι ακόμα δουλεύουμε σε πολλά πράγματα (Τεχνικά, ροή, εξοπλισμός, συνεργάτες, ψυχολογικά, υπαρξιακά, οικονομικά, δημόσια έργα, μετακομίσεις, αλλαγές διάθεσης, ορμόνες, κ.τ.λ.), αλλά μέχρι τότε, δίνουμε μουσική και εκπομπές, χωρίς διαφημίσεις σε όσους έχουν την τόλμη να μας ακούνε.
                    Πότε θα βγούμε από το TEST MODE
                    Όταν αυτό που θα έχουμε να προσφέρουμε στους ακροατές , θα είναι όπως το φανταστήκαμε.

                  </Element>
                  </div>
              </Popup>
              <Popup trigger={<button className="support" style={{color:this.state.color1}}> SCHEDULE</button>}
                position="right center" 
                modal
                closeOnDocumentClick>
                  <div>
                    <h2 style={{color:this.state.color2}}>ABOUT LEMONI RADIO</h2>
                    Do something to support

                  </div>
              </Popup>
              <Popup trigger={<button className="support" style={{color:this.state.color1}}> SUPPORT</button>}
                position="right center" 
                modal
                closeOnDocumentClick>
                  <div>
                    <h2 style={{color:this.state.color2}}>ABOUT LEMONI RADIO</h2>
                    Do something to support

                  </div>
              </Popup>
              <Popup trigger={<button className="contact" style={{color:this.state.color1}}> CONTACT</button>}
              position="right center" 
              modal
              closeOnDocumentClick>
                <div>
                  <div class="modal-content container" style={{color:this.state.color2}}>
                      <h1>CONTACT LEMONI RADIO</h1>
                      <p></p>
                      <p></p>
                      <h1>TALK TO US!</h1>
                      <form  className="contact-form" action="contactform.php" method="POST">
                        <input type="text" name="name"  placeholder="NAME" class="blockclass input-txt"/>
                        <input type="email" name="email" placeholder="EMAIL" class="blockclass input-txt"/>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="MESSAGE" class="blockclass input-txt"></textarea>
                        <button type="submit" name="submit" class="blockclass">Submit</button>

                      </form>



                    </div>
              </div>
            </Popup>
            </div>
        </header>


        <div className = "App-body">
              <div className="Playerloc">
              <Player  style={{color:this.state.color2}}>

              </Player>
              </div>
              <div className = "zonelocation">
                <Zones></Zones>
              </div>
              <div className="murmurcont">
                <div  style={{color:this.state.color2}}   >
            
                    <p style={{color:this.state.color2}}className="murmur">MURMUR BOX</p>
                    
                    <iframe   src="https://www5.cbox.ws/box/?boxid=918315&boxtag=bfr6Pj" width="100%" height="410px"   allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" title="myFrame"> </iframe>	
                    <faFacebookF icon={['fab', 'facebook-f']} />
                  </div>
                    
                
            </div>
        </div>


        <footer className="App-footer">

        <p id="footerText"style={{color:this.state.color2}}>© 2020, Lemoni Radio </p>
        
      </footer>
      </div>
      </div>

    );
  }
}

export default App;
