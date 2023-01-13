import React, { useState } from "react";

function DerivedState() {
  const [playlists, setPlaylists] = useState([
    { id: 1, title: "good Mood", songsNumber: 8 },
    { id: 2, title: "coding", songsNumber: 27 },
    { id: 3, title: "sleepy", songsNumber: 2 },
  ]);

  const [selectedPlaylist, setSelectedPlaylist] = useState({});

  const increment = (id) => {
    setPlaylists((prev) => {
      return prev.map((playlist) => {
        if (playlist.id === id) {
          return { ...playlist, songsNumber: playlist.songsNumber + 1 };
        } else {
          return playlist;
        }
      });
    });
  };

  const handleChoosePlaylist = (id) => {
    const playlist = playlists.find((p) => {
      return p.id === id;
    });
    setSelectedPlaylist(playlist);
  };

  return (
    <div>
      <h2>Derived State</h2>
      <h4>All playlists</h4>
      {playlists.map((playlist) => {
        return (
          <div key={playlist.id}>
            <span>
              {playlist.title}
              <button
                onClick={() => {
                  handleChoosePlaylist(playlist.id);
                }}
              >
                select
              </button>
            </span>
            <div className="quantity">
              <button>-</button>
              <span> {playlist.songsNumber}</span>
              <button
                onClick={() => {
                  increment(playlist.id);
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <h4>Selected playlist</h4>
      <div>
        <p>{selectedPlaylist.title}</p>
        <p>{selectedPlaylist.songsNumber}</p>
      </div>
    </div>
  );
}

export default DerivedState;
