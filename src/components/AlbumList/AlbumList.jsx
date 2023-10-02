import React from "react";
import "./AlbumList.css"

function AlbumList({ albums, onAlbumClick }) {
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id} onClick={() => onAlbumClick(album)}>
            {album.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;