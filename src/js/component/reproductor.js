import React, { useState, useEffect, useRef } from "react";

const Reproductor = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // Aquí puedes hacer fetch a la API para obtener las canciones
    fetch('https://api.com/songs') // Reemplaza con la URL real de la API
      .then(response => response.json())
      .then(data => {
        setSongs(data);
      });
  }, []);

  const playSong = (index) => {
    setCurrentSongIndex(index);
    audioRef.current.src = songs[index].url; // Asigna la URL de la canción actual
    audioRef.current.play(); // Reproduce la canción
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length; // Cicla la lista
    setCurrentSongIndex(nextIndex);
    playSong(nextIndex);
  };

  const playPrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Cicla la lista
    setCurrentSongIndex(prevIndex);
    playSong(prevIndex);
  };

  return (
    <div>
      <h2>Music Player</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={song.id}>
            <button onClick={() => playSong(index)}>{song.title}</button>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={playPrevious}>Anterior</button>
        <button onClick={() => audioRef.current.play()}>Play</button>
        <button onClick={() => audioRef.current.pause()}>Pause</button>
        <button onClick={playNext}>Siguiente</button>
      </div>

      {/* Etiqueta de audio única */}
      <audio ref={audioRef} controls />
    </div>
  );
};

export default Reproductor;