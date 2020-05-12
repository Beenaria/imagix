import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();
  obtenerDatos = (e) => {
    e.preventDefault();
    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);
  };
  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 input-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu imagen. Ejemplo: sushi"
            />
            <div className="input-group-append">
              <input
                type="submit"
                className="btn btn--lg btn-block btn-info"
                value="Buscar imágenes"
              />
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </form>
    );
  }
}

export default Buscador;
