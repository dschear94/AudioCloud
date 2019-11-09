import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListStyle from '../playlist/list_style'
import GalleryStyle from '../playlist/gallery_style'

class Discover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        if (this.props.tracks.length === 0) {
            this.props.fetchTracks().then(() => this.setState({loading: false}))
        }
        this.setState({ loading: false });
    }

    render() {
        return this.state.loading ? (
            <div className="loading-spinner-background"><div className="loading-spinner"><div></div><div></div><div></div><div></div></div></div>
        ) : (
                <div className="content-left-container">
                    <ListStyle uni={1} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays}/>
                    <GalleryStyle uni={2} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <ListStyle uni={3} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays}/>
                    <GalleryStyle uni={4} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <ListStyle uni={5} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays}/>
                    <GalleryStyle uni={6} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <ListStyle uni={7} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays}/>
                    <GalleryStyle uni={8} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                    <ListStyle uni={9} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays}/>
                    <GalleryStyle uni={10} tracks={this.props.tracks} fetchTracks={this.props.fetchTracks} updateTrackPlays={this.props.updateTrackPlays} />
                </div>
        );
    }
}


export default withRouter(Discover);