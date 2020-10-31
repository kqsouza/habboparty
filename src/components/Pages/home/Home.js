import React from 'react';

//ESTILIZAÇÃO
import '../Styles/Pages/Home.css';

export default class Home extends React.Component{

    render(){
        return (
            <div id="homepage">
                <div className="container-fluid">
                    <h2>Componente Menu ^ Topo</h2>
                    //Componente wrapper global ?
                    <h2>Componente Main-Content</h2>
                    <p>  Main-Content contém: 1. Componente Section 1 - HomePage</p>
                    <h3>Componente Footer</h3>
                </div>
            </div>
        )
    }

}