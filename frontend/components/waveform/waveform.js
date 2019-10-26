import React from 'react';
import waveform from '../../util/waveform_util';

const WaveFormContainer = ({trackUrl}) => {

    waveform(trackUrl);
    <div id="waveform"></div>
}

export default WaveFormContainer;