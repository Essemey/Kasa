import React from 'react';
import '../Css/404.css'

class NotFound extends React.Component {


    render() {

        return (
            <section className="notFound">
                <h3>404</h3>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <a href="/">Retourner sur la page d'accueil</a>
            </section>
        )
    }
}

export default NotFound;