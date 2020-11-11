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
        zonetxt: "The Deep Zone is the dance club of this multi-functional space, and dance here is the star of the show! For at least the first three hours, dance becomes a basic need, where Lemoni's electronic music stimulates bodies everywhere to move and to swing in rhythm. As with all things at Lemoni, Deep Zone gradually transforms itself throughout the night, and as dawn approaches, a more relaxing club mood emerges. For night owls who appreciate the charm of the early hours, Lemoni offers a seductive flow of superb sounds and lyrics in harmony with the rhythms of the deep night."

    });

    }
    else if (6 <= hour && hour < 12)
    {
        this.setState({ 
            zonetxt: "The Energetic Zone begins at 6 in the morning and ends at 12 midday, offering an energising mood and a dynamic flow, capable of maintaining morning alertness! Start your day with a little water and a few drops of         lemon juice, make coffee and tune into Lemoni! It will keep you company with its superb sounds and lyrics, in harmony with those morning rhythms."

        });
       
    }
    else if (12 <= hour && hour < 18)
    {
        this.setState({ 
            zonetxt: "The Mellow Zone opens its doors at 12 midday and closes at 6 in the evening. We've been running around all day and now need to slow down that pace, to placate the soul, to breathe deeply and take strength to keep on going! Tune into Lemoni! It will keep you company with superb sounds and lyrics, in harmony with those afternoon and early evening rhythms."

        });
    }
    else 
    {
        this.setState({ 
            zonetxt: "The Twilight Zone welcomes listeners at 6 in the evening and says farewell to the last of them at 12 midnight. Energy and vitality return, the rhythm is raised, this time offering a somewhat darker scene. As time approaches midnight the rush of blood to the head increases, accompanied by a margarita with a slice of lemon and by superb sounds and lyrics in harmony with those evening and night time rhythms."
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
    <Popup trigger={<button className = "zonebutt p-0 " >      
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