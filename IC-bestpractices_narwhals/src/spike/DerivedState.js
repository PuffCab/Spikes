import React, { useState } from "react";

function DerivedState(props) {
  const [playlists, setPlaylists] = useState([
    { id: 1, vibe: "good Mood", songsNumber: 8 },
    { id: 2, vibe: "coding", songsNumber: 27 },
    { id: 3, vibe: "sleepy", songsNumber: 2 },
  ]);

  // const [selectedPlaylist, setSelectedPlaylist] = useState({});
  const [selectedId, setSelectedId] = useState(null);

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
  const selectedPlaylist = playlists.find((playlist) => {
    return playlist.id === selectedId;
  });
  const handleChoosePlaylist = (id) => {
    // const playlist = playlists.find((p) => {
    //   return p.id === id;
    // });
    setSelectedId(id);
  };

  return (
    <div>
      <h2>Derived State</h2>
      <h4>All playlists</h4>
      {playlists.map((playlist) => {
        return (
          <div key={playlist.id}>
            <span>
              {playlist.vibe}
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
        <p>{selectedPlaylist?.vibe}</p>
        <p>{selectedPlaylist?.songsNumber}</p>
      </div>
    </div>
  );
}

export default DerivedState;
