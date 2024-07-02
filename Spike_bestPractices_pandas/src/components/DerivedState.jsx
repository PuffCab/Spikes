import React, { useState } from "react";

function DerivedState() {
  const [playlists, setPlaylists] = useState([
    { id: 1, title: "good Mood", songsNumber: 8 },
    { id: 2, title: "coding", songsNumber: 27 },
    { id: 3, title: "sleepy", songsNumber: 2 },
  ]);

  //   const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const selectedPlaylist = playlists.find(
    (playlist) => playlist.id === selectedId
  );
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

  //   const handleChooseProduct = (id) => {
  //     const product = products.find((p) => {
  //       return p.id === id;
  //     });
  //     setSelectedProduct(product);
  //   };
  const handleChooseProduct = (id) => {
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
              {playlist.title}
              <button
                onClick={() => {
                  handleChooseProduct(playlist.id);
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
        <p>{selectedPlaylist?.title}</p>
        <p>{selectedPlaylist?.songsNumber}</p>
      </div>
    </div>
  );
}

export default DerivedState;
