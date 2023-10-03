import React from "react";
import "./AlbumDetails.css"

function AlbumDetails({ album }) {
  return (
    <div>
      <div className="row">
        <div className="column">
          <img className="coverImg" src={album.coverImg} alt={album.name} />
        </div>
        <div className="column">
          <h2 className="tracksTitr">Album Name: {album.name}</h2>
          <ul>
            {album.tracks.map((track, index) => (
              <li key={index}>{track}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AlbumDetails;