import React, { useState } from "react";
import albumsData from "./assets/albums";
import AlbumList from "./components/AlbumList/AlbumList";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";
import "./App.css"; 

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(albumsData[0]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <div className="App">
      <AlbumDetails album={selectedAlbum} />
      <AlbumList albums={albumsData} onAlbumClick={handleAlbumClick} />
    </div>
  );
}

export default App;
