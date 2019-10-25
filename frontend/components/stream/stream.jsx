import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TrackStreamItem from './track_stream_item';

class Stream extends Component {
    componentDidMount() {
        if (this.props.tracks.length === 0) {
            this.props.fetchTracks();
        }
    }

    render() {
        // const trackitems = this.props.tracks.map(track => {
        //     <div
        //     key={track.id}
        //     onClick={() => this.props.receiveCurrentTrack(track)}>
        //         <div className="splash-main-content1-trendingtracks-tile-artwork">
        //             <div className="splash-main-content1-trendingtracks-tile-artwork-image">
        //                 <div className="splash-main-content1-trendingtracks-tile-artwork-image-placeholder">
        //                     <span
        //                         className="splash-main-content1-trendingtracks-tile-artwork-image-official"
        //                         style={{ backgroundImage: "url(" + track.photoUrl + ")" }}></span>
        //                 </div>
        //             </div>
        //             <button className="splash-main-content1-trendingtracks-tile-playbtn-container">
        //             </button>
        //         </div>
        //     </div>
        // });
        
        // debugger
        // return trackitems;
        const {tracks} = this.props;

        return (
            <div className="content-left-container">
                <div className="stream-header">
                    <h1 className="stream-header-text">
                        Hear the latest posts from the people you're following:
                    </h1>
                </div>
                <ul className="stream-list">
                    {tracks.map(track => <TrackStreamItem key={track.id} track={track} />)}
                </ul>
            </div>
        );
    }
}

export default withRouter(Stream);