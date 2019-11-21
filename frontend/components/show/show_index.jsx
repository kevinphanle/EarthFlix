import React from "react";
import BigVideo from '../big_video/big_video_container';
import GenreRow from "./genre_row_container";

                    
class ShowIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         
        }
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    componentDidMount() {
        if (!this.props.currentProfileId) { this.props.openModal('profile') };
        this.props.fetchShows();
        this.props.fetchGenres();
    }

   

    handleStateChange(state, prevState) {
        this.setState({
            player: state
        })
    }


    render() {
        const { shows, genres, firstShow } = this.props;
        if (!firstShow) {
            return null;
        }
        const genreRows = genres.map((genre) => {
            return <GenreRow 
                key={genre.id} 
                genre={genre}
                name={genre.name} 
                id={genre.id} 
                shows={genre.showIds.map(showId => this.props.shows[showId])} 
            /> 
        })
        return (
            <div className="index-container">
                <div className="frontVideo">
                    <BigVideo show={firstShow}/>

                </div>
                <div className="genre-rows">
                    {genreRows}
                    <br/>
                </div>
            </div>
        );
    }
}
export default ShowIndex;