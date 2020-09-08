import React from 'react'
import { Slider } from 'react-semantic-ui-range'
import './Player.css';
import Display from './Display'
import { Icon } from '@iconify/react';
import volumeOff from '@iconify/icons-cil/volume-off';
import volumeHigh from '@iconify/icons-cil/volume-high';
import ReactPlayer from 'react-player'
import Popup from "reactjs-popup";
import cameraVideo from '@iconify/icons-bi/camera-video';
import playIcon from '@iconify/icons-feather/play';
import playPauseO from '@iconify/icons-gg/play-pause-o';



class Player extends React.Component {
  state = {
    play: false,
    volume: 0.5,
    min:0.0,
    max:1.0,
    mute:false, 
    unmute:true,   
    isHovering: false,
    color:"playercontainer-1",
  };
  handleMouseHover = this.handleMouseHover.bind(this);
  change = this.change.bind(this);

  //radiojar url for mp3 streaming 
  url = "https://stream.radiojar.com/mw1xsf0dpnruv";
  
  audio = new Audio(this.url)

  //
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }
  //show slider when hovering
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
    this.timerID = setInterval(
      () => this.change(),
      1000
    );
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
  
  }
  // play/pause
  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }
  //hadler of slider
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
    this.toggleVolume();
  }
  //volume slider funtion. when 0.1 = mute
  toggleVolume = () =>{
    this.audio.volume = this.state.volume
    console.log(this.state.volume)
    if(this.state.volume ===0.1){
      this.audio.muted=true;
    }
    else{
      this.audio.muted= false;
    }
  }
  //error when trying to mute
  toggleMute =() =>{
    if (this.state.mute) {
      this.setState({ 
        mute: true, unmute:false,   

      });
    }


    this.audio.muted = this.state.mute
  }
  change (){
    var hours = new Date().getHours(); //Current Hours
    var hour = hours.toString();
    //Setting colors dipenting on time
    if (0 <= hour && hour < 6)
    { 
      this.setState({ 
       color:"playercontainer-1"
      });
    }
    else if (6 <= hour && hour < 12)
    {
      this.setState({ 
        
        color:"playercontainer-2"
      });
    }
    else if (12 <= hour && hour < 18)
    {
      this.setState({ 
        color:"playercontainer-3"
      });
    }
    else 
    {
      this.setState({ 
        color:"playercontainer-4"
      });
    }
    console.log(this.state.color1)

  }
  

  render() {

    const volu = {
      width:"100px",
      aligment:"bottom"
    };
    return (
      <div  className =  {this.state.color}>

        {/* Display the metadate from class */}
        <Display/>
  
        {/* toggle play and pause on click and show icons */}
        <button className = "playbutt" onClick={this.togglePlay } style={{color:this.state.color1}}>{this.state.play ?  <Icon icon={playPauseO}width="30" height="30" /> : <Icon icon={playIcon}  width="30" height="30" />}</button>
        {/* pop up window for video live stream */}
        <Popup trigger={<button className="twitch" style={{color:this.state.color1}} > <Icon icon={cameraVideo} width="30" height="30" /></button>}
            position="right center" 
            modal
            closeOnDocumentClick>
              <div style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                <ReactPlayer url='https://www.twitch.tv/lemoniradio' />

              </div>
        </Popup>
        {/* volume slider and mute the mute function i not working corrrectly the slider is working but need to 
        delay the hover of muse disapear over the colume button so the bar is does not immidietly hide */}
        <button className ="vol" style={{color:this.state.color1}} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} onClick={this.toggleMute() } >
          {this.state.mute ?<Icon icon={volumeOff} width="30" height="30"/>: <Icon icon={volumeHigh} width="30" height="30" /> }
          </button>
        {
          this.state.isHovering &&
          <Slider style = {volu}
          className ="vol"
          settings={{
            start: 0.5,
            min: this.state.min,
            max: this.state.max,
            step: 0.1,
          onChange: this.handleOnChange
          
            }}  />
        }
        
      </div>
    );
  }
}

export default Player;
