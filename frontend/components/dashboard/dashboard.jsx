import React from 'react';
import { 
    withRouter, 
    NavLink,
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import ArtistTracksContainer from './artist_tracks_container';
import ArtistAllContainer from './artist_all_container';
import { faUserPlus, faChild } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '../artwork/avatar'

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
        this.handleHeaderImageFile = this.handleHeaderImageFile.bind(this);
        this.triggerAvatarInput = this.triggerAvatarInput.bind(this);
        this.triggerHeaderImageInput = this.triggerHeaderImageInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);

        this.handleFollow = this.handleFollow.bind(this);
    }
    
    handleInput(field) {
        return e => {
            return this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    handleFollow(e) {
        e.preventDefault();
        if (this.props.currentUser.following) {
            if (this.props.artist.username in this.props.currentUser.following) {
                let follow = {};
                follow.follower_id = this.props.currentUser.id;
                follow.followed_user_id = this.props.artist.id;
                this.props.deleteFollow(follow);
            } else {
                const follow = Object.assign({
                    follower_id: this.props.currentUser.id,
                    followed_user_id: this.props.artist.id
                })

                this.props.createFollow(follow);
            }
        } else {
            const follow = Object.assign({
                follower_id: this.props.currentUser.id,
                followed_user_id: this.props.artist.id
            })

            this.props.createFollow(follow);
        }
    }


    // handleLike(e) {
    //     e.preventDefault();

    //     if (this.props.track.id in this.props.currentUser.likedTracks) {
    //         let like = {};
    //         like.track_id = this.props.track.id;
    //         like.user_id = this.props.currentUser.id;
    //         this.props.deleteLike(like)
    //     } else {
    //         const like = Object.assign({
    //             user_id: this.props.currentUser.id,
    //             track_id: this.props.track.id
    //         })

    //         this.props.createLike(like);
    //     }

    // }


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

    triggerHeaderImageInput(e) {
        e.preventDefault();
        document.getElementById('userHeaderImageInput').click();
    }

    handleHeaderImageFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ headerImageFile: file, headerImageUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
            this.props.sendHeaderImage(file);
            this.props.openModal('headerImage');
        }
    }

    // handleArt() {
    //     document.getElementById("artwork-image").style.backgroundImage = "url(" + this.props.artist.avatar + ")"
    // }

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

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    render() {

        const { artist, currentUser, artistName } = this.props;



        const headerImageEdit = 
        this.props.artistName === this.props.currentUser.username ?
                (<div><button 
                className="headerImageEditBtn"
                onClick={this.triggerHeaderImageInput} 
                >

                    Update Image
                </button>
                    <input
                        id="userHeaderImageInput"
                        className="hiddeninput"
                        type="file"
                        style={{ opacity: "0" }}
                        onChange={this.handleHeaderImageFile}
                    /></div>) : null;

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


        // if (artist.avatar) {
        //     let photo = new Image();
        //     photo.src = artist.avatar;
        //     photo.onload = () => {
        //         this.handleArt();
        //     }
        // }

        const followBtn = currentUser.following ? 
        (artistName in currentUser.following ? (
            <button
                className="uiBarUnFollow"
                onClick={this.handleFollow}>
                <div className="follow-icon">
                    <FontAwesomeIcon icon={faChild} />
                </div>
                <div className="follow-text">
                    Following
                </div>
            </button>
        ) : (
            <button
                className="uiBarFollow"
                onClick={this.handleFollow}>
                <div className="follow-icon">
                    <FontAwesomeIcon icon={faUserPlus} />
                </div>
                <div className="follow-text">
                    Follow
                </div>
            </button>
        ) ): (
                <button
                    className="uiBarFollow"
                    onClick={this.handleFollow}>
                    <div className="follow-icon">
                        <FontAwesomeIcon icon={faUserPlus} />
                    </div>
                    <div className="follow-text">
                        Follow
                </div>
                </button>
        );

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
                                    {/* <div 
                                    // style={{ backgroundImage: "url(" + this.props.artist.avatar + ")" }}
                                    id="artwork-image"
                                    className="artwork-image"
                                    ></div> */}
                                    <Avatar currentUser={currentUser} />
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
                                {/* <li className="UIBTLI">
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
                                </li> */}
                            </ul>
                        </div>
                        <div className="userInfoBarBtns">
                            <div className="userInfoBarBtns-container">
                                {/* <button className="uiBarStation">Station</button> */}
                                {followBtn}
                                {/* <button className="uiBarShare">Share</button>
                                <button className="uiBarMessage">Message</button>
                                <button className="uiBarMore">More</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content-container">
                    <div className="content-left-container">
                        <Switch>
                            <Route exact path={`/:artist`} component={ArtistAllContainer} />
                            <Route exact path={`/:artist/toptracks`}></Route>
                            <Route exact path={`/:artist/tracks`} component={ArtistTracksContainer} />
                            <Route exact path={`/:artist/albums`}></Route>
                            <Route exact path={`/:artist/sets`}></Route>
                            <Route exact path={`/:artist/reposts`}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(Dashboard);