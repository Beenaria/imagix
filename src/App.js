import React, { Component } from "react";
import "./App.css";

import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";
// import Modal from "./components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      termino: "",
      imagenes: [],
      pagina: "",
    };
  }

  scroll = () => {
    const elemento = document.querySelector("header");
    elemento.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  paginaAnterior = () => {
    console.log("paginaAnterior");
    let pagina = this.state.pagina;
    if (pagina > 1) {
      pagina -= 1;
      this.setState({ pagina }, () => {
        this.consultarApi();
        this.scroll();
      });
    }
  };
  paginaSiguiente = () => {
    console.log("paginaSiguiente");
    let pagina = this.state.pagina;
    pagina++;
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();
    });
  };

  consultarApi = () => {
    const pagina = this.state.pagina;
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=16453032-5921d6b190a2b7db451849c70&lang=es&q=${termino}&image_type=photo&orientation=horizontal&per_page=30&page=${pagina}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    // const { showModal } = this.state;
    return (
      <React.Fragment>
        <header>
          <div className="container">
            <div className="overlay"></div>
            <h1>Descarga las imágenes para tu proyecto</h1>
            <h2>
              Más de 1.7 millones de imágenes de alta calidad libre de
              copyrights.
            </h2>
            <Buscador datosBusqueda={this.datosBusqueda} />
          </div>
        </header>

        <div className="resultado">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
