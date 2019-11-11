import React from 'react';
// import waveform from '../../util/waveform_util';

// const WaveFormContainer = ({trackUrl}) => {

//     waveform(trackUrl);
//     <div id="waveform"></div>
// }

// export default WaveFormContainer; import React from 'react';
import { connect } from 'react-redux';
import waveSurfer from 'wavesurfer.js';
// import { receiveNextTrack, setWaveTime } from '../../actions/current_track_actions';
// import { connect } from 'react-redux';
// import TrackShow from './track_show';
import { updateTrackPlays } from '../../actions/current_track_actions';
import { fetchArtist } from '../../actions/artist_actions';


class WaveForm extends React.Component {
    constructor(props) {
        super(props);
        this.waveRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            loading: true,
            width: null,
            loaderPosition: 0,
            loadingDirection: -1,
        };

    }

    componentDidMount() {
        if (Object.keys(this.props.track).length !== 0) {
            let height = document.getElementById("waveform-container").offsetHeight;
            let width = document.getElementById("waveform-container").offsetWidth;
            this.setState({width: width});
            const wave = this.waveRef.current;
            this.waveSurfer = waveSurfer.create({
                container: wave,
                waveColor: '#8C8C8C',
                progressColor: '#F65502',
                barWidth: 2,
                barHeight: 2,
                height: height,
                fillParent: true,
                cursorWidth: 0,
                interact: true,
                autoCenter: true,
                closeAudioContext: true,
                hideScrollbar: true,
                partialRender: true,
                removeMediaElementOnDestroy: true,
            });
            this.waveSurfer.load(this.props.track.trackUrl);

            this.interval = setInterval(() => {
                if (this.state.loaderPosition <= 0 || this.state.loaderPosition >= 500) {
                    this.setState({ loadingDirection: this.state.loadingDirection * -1 });
                }
                const loaderPosition = (this.state.loaderPosition + 5 * (this.state.loadingDirection));
                this.setState({ loaderPosition });
            }, 10);

            this.waveSurfer.on('ready', () => {
                this.setState({ loading: false });
                clearInterval(this.interval);
            });
        }
    }

    componentWillUnmount() {
        this.waveSurfer.un('ready');
        this.waveSurfer.destroy();
    }

    componentDidUpdate(prevProps) {
        // if (this.props.currentTrack && this.props.track.id === this.props.currentTrack.id) {
        //     if (prevProps.time !== this.props.time) {
        //         this.waveSurfer.seekTo(this.props.time / this.props.length);
        //     }
        // }
        // else this.waveSurfer.seekTo(0);

        if (Object.keys(this.props.track).length !== 0) {
            if (this.props.track.id !== prevProps.track.id) {
                const wave = this.waveRef.current;
                this.waveSurfer = waveSurfer.create({
                    container: wave,
                    waveColor: '#F2F2F2',
                    progressColor: '#F65502',
                    barWidth: 2,
                    height: 300,
                    fillParent: true,
                    cursorWidth: 0,
                    interact: true,
                    autoCenter: true,
                    closeAudioContext: true,
                    hideScrollbar: true,
                    partialRender: true,
                    removeMediaElementOnDestroy: true,
                });
                this.waveSurfer.load(this.props.track.trackUrl);

                this.interval = setInterval(() => {
                    if (this.state.loaderPosition <= 0 || this.state.loaderPosition >= 500) {
                        this.setState({ loadingDirection: this.state.loadingDirection * -1 });
                    }
                    const loaderPosition = (this.state.loaderPosition + 5 * (this.state.loadingDirection));
                    this.setState({ loaderPosition });
                }, 10);

                this.waveSurfer.on('ready', () => {
                    this.setState({ loading: false });
                    clearInterval(this.interval);
                });
            }
        }
    }

    handleClick(e) {
        // this.waveSurfer.on('seek', this.handleChange);
    }

    handleChange(e) {
        // if (this.props.currentTrack.id !== this.props.track.id) {
        //     this.props.receiveNextTrack(this.props.track);
        // }
        // this.props.setWaveTime(this.waveSurfer.getCurrentTime());
        // this.waveSurfer.un('seek', this.handleChange);
    }

    render() {
        const width = {
            width: `${this.state.width}px`
        };

        const loading = this.state.loading ? (
            <div style={width} className="outer-loader">
                <div className="inner-loader"
                    style={{ left: `${this.state.loaderPosition}px` }}>
                </div>
            </div>
        ) : (
                null);


        return (
            <div onClick={this.handleClick} style={width} ref={this.waveRef} id="waveform" className="waveform">
                {loading}
            </div>
        )
    }
}

const msp = (state) => {
    let currentTrack;

    currentTrack = state.entities.currentTrack ? 
    state.entities.currentTrack : {};

    return { currentTrack }
    
}

const mdp = (dispatch) => ({
    updateTrackPlays: track => dispatch(updateTrackPlays(track)),
})

export default connect(msp, mdp)(WaveForm)