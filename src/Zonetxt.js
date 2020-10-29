import React from 'react';
import Popup from "reactjs-popup";
import Zones from './Zone'



class Zonestxt extends React.Component {
    //changing backrounds
    constructor(props){
        super(props);
      
      
  
        this.state = {
            zonetxt : "",
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
        zonetxt: "Η deep zone είναι το dance club του πολυχώρου και ο χορός εδώ, πρωταγωνιστεί, είναι το βασικό ζητούμενο τουλάχιστον τις πρώτες τρεις ώρες που οι ηλεκτρονικές μουσικές του λεμονιού, διεγείρουν τα σώματα να κινηθούν και να κουνηθούν. Όπως όλα στο λεμόνι, σταδιακά μεταμορφώνεται  και η deep zone, και κάπου κοντά στα ξημερώματα γίνεται  ένα τύπου relaxing club! Όσοι/ες μένετε ξύπνιοι στη γοητεία της νύχτας, το λεμόνι προσφέρει μια σαγηνευτική ροή με εξαίσιες μουσικές και λόγια συντονισμένα στους βιορυθμούς της βαθιάς νύχτας!"
    });

    }
    else if (6 <= hour && hour < 12)
    {
        this.setState({ 
            zonetxt: "Η energetic zone ανοίγει στις 6 τα ξημερώματα και κλείνει στις 12 το μεσημέρι προσφέροντας μια ενεργητική ατμόσφαιρα και μια δυναμική ροή, ικανή να σας κρατάει σε μια σχετική εγρήγορση. Ξεκινήστε τη μέρα σας με νερό και λίγες σταγόνες λεμόνι, φτιάξτε καφέ, και συντονιστείτε με το λεμόνι!.. θα σας κρατήσει συντροφιά με εξαίσιες μουσικές και λόγια, συντονισμένα στους πρωινούς βιορυθμούς. "

        });
       
    }
    else if (12 <= hour && hour < 18)
    {
        this.setState({ 
            zonetxt: "Η mellow zone ανοίγει τις πόρτες της στις 12 το μεσημέρι και κλείνει στις 6 το απόγευμα. Τρέξαμε αρκετά το πρωί και έχουμε ανάγκη να ρίξουμε λίγο τους ρυθμούς μας, να κατευνάσουμε τα πνεύματα, να πάρουμε ανάσες και δυνάμεις για τη συνέχεια! Συντονιστείτε με το λεμόνι!.. θα σας κρατήσει συντροφιά με εξαίσιες μουσικές και λόγια, συντονισμένα στους μεσημεριανούς και απογευματινούς βιορυθμούς."

        });
    }
    else 
    {
        this.setState({ 
            zonetxt: "Η twilight zone υποδέχεται το κοινό της στις 6 το απόγευμα και αποχαιρετά τους τελευταίους πελάτες της, στις 12 τα μεσάνυχτα. Η ενεργητικότητα επιστρέφει, το κύμα ανεβαίνει, αλλά αυτή τη φορά το σκηνικό είναι πιο σκοτεινό. Όσο προχωρεί η ώρα προς τα μεσάνυχτα, τα αίματα ανάβουν λίγο παραπάνω, μια μαργαρίτα και λεμόνι για παρέα, με εξαίσιες μουσικές και λόγια, συντονισμένα στους απογευματινούς και νυχτερινούς βιορυθμούς "
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
    <Popup trigger={<button className = "zonebutt p-0" >      
                <Zones></Zones>
                </button>}
                            position="center center " 
                            modal
                            closeOnDocumentClick>
                              <div className="Zonetime" >
                                <div className="Zoneloc">
                                    <div>{this.state.zonetxt}</div>
                                </div>

                          </div>
                          </Popup>
    );
  }
}
export default Zonestxt;