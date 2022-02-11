import React from 'react';
import '../Css/Collapse.css';


class Collapse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(s => ({ ...s, open: !s.open }))
    }

    render() {


        return (
            <article className={`collapse ${this.props.class}`}>
                <header>
                    <h4>{this.props.title}</h4>
                    <span className={`material-icons arrow ${this.state.open ? 'open' : 'close'}`}
                        onClick={this.handleClick}>&#xE5CF;</span>
                </header>
                {this.props.type === "text" && this.state.open
                    ?
                    <p>{this.props.content}</p>
                    : this.props.type === "list" && this.state.open ?
                        <ul>
                            {this.props.content.map((element, key) =>
                                <li key={key}>{element}</li>
                            )}
                        </ul>
                        : null
                }
            </article>
        )
    }
}

export default Collapse;