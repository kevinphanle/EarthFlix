import React from "react";
import ShowRows from './show_rows';
import BigVideoContainer from '../big_video/big_video_container';

                    
class ShowIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentGenre: null,
            muted: true,
            currentShow: null,
        }
    }

    componentDidMount() {
        this.props.requestAllShows().then((dispatchedAction) => this.setState({ currentShow: Math.floor(Math.random() * Object.keys(dispatchedAction.shows).length) }));
        // const showsPerRow = this.makeRows();

    }

    makeRows() {
        const { shows } = this.props;
        let row = [];
        let showsPerRow = {};
        let numRows = 0;

        for (let i = 0; i < shows.length; i++) {
            const currentShow = shows[i];
            row.push(currentShow);
            // debugger;

            if (row.length >= 6) {
                showsPerRow[numRows] = row;
                row = [];
                numRows++;
            } else if (i === shows.length - 1) {
                showsPerRow[numRows] = row;
            }
        }

        return showsPerRow;
    }

    render () {

        const { shows, videos } = this.props;
        let previewShow = null, showsPerRow = null, showRowList = [];
        showsPerRow = this.makeRows();
        previewShow = shows[0]
        // debugger;

        showRowList = Object.keys(showsPerRow).map((rowShow, i) => {
            // debugger;
            return (<ShowRows key={i} rowNumber={i} shows={showsPerRow[rowShow]} videos={videos} />);
            
        });

        return (
            <section className="show-index-wrapper">

                <figure className="big-video-preview">
                    <img src="" alt="" className="big-video-poster" />
                    <video autoPlay className="big-video">
                        {previewShow ? <BigVideoContainer show={previewShow} /> : null}
                    </video>
                </figure>
                
                <ul className="show-index">
                    {showRowList}
                </ul>

                <figure className="index-bg"></figure>

            </section>
        );
    }
}
export default ShowIndex;