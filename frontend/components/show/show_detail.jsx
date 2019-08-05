import React from 'react';

class ShowDetail extends React.Component {
    componentDidMount() {
        this.props.getShowInfo(this.props.match.params.showId);
    }

    render() {
        const { rowNum, show } = this.props;

        return (
            <figure className={dropdown-preview-player}>
                <video src=""></video>
            </figure>
        )
    }
}

export default ShowDetail;