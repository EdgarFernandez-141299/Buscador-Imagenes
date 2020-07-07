import React, { Component } from 'react';

import Buscador from './components/Buscador'



class App extends Component{

  state = {
    termino: ""

  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino
    })

  }

  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
        <p className="lead text-center">Buscador De Imágenes</p>
  
        <Buscador
            datosBusqueda={this.datosBusqueda} //props    
        />
        </div>

        {this.state.termino}
      </div>
    );

  }
  
}


export default App;
