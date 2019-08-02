import React from "react";
import ShowRows from './show_rows';
                    
class ShowIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchShows();
        const showsPerRow = this.makeRows();

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

        const { shows, fetchShow } = this.props;
        
        const showsPerRow = this.makeRows();

        const showRowList = Object.keys(showsPerRow).map((rowShow, i) => {
            // debugger;
            return (<ShowRows key={i} rowNumber={i} shows={showsPerRow[rowShow]} getShowInfo={fetchShow} />);
            
        });
        // const showRowList = showsPerRow.map((rowShow, i) => {
        //     debugger;
        // })
        
        // debugger;
        return (
            <main className="show-index-wrapper">
                <figure className="big-video-preview">
                    <img src="" alt="" className="big-video-poster" />
                    <video autoPlay className="big-video">
                        
                    </video>
                </figure>
                <ul className="show-index">
                    {showRowList}
                </ul>
            </main>
        );
    }
}
export default ShowIndex;