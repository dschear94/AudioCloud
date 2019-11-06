import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style'
import GalleryStyle from '../playlist/gallery_style'

class Discover extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        if (this.props.tracks.length === 0) {
            this.props.fetchTracks();
        }
    }

    render() {
        return (
                <div className="content-left-container">
                    <ListStyle uni={1} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle uni={2} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                    <ListStyle uni={3} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle uni={4} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                    <ListStyle uni={5} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle uni={6} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                    <ListStyle uni={7} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle uni={8} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                    <ListStyle uni={9} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle uni={10} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                </div>
        );
    }
}


export default withRouter(Discover);