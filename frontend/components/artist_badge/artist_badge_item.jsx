import Avatar from "../artwork/avatar";
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { relativeTime } from '../../util/time_util';
import WaveForm from '../waveform/waveform';
import Artwork from '../artwork/artwork';
import HeaderImage2 from '../artwork/header_image2';

class ArtistBadgeItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {


        return (
            <li className="splash-main-content1-trendingtracks-content-item">
                <div className="userBLI">
                    <div className="userBLI-art">
                        <Link classname="userBLI-link">
                            <Avatar />
                        </Link>
                    </div>
                    <div className="userBLI-title">
                        <Link className="userBLI-title-link" />
                    </div>
                    <div className="userBLI-action">
                        <button className="userBLI-action-btn">

                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default ArtistBadgeItem;
