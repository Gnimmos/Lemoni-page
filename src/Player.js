import React from 'react'
import { Slider } from 'react-semantic-ui-range'
import './Player.css';
import Display from './Display'
import { Icon } from '@iconify/react';
import playIcon from '@iconify/icons-foundation/play';
import volumeOff from '@iconify/icons-bx/bxs-volume-mute';
import volumeHigh from  '@iconify/icons-bi/volume-up-fill';
import Popup from "reactjs-popup";
import cameraVideo from '@iconify/icons-clarity/video-camera-solid';
import playPause0 from '@iconify/icons-gg/play-pause';
import { Col, Row } from 'react-bootstrap';


class Player extends React.Component {
  state = {
    play: false,
    volume: 0.5,
    min:0.0,
    max:1.0,
    mute:false, 
    unmute:true,   
    isHovering: false,
    isNotHovering : true,
    discolor:"",
    playcolor: "",
    volcolor: "",
    twichcol: "",
  };
  handleMouseHover = this.handleMouseHover.bind(this);
  changecolor = this.changecolor.bind(this);

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
      isisNotHovering: !state.isNotHovering
    };
  }

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
    this.timerID = setInterval(
      () => this.changecolor(),
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
    if(this.state.volume <=0.1){
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
        mute: false, unmute:true,   
      });
      

    }
    else{
      this.setState({ 
        mute: true, unmute:false,
      });
    }
    this.audio.muted = this.state.unmute
    console.log(this.state.mute)

  }

  changecolor (){
    var hours = new Date().getHours(); //Current Hours
    var hour = hours.toString();
    //Setting colors dipenting on time
    if (0 <= hour && hour < 6)
    { 
      this.setState({ 
        discolor:"playercontainer-1"
      });
      this.setState({
        playcolor:"playbutt-1"
      });
      this.setState({
        volcolor: "vol-1",
      });
      this.setState({
        twichcol:"playbutt-1"
      });
    }
    else if (6 <= hour && hour < 12)
    {
      this.setState({ 
        
        discolor:"playercontainer-2"
      });
      this.setState({
        playcolor:"playbutt-2"
      });
      this.setState({
        volcolor: "vol-2",
      });
      this.setState({
        twichcol:"playbutt-2"
      });
    }
    else if (12 <= hour && hour < 18)
    {
      this.setState({ 
        discolor:"playercontainer-3"
      });
      this.setState({
        playcolor:"playbutt-3"
      });
      this.setState({
        volcolor: "vol-3",
      });
      this.setState({
        twichcol:"playbutt-3"
      });
    }
    else 
    {
      this.setState({ 
        discolor:"playercontainer-4"
      });
      this.setState({
        playcolor:"playbutt-4"
      });
      this.setState({
        volcolor: "vol-4",
      });
      this.setState({
        twichcol:"playbutt-4"
      });
    }
  }
  

  render() {

    const volu = {
      width:"100px",
      aligment:"bottom"
    };
    return (
    
      <div  className =  {this.state.discolor}>


        {/* Display the metadate from class */}
        <Row  >
          <Display/>
        </Row>
        <Row  >
        {/* toggle play and pause on click and show icons */}
        <Col className = " px-0 colplay "  md={2}>
      
        <button className = {this.state.playcolor } onClick={this.togglePlay } >{this.state.play ?  <Icon icon={playPause0} width="33" height="33" /> : <Icon icon={playIcon}  width="35" height="35" />}</button>
        </Col >
        {/* volume slider and mute the mute function i not working corrrectly the slider is working but need to 
        delay the hover of muse disapear over the colume button so the bar is does not immidietly hide */}

        <Col  className = " px-2 colvol " md={4} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} >
        <button className ={this.state.volcolor}  onClick={this.toggleMute } >
          {this.state.mute ?<Icon icon={volumeOff} width="35" height="35"/>: <Icon icon={volumeHigh} width="35" height="35" /> }
        
          </button>
        {
          this.state.isHovering &&
          <Slider style = {volu}
          color="gray"
          settings={{
            start: this.state.volume,
            min: this.state.min,
            max: this.state.max,
            step: 0.1,
            onChange: this.handleOnChange          
            }}  />
        } 
          </Col>
                  {/* pop up window for video live stream */}
          <Col className = " px-12 colvid" >

        <Popup trigger={<button className={this.state.twichcol} > <Icon icon={cameraVideo} width="30" height="30" /></button>}
            position="right center" 
            modal
            closeOnDocumentClick>
              <div className = "video">
              <iframe src="https://embed.restream.io/player/index.html?token=8346f0289199979c2c0283ea75d30c16" width="100%" height="400px"  
                   allowtransparency="yes" allow="autoplay" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="yes" title="VideoFrame"></iframe>

              </div>
        </Popup>
        </Col>

        </Row>
      </div>
    );
  }
}

export default Player;
