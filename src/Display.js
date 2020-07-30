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
      items: []
        };

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
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      componentDidMount(){
        setInterval(() => {
            this.fetchsongs();
        }, 10000); 
    }
      render() {
        const { error, isLoaded, songs } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        }  else if (!songs){
            return<div>Empty</div>;
        } else {
          return (
            <ul>
              {
                <div key={songs.title}>
                 <p>Title:</p> {songs.title} 
                 <p>Artist:</p>{songs.artist}
                 <p>Ablum:</p>{songs.album}
                </div>
              }
            </ul>
          );
        }

}
}
export default Display;