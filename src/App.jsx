import React, { useState } from "react";
import albumsData from "./assets/albums";
import AlbumList from "./components/AlbumList/AlbumList";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";
import "./App.css"; // You can import your CSS styles here

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(albumsData[0]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <div className="App">
      <AlbumList albums={albumsData} onAlbumClick={handleAlbumClick} />
      <AlbumDetails album={selectedAlbum} />
    </div>
  );
}

export default App;
