import React, { Component } from 'react';
import Header from './header';
import AlbumList from './albumList';
import Nav from './nav';
import Footer from './footer';

const REQ_URL = `http://localhost:3004/artists`;

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    };
  }

  componentDidMount() {
  // console.log(this.props.artists);
      // console.log(this.props.match.params.artistid);
    fetch(`${REQ_URL}/${this.props.match.params.artistid}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        this.setState({
          artist: json
        });
      });
  }
  componentWillUnmount() {
    this.setState({
      artist: ''
    });
  }
  render() {
    return (
      <div>
        <Nav/>
        <Header />
        <div className="artist_bio">
          <div className="avatar">
            <span
              style={{
                background: `url('/images/covers/${
                  this.state.artist.cover
                }.jpg') no-repeat`
              }}
            />
          </div>
          <div className="bio">
            <h3>{this.state.artist.name}</h3>
            <div className="bio_text">{this.state.artist.bio}</div>
          </div>

          <AlbumList albumList={this.state.artist.albums} />
         
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Artist;
