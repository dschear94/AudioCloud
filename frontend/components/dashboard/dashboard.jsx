import React from 'react';
import { 
    withRouter, 
    Link,
    NavLink
} from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerImageFile: null,
            headerImageUrl: null,
            avatarFile: null,
            avatarUrl: null,
        };

        this.handleAvatarFile = this.handleAvatarFile.bind(this);
        // this.handleHeaderImageFile = this.handleHeaderImageFile.bind(this);
        this.triggerAvatarInput = this.triggerAvatarInput.bind(this);
        // this.triggerHeaderImageInput = this.triggerHeaderImageInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        if (this.props.artistName !== this.props.artist.username) {
            this.props.fetchArtist(this.props.artistName)
            this.props.fetchTracksByArtist(this.props.artistName)
        } 
    }

    componentDidUpdate(prevProps) {
        if (this.props.artistName !== prevProps.artistName) {
            this.props.fetchArtist(this.props.artistName)
            this.props.fetchTracksByArtist(this.props.artistName)
        } 
    }

    
    handleInput(field) {
        return e => {
            return this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    triggerAvatarInput(e) {
        e.preventDefault();
        document.getElementById('userAvatarInput').click();
    }

    handleAvatarFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ avatarFile: file, avatarUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
            this.props.sendAvatar(file);
            this.props.openModal('avatar');
        }
    }

    handleArt() {
        document.getElementById("artistAvImage").style.backgroundImage = "url(" + this.props.artist.avatar + ")"
    }

    handleSubmit(e) {
        e.preventDefault();
        const trackFormData = new FormData();
        // trackFormData.append('track[title]', this.state.title);
        // trackFormData.append('track[album]', this.state.album);
        // trackFormData.append('track[artist_id]', this.props.currentUser);
        // if (this.state.trackFile) {
        //     trackFormData.append('track[audio_file]', this.state.trackFile);
        // };
        // if (this.state.photoFile) {
        //     trackFormData.append('track[image_file]', this.state.photoFile);
        // };
        // return (
        //     this.props.uploadTrack(trackFormData)
        //         .then(() => this.props.fetchTracks())
        //         .then((() => this.props.history.push("/discover")))
        // );
    }

    render() {

        const { artist } = this.props;

        const headerImageEdit = 
        this.props.artistName === this.props.currentUser.username ?
                (<button className="headerImageEditBtn">
                    {/* update for current/noncurrent user */}
                    Update Image
                </button>) : null;

        const avatarEdit = 
        this.props.artistName === this.props.currentUser.username ?
                (<div className="phAvatarBtn">
                    <button
                        className="imagePicker"
                        onClick={this.triggerAvatarInput}
                    >
                        Update Image </button>
                    <input
                        id="userAvatarInput"
                        className="hiddeninput"
                        type="file"
                        style={{ opacity: "0" }}
                        onChange={this.handleAvatarFile}
                    />
                </div>) : null;


        if (artist.avatar) {
            let photo = new Image();
            photo.src = artist.avatar;
            photo.onload = () => {
                this.handleArt();
            }
        }

        return (
            <div>
                <div className="user-hero">
                    <div className="profileHeader">
                        <div className="phEdit">
                            <div className="phChooserWrapper">
                                {headerImageEdit}
                                <input
                                    id="userHeaderImageInput"
                                    className="hiddeninput"
                                    type="file"
                                    style={{ opacity: "0" }}
                                />
                            </div>
                        </div>
                        <div className="phInfo">
                            <div className="phInfoAvatarContainer">
                                <div className="phAvatarImage">
                                    {/* image goes here inside span*/}
                                    <div 
                                    // style={{ backgroundImage: "url(" + this.props.artist.avatar + ")" }}
                                    id="artistAvImage"
                                    className="artistAvImage"
                                    ></div>
                                    {avatarEdit}
                                </div>
                            </div>
                            <div className="phInfoContentContainer">
                                <h3 className="phInfo-username">
                                    {artist.username}
                                </h3>
                            </div>
                        </div>
                        <div className="phBG">
                            {/* BG goes here in div */}
                        </div>
                    </div>
                </div>
                <div className="dashboard-vertical-bar">
                    <div className="userInfoBar">
                        <div className="userInfoBarTabs">
                            <ul className="userInfoBarTabsUL">
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${artist.username}`}
                                        activeClassName="UIBTLI-active"
                                        >
                                        All
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${artist.username}/toptracks`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Top Tracks
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${artist.username}/tracks`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Tracks
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${artist.username}/albums`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Albums
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${artist.username}/sets`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Playlists
                                    </NavLink>
                                </li>
                                <li className="UIBTLI">
                                    <NavLink
                                        exact to={`/${artist.username}/reposts`}
                                        activeClassName="UIBTLI-active"
                                    >
                                        Reposts
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="userInfoBarBtns">
                            <div className="userInfoBarBtns-container">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content-container">

                </div>
            </div>
        );
    }
}


export default withRouter(Dashboard);