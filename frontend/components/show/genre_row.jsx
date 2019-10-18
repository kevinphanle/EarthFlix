import React from "react";
import Show from './show_container';

                    
class GenreRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRow: 0,
            hovered: false
        }

        this.transRef = React.createRef();

    }

    // moveCarousel(num) {
    //     let ind = this.state.currentRow;
    //     ind += num;
    //     if (ind < 0) {
    //         this.transRef.current.style.left = "25vw";
    //         setTimeout(() => this.setState({ currentRow: 0 }), 300);
    //     } else if (ind >= this.rows.length) {
    //         this.transRef.current.style.left = `-${(this.rows.length - 1) * 100 + 25}vw`;
    //         setTimeout(() => this.setState({ currentRow: this.rows.length - 1 }), 300);
    //     } else {
    //         this.setState({
    //             currentRow: ind,
    //         })
    //     }
    // }


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
        // debugger;
        return (
            <div className="genre-container">

                <h2 className="genre-title">{genre ? genre.name : ""}</h2>
                <div
                    className="show-thumbnail-container"
                    onPointerEnter={() => this.setState({ hovered: true })}
                    onPointerLeave={() => this.setState({ hovered: false })}
                >
                    {this.state.hovered ? <img className="left-carousel-btn" src={window.left_chevron_image} onClick={() => this.moveCarousel(-1)}></img> : null}

                    <div className="show-container">
                        {
                            this.props.shows.map((show, i) =>
                                <Show
                                    key={show.id}
                                    show={show}
                                />
                            )
                        }
                    </div>

                    {this.state.hovered ? <img className="right-carousel-btn" src={window.right_chevron_image} onClick={() => this.moveCarousel(1)}></img> : null}
                </div>

            </div>
        );
    }
}
export default GenreRow;