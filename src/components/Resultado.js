import React, { Component } from "react";
import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

class Resultado extends Component {
  mostrarImagenes = () => {
    const busqueda = this.props.datosBusqueda;
    const imagenes = this.props.imagenes;
    if (imagenes.length === 0) {
      return "no se encontraron imágenes, busca un término similar";
    }

    if (busqueda === "") {
      return null;
    }
    console.log(busqueda);

    return (
      <React.Fragment>
        <div className="grid">
          {imagenes.map((imagen) => (
            <Imagen key={imagen.id} imagen={imagen} />
          ))}
        </div>
        <Paginacion
          paginaAnterior={this.props.paginaAnterior}
          paginaSiguiente={this.props.paginaSiguiente}
        />
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.mostrarImagenes()}</React.Fragment>;
  }
}

export default Resultado;
