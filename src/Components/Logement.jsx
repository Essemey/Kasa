import React from 'react';
import '../Css/Logement.css'
import Gallery from './Gallery'
import Collapse from './Collapse'

class Logement extends React.Component {


    render() {

        const stars = [1, 2, 3, 4, 5];
        const fullname = this.props.logement.host.name.split(' ');
        const firstname = fullname[0];
        const name = fullname[1];


        return (
            <main>
                <section className="first">
                    <Gallery pictures={this.props.logement.pictures} />
                    <h2>{this.props.logement.title}</h2>
                </section>

                <section className="second">
                    <h3>{this.props.logement.location}</h3>
                    <div className="tags">
                        {this.props.logement.tags.map((tag, key) =>
                            <p key={key} className="tag">{tag}</p>
                        )}
                    </div>
                    <div className="logement_precisions">
                        <div className="rating">
                            {stars.map((star, index) =>
                                index >= this.props.logement.rating ?
                                    <span key={index} className="material-icons star">&#xE838;</span>
                                    :
                                    <span key={index} className="material-icons star full">&#xE838;</span>
                            )}
                        </div>
                        <div className="host">
                            <p>{firstname}<br />{name}</p>
                            <img src={this.props.logement.host.picture} alt="Hote" />
                        </div>
                    </div>
                </section >

                <section className="third">
                    <Collapse title="Description" content={this.props.logement.description} type="text" />
                    <Collapse title="Équipements" content={this.props.logement.equipments} type="list" />
                </section>
            </main>
        )
    }
}

export default Logement;