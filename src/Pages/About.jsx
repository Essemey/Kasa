import React from 'react';
import '../Css/About.css'
import Collapse from '../Components/Collapse'

class About extends React.Component {


    render() {

        return (
            <main>
                <picture className="mask">
                    <source srcSet="/Images/T/about.jpg"
                        media="(min-width: 600px)"></source>
                    <img src="/Images/M/about.jpg" alt="Paysage" />
                </picture>
                <div id="collapses">
                    <Collapse title="Fiabilité" type="text" class="collapse-about" content="Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />

                    <Collapse title="Respect" type="text" class="collapse-about" content="La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />

                    <Collapse title="Service" type="text" class="collapse-about" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question." />

                    <Collapse title="Sécurité" type="text" class="collapse-about" content="La sécurité est la priorité de Kasa.
                Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div>
            </main>
        )
    }
}

export default About;