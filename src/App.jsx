import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as trackServices from "./services/trackServices.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import TrackDetails from "./components/TrackDetails";
import TrackForm from "./components/TrackForm.jsx";

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getTrackList = async () => {
      try {
        const songs = await trackServices.index();
        if (songs.error) {
          throw new Error(songs.error);
        }
        setTrackList(songs);
      } catch (e) {
        console.log(e);
      }
    };
    getTrackList();
  }, []);

  const updateSelected = (song) => {
    setSelected(song);
  };

  const addTrack = async (song) => {
    try {
      const newTrack = await trackServices.create(FormData);
      setTrackList([newTrack, ...trackList]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <h1>Welcome to the jukebox station!</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Home trackList={trackList} updateSelected={updateSelected} />
          }
        />
        <Route
          path="/add-track"
          element={<TrackForm addTrack={addTrack} track={trackList} />}
        />
      </Routes>

      {/* <TrackDetails selected={selected} /> */}
    </>
  );
};

export default App;
