import React from "react";
import Show from './show_container';
import ShowContent from "./show_content_container";

                    
class GenreRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRow: 0,
            hovered: false,
            open: false,
            showId: 0
        }

        this.transRef = React.createRef();
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    handleOpen(i) {
        this.setState({showId: i, open: true})
    }

    handleClose() {
        this.setState({open: false})
    }

    render() {
        const { genre } = this.props;
        this.rows = [];
        let rows = this.props.shows.slice();
        while (rows.length > 0) {
            this.rows.push(rows.splice(0, 5));
        }

        if (this.transRef.current) {
            this.transRef.current.style.left = `${-this.state.currentRow * 100}%`;
            this.transRef.current.style.width = `${this.rows.length * 100}%`;
        }

        let content = this.props.shows[this.state.showId];
        return (
            <div className="genre-container">

                <h2 className="genre-title">{genre ? genre.name : ""}</h2>
                <div
                    className="show-thumbnail-container"
                    onPointerEnter={() => this.setState({ hovered: true })}
                    onPointerLeave={() => this.setState({ hovered: false })}
                >
                    {/* {this.state.hovered ? <img className="left-carousel-btn" src={window.left_chevron_image} onClick={() => this.moveCarousel(-1)}></img> : null} */}

                    <div className="show-container">
                        {
                            this.props.shows.map((show, i) => {
                                let activeItem = (this.state.open && this.state.showId === i) ? 'active' : "";
                                return <Show
                                    key={show.id}
                                    show={show}
                                    handleOpen={() => this.handleOpen(i)}
                                    active={activeItem}
                                    class='lazy'
                                />
                            }
                            )
                        }
                    </div>

                    {/* {this.state.hovered ? <img className="right-carousel-btn" src={window.right_chevron_image} onClick={() => this.moveCarousel(1)}></img> : null} */}
                </div>
                <div className={this.state.open ? 'show-row-content active' : 'show-row-content'}>
                    <ShowContent show={content} handleClose={this.handleClose}/>
                </div>

            </div>
        );
    }
}
export default GenreRow;