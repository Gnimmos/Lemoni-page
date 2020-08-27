import React,   { Component } from 'react';



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

        };
        this.change2 = this.change2.bind(this);

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
            zone:"Depp Zone"
          });
        }
        else if (6 <= hour && hour < 12)
        {
          this.setState({ 
            
            color1: '#fde146'
          });
          this.setState({
            zone:"Energetic Zone"
          });
        }
        else if (12 <= hour && hour < 18)
        {
          this.setState({ 
            color1: '#76cdd9'
          });
          this.setState({
            zone:"Mellow Zone"
          });
        }
        else 
        {
          this.setState({ 
            color1: '#be1e2d'
          });
          this.setState({
            zone:"Twilight Zone"
          });
        }
        console.log(this.state.color1)
  
      }
      componentDidMount(){
        setInterval(() => {
            this.fetchsongs();
        }, 10000); 
        this.timerID = setInterval(
          () => this.change2(),
          1000
        );
    }
    componentWillUnmount() {

      this.change2();
    }
      render() {
        const { error, isLoaded, songs } = this.state;
        const colosr = {
          padding: "1px",
          fontSize: 16,
          fontFamily: "Arial"  
                
        };

        if (error) {
          return <div style={{color:this.state.color2},colosr}>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div style={{color:this.state.color2},colosr}>Loading...</div>;
        }  else if (!songs){
            return<div>Empty</div>;
        } else {
          return (
            <ul>
              {
                <div style = {colosr } key={songs.title}>
                 <h1 style={{color:this.state.color2},colosr}>{this.state.zone}</h1>
                 <h1 style={{color:this.state.color2},colosr}>{}</h1>
                 <p style={{color:this.state.color2},colosr}>Artist: {songs.artist}</p>
                 <p style={{color:this.state.color2},colosr}>Title: {songs.title}</p>
                </div>
              }
            </ul>
          );
        }

}
}
export default Display;