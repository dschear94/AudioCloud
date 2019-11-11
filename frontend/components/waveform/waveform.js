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

class WaveForm extends React.Component {
    constructor(props) {
        super(props);
        this.waveRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            loading: true,
            width: 800,
            loaderPosition: 0,
            loadingDirection: -1,
        };
    }

    componentDidMount() {
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
        debugger
        this.waveSurfer.load(this.props.track.mp3);

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

    componentWillUnmount() {
        this.waveSurfer.un('ready');
        this.waveSurfer.destroy();
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentTrack && this.props.track.id === this.props.currentTrack.id) {
            if (prevProps.time !== this.props.time) {
                this.waveSurfer.seekTo(this.props.time / this.props.length);
            }
        }
        else this.waveSurfer.seekTo(0);
    }

    handleClick(e) {
        this.waveSurfer.on('seek', this.handleChange);
    }

    handleChange(e) {
        if (this.props.currentTrack.id !== this.props.track.id) {
            this.props.receiveNextTrack(this.props.track);
        }
        this.props.setWaveTime(this.waveSurfer.getCurrentTime());
        this.waveSurfer.un('seek', this.handleChange);
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
    const currentTrack = state.ui.audio.currentTrack;
    let length;
    if (currentTrack) length = currentTrack.length;
    return {
        currentTrack,
        isPlaying: state.ui.audio.isPlaying,
        time: state.ui.audio.time,
        length,
    }
}

const mdp = (dispatch) => {
    return {
        receiveNextTrack: (track) => dispatch(receiveNextTrack(track)),
        setWaveTime: (time) => dispatch(setWaveTime(time)),
    }
}

export default connect(msp, mdp)(WaveForm)