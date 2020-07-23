import React from 'react';
import { Gradient } from 'react-gradient';
import ReactAudioPlayer from 'react-audio-player';
import Popup from "reactjs-popup";
import Iframe from 'react-iframe'
import './App.css';

var gradients = [
  ['#0e2539', '#7f4098'],
  ['#5eb546', '#fde146'],
  ['#d47097', '#76cdd9'],
  ['#ec7323', '#be1e2d'],
];

class App extends React.Component {
    //changing backrounds
    constructor(props){
      super(props);
    
    
      this.state = {
          color1: '#0e2539',
          color2: '#7f4098'
    
      };
       //binding the functions to the class
  this.change1 = this.change1.bind(this);
  this.change2 = this.change2.bind(this);
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
    }
  
  render(){
    return (
      <div className="App">
          <Gradient
                gradients={ gradients } // required
                property="background"
                gradientType	= "linear"
                duration={ 3000 }
                angle="90deg"
            >
        <header className="App-header" color = {this.state.color2}>
        <div className="Content">
          <h1 >Lemoni Radio</h1>
        </div>
        <div className="Menubar">
        <Popup trigger={<button variant="outline-primary"> About</button>}
        position="right center" 
        modal
        closeOnDocumentClick>
          <div>
            <h2>ABOUT LEMONI RADIO</h2>
            



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

          </div>
       </Popup>
       <Popup trigger={<button backroung = "transparent"> Support</button>}
        position="right center" 
        modal
        closeOnDocumentClick>
          <div>
            <h2>ABOUT LEMONI RADIO</h2>
            Do something to support

          </div>
       </Popup>
       <Popup trigger={<button> Contact</button>}
        position="right center" 
        modal
        closeOnDocumentClick>
          <div>
            <h2>Contact</h2>
            
         </div>
       </Popup>
        </div>
        </header>
        <body className = "App-body">
          <ReactAudioPlayer
            src={{uri:"https://stream.radiojar.com/mw1xsf0dpnruv"}}
            autoPlay = "true"
            controls = "true"
        />

    
    <div>
      <div  className="murmur" >
  
          <p >MURMUR BOX</p>
          
          <iframe  src="https://www5.cbox.ws/box/?boxid=918315&boxtag=bfr6Pj" width="100%" height="410px" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" ></iframe>	
        
        </div>
          
       
  </div>
        </body>
        <footer className="App-footer">
        <p id="footerText" color = {this.state.color2}>© 2020, Lemoni Radio </p>
        
      </footer>
      </Gradient>
      </div>
    );
  }
}

export default App;
