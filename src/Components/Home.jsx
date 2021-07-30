import React from 'react';
import '../Css/Home.css';

class Home extends React.Component {


    render() {



        return (
            <main className="home">
                <div id="intro">
                    <h2>Chez vous, partout et ailleurs</h2>
                        <picture>
                             <source srcset="/Images/T/intro.jpg"
                                media="(min-width: 376px)"></source>
                            <img src="/Images/M/intro.jpg" alt="Paysage" />
                        </picture>
                </div>

                <section id="logements">
                    {this.props.logements.map(logement =>
                        <a href={`/logement/${logement.id}`} className="logement" key={logement.id} style={{ backgroundImage: `url('${logement.cover}')` }}>
                            <h3>{logement.title}</h3>
                        </a>
                    )}
                </section>
            </main>
        )
    }
}

export default Home;