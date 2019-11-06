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
                    <ListStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                    <ListStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                    <ListStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                    <ListStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                    <ListStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack}/>
                    <GalleryStyle tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} receiveCurrentTrack={this.props.receiveCurrentTrack} />
                </div>
        );
    }
}


export default withRouter(Discover);