import React from "react";
import "./AlbumList.css"

function AlbumList({ albums, onAlbumClick }) {
  return (
    <div>
      <h2 className="albumsTitr">Select an Album:</h2>
      <ul>
        {albums.map((album) => (
          <li className="albumsName" key={album.id} onClick={() => onAlbumClick(album)}>
            <img className="albumsListImg" src={album.coverImg}/>{album.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;