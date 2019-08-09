import React from "react";
import ShowsGroup from '../show/shows_group';
                    
class Genres extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchShows();
    }

    render() {
        const shows = this.props.genre ? this.props.genre.show_ids.map((showId) => this.props.shows[showId]) : [];
        
        return (
            <div className="show-page-container">
                <div className="genre-page-header">
                    <h1>{this.props.genre ? this.props.genre.name : null}</h1>
                </div>
                <ShowsGroup shows={shows} />
            </div>
        );
    }
}
export default Genres;