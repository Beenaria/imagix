import React from "react";

const Imagen = (props) => {
  const { largeImageURL, webformatURL, tags } = props.imagen;

  return (
    <div className="box">
      <div className="image">
        <a
          download
          className="download"
          href={largeImageURL}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="img"
            src={webformatURL}
            alt={tags}
            className="card-img-top"
          />
          <div className="tags">{tags}</div>
        </a>
      </div>
    </div>
  );
};

export default Imagen;
