import React from 'react';
import waveform from '../../util/waveform_util';

const WaveFormContainer = ({trackUrl}) => {
    debugger

    waveform(trackUrl);
    <div id="waveform"></div>
}

export default WaveFormContainer;