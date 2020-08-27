import React from 'react';
import Popup from "reactjs-popup";
import Player from './Player'
import './App.css';
import logo from './lemonilogoTR3.png'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




class App extends React.Component {
    //changing backrounds
    constructor(props){
      super(props);
    
    
      this.state = {
          color1: '#0e2539',
          color2: '#7f4098',
          changeback :"App",
    
      };
       //binding the functions to the class
  this.change1 = this.change1.bind(this);
  this.change2 = this.change2.bind(this);
  this.change = this.change.bind(this);
  this.scrollToTop = this.scrollToTop.bind(this);

}
    change1 (){
      var hours = new Date().getHours(); //Current Hours
      var hour = hours.toString();
      //Setting colors dipenting on time
      if (0 <= hour && hour < 6)
      { 
        this.setState({ 
        color2: '#0e2539'
      });
      }
      else if (6 <= hour && hour < 12)
      {
        this.setState({ 
          color2: '#5eb546'
  
        });
         
      }
      else if (12 <= hour && hour < 18)
      {
        this.setState({ 
          color2: '#d47097'
        });
      }
      else 
      {
        this.setState({ 
          color2: '#ec7323'      

        });
      }
    }
    change2 (){
      var hours = new Date().getHours(); //Current Hours
      var hour = hours.toString();
      //Setting colors dipenting on time
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
    change(){

      var hours = new Date().getHours(); //Current Hours
      var hour = hours.toString();
      //Setting colors dipenting on time
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
        () => this.change1(),
        1000
      );
      this.timerID = setInterval(
        () => this.change2(),
        1000
      );
      this.timerID = setInterval(
        () => this.change(),
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
      this.change1();
      this.change2();
    }
  
  render(){
        return (
      <div className={this.state.changeback} >

        <header className="App-header" >
        <div  style={{background:this.state.changeback}} className="Content">
        <img className = "App-logo"style={{picturecolor:this.state.color2}} src={logo} alt="Logo" />
        </div>
        <div className="Menubar">
        <Popup trigger={<button style={{color:this.state.color2}} className="about"> About</button>}
        position="right center" 
        modal
        closeOnDocumentClick>
          <div>

            <Element style={{color:this.state.color2}}>ABOUT LEMONI RADIO            



            Το Λεμονι βγήκε απο την ανάγκη για ένα ραδιόφωνο πιο ρομαντικό, πιο παλιό, πιο ουσιαστικά μουσικό και εκφραστικό. Ελέυθερο. Χωρίς συνεχόμενες διαφημίσεις. Χωρις φωνές που δεν έχουν κάτι να προσθέσουν στον ήχο. Με τραγούδια και μουσικές που δεν βγήκαν από καλούπια ή δοσμένα playlist αλλά με τραγούδια που θεωρούμε όμορφα και οτι αξίζουν να ακουστούν. Θεωρούμε ότι το ραδιόφωνο μας πρέπει να προωθεί την ντόπια παραγωγή μουσικής. Από τη “Γη της Λεμονιάς” , μέσω του διαδικτύου να της δίνει βήμα. Θέλουμε, ταυτόχρονα, να δίνει ακούσματα από όλο τον κόσμο , από κάθε γωνιά της γης η οποία παράγει μελωδία , ρυθμό και αρμονία. Το διαδίκτυο είναι παγκόσμιο και το ίδιο και η μουσική.

            Στο Λεμονι όραμα μας είναι αν δημιουργήσουμε ενα ραδιόφωνο το οποίο να εχει να δώσει μουσική, γνώση, εναλλακτικούς τρόπους σκέψης και έκφρασης και άλλα στον ακροατη αλλά και στους καλλιτέχνες που δημιουργούνε τους ήχους που δίνουν γευση στην ζωή μας. Μουσική που δεν διακόπτεται από διαφημιστικά διαλείμματα. Μουσική που ζεί και εξελίσσεται μαζί με τους ακροατές της. Τέσσερις μουσικές ζώνες όπου η μουσική είναι πολυφασματική, πολυπολιτισμική, ελκυστική και περιπετειώδης στο άκουσμα, από όλες τις εποχές και όλες τις χρονολογίες. 4 διαφορετικές διαθέσεις οι οποίες αλλάζουν και προσαρμόζονται αναλόγως μέρας, εποχής και γεγονότων. Παραμένουν όμως πιστές στον ορισμούς τους. Energetic, Mellow Twilight και Deep.

            Το Λεμόνι είναι μια μουσική πλατφόρμα πάνω στην οποία έρχονται και αποκτούν γεύση διάφορα ακούσματα απο τις εκπομπές οι οποίες έχουν κάτι το πολύ ιδιαίτερο να προσφέρουν με περιεχόμενο μουσικό , θεματολογικό ή φιλοσοφικό μέχρι ένθετα και ατάκες απο την καθημερινότητα μας..


            Λεμόνι.
            Γεύση στον ήχο.

            TEST MODE
            Τι σημαίνει?
            Σημαίνει οτι ακόμα δουλεύουμε σε πολλά πράγματα (Τεχνικά, ροή, εξοπλισμός, συνεργάτες, ψυχολογικά, υπαρξιακά, οικονομικά, δημόσια έργα, μετακομίσεις, αλλαγές διάθεσης, ορμόνες, κ.τ.λ.), αλλά μέχρι τότε, δίνουμε μουσική και εκπομπές, χωρίς διαφημίσεις σε όσους έχουν την τόλμη να μας ακούνε.
            Πότε θα βγούμε από το TEST MODE
            Όταν αυτό που θα έχουμε να προσφέρουμε στους ακροατές , θα είναι όπως το φανταστήκαμε.

          </Element>
          </div>
       </Popup>
       <Popup trigger={<button className="support" style={{color:this.state.color2}}> Support</button>}
        position="right center" 
        modal
        closeOnDocumentClick>
          <div>
            <h2 style={{color:this.state.color2}}>ABOUT LEMONI RADIO</h2>
            Do something to support

          </div>
       </Popup>
       <Popup trigger={<button className="contact" style={{color:this.state.color2}}> Contact</button>}
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


        <body className = "App-body">

        <Player style={{color:this.state.color2}}>

        </Player>

        <div>
          <div  style={{color:this.state.color2}} className="murmur"  >
      
              <p style={{color:this.state.color2}}>MURMUR BOX</p>
              
              <iframe  src="https://www5.cbox.ws/box/?boxid=918315&boxtag=bfr6Pj" width="100%" height="410px"   allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" ></iframe>	
            
            </div>
              
          
      </div>
        </body>


        <footer className="App-footer">
        <p id="footerText"style={{color:this.state.color2}}>© 2020, Lemoni Radio </p>
        
      </footer>
      </div>
    );
  }
}

export default App;
