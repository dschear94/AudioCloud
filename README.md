welcome to audiocloud.

https://audiocloud-ds.herokuapp.com/#/discover

this site is my version of the artist adored music discovery application, SoundCloud.

this is my first independently-driven, full-stack project as a developer. 

technologies used include:

React-Redux  ( frontend )
Ruby on Rails  ( backend )
AWS  ( data hosting )
Postgresql  ( database management )
Heroku  ( domain hosting )


audiocloud's development and design are ongoing.

thank you for coming. 



Selected features

- continuous play music bar
allows users to enjoy an uninterrupted listening experience throughout the application. achieved by leveraging a modular React component, maintaining it's own mutable state, in combination with a selective Redux store, ensuring singular audio playback*.

- track upload
allows users to upload audio (and image) files for immediate playback and sharing. achieved using FormData javascript objects to handle data transfer via AJAX post request to custom rails backend, persisting data both locally in postgresql, and remotely via ActiveRecord associations to AWS blobs.  

*see below for a dive into challenges overcome during development.


Future features and direction
- social
- custom music tagging
- audio waveforms
- personalized playlists
- departure from SoundCloud

Challenges faced
in order to maintain continuous music playback, the HTMLAudioElement was used. one quirk that arose during development was the ability for multiple HTMLAudioElements to playback music at the same time, despite only one HTMLAudioElement living in the component's (and by extension, the entire application's) state. 

my solution was to take advantage of React's Lifecycle methods: shouldComponentUpdate and componentDidUpdate. in the former, we ensure current state - an HTMLAudioElement - is paused; then, in the latter, a new HTMLAudioelement is constructed, set to state, and playback begins. 

single source of truth.


### Splash Page
Users are greeted with an eye-catching landing page. 
![splash](app/assets/gifs/fs_splash.gif)

### User Authentication
Implemented a multi-step login / signup process.
![login_1](app/assets/gifs/fs_login_1.gif)
![login_2](app/assets/gifs/fs_login_2.gif)

### Continuous Play Music Bar
Built from scratch, using HTML and CSS.
![cpb](app/assets/gifs/fs_cpb.gif)

### Recent Plays Feature
Upon playing a track, will immediately display in History. Build using a Recent Play association in the Rails backend, indexed on user_id and track_id. If association already exists, 1: destroy; 2: create new; 3: send new record to frontend with new timestamp.
![recent_plays_2](app/assets/gifs/fs_recent_plays_2.gif)

### User Dashboard
Artists have a public profile where users can find their uploaded tracks. 
![dashboard](app/assets/gifs/fs_dashboard.gif)
Users can customize their avatar,
![dashboard_avatar](app/assets/gifs/fs_dashboard_avatar.gif)
and their header image.
![dashboard_header](app/assets/gifs/fs_dashboard_header.gif)

### Likes Feature
Users can like songs from anywhere throughout the app. Will immediately appear in Likes section of Library.
![likes](app/assets/gifs/fs_likes.gif)

### Uploads
Built using AWS, users can upload tracks for immediate playback.
![uploads](app/assets/gifs/fs_uploads.gif)

### Follows Feature
Users can follow artists. Artists' tracks will immediately appear in Stream.
![follows](app/assets/gifs/fs_follows.gif)

### Stream
![stream](app/assets/gifs/fs_stream.gif)

### Comments CRUD Feature
Users can comment on tracks, read other artists' comments, and delete only their own.
![comments](app/assets/gifs/fs_comments.gif)


