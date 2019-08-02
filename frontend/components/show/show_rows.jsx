import React from "react";
import ShowPreviewPlayer from './show_preview_player';
                    
class ShowRows extends React.Component {
    constructor(props) {
        super(props);
    }
                    
    render () {
        const { shows, rowNumber, getShowInfo, key } = this.props;

        const showList = [];
        shows.forEach(show => {
            showList.push(<ShowPreviewPlayer key={show.id} show={show} />);
        });

        return (
            <li className="show-rows-wrapper">
                <h2>{`row ${rowNumber} `}</h2>

                <figure className="show-row">
                    {showList}
                </figure>
            </li>
        );
    }
}
export default ShowRows;