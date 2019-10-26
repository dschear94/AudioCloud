const waveform = (trackUrl) => {
    const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        scrollParent: true
    });

    return wavesurfer.load(trackUrl);
}

export default waveform;