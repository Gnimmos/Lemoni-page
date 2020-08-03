import React, { Component } from 'react'
import Controls from './control'
import { Slider } from 'react-semantic-ui-range'
import './Player.css';
import Display from './Display'



class Player extends React.Component {
  state = {
    play: false,
    volume: 0.5,
    min:0.0,
    max:1.0,
  }
  url = "https://stream.radiojar.com/mw1xsf0dpnruv";

  audio = new Audio(this.url)

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
    this.toggleVolume();
  }
  toggleVolume = () =>{
    this.audio.volume = this.state.volume

  }

  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      width:"500px",
      height: "300px"
    };
    const volu = {
      width:"100px",
      aligment:"bottom"
    };
    return (
      <div style = {mystyle } className = "playercontainer">
        <Display/>
        <button className = "playbutt" onClick={this.togglePlay}>{this.state.play ?  <Controls/> : <Controls/>}</button>
        <Slider style = {volu}
        className ="vol"
        settings={{
          start: 0.5,
          min: this.state.min,
          max: this.state.max,
          step: 0.1,
        onChange: this.handleOnChange
        
          }}  />
      </div>
    );
  }
}

export default Player;
