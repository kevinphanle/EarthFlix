import React from "react";
import ShowPreviewPlayer from './show_preview_player';
                    
class ShowRows extends React.Component {
    constructor(props) {
        super(props);
        this.createShowRowItem = this.createShowRowItem.bind(this);
    }

    createShowRowItem(show) {
        if (!show) {
            return null;
        }

        const { rowNum, videos } = this.props;
        // const previewVideo = videos[show.id];

        return (
            <ShowPreviewPlayer key={show.id} show={show}  />
        )
    }
                    
    render () {
        const { shows, rowNumber, getShowInfo, key } = this.props;

        const showList = [];
        shows.forEach(show => {
            showList.push(this.createShowRowItem(show));
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