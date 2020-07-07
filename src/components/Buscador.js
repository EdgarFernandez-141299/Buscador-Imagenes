import React, { Component } from 'react';

class Body extends Component {
    

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {

        //Previene que se envien datos en url por default o vacios
        e.preventDefault();

        //Tomamos el valor del input
        const termino = this.busquedaRef.current.value

        // Envio al componente principal
        this.props.datosBusqueda(termino);


    }

    render() { 
        return ( 

            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" ref={this.busquedaRef} className="form-control form-control-lg" placeholder="Buscar imagen..."/>                    
                    </div>
                    <div className="form-group col-md-4">
                      <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>                     
                    </div>
                </div>
            </form>

           

           


         );
    }
}
 
export default Body;