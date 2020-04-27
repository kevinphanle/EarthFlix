
# [Earthflix](https://earthflix.herokuapp.com/#/)


EarthFlix is a media streaming service inspired by Netflix. Earthflix allows users to stream online videos about their favorite aspect of the planet we live on, Earth. The application uses:

* Frontend: **ReactJS/Redux**
* Backend: **Ruby on Rails** 
* Database: **PostgreSQL**

![alt text](https://earthflix-dev.s3-us-west-1.amazonaws.com/Earthflix_splash_sc.png)

## Product Design

EarthFlix was designed and built in 2 weeks.

## Features

* New account creation, login, guest login
* Display video
* Display genres
* Ability to watch and interact with nature videos
* Search videos by title
* My List feature allowing for personalized viewing
* Profile creation

![alt text](https://earthflix-dev.s3-us-west-1.amazonaws.com/earthflix_index_sc.png)

### New Account creation, login, and guest login

User passwords are secured using `BCrypt` to generate an encrypted version of it, `passord_digest`. A user `session_token` is stored in the database to keep track of each user `session`, which is their stamp on the wrist granting access to the website. If a user successfully signs up and/or logs in, a session token is generated, stored in the database, and stored on the client-side as a browser cookie until it expires.

### Index

Upon logging in, the user will be greeted with a demo video that will play once loaded. The demo video will play when the user hovers over it and will pause when not.

![text](https://earthflix-dev.s3-us-west-1.amazonaws.com/earthflix_big_video_sc.png)

### Genres & Shows

Shows are displayed in groups of Genres where shows and genres are joined by a `show_genres` table, where the relationship between the two are established. The genres have many shows and the shows have many genres.

### Watch

When a show block is clicked, the user will redirected to the `/watch/:showId` page that will render the video in full screen. The video will have a poster that will be displayed while the video is loading after which it will autoplay. The video library, [Video-React](https://video-react.js.org) was used for its functionality.

### Search

When searching for a show in the search bar, the controller will get the input of the search and using a SQL query, will return all the shows with the input string contained within the title regardless of case sensitivity thanks to ILIKE. 

```
def index
    input = search_params[:input]
    if input.empty?
        render json: {}
        return
    end
    @shows = Show.includes(:genres)
        .where("title ILIKE (?)" , "%#{input}%").references(:genres)
        .distinct
    render :index
end
```