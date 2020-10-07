import React,   { Component } from 'react';
import './Display.css'


class Display extends Component{
    constructor(){
        super();
        this.state = {
            name : "",
            album : "",
            song : "",
            songs: [],
            error: null,
      isLoaded: false,
      items: [],
      color2: '#7f4098',
      zone:"",
      distime:"",

        };
        this.change2 = this.change2.bind(this);
        this.getTime = this.getTime.bind(this);


    }
    fetchsongs() {
        fetch('https://www.radiojar.com/api/stations/mw1xsf0dpnruv/now_playing/?rand=1234')
          .then(res => res.json())
          .then(
            (result) => {console.log('This is your data', result)
              this.setState({
                isLoaded: true,
                songs: result
              }
              );
              

            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
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
          this.setState({
            zone:"DEEP ZONE"
          });
        }
        else if (6 <= hour && hour < 12)
        {
          this.setState({ 
            
            color1: '#fde146'
          });
          this.setState({
            zone:"ENERGETIC ZONE"
          });
        }
        else if (12 <= hour && hour < 18)
        {
          
          this.setState({
            zone:"MELLOW ZONE"
          });
        }
        else 
        {
          this.setState({ 
            color1: '#be1e2d'
          });
          this.setState({
            zone:"TWILITGHT ZONE"
          });
        }
        console.log(this.state.color1)
  
      }
      getTime (){
        var datetime = new Date();
        var seconds = datetime.getSeconds();
        var minutes = datetime.getMinutes();
        var hour = datetime.getHours();
        var Time = hour.toString() + ":"+minutes.toString() + ":" + seconds.toString();
         //Current Hours
         this.setState({ 
          distime : Time
        });
    
      }
      componentDidMount(){
        setInterval(() => {
            this.fetchsongs();
        }, 10000); 
        this.timerID = setInterval(
          () => this.change2,
          1000
        );
        this.timerID = setInterval(
          ()=> this.getTime(),
          1000
        );
    }
    
    componentWillUnmount() {

      this.change2();
    }
      render() {
        const { error, isLoaded, songs } = this.state;


        if (error) {
          return <div style={{color:this.state.color1}}>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <span style={{color:this.state.color1}}>Loading...</span>;
        }  else if (!songs){
            return<div>Empty</div>;
        } else {
          return (
                <div className="disp" key={songs.title}>
                 <h1 className="dispzone" style={{color:this.state.color1}}>{this.state.zone}</h1>
                 <h1 className="distime" style={{color:this.state.color1}}>{this.state.distime}</h1>
                 <h2  className="dispnow" style={{color:this.state.color1}}>NOW PLAYING: </h2>
                 <p style={{color:this.state.color1}}>{songs.artist} - {songs.title}</p>
                </div>
              
          );
        }

}
}
export default Display;