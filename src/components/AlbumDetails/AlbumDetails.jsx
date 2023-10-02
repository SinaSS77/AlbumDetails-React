import React from "react";

function AlbumDetails({ album }) {
  return (
    <div>
      <div className="row">
        <div className="column">
          <img src={album.coverImg} alt={album.name} />
        </div>
        <div className="column">
          <h2>{album.name}</h2>
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