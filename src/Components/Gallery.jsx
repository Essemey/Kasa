import React from 'react';
import '../Css/Gallery.css';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPictureIndex: 0,
        }
        this.handleLeftClick = this.handleLeftClick.bind(this)
        this.handleRightClick = this.handleRightClick.bind(this)
    }

    handleLeftClick() {
        if (this.state.currentPictureIndex === 0) { //Si on est sur la première image et qu'on fait précédent   
            this.setState(s => ({ ...s, currentPictureIndex: this.props.pictures.length - 1 }))
        } else {
            this.setState(s => ({ ...s, currentPictureIndex: s.currentPictureIndex - 1 }))
        }
    }

    handleRightClick() {
        if (this.state.currentPictureIndex === this.props.pictures.length - 1) { //Si on est sur la dernière image et qu'on fait suivant
            this.setState(s => ({ ...s, currentPictureIndex: 0 }))
        } else {
            this.setState(s => ({ ...s, currentPictureIndex: s.currentPictureIndex + 1 }))
        }
    }

    render() {

        return (
            <div className="gallery" style={{ backgroundImage: `url(${this.props.pictures[`${this.state.currentPictureIndex}`]})` }}>
                <span className="material-icons left" onClick={this.handleLeftClick}>&#xE5E0;</span>
                <span className="material-icons right" onClick={this.handleRightClick}>&#xE5E1;</span>
            </div>
        )
    }

}

export default Gallery;