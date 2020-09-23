import React, { Component } from 'react'
import Pause from './Pause'
import Play from './Play'

class Controls extends Component {

    constructor(props) {
      super(props)
      this.state = {
        playing: false
      }
    }
    
    handlePlayerClick = () => {
      if (!this.state.playing) {
        this.setState({playing: true})
      } else {
        this.setState({playing: false})
      }
    }
    
      render() {
        return (
          <div className="player" style={{height: '30px', width : '30px'}} >
            {this.state.playing? <Pause onPlayerClick={this.handlePlayerClick} /> : <Play onPlayerClick={this.handlePlayerClick} />}
          </div>
        )
      }
    }
    
    export default Controls